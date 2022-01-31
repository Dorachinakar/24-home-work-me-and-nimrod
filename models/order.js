const mongoose = require("mongoose");
const order = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      clientId: {
        ref: "client",
        type: mongoose.Schema.Types.ObjectId,
      },
      storeId: {
        ref: "store",
        type: mongoose.Schema.Types.ObjectId,
      },
    },
    { timestamps: true }
  )
);
module.exports = order;
