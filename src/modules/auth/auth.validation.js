import Joi from "joi";

export const registerValidation = Joi.object({
  first_name: Joi.string().trim().required(),

  last_name: Joi.string().trim().required(),

  email: Joi.string().email().lowercase().required(),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),

  password: Joi.string().min(8).required(),

  confirm_password: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Password and confirm password must match",
    }),

  shipment_types: Joi.array()
    .items(
      Joi.string().valid("domestic", "hyperlocal", "cross-border")
    )
    .min(1)
    .required(),
});

// login

export const loginValidation = Joi.object({

  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.email": "Valid email is required",
      "any.required": "Email is required"
    }),

  password: Joi.string()
    .required()
    .messages({
      "any.required": "Password is required"
    })

});


// forgoot


export const sendOtpValidation = Joi.object({

  phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Invalid mobile number"
    })

});

export const verifyOtpValidation = Joi.object({

  phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required(),

  otp: Joi.string()
    .length(6)
    .required()

});

export const resetPasswordValidation = Joi.object({

  phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required(),

  newPassword: Joi.string()
    .min(6)
    .required()

});