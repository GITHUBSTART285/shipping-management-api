import express from "express";
// import{upload }from "../../middlewares/upload.js";
import {
  createFeature,
  getAllFeatures,
  // getFeatureBySlug,,
  updateFeature,
  deleteFeature
} from "./feature.controller.js";

const router = express.Router();

//router.post( "/",upload.single("image"),createFeature);
router.post("/", createFeature);
router.get("/", getAllFeatures);
// router.get("/:slug", getFeatureBySlug);
router.put("/:id", updateFeature);
router.delete("/:id", deleteFeature);

export default router;