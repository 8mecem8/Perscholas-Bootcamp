const mongoose = require("mongoose");


const veggieSchema = new mongoose.Schema({
  name: String,
  color: String,
  age: Number,
  readyToEat: Boolean,
});

const veggies = mongoose.model("myveggies", veggieSchema);

module.exports = veggies;
