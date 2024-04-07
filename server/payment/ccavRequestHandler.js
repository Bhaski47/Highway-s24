var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  path = require("path"),
  express = require("express"),
  qs = require("querystring");

var User = require("../models/user_model.js");
const QRCode = require("qrcode");
const nodemailer = require("nodemailer");

const app = express();

var uuidv4 = require("uuid").v4;

exports.postReq = async function (request, response) {
  // 3342525
  var parsedData;
  var ordId;
  var customerId;
  var amount;
  var eventArray = [];
  var isTechpass = false;
  var isProshows = false;
  var isElite = false;
  var body = "",
    workingKey = "BC9E44F0087D201330A6DE18039F21E0", //Put in the 32-Bit key shared by CCAvenues.
    accessCode = "AVGY68LC16AH21YGHA", //Put in the Access Code shared by CCAvenues.
    encRequest = "",
    formbody = "";

  request.on("data", async function (data) {
    body += data;
    ordId = "ORD_" + uuidv4();
    parsedData = qs.parse(body);
    console.log(parsedData);
    customerId = Date.now() + "_" + parsedData.regNo;

    if (parsedData.pass === "Proshows") {
      isProshows = true;
    } else if (parsedData.pass === "TechPass") {
      isTechpass = true;
    } else if (parsedData.pass === "Elite") {
      isElite = true;
    }

    for (let key in parsedData) {
      if (
        key.startsWith("billing") ||
        key === "college" ||
        key === "year" ||
        key === "regNo" ||
        key === "department" ||
        key === "pass"
      ) {
        continue;
      }

      // if (key === "proshows") {
      //   continue;
      // } else if (key === "techpass") {
      //   isTechpass = true;
      //   continue;
      // } else if (key === "elite") {
      //   isElite = true;
      //   continue;
      // }

      eventArray.push(key);
    }

    if (isProshows) {
      amount = 299;
    }

    if (parsedData.billing_email.trim().endsWith("svce.ac.in")) {
      if (isTechpass) {
        amount = 199;
      }
      if (isProshows && isTechpass) {
        isElite = true;
      }
      if (isElite) {
        amount = 399;
      }
    } else {
      if (isTechpass) {
        amount = 299;
      }
      if (isProshows && isTechpass) {
        isElite = true;
      }
      if (isElite) {
        amount = 499;
      }
    }

    if (!isTechpass && !isElite && !isProshows) {
      return;
    }

    body += `&merchant_id=3342525
      &order_id=${ordId}
      &currency=INR
      &amount=${amount}
      &redirect_url=https://technoways-svce-backend.vercel.app/ccavResponseHandler
      &cancel_url=https://technoways-svce-backend.vercel.app/ccavResponseHandler
      &language=EN
      &billing_country=India
      &customer_identifier=${customerId}`;
    encRequest = ccav.encrypt(body, workingKey);
    formbody =
      '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
      encRequest +
      '"><input type="hidden" name="access_code" id="access_code" value="' +
      accessCode +
      '"><script language="javascript">document.redirect.submit();</script></form>';
  });

  request.on("end", async function () {
    const existingUser = await User.findOne({
      email: parsedData.billing_email.trim(),
    });

    response.writeHeader(200, { "Content-Type": "text/html" });

    // if (existingUser) {
    //   if (existingUser.paid === true) {
    //     response.write("<h1> Already Registered </h1>");
    //     response.end();
    //     return;
    //   }
    //   await User.deleteOne({ email: parsedData.billing_email });
    // }

    await new User({
      username: parsedData.billing_name,
      customerId: customerId,
      regNo: parsedData.regNo,
      address: parsedData.billing_address,
      phoneNo: parsedData.billing_tel,
      city: parsedData.billing_city,
      college: parsedData.college,
      department: parsedData.department,
      email: parsedData.billing_email.trim(),
      pass: parsedData.pass,
      ordId: ordId,
      eventsArray: eventArray,
      amount: amount,
      year: parsedData.year,
      paid: false,
    }).save();
    // .then((result) => {
    //   console.log("Insert result");
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log("Insert error");
    //   console.log(error);
    // });
    response.write(formbody);
    response.end();
  });
  return;
};
