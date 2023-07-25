const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Error connecting to database", error);
      }
      return console.log("Database connection successful.");
    }
  );
};

module.exports = connectToDataBase;
