import express from "express";
import { authMiddleware } from "../../Utilits/MiddleWare";
const router = express.Router();

router.get("/add-bookings", authMiddleware("user"), (req, res) => {
  res.send("Add Bookings");
});

router.get("/update-bookings", (req, res) => {
  res.send("Update Bookings");
});

router.get("/delete-bookings", (req, res) => {
  res.send("Delete Bookings");
});

export default router;
