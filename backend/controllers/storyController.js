import axios from "axios";
import { format } from "timeago.js";
import StoryModel from "../models/story.js";
import UserModel from "../models/user.js";
const data = [];
export const myFollowingStories = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (user.following.length === 0) {
      return res.status(200).json({ success: true, msg: "empty" });
    }
    await f1(user.following);

    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
const f1 = async (person) => {
  for (let i = 0; i < person.length; i++) {
    const val = await StoryModel.find({ owner: person[i] });
    if (val.length != 0) {
      // console.log("val =>", val[0].owner);
      data.push(val);
    }
    // for (let j = 0; j < val.length; j++) {
    //   if (val[i].length != 0) {
    //     const d = new Date();
    //     const year = d.getFullYear();
    //     const month = d.getMonth() + 1;
    //     const date = d.getDate();
    //     let hour = d.getHours();
    //     let min = d.getMinutes();
    //     let sec = d.getSeconds();
    //     let DMY = date + "/" + month + "/" + year;
    //     let HMS = hour + "/" + min + "/" + sec;
    //     DMY = new Date(DMY);
    //     HMS = new Date(HMS);
    //     let date2 = new Date(val[i].DMY);
    //     let date3 = new Date(val[i].HMS);
    //     let Difference_In_Days = date2.getTime() - DMY.getTime();
    //     // let Difference_In_Hours = date3.getTime() - HMS.getTime();
    //     // console.log(val[i].DMY.getTime());
    //     // console.log(Difference_In_Days, Difference_In_Hours);
    //     let Difference_In_Day = Difference_In_Days / (1000 * 3600 * 24);
    //     console.log(Difference_In_Day);
    //     if (Difference_In_Day == 0) {
    //       data.push(val[j]);
    //   }
    // }
    // }
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
