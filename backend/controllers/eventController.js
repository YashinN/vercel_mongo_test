const Event = require("../models/eventModel");

const getAllEvents = async (req, res) => {
  try {
    // finds all events
    const events = await Event.find({});
    // sends all events to server
    res.status(200).json(events);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllEvents,
};
