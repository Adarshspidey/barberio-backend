import express from "express";
import { authMiddleware } from "../../Utilits/MiddleWare";
import {permissions } from "../../Config"
const router = express.Router();
import addBookingValidation from "./Validation/addBooking"
import { CreateBookings } from "./Controller/AddBooking";
router.post("/add-bookings", authMiddleware(permissions.User),addBookingValidation,CreateBookings)


router.get("/update-bookings", (req, res) => {

  res.send("Update Bookings");
});

router.get("/delete-bookings", (req, res) => {
  res.send("Delete Bookings");
});

export default router;
