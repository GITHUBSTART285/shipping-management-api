import Joi from "joi";

export const createPolicyValidation = Joi.object({
  type: Joi.string()
    .valid("terms", "privacy")
    .required(),

  title: Joi.string()
    .trim()
    .required(),

  content: Joi.string()
    .allow("")
    .optional(),

  isActive: Joi.boolean()
    .optional(),
});


export const updatePolicyValidation = Joi.object({
  title: Joi.string()
    .trim()
    .optional(),

  content: Joi.string()
    .allow("")
    .optional(),
});