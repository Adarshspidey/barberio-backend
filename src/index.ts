import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import Router from "./Routes";

dotenv.config();


(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Barberio");
   console.log("Connect to database");
  } catch (error) {
   console.log(error);
  }
})();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1", Router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
