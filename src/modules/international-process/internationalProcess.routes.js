import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createInternationalProcess,getAllInternationalProcesses
} from "./internationalProcess.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createInternationalProcess
);
router.get("/", getAllInternationalProcesses);
export default router;