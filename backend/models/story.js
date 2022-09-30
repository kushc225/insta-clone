import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: null,
    },
    tagPeople: {
      type: [String],
      default: null,
    },
    likes: {
      type: [String],
    },
    viewer: {
      type: [String],
    },
  },
  { timestamps: true }
);

const StoryModel = mongoose.model("story", storySchema);
export default StoryModel;
