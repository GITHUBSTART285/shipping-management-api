
import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createInternationalSolution,getAllInternationalSolutions
} from "./internationalSolution.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createInternationalSolution
);
router.get(
  "/",
  getAllInternationalSolutions
);
export default router;