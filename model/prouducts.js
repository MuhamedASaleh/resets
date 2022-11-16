const mongoose = require(`mongoose`);

const productSchema = mongoose.Schema(
  {
    productName: { type: String },
    price: { type: Number },
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
