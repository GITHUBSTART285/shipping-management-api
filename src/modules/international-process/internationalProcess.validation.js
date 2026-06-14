import Joi from "joi";

export const createInternationalProcessValidation =
  Joi.object({
    sectionTitle: Joi.string()
      .trim()
      .required(),

    stepNumber: Joi.number()
      .required(),

    description: Joi.string()
      .trim()
      .required(),
  });