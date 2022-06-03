import express from "express";
const router = express.Router();

router.get("/payments", (req, res) => {
  res.send("Payments");
});

export default router;
