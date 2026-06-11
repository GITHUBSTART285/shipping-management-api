import express from "express";
import {
  createBigship,
  getBigship
} from "./bigship.controller.js";

const router = express.Router();

// POST
router.post("/", createBigship);

// GET
router.get("/", getBigship);

export default router;