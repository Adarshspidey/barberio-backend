import express from "express";
const router = express.Router();
import AuthRouter from "./Auth";
import BookingRouter from "./Bookings";
import ShopRouter from "./Shop";
import ServicesRouter from "./Services";
import NotificationsRouter from "./Notifications";
import PaymentsRouter from "./Payments";

router.use("/auth", AuthRouter);
router.use("/booking", BookingRouter);
router.use("/shop", ShopRouter);
router.use("/services", ServicesRouter);
router.use("/notifications", NotificationsRouter);
router.use("/payments", PaymentsRouter);

export default router;
