const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    default: "male",
  },
  email: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;

// mongoose.model("Customer", {
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ["male", "female", "others"],
//     default: "male",
//   },
//   email: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = { Customer };
