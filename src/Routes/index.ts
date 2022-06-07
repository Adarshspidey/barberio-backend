import express from "express";
const router = express.Router();
import AuthRouter from "./Auth";
import BookingRouter from "./Bookings";
import ShopRouter from "./Shop";
import ServicesRouter from "./Services";
import NotificationsRouter from "./Notifications";
import PaymentsRouter from "./Payments";
import { authMiddleware } from "../Utilits/MiddleWare";
import { permissions } from "../Config";

router.use("/auth", AuthRouter);
router.use("/booking", BookingRouter);
router.use("/shop",authMiddleware(permissions.User), ShopRouter);
router.use("/services",authMiddleware(permissions.User) ,ServicesRouter);
router.use("/notifications", NotificationsRouter);
router.use("/payments", PaymentsRouter);

export default router;
