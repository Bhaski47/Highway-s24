// const mongoose = require("mongoose");

// const schema = new mongoose.Schema({
//   customerId:{
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phoneNo: {
//     type: String,
//     required: true,
//   },
//   regNo: {
//     type: String,
//     required: true,
//   },
//   college: {
//     type: String,
//     required: true,
//   },
//   department: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   year: {
//     type: String,
//     required: true,
//   },
//   otpSecret: {
//     type: String,
//     required: false,
//   },
//   // isTechPass: {
//   //   type: Boolean,
//   //   required: true,
//   // },
//   // isProshows: {
//   //   type: Boolean,
//   //   required: true,
//   // },
//   // isElite: {
//   //   type: Boolean,
//   //   required: true,
//   // },
//   pass: {
//     type: String,
//     required: true,
//   },
//   eventsArray: {
//     type: Array,
//     required: false,
//   },
//   ordId: {
//     type: String,
//     required: true,
//   },
//   paid: {
//     type: Boolean,
//     required: true,
//   },
// });

// const User = mongoose.model("User", schema);

// module.exports = User;



const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: false,
  },
  regNo: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  ordId: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", schema);

module.exports = User;
