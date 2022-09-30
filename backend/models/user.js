import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    default: null,
  },
  followers: {
    type: [String],
  },
  following: {
    type: [String],
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
