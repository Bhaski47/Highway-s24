const { default: axios } = require("axios");
var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  mongoose = require("mongoose"),
  express = require("express"),
  User = require("../models/user_model.js");
qs = require("querystring");
const QRCode = require("qrcode");
const nodemailer = require("nodemailer");

exports.postRes = async function (request, response) {
  var ccavEncResponse = "",
    ccavResponse = "",
    workingKey = "BC9E44F0087D201330A6DE18039F21E0", //Put in the 32-Bit key shared by CCAvenues.
    ccavPOST = "";

  request.on("data", function (data) {
    ccavEncResponse += data;
    ccavPOST = qs.parse(ccavEncResponse);
    var encryption = ccavPOST.encResp;
    ccavResponse = ccav.decrypt(encryption, workingKey);
  });

  request.on("end", async function () {
    var pData = "";
    response.writeHeader(200, { "Content-Type": "text/html" });
    var parsedData = qs.parse(ccavResponse);
    // console.log(parsedData.regNo);
    // console.log(parsedData);

    if (
      parsedData.order_status === "Failure" ||
      parsedData.order_status === "Aborted" ||
      parsedData.order_status === "Invalid"
    ) {
      // await User.deleteOne({ email: parsedData.billing_email });
      response.write(`
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Failed</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
    
            .container {
                text-align: center;
                padding: 20px;
                border-radius: 10px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
            }
    
            h1 {
                color: #e74c3c;
            }
    
            p {
                color: #333;
            }
    
            .failure-icon {
                color: #e74c3c;
                font-size: 48px;
                margin-bottom: 10px;
            }
    
            .btn {
                display: inline-block;
                padding: 10px 20px;
                background-color: #e74c3c;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s;
            }
    
            .btn:hover {
                background-color: #c0392b;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="failure-icon">&#10008;</div>
            <h1>Payment Failed</h1>
            <p>Unfortunately, there was an issue processing your payment. Please try again later or contact 95514 49859 for support.</p>
            <a href="https://technoways-svce.vercel.app" class="btn">Back to home</a>
        </div>
    </body>
    </html>
    `);
      response.end();
      return;
    } else {
      // console.log("Response");
      // console.log(parsedData);

      await User.findOneAndUpdate(
        { ordId: parsedData.order_id },
        { $set: { paid: true } }
      );

      const user = await User.findOne({ ordId: parsedData.order_id });

      const qrCodeBuffer = await QRCode.toBuffer(
        parsedData.order_id
      );
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL, // Your Gmail email address
          pass: process.env.PASSWD, // Your Gmail password or an app-specific password
          // user: "2021it0668@svce.ac.in", // Your Gmail email address
          // pass: "09naveen", // Your Gmail password or an app-specific password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: parsedData.billing_email.trim(),
        subject: "QR Code Email",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Technoways E-Ticket</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
        
                .ticket-container {
                    max-width: 600px;
                    margin: 50px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                .ticket-header {
                    background-color: #3498db;
                    color: #fff;
                    padding: 10px;
                    border-radius: 8px 8px 0 0;
                }
        
                .ticket-content {
                    padding: 20px;
                }
        
                .qr-code {
                    margin-top: 20px;
                }
        
                .footer-text {
                    margin-top: 20px;
                    color: #888;
                }
            </style>
        </head>
        
        <body>
            <div class="ticket-container">
            <div class="ticket-header">
            <center>
            <h2>Technoways E-Ticket</h2>
            </center>
            <center>
            <h1>${user.pass} Ticket</h1>
            </center>
                </div>
                <div class="ticket-content">
                    <p>Hello ${user.username}</p>
                    <p>Thank you for registering for Technoways Symposium. Below is your e-ticket details:</p>
                    <div class="qr-code">
                    <p>Dear recipient,</p>
                    <p>Here is your QR code:</p>
                    <!-- Add QR Code here using the provided code snippet -->
                    <img src="cid:qrcode@unique" width=100% alt="QR Code"/>
                    </div>
                    <p>Please wait few seconds for QR to get generated</p>
                    <p class="footer-text">Please present this QR code at the entrance during the event.</p>
                </div>
            </div>
        </body>
        
        </html>
      `,
        attachments: [
          {
            filename: "qrcode.png",
            content: qrCodeBuffer,
            encoding: "base64",
            cid: "qrcode@unique", // Content-ID for referencing the image in the HTML
          },
        ],
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info);
      response.write(`
        <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payment Successful</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
              }
      
              .container {
                  text-align: center;
                  padding: 20px;
                  border-radius: 10px;
                  background-color: #fff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  max-width: 400px;
                  width: 100%;
              }
      
              h1 {
                  color: #4CAF50;
              }
      
              p {
                  color: #333;
              }
      
              .success-icon {
                  color: #4CAF50;
                  font-size: 48px;
                  margin-bottom: 10px;
              }
      
              .btn {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #4CAF50;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 5px;
                  transition: background-color 0.3s;
              }
      
              .btn:hover {
                  background-color: #45a049;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="success-icon">&#10004;</div>
              <h1>Payment Successful</h1>
              <p>Your payment was successfully processed. The QR code for your ticket has been sent to ${parsedData.billing_email}.</p>
              <a href="https://technoways-svce.vercel.app" class="btn">Continue</a>
          </div>
      </body>
      </html>
      `);
      response.end();
    }
  });
};
