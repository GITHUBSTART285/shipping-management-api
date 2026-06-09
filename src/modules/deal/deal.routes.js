import express from "express";
import {
  createDeal,
  getDeals,
} from "./deal.controller.js";

import { upload } from "../../middlewares/upload.js";
const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createDeal
);

router.get("/", getDeals);

export default router;