import express from "express";
import { AddLocation } from "./Controller/Location";
import LocationValidation from './Validation/location'
import CoverImageValidation from './Validation/coverImage'
import LogoImageValidation from './Validation/LogoImage'
import { AddCoverImage } from "./Controller/CoverImage";
import { AddLogo } from "./Controller/LogoImage/logo";
import { AddImages } from "./Controller/Images";
import ImageUrlValidation from './Validation/images'
import ScheduleWorkTimeValidation from './Validation/workTime'
import { ScheduleWorkTime } from "./Controller/WorkTime";
const router = express.Router();
router.post("/add-location", LocationValidation, AddLocation);
router.post("/add-cover-image",CoverImageValidation , AddCoverImage)
router.post("/add-logo",LogoImageValidation, AddLogo)
router.post("/add-images",ImageUrlValidation,AddImages)

router.get("/change-phone", (req, res) => {
  res.send("Change phone");
});

router.get("/change-profile", (req, res) => {
  res.send("Change profile");
});

router.post("/schedule-work-time",ScheduleWorkTimeValidation,ScheduleWorkTime)


export default router;
