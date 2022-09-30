import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../models/user.js";
import StoryModel from "../models/story.js";
import PostModel from "../models/post.js";
dotenv.config();

export const createUser = async (req, res, next) => {
  try {
    const userExist = await UserModel.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(300)
        .json({ success: false, msg: "Email Already Registerd" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const secPass = bcrypt.hashSync(req.body.password, salt);
      // console.log(req.body);
      const newUser = await UserModel.create({
        ...req.body,
        password: secPass,
      });
      res.status(201).json({ success: true, newUser });
    }
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const { email, password } = req.body;
    const emailExist = await UserModel.findOne({ email });

    if (emailExist) {
      const comPass = bcrypt.compareSync(password, emailExist.password);
      if (comPass) {
        const payload = {
          id: emailExist._id,
        };
        const token = jwt.sign(payload, process.env.JWT_SE_KEY);
        return res.status(200).json({ success: true, token });
      }else{
        return res.status(403).json({ success: false, msg:"Invalid Credentials" });
      }
    } else {
      return res.status(403).json({ success: false, msg:"Invalid Credentials" });

    }
  } catch (error) {
    return next(error);
  }
};

export const following = async (req, res, next) => {
  try {
    //req.params.id = 631dc38bda5c61c5a3f03e20 ( Here the id will be of id of someone whom you want to follow )
    let firstProfile = await UserModel.findById(req.params.id);
    // let secondProfile = await UserModel.findById(req.user.id);
    let flag = false;
    for (let i = 0; i < firstProfile.followers.length; i++) {
      if (firstProfile.followers[i] === req.user.id) {
        flag = true;
      }
    }

    if (flag === true) {
      await UserModel.updateOne(
        { _id: req.params.id },
        { $pull: { followers: req.user.id } } //  <$addToSet> insert only unique value inside the (array only)
      );
      await UserModel.updateOne(
        { _id: req.user.id },
        { $pull: { following: req.params.id } }
      );
    } else {
      await UserModel.updateOne(
        { _id: req.params.id },
        { $addToSet: { followers: req.user.id } } //  <$addToSet> insert only unique value inside the (array only)
      );
      await UserModel.updateOne(
        { _id: req.user.id },
        { $addToSet: { following: req.params.id } } //  <$addToSet> insert only unique value inside the (array only)
      );
    }
    const userProfile = await UserModel.findById(req.user.id);
    res.status(200).json({ success: true, userProfile });
  } catch (error) {
    return next(error);
  }
};

export const followers = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    // console.log(user.followers.length);
    res.status(200).json({ success: true, followers: user.followers });
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
    //req.headers.id = 631dc38bda5c61c5a3f03e20 ( this is the storyes _id from the mongodb)
    const arr = await StoryModel.updateOne(
      { _id: req.headers.id },
      { $addToSet: { viewer: req.user.id } } //  <$addToSet> insert only unique value inside the (array only)
    );
    const result = await StoryModel.findById(req.headers.id);
    res.status(200).json({ success: true, result });
  } catch (error) {
    return next(error);
  }
};

export const likeStory = async (req, res, next) => {
  try {
    //                                  LIKE THE STORY OF PEOPLE

    //req.headers.id = 631dc38bda5c61c5a3f03e20 ( story id whom story is being liked)
    const storyDetails = await StoryModel.findById(req.params.id);
    const liked = storyDetails.likes;
    let flag = false;
    for (let i = 0; i < liked.length; i++) {
      if (liked[i] === req.user.id) flag = true;
    }
    console.log(flag);
    if (flag === true) {
      await StoryModel.updateOne(
        { _id: req.params.id },
        { $pull: { likes: req.user.id } } //  <$addToSet> insert only unique value inside the (array only)
      );
    } else {
      await StoryModel.updateOne(
        { _id: req.params.id },
        { $addToSet: { likes: req.user.id } } //  <$addToSet> insert only unique value inside the (array only)
      );
    }
    const result = await StoryModel.find();
    res.status(200).json({ success: true, result });
  } catch (error) {
    return next(error);
  }
};

export const watchStory = async (req, res, next) => {
  try {
    //                                      WATCHING THE STORY
    await StoryModel.updateOne(
      { _id: req.params.id },
      { $addToSet: { viewer: req.user.id } }
    );
    const storyDetails = await StoryModel.findById(req.params.id);

    res.status(200).json({ success: true, storyDetails });
  } catch (error) {
    return next(error);
  }
};

export const allFollowing = async (req, res, next) => {
  try {
    //                                      WATCHING THE STORY
    const data = await UserModel.find();
    console.log(data);
    let cnt = 0;
    let array = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].followers.length; j++) {
        if (data[i].followers[j] === req.params.id) {
          cnt++;
          array.push(data[i].followers[j]);
        }
      }
    }
    console.log(cnt);
    // data[2].followers[0]
    // const storyDetails = await StoryModel.findById(req.params.id);

    res.status(200).json({ success: true, array });
  } catch (error) {
    return next(error);
  }
};
