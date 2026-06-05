import {
  createShippingProcessService,
  getAllShippingProcessService,
} from "./shippingProcess.service.js";

export const createShippingProcess = async (req, res) => {
  try {


    console.log("FILES =>", req.files);
    console.log("BODY =>", req.body);

    console.log("FILES =>", req.files);

    console.log("IMAGES =>", req.files?.images);
    console.log("IMAGES LENGTH =>", req.files?.images?.length);
    if (!req.files?.images || req.files.images.length === 0) {
  return res.status(400).json({
    success: false,
    message: "At least one image is required",
  });
}

    const shippingProcess = await createShippingProcessService(
      req.body,
      req.files
    );

    return res.status(201).json({
      success: true,
      message: "Shipping process created successfully",
      data: shippingProcess,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllShippingProcess = async (req, res) => {
  try {
    const shippingProcesses = await getAllShippingProcessService();

    return res.status(200).json({
      success: true,
      data: shippingProcesses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};