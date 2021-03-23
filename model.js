const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: { type: Number, min: [0, "minimum is 0!"], max: [40, "max is 40!"] },
  genre: { type: String, enum: ["male", "female", "robot"] },
});

module.exports = mongoose.model("Cat", catSchema);
