const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 6000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongoDB connected");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
