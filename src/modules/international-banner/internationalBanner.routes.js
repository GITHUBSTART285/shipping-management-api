import express from "express";
import { upload } from "../../middlewares/upload.js";

import {
  createInternationalBanner,
   getAllInternationalBanners,
//   updateInternationalBanner,
//   deleteInternationalBanner,
} from "./internationalBanner.controller.js";

const router = express.Router();

router.post("/", upload.single("image"), createInternationalBanner);

 router.get("/", getAllInternationalBanners);

// router.put("/:id", upload.single("image"), updateInternationalBanner);

// router.delete("/:id", deleteInternationalBanner);

export default router;