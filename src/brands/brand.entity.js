const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = { BrandSchema, Brand };
