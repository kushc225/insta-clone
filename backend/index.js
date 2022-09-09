import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbConnect from "./conn/conn.js";
import userRouter from "./routes/user.js";
import cors from "cors";
import firebase from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/users", userRouter);

app.post("/test", async (req, res) => {
  const cityRef = db.collection("cities").doc("BJ");

  const res = await cityRef.set(
    {
      capital: true,
    },
    { merge: true }
  );
  index.js;
  console.log(response);
  res.send(response);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.message || "something went wrong";
  return res.status(status).json({ success: false, msg });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("sever is running...");
  dbConnect();
});
