const mongoose = require(`mongoose`);

const restaurantSchema = mongoose.Schema(
  {
    restaurantName: { type: String },
    address: { type: String},
    contact: { type: String},
  }
);

const restaurantModel = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurantModel;
