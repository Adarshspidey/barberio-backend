import express from "express";
const router = express.Router();

router.get("/add-service", (req, res) => {
  res.send("Add service");
});

router.get("/update-service", (req, res) => {
  res.send("Update service");
});

router.get("/delete-service", (req, res) => {
  res.send("delete service");
});

export default router;
