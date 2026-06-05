import express from "express";
import {
  createShippingCategory,
  getAllShippingCategory,
} from "./shippingCategory.controller.js";

import { upload } from "../../middlewares/upload.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    {
      name: "backgroundImage",
      maxCount: 1,
    },
    {
      name: "images",
    },
  ]),
  createShippingCategory
);

router.get(
  "/",
  getAllShippingCategory
);

export default router;