import Joi from "joi";

export const shipmentTypeValidation = Joi.object({
  type: Joi.string()
    .valid(
      "domestic",
      "hyperlocal",
      "cross-border"
    )
    .optional(),
});