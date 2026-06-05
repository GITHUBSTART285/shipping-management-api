import express from "express";
import { createShippingAudience, getAllShippingAudience } from "./shippingAudience.controller.js";
import { upload } from "../../middlewares/upload.js";

const router = express.Router();

// router.post("/", upload.fields([{ name: "video", maxCount: 1 }, 
//     { name: "images" }]), createShippingAudience);
router.post(
  "/",
  (req, res, next) => {
    console.log("ROUTE HIT");
    next();
  },
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "images" },
  ]),
  createShippingAudience
);
router.get("/", getAllShippingAudience);

export default router;