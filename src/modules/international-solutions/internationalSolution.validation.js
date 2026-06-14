import Joi from "joi";

export const createInternationalSolutionValidation =
  Joi.object({
    title: Joi.string()
      .trim()
      .required(),

    description: Joi.string()
      .trim()
      .required(),
  });