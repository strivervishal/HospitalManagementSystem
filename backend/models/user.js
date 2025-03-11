const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["doctor", "patient"], required: true }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "username" });
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
