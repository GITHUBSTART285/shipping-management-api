import {
  createOurFeatureService,
  getOurFeaturesService,
} from "./ourFeatures.service.js";

export const createOurFeature = async (req, res) => {
  try {
    const data = await createOurFeatureService(req.body);

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOurFeatures = async (req, res) => {
  try {
    const data = await getOurFeaturesService();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};