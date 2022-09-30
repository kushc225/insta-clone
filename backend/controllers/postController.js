import PostModel from "../models/post.js";
import StroyModel from "../models/story.js";

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
    const owner = req.user.id;
    const { imgURL, ...others } = req.body;
    const newStory = await StroyModel.create({ owner, imgURL, ...others });
    res.status(200).json({ success: true, newStory });
  } catch (error) {
    return next(error);
  }
};

export default { addPhoto, addStory };
