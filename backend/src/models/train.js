// models/Train.js
const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true },
  trainName: { type: String, required: true },
  departureTime: { type: Date, required: true },
  seatsAvailable: {
    sleeper: { type: Number, required: true },
    AC: { type: Number, required: true },
  },
  prices: {
    sleeper: { type: Number, required: true },
    AC: { type: Number, required: true },
  },
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
