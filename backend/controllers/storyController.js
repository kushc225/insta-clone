import axios from "axios";
import { format } from "timeago.js";
import StoryModel from "../models/story.js";
import UserModel from "../models/user.js";

export const myFollowingStories = async (req, res, next) => {
  let x = 0;
  try {
    const userProfile = await UserModel.findById(req.user.id);
    const data = [];
    let cnt = 0;
    for (let i = 0; i < userProfile.following.length; i++) {
      const val = await StoryModel.find({ owner: userProfile.following[i] });
      let dataPushingArray = [];
      for (let j = 0; j < val.length; j++) {
        const createAtString = format(val[j].createdAt);
        let storyUploadedTime = "";
        for (let k = 0; k < createAtString.length; k++) {
          if (k != 0 && k != 1) {
            storyUploadedTime += createAtString[k];
          }
        }
        // console.log(val);
        // console.log(createAtString, storyUploadedTime);
        // if (createAtString) dataPushingArray.push(val[i]);
        // console.log(storyUploadedTime == " weeks ago");
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
          continue;
        } else {
          cnt++;
          dataPushingArray.push(val[i]);
        }
      }
      // console.log(dataPushingArray);
      if (dataPushingArray.length != 0) {
        data.push(dataPushingArray);
      }
    }
    res.status(200).json({ success: true, noOfStories: cnt, data });
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
