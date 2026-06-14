import { createInternationalServiceFeatureService } from "./internationalServiceFeature.service.js";

export const createInternationalServiceFeature = async (req,res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Feature image is required",
      });
    }

    const feature =
      await createInternationalServiceFeatureService({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.file.path,
        imagePublicId: req.file.filename,
      });

    return res.status(201).json({
      success: true,
      message:
        "International service feature created successfully",
      data: feature,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all
import { getAllInternationalServiceFeaturesService } from "./internationalServiceFeature.service.js";

export const getAllInternationalServiceFeatures = async ( req,res) => {
  try {
    const features =
      await getAllInternationalServiceFeaturesService();

    return res.status(200).json({
      success: true,
      message:
        "International service features fetched successfully",
      count: features.length,
      data: features,
    });

  } catch (error) {
    console.error(
      "GET INTERNATIONAL SERVICE FEATURES ERROR =>",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch international service features",
      error: error.message,
    });
  }
};