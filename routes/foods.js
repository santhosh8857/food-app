var express = require("express");
var router = express.Router();

const food = require("../models/Food");
const order = require("../models/Order");

// to get all foods
router.get("/", async (req, res) => {
  try {
    const data = await food.find();

    res.send({ message: "Success!", status: true, data: data });
  } catch (err) {
    // console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

router.post("/create-food", async (req, res) => {
  try {
    const data = await food.create(req.body);

    res.send({ message: "Food added successfully!", status: true, data: data });
  } catch (err) {
    // console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

router.get("/get-orders", async (req, res) => {
  try {
    const data = await order.find();
    res.send({
      message: "Order fetched successfully",
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

router.post("/add-order", async (req, res) => {
  try {
    const orderContent = await order.find();
    if (!orderContent.length) {
      const data = await order.create(req.body);

      res.send({
        message: "Order placed successfully",
        status: true,
        data: data,
      });
    } else {
      await order.deleteMany({});

      const data = await order.create(req.body);
      res.send({
        message: "Order placed successfully",
        status: true,
        data: data,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: "Error in connection", status: false, error: err });
  }
});

module.exports = router;
