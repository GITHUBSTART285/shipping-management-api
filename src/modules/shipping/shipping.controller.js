import {
  createShippingService,  calculateShippingChargesService
} from "./shipping.service.js";

 import { createShippingValidation,  shippingChargesValidation} from "./shipping.validation.js";

export const createShipping = async (req, res) => {
  try {
    const { error } = createShippingValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await createShippingService(req.body);

    return res.status(201).json({
      success: true,
      data: result,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//
export const getShippingCharges = async (req, res) => {
  try {
    // 1. Validation
    const { error, value } = shippingChargesValidation.validate(req.query);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    // 2. Service call
    const result = await calculateShippingChargesService(value);

    return res.status(200).json({
      success: true,
      message: "Shipping charges calculated successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

