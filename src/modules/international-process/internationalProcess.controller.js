import {
  createInternationalProcessService,
} from "./internationalProcess.service.js";

import {
  createInternationalProcessValidation,
} from "./internationalProcess.validation.js";

export const createInternationalProcess = async (
  req,
  res
) => {
  try {
    const { error } =
      createInternationalProcessValidation.validate(
        req.body
      );

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Process image is required",
      });
    }

    const process =
      await createInternationalProcessService({
        sectionTitle: req.body.sectionTitle,
        stepNumber: req.body.stepNumber,
        description: req.body.description,
        imageUrl: req.file.path,
        imagePublicId: req.file.filename,
      });

    return res.status(201).json({
      success: true,
      message:
        "International process created successfully",
      data: process,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// geatt all

import { getAllInternationalProcessesService } from "./internationalProcess.service.js";

export const getAllInternationalProcesses = async (
  req,
  res
) => {
  try {
    const processes =
      await getAllInternationalProcessesService();

    return res.status(200).json({
      success: true,
      message:
        "International processes fetched successfully",
      count: processes.length,
      data: processes,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};