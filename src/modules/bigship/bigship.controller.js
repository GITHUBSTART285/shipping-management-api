import {
  createBigshipService,
  getBigshipService
} from "./bigship.service.js";

// CREATE
export const createBigship = async (req, res) => {
  try {
    const data = await createBigshipService(req.body);
    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET
export const getBigship = async (req, res) => {
  try {
    const data = await getBigshipService();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};