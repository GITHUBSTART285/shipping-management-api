import {
  registerValidation,
  loginValidation,
  sendOtpValidation,
  verifyOtpValidation,
  resetPasswordValidation
} from "./auth.validation.js";

import {
  registerService,
  loginService,
  sendOtpService,
  verifyOtpService,
  resetPasswordService
} from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const { error } = registerValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await registerService(req.body);

    return res.status(201).json({
      success: true,
      message: "Registered Successfully",
      data: result,
    });
  } catch (error) {
    console.log("REGISTER ERROR =>", error);

  return res.status(500).json({
    success: false,
    message: "Registration failed",
    error: error.message
  });
}
};

//login



export const login = async (req, res) => {

  try {

    // VALIDATION
    const { error } = loginValidation.validate(
      req.body
    );

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    // LOGIN SERVICE
    const result = await loginService(req.body);

    return res.status(200).json({

      success: true,
      message: "Login successful",
      data: result

    });

  } catch (error) {

    return res.status(500).json({

      success: false,
      message: error.message

    });

  }

};

// forggot



export const sendOtp = async (
  req,
  res
) => {

  try {

    const { error } =
      sendOtpValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    const { phone } = req.body;

    const otp = await sendOtpService(phone);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const verifyOtp = async (
  req,
  res
) => {

  try {

    const { error } =
      verifyOtpValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    const { phone, otp } = req.body;

    await verifyOtpService(phone, otp);

    res.status(200).json({
      success: true,
      message: "OTP verified successfully"
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};

export const resetPassword = async (
  req,
  res
) => {

  try {

    const { error } =
      resetPasswordValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    const { phone, newPassword } = req.body;

    await resetPasswordService(
      phone,
      newPassword
    );

    res.status(200).json({
      success: true,
      message: "Password reset successfully"
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });

  }

};