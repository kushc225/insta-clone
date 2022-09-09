import express from "express";
import { createUser, login } from "../controllers/userController.js";
const route = express.Router();

route.post("/new", createUser);

route.post("/signin", login);

export default route;
