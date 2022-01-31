
const mongoose = require("mongoose");
const client = mongoose.model(
  "Client",
  new mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    adress: {
      required: true,
      type: String,
    },
    isVip: {
      required:"must feiled",
      type: Boolean,
    },
    phone: {
      required: true,
      type: String,
    },
  })
);
module.exports = client;
