import { uploadMediaService,  getAllMediaService} from "./media.service.js";

import { uploadMediaValidation } from "./media.validation.js";

export const uploadMedia = async (req, res) => {
console.log("FILES =>", req.files);
console.log("FILE =>", req.file);
console.log("BODY =>", req.body);
  try {
    // validation
    const { error } = uploadMediaValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await uploadMediaService(
      req.file,
      req.body,
      req.user?.id
    );

    return res.status(201).json({
      success: true,
      message: "Media uploaded successfully",
      data: result,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// GET ALL MEDIA
export const getAllMedia = async (req, res) => {
  try {
    const media = await getAllMediaService();

    res.status(200).json({
      success: true,
      message: "Media fetched successfully",
      data: media,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
