import {
  createHelpService,
  getHelpService,
} from "./help.service.js";

export const createHelp = async (req, res) => {
  try {
    const data = await createHelpService(req.body);

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

export const getHelp = async (req, res) => {
  try {
    const data = await getHelpService();

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