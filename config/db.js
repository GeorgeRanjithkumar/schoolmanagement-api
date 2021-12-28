const mongoose = require("mongoose");
const url =
"mongodb+srv://user:9597350897@cluster0.genpe.mongodb.net/SchoolManagement-Api?retryWrites=true&w=majority";
const db = async () => {
  try {
    const mongoDB = await mongoose.connect(url);
    console.log(`mongoDB connected:${mongoDB.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = db;
