import {
  createInternationalBannerService,
  getAllInternationalBannersService
//   updateInternationalBannerService,
//   deleteInternationalBannerService,
} from "./internationalBanner.service.js";
export const createInternationalBanner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Banner image is required",
      });
    }

    const banner =
      await createInternationalBannerService({
        title: req.body.title,
        subtitle: req.body.subtitle,
        imageUrl: req.file.path,
        imagePublicId: req.file.filename,
      });

    return res.status(201).json({
      success: true,
      message:
        "International banner created successfully",
      data: banner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all
export const getAllInternationalBanners = async (req, res) => {
  try {
    const banners =
      await getAllInternationalBannersService();

    return res.status(200).json({
      success: true,
      message: "International banners fetched successfully",
      count: banners.length,
      data: banners,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};