import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createInternationalServiceFeature,getAllInternationalServiceFeatures
} from "./internationalServiceFeature.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createInternationalServiceFeature 
);
router.get( "/",getAllInternationalServiceFeatures);

export default router;