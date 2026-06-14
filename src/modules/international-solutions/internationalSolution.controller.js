import {
  createInternationalSolutionService,getAllInternationalSolutionsService,
} from "./internationalSolution.service.js";

import {
  createInternationalSolutionValidation,
} from "./internationalSolution.validation.js";

export const createInternationalSolution =
  async (req, res) => {
    try {
      const { error } =
        createInternationalSolutionValidation.validate(
          req.body
        );

      if (error) {
        return res.status(400).json({
          success: false,
          message:
            error.details[0].message,
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Solution image is required",
        });
      }

      const solution =
        await createInternationalSolutionService(
          {
            title: req.body.title,
            description:
              req.body.description,
            imageUrl: req.file.path,
            imagePublicId:
              req.file.filename,
          }
        );

      return res.status(201).json({
        success: true,
        message:
          "International solution created successfully",
        data: solution,
      });

    } catch (error) {
      console.error(
        "CREATE INTERNATIONAL SOLUTION ERROR =>",
        error
      );

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }; 
  // get all
 
export const getAllInternationalSolutions =
  async (req, res) => {
    try {
      const solutions =
        await getAllInternationalSolutionsService();

      return res.status(200).json({
        success: true,
        message:
          "International solutions fetched successfully",
        count: solutions.length,
        data: solutions,
      });

    } catch (error) {
      console.error(
        "GET INTERNATIONAL SOLUTIONS ERROR =>",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch international solutions",
        error: error.message,
      });
    }
  };