import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbConnect from "./conn/conn.js";
import userRouter from "./routes/user.js";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.message || "something went wrong";
  return res.status(status).json({ success: false, msg });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running...");
  dbConnect();
});
