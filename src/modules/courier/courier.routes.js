import express from "express";
import {
  createCourier,
  getCouriers,
} from "./courier.controller.js";

const router = express.Router();

router.post("/", createCourier);
router.get("/", getCouriers);

export default router;