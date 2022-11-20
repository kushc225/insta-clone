import axios from "axios";
import { format } from "timeago.js";
import StoryModel from "../models/story.js";
import UserModel from "../models/user.js";

export const myFollowingStories = async (req, res, next) => {
  try {
    let arr = [];
    let count = 0;
    const userProfile = await UserModel.findById(req.user.id);
    for (let i = 0; i < userProfile.following.length; i++) {
      let person = await StoryModel.find({ owner: userProfile.following[i] });
      for (let i = 0; i < person.length; i++) {
        let currTime = new Date().getTime() - person[i].DMY;
        let second = currTime / 1000;
        let minute = second / 60;
        let hours = minute / 60;
        if (hours < 24) {
          count++;
          arr.push(person[i]);
        }
      }
    }
    res.status(200).json({ success: true, count, arr });
  } catch (error) {
    next(error);
  }
};

// http://localhost:5000/api/user/findstorybyid/:id (id === the user collection id )
export const findStoryByStoryId = async (req, res, next) => {
  try {
    const data = await StoryModel.findById(req.params.id);
    const createAtString = format(data.createdAt);
    let storyUploadedTime = "";
    for (let k = 0; k < createAtString.length; k++) {
      if (k != 0 && k != 1) {
        storyUploadedTime += createAtString[k];
      }
    }
    if (
      storyUploadedTime == "week ago" ||
      storyUploadedTime == " week ago" ||
      storyUploadedTime == "day ago" ||
      storyUploadedTime == " day ago" ||
      storyUploadedTime == "weeks ago" ||
      storyUploadedTime == " weeks ago" ||
      storyUploadedTime == "days ago" ||
      storyUploadedTime == " days ago"
    ) {
      res.status(403).json({ success: true, data });
    } else {
      res.status(200).json({ success: true, msg: "story has expired" });
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
