const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const morgan = require("morgan");
const transactions = require("./routes/transactions");

const cors = require("cors");
dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

const connectDB = require("./config/db");
connectDB();
