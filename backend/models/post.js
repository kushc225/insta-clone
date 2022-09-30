import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
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
  },
  tagPeople: {
    type: [String],
  },
  hastag: {
    type: [String],
  },
  likes: {
    type: [String],
    default: 0,
  },
  comments: {
    type: [String],
    default: 0,
  },
  views: {
    type: [String],
    default: 0,
  },
});

const PostModel = mongoose.model("post", PostSchema);
export default PostModel;
