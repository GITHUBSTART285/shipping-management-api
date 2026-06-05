import express from "express";
import { upload } from "../../middlewares/upload.js";
import {
  getFeatureBanner,
  updateFeatureBanner,
} from "./featureBanner.controller.js";

const router = express.Router();

router.get("/", getFeatureBanner);

router.put("/",upload.single("file"), updateFeatureBanner);
  


export default router;