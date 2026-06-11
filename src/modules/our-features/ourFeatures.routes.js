import express from "express";
import {
  createOurFeature,
  getOurFeatures,
} from "./ourFeatures.controller.js";

const router = express.Router();

router.post("/", createOurFeature);
router.get("/", getOurFeatures);

export default router;