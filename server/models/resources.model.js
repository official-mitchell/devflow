const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    type: String
  },
  time: {
    type: Number,
    required: true
  },
  learnobjectives: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Resources", resourceSchema);
