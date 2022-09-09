import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  post: {
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
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
    default: null,
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
