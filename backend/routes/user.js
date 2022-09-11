import express from "express";
import {
  createUser,
  login,
  allMyPost,
  allMyStories,
  currentStoryViewer,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/AuthToken.js";
const route = express.Router();

// http://localhost:5000/api/user/new
route.post("/new", createUser);

// http://localhost:5000/api/user/signin
route.post("/signin", login);

// http://localhost:5000/api/user/allmypost
route.get("/allmypost", verifyToken, allMyPost);

// http://localhost:5000/api/user/allMyStories
route.get("/allmystories", verifyToken, allMyStories);

// http://localhost:5000/api/user/currentStoryViewer
route.get("/currentstoryviewer", verifyToken, currentStoryViewer);

export default route;
