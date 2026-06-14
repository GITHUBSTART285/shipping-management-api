import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createInternationalService,
  getAllInternationalServices,
} from "./internationalService.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createInternationalService
);

router.get(
  "/",
  getAllInternationalServices
);

export default router;