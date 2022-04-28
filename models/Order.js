const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  item: {
    type: Array,
  },
  amount: {
    type: Number,
  },
});

const order = mongoose.model("order", OrderSchema);

module.exports = order;
