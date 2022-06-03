import express from "express";
const router = express.Router();

router.get("/profile-details", (req, res) => {
  res.send("Profile-details");
});

router.get("/change-phone", (req, res) => {
  res.send("Change phone");
});

router.get("/change-profile", (req, res) => {
  res.send("Change profile");
});

export default router;
