import {
  createShippingAudienceService,
  getAllShippingAudienceService,
} from "./shippingAudience.service.js";

import { shippingAudienceValidation } from "./shippingAudience.validation.js";

export const createShippingAudience = async (req, res) => {
  try {
    console.log("FILES =>", req.files);
    console.log("FILES =>", req.files);
console.log("BODY =>", req.body);
    // File validation
    if (!req.files?.video || req.files.video.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Video is required",
      });
    }

    if (!req.files?.images || req.files.images.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    // Parse tabs
    const tabs = JSON.parse(req.body.tabs);

    // Joi validation
    const { error } = shippingAudienceValidation.validate({
      tabs,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const data = await createShippingAudienceService(
      req.body,
      req.files
    );

    return res.status(201).json({
      success: true,
      message: "Shipping audience created successfully",
      data,
    });
  } catch (error) {
    console.error("ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllShippingAudience = async (req, res) => {
  try {
    const data = await getAllShippingAudienceService();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};