import PostModel from "../models/post.js";
import StroyModel from "../models/story.js";
import UserModel from "../models/user.js";

export const addPhoto = async (req, res, next) => {
  try {
    const owner = req.user.id;
    const { imgURL, ...others } = req.body;
    const newPost = await PostModel.create({ owner, imgURL, ...others });
    res.status(200).json({ success: true, newPost });
  } catch (error) {
    return next(error);
  }
};

export const addStory = async (req, res, next) => {
  try {
    //       01/10 /2022
    const owner = req.user.id;
    const userProfile = await UserModel.findById(req.user.id);
    const ownerName = userProfile.username;

    const { imgURL, ...others } = req.body;
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    // const dateOrg = {
    //   1: "01",
    //   2: "02",
    //   3: "03",
    //   4: "04",
    //   5: "05",
    //   6: "06",
    //   7: "07",
    //   8: "08",
    //   8: "08",
    //   9: "09",
    // };
    // for (let item in dateOrg) {
    //   // console.log(item, dateOrg[item]);
    //   if (item == date) {
    //     date = dateOrg[item];
    //     // console.log(hour)
    //   }
    //   if (item == month) {
    //     month = dateOrg[item];
    //     // console.log(month)
    //   }
    //   if (hour == item) {
    //     hour = dateOrg[item];
    //   }
    //   if (min == item) {
    //     min = dateOrg[item];
    //   }
    //   if (sec == item) {
    //     sec = dateOrg[item];
    //   }
    // }

    // console.log(hour, month);

    let DMY = date + "/" + month + "/" + year;
    let HMS = hours + "/" + min + "/" + sec;
    DMY = new Date().getTime();
    const newStory = await StroyModel.create({
      owner,
      ownerName,
      imgURL,
      DMY,
      HMS,
      ...others,
    });
    res.status(200).json({ success: true, newStory });
  } catch (error) {
    return next(error);
  }
};

export default { addPhoto, addStory };
