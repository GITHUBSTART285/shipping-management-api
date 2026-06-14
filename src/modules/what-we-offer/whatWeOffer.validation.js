import Joi from "joi";

export const createWhatWeOfferValidation = Joi.object({
  sectionTitle: Joi.string()
    .trim()
    .required(),

  sectionDescription: Joi.string()
    .trim()
    .required(),

  value: Joi.string()
    .trim()
    .required(),

  description: Joi.string()
    .trim()
    .required(),
});