const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, maxlength: 10 }, // String is shorthand for {type: String}
  email: { type: String, trim: true, unique: true },
  password: { type: String, minlength: 8 },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
