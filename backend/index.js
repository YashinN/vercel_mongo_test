// index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use("/events", eventRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });

// app.get("/about", (req, res) => {
//   res.send("This is my about route..... ");
// });

// Export the Express API
module.exports = app;
