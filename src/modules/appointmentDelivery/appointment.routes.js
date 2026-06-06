import express from "express";
import {
  createAppointment,
  getAppointment,
} from "./appointment.controller.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointment);

export default router;