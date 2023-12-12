const mongoose = require("mongoose");

// Schema
const userSchema = mongoose.Schema(
   {
      firstName: String,
      lastName: String,
      email: String,
      companySize:Number
   },
   {
      versionKey: false,
   }
);

// Model
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
