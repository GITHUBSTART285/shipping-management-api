import Joi from "joi";

export const shippingCategoryValidation = Joi.object({
  categories: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
      })
    )
    .min(1)
    .required(),
});