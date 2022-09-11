import express from "express";
import { addPhoto, addStory } from "../controllers/postController.js";
import { verifyToken } from "../middleware/AuthToken.js";
const route = express.Router();

route.post("/addphoto", verifyToken, addPhoto);

route.post("/addstory", verifyToken, addStory);

export default route;
