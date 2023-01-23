const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  age: Number,
  readyToEat: Boolean,
});

const fruits = mongoose.model("myfruits", fruitSchema);

module.exports = fruits;
