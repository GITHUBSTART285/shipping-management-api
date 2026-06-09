import {
  createDealService,
  getDealService,
} from "./deal.service.js";

export const createDeal = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const deal = await createDealService({
      title,
      description,
      image: req.file.path,
    });

    return res.status(201).json({
      success: true,
      data: deal,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDeals = async (req, res) => {
  try {
    const deals = await getDealService();

    return res.status(200).json({
      success: true,
      data: deals,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};