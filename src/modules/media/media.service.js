import Media from "./media.model.js";
import cloudinary from "../../config/cloud.config.js";

export const uploadMediaService = async (file, body, userId) => {
  if (!file) {
    throw new Error("File is required");
  }

  // upload to cloudinary
  const result = await cloudinary.uploader.upload(file.path, {
    resource_type: "auto",
    folder: "media_uploads",
  });

 const media = await Media.create({
  url: result.secure_url,
  public_id: result.public_id,
  type: file.mimetype.startsWith("image/")
    ? "image"
    : "video",
  size: file.size,
  format: file.mimetype,
  original_name: file.originalname,
  uploaded_by: userId || null,
});
  return media;
};


// GET ALL MEDIA
export const getAllMediaService = async () => {
  try {
   const media = await Media.find().sort({ createdAt: -1 }).limit(2)
      .populate("uploaded_by", "name email")
      .sort({ createdAt: -1 });

    return media;
  } catch (error) {
    throw error;
  }
};