const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/confi.env" });
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MONGO BD connected: ${con.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error : ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
