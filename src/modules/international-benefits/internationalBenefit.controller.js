import { createInternationalBenefitService,
    getAllInternationalBenefitsService,
    updateInternationalBenefitService,
  deleteInternationalBenefitService
 } from "./internationalBenefit.service.js";

export const createInternationalBenefit = async (req, res) => {
  try {
    const benefit =
      await createInternationalBenefitService({
        sectionTitle: req.body.sectionTitle,
        sectionSubTitle: req.body.sectionSubTitle,
        category: req.body.category,
        points: req.body.points,
      });

    return res.status(201).json({
      success: true,
      message: "International benefit created successfully",
      data: benefit,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//get al 
export const getAllInternationalBenefits = async (req, res) => {
  try {
    const benefits =
      await getAllInternationalBenefitsService();

    return res.status(200).json({
      success: true,
      message: "International benefits fetched successfully",
      count: benefits.length,
      data: benefits,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// put by id

export const updateInternationalBenefit = async (
  req,
  res
) => {
  try {
    const benefit =
      await updateInternationalBenefitService(
        req.params.id,
        req.body
      );

    if (!benefit) {
      return res.status(404).json({
        success: false,
        message: "International benefit not found",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "International benefit updated successfully",
      data: benefit,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// delte by id 
export const deleteInternationalBenefit = async (
  req,
  res
) => {
  try {
    const benefit =
      await deleteInternationalBenefitService(
        req.params.id
      );

    if (!benefit) {
      return res.status(404).json({
        success: false,
        message: "International benefit not found",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "International benefit deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};