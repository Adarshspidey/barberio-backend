import express from "express";
import { AddLocation } from "./Controller/Location";
import LocationValidation from './Validation/location'
import CoverImageValidation from './Validation/coverImage'
import LogoImageValidation from './Validation/LogoImage'
import { AddCoverImage } from "./Controller/CoverImage";
import { AddLogo } from "./Controller/LogoImage/logo";
import { AddImages } from "./Controller/Images";
import ImageUrlValidation from './Validation/images'
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

export default router;
