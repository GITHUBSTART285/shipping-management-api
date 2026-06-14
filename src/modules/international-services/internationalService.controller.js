import {
  createInternationalServiceService,
  getAllInternationalServicesService,
} from "./internationalService.service.js";

    export const createInternationalService = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Service image is required",
      });
    }

    const service = await createInternationalServiceService({
       sectionTitle:req.body.sectionTitle,
       sectionSubTitle:req.body.sectionSubTitle,
        title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.path,
      imagePublicId: req.file.filename,

    });

    return res.status(201).json({
      success: true,
      message: "International service created successfully",
      data: service,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllInternationalServices = async (req, res) => {
  try {
    const services =
      await getAllInternationalServicesService();

    return res.status(200).json({
      success: true,
      message:
        "International services fetched successfully",
      count: services.length,
      data: services,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};