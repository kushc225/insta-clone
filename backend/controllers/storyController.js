import axios from "axios";
import { format } from "timeago.js";
import StoryModel from "../models/story.js";
import UserModel from "../models/user.js";

export const myFollowingStories = async (req, res, next) => {
  let x = 0;
  try {
    const userProfile = await UserModel.findById(req.user.id);
    const data = [];

    for (let i = 0; i < userProfile.following.length; i++) {
      const val = await StoryModel.find({ owner: userProfile.following[i] });
      let dataPushingArray = [];
      for (let j = 0; j < val.length; j++) {
        const createAtString = format(val[i].createdAt);

        let storyUploadedTime = "";
        for (let i = 0; i < createAtString.length; i++) {
          if (i != 0 && i != 1) {
            storyUploadedTime += createAtString[i];
          }
        }
        // console.log(storyUploadedTime);
        // if (createAtString) dataPushingArray.push(val[i]);
        if (
          storyUploadedTime != "weeks ago" &&
          storyUploadedTime != " weeks ago" &&
          storyUploadedTime != "days ago" &&
          storyUploadedTime != " days ago"
        ) {
          dataPushingArray.push(val[i]);
        }
      }

      data.push(dataPushingArray);
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
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
