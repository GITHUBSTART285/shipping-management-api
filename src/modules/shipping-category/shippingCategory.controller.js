import {
  createShippingCategoryService,
  getAllShippingCategoryService,
} from "./shippingCategory.service.js";

import { shippingCategoryValidation } from "./shippingCategory.validation.js";

export const createShippingCategory = async (
  req,
  res
) => {
  try {
    if (
      !req.files?.backgroundImage ||
      req.files.backgroundImage.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Background image is required",
      });
    }

    if (
      !req.files?.images ||
      req.files.images.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    const categories = JSON.parse(
      req.body.categories
    );

    const { error } =
      shippingCategoryValidation.validate({
        categories,
      });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const data =
      await createShippingCategoryService(
        req.body,
        req.files
      );

    return res.status(201).json({
      success: true,
      message:
        "Shipping category created successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllShippingCategory = async (
  req,
  res
) => {
  try {
    const data =
      await getAllShippingCategoryService();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};