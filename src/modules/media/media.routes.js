import express from "express";
import { upload } from "../../middlewares/upload.js";
import { uploadMedia,  getAllMedia,
 } from "./media.controller.js";

const router = express.Router();

router.post("/upload", upload.single("file",5), uploadMedia);
router.get("/", getAllMedia);

export default router;