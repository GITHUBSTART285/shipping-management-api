import express from "express";
import { upload } from "../../middlewares/upload.js";
import {
  createShippingProcess,
  getAllShippingProcess,
} from "./shippingProcess.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "images" }
  ]),
  createShippingProcess
);
router.get("/", getAllShippingProcess);

export default router;