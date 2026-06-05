import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloud.config.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "uploads",
    resource_type: "auto",
  }),
});


export const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});