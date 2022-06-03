import express from "express";
const router = express.Router();

router.get("/notifications", (req, res) => {
  res.send("Notifications");
});

export default router;
