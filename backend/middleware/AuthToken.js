import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createError } from "../err.js";
dotenv.config();
export const verifyToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return next(createError(404, "login first"));
  }
  Jwt.verify(token, process.env.JWT_SE_KEY, (err, decoded) => {
    if (err) {
      return next(createError(403, "you are not a valid user"));
    }
    // console.log(decoded);
    req.user = decoded;
    next();
  });
};

export default { verifyToken };
