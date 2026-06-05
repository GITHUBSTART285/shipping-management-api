import * as orderService from "./order.service.js";
import { validateOrder } from "./order.validation.js";

export const createOrder = async (req, res) => {
     console.log("BODY:", req.body); // 👈 YAHAN LAGAO
  try {
    //  VALIDATION CALL
    const errors = validateOrder(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors,
      });
    }

    //  SERVICE CALL
    const order = await orderService.createOrder(req.body);

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};