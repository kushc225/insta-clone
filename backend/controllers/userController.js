import UserModal from "../modals/user.js";
import bcrypt from "bcryptjs";
import userModel from "../modals/user.js";

export const createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const secPass = bcrypt.hashSync(req.body.password, salt);
    const newUser = await UserModal({ ...req.body, password: secPass });
    await newUser.save();
    res.status(201).json({ success: true, newUser });
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { password, ...others } = req.body;
    const existingUser = await userModel.findOne({ ...others });
    console.log(existingUser);
    if (existingUser) {
      const comPass = bcrypt.compareSync(password, existingUser.password);
      if (comPass) {
        return res.status(200).json({ success: true, msg: "you can login" });
      } else {
        return res
          .status(404)
          .json({ success: false, msg: "Invalid credentials" });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, msg: "2Invalid credentials" });
    }
  } catch (error) {
    return next(error);
  }
};
