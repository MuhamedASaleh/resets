const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema(
  {
    userName: { type: String },
    creationAt: { type: Date ,default:Date.now()},
    Gender: { type: Boolean },
    dateOfBirth: { type: String },
    Email: { type: String },
    status: { type: Boolean },
    password: { type: String },
  },
  
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
