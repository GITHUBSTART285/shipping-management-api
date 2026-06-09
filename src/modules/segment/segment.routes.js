import express from "express";
import {
  createSegment,
  getAllSegments,
  getSegmentBySlug,
} from "./segment.controller.js";

const router = express.Router();

router.post("/", createSegment);
router.get("/", getAllSegments);
router.get("/:slug", getSegmentBySlug);

export default router;