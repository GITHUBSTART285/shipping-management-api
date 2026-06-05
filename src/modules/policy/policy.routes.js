import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createPolicy,
   getTerms,
   getPrivacy,
   updatePolicy,
} from "./policy.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.single("pdf"),
  createPolicy
);

 router.get("/terms", getTerms);
 router.get("/privacy", getPrivacy);
router.put(
  "/:type",
  upload.single("pdf"),
  updatePolicy
);

export default router;