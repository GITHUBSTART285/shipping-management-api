import Joi from "joi";

export const shippingProcessValidation = Joi.object({
  steps: Joi.array()
    .items(
      Joi.object({
        stepNumber: Joi.number().required().messages({
          "any.required": "Step number is required",
        }),

        title: Joi.string().trim().required().messages({
          "string.empty": "Title is required",
          "any.required": "Title is required",
        }),
      })
    )
    .min(1)
    .required()
    .messages({
      "array.min": "At least one step is required",
      "any.required": "Steps are required",
    }),
});