// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// app.use(cors());

// const PORT = process.env.PORT || 6000;

// app.listen(PORT, () => {
//   console.log("listening");
// });

// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => {
// //     console.log("mongoDB connected");
// //     app.listen(PORT, () => {
// //       console.log(`server running on ${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //     process.exit(1);
// //   });

// module.exports = app;

import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("HEllloooooo@@@@");
});

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

module.exports = app;
