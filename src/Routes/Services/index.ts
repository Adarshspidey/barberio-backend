import express from "express";
import { CreateService } from "./Controller/AddService";
import addServiceValidation from "./Validation/addService"
const router = express.Router();


router.post("/add-service",addServiceValidation, CreateService) 

router.get("/update-service", (req, res) => {
  res.send("Update service");
});

router.get("/delete-service", (req, res) => {
  res.send("delete service");
});

export default router;
