import express from "express";
import {
  createSegment,
  getAllSegments,
 
} from "./segment.controller.js";

const router = express.Router();

router.post("/", createSegment);
router.get("/", getAllSegments);


export default router;