import {
  getFeatureBannerService,
  updateFeatureBannerService,
} from "./featureBanner.service.js";

export const getFeatureBanner = async (req, res) => {
  try {
    const banner = await getFeatureBannerService();

    return res.status(200).json({
      success: true,
      message: "Feature banner fetched successfully",
      data: banner,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFeatureBanner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Banner image is required",
      });
    }

    const banner = await updateFeatureBannerService({
      imageUrl: req.file.path,
      imagePublicId: req.file.filename,
    });

    return res.status(200).json({
      success: true,
      message: "Feature banner updated successfully",
      data: banner,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};