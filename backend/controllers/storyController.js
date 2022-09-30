import axios from "axios";
import { format } from "timeago.js";
import StoryModel from "../models/story.js";
import UserModel from "../models/user.js";
import { ObjectId } from "bson";
const data = [];
export const myFollowingStories = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    let virtual = await user.following.filter(async (person) => {
      const story = await StoryModel.find(
        { owner: person },
        { createdAt: 0, updatedAt: 0 }
      );
      return story;
    });
    console.log(virtual);
    data.push(virtual);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
const f1 = async (person) => {
  const story = await StoryModel.find(
    { owner: person },
    { createdAt: 0, updatedAt: 0 }
  );
  console.log(story);
  return story;
};
// http://localhost:5000/api/user/findstorybyid/:id (id === the user collection id )
export const findStoryByOwnerId = async (req, res, next) => {
  try {
    const data = await StoryModel.find({ owner: req.params.id });
    const createdAt = format(data[0].createdAt);
    if (parseInt(createdAt[0]) <= 24) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(200).json({ success: false });
    }
  } catch (error) {
    next(error);
  }
};

// http://localhost:5000/api/user/fetchallthestory/
export const fetchallthestory = async (req, res, next) => {
  try {
    const data = await StoryModel.find({ owner: req.params.id });
    const createdAt = format(data[0].createdAt);
    if (parseInt(createdAt[0]) <= 24) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(200).json({ success: false });
    }
  } catch (error) {
    next(error);
  }
};
