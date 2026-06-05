import Joi from "joi";

export const shippingAudienceValidation = Joi.object({
  tabs: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
      })
    )
    .min(1)
    .required(),
});