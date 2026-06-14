import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createWhatWeOffer,getAllWhatWeOffer
} from "./whatWeOffer.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createWhatWeOffer
);
router.get(
  "/",
  getAllWhatWeOffer
);
export default router;