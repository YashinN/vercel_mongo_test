const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// defines mongoDB schema to store event data.
const eventSchema = new Schema({});

module.exports = mongoose.model("Events", eventSchema);
