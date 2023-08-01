const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/database?retryWrites=true&w=majority`
    );
    console.log("Database connection successful.");
  } catch (error) {
    console.log("Error connecting to database:", error.message);
  }
};

module.exports = connectToDataBase;
