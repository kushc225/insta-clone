import express from "express";
import {
  createUser,
  login,
  allMyPost,
  allMyStories,
  currentStoryViewer,
  likeStory,
  watchStory,
  following,
  followers,
} from "../controllers/userController.js";
import {
  myFollowingStories,
  findStoryByOwnerId,
} from "../controllers/storyController.js";
import { verifyToken } from "../middleware/AuthToken.js";
const route = express.Router();

// http://localhost:5000/api/user/new
route.post("/new", createUser);

// http://localhost:5000/api/user/signin
route.post("/signin", login);

// http://localhost:5000/api/user/following
route.get("/following/:id", verifyToken, following);

// http://localhost:5000/api/user/followers
route.get("/followers", verifyToken, followers);

// http://localhost:5000/api/user/allmypost (show all the previous post a individual)
route.get("/allmypost", verifyToken, allMyPost);

// http://localhost:5000/api/user/allMyStories (show all the previous story by the user)
route.get("/allmystories", verifyToken, allMyStories);

// http://localhost:5000/api/user/currentStoryViewer (all the people who watch my current-story)
route.get("/currentstoryviewer", verifyToken, currentStoryViewer);

// http://localhost:5000/api/user/currentstoryliker/:id (all the people who like my current-story)
route.get("/currentstoryliker/:id", verifyToken, likeStory);

// http://localhost:5000/api/user/watchstory:id (watch the story of others)
route.get("/watchstory/:id", verifyToken, watchStory);

// http://localhost:5000/api/user/relatedStory (watch the story of others)
route.get("/relatedStory", verifyToken, myFollowingStories);

// http://localhost:5000/api/user/findstorybyid/:id (watch the story of others)
route.get("/findstorybyid/:id", verifyToken, findStoryByOwnerId);

export default route;
