const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/customer_management_api");
    console.log("Successfully connected to MongoDB...🔥");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = connectToDatabase;
