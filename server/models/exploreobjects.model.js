const mongoose = require("mongoose");

const exploreObjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  // image: {
  //   data: Buffer,
  //   type: String
  // },
  whatitdoes: {
    type: String,
    required: true
  },
  whyitwasmade: {
    type: String,
    required: true
  },
  features: {
    type: String,
    required: true
  },
  resources: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ExploreObjects", exploreObjectSchema);
