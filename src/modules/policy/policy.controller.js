import {
    createPolicyService,
   getTermsService,
   getPrivacyService,
   updatePolicyService 
} from "./policy.service.js";
import { createPolicyValidation,updatePolicyValidation  } from "../policy/policy.validation.js";

// post crette 

export const createPolicy = async (
  req,
  res,
  next
) => {
  try {

    // PDF validation
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Policy PDF is required",
      });
    }
    const policy = await createPolicyService({
      type: req.body.type,
      title: req.body.title,
      content: req.body.content,
      pdfUrl: req.file?.path || null,
      pdfPublicId: req.file?.filename || null,
      isActive: req.body.isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Policy created successfully",
      data: policy,
    });
  } catch (error) {
    next(error);
  }
};
// get 

export const getTerms = async (req, res) => {
  try {
    const policy = await getTermsService();

    if (!policy) {
      return res.status(404).json({
        success: false,
        message: "Terms & Conditions not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: policy,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//get
export const getPrivacy = async (req, res) => {
  try {
    const policy = await getPrivacyService();

    if (!policy) {
      return res.status(404).json({
        success: false,
        message: "Privacy Policy not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: policy,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePolicy = async (req, res) => {
  try {
    const { type } = req.params;

    // Empty request check
    if (
      !req.file &&
      Object.keys(req.body).length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "At least one field or PDF is required",
      });
    }

    // Joi validation
    const { error } =
      updatePolicyValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const updateData = {
      ...req.body,
    };

    // PDF uploaded
    if (req.file) {
      updateData.pdfUrl = req.file.path;
      updateData.pdfPublicId =
        req.file.filename;
    }

    const updated = await updatePolicyService(
      type,
      updateData
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `${type} policy not found`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `${type} updated successfully`,
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};