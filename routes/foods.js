var express = require("express");
var router = express.Router();

const food = require("../models/Food");

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

module.exports = router;
