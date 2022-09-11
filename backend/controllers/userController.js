import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../modals/user.js";
import StoryModel from "../modals/story.js";
import PostModel from "../modals/post.js";
dotenv.config();

export const createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    console.log(req.body);
    const secPass = bcrypt.hashSync(req.body.password, salt);
    // const newUser = await userModel({ ...req.body, password: secPass });
    // await newUser.save();
    const newUser = await userModel.create({ ...req.body, password: secPass });
    res.status(201).json({ success: true, newUser });
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  const { password, username, email } = req.body;
  try {
    if (username !== undefined) {
      const existingUser = await userModel.findOne({ username });
      if (existingUser) {
        const comPass = bcrypt.compareSync(password, existingUser.password);
        if (comPass) {
          const payload = {
            id: existingUser._id,
          };
          const token = jwt.sign(payload, process.env.JWT_SE_KEY);
          return res
            .cookie("token", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ success: true, token });
        } else {
          return res
            .status(404)
            .json({ success: false, msg: "Invalid credentials" });
        }
      } else {
        return res.status(404).json({ success: false, msg: "User Not Found" });
      }
    } else {
      if (email !== undefined) {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          const comPass = bcrypt.compareSync(password, existingUser.password);
          if (comPass) {
            const payload = {
              id: existingUser._id,
            };
            const token = jwt.sign(payload, process.env.JWT_SE_KEY);
            return res
              .cookie("token", token, {
                httpOnly: true,
              })
              .status(200)
              .json({ success: true, token });
          } else {
            return res
              .status(404)
              .json({ success: false, msg: "Invalid credentials" });
          }
        }
      } else {
        return res.status(404).json({ success: false, msg: "User Not Found" });
      }
    }
  } catch (error) {
    return next(error);
  }
};

// all the previous data from the database
export const allMyPost = async (req, res, next) => {
  try {
    const id = req.user.id;
    const allPost = await PostModel.find({ owner: id });
    res.status(200).json({ success: true, allPost });
  } catch (error) {
    return next(error);
  }
};

export const allMyStories = async (req, res, next) => {
  try {
    const id = req.user.id;
    const allStories = await StoryModel.find({ owner: id });
    res.status(200).json({ success: true, allStories });
  } catch (error) {
    return next(error);
  }
};

// from here all the events will be for the current story
//   631dc38bda5c61c5a3f03e20
export const currentStoryViewer = async (req, res, next) => {
  try {
    const story = await StoryModel.findById(req.headers.id);
    const arr = story.viewer;
    res.status(200).json({ success: true, arr });
  } catch (error) {
    return next(error);
  }
};
