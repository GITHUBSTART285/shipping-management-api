// import Joi from "joi";

// export const createFeatureValidation = Joi.object({
//   title: Joi.string()
//     .trim()
//     .required(),

//   slug: Joi.string()
//     .trim()
//     .required(),

//   content: Joi.string()
//     .allow("")
//     .optional(),
// });

import Joi from "joi";

export const createFeatureValidation = Joi.object({
  title: Joi.string()
    .trim()
    .required(),

  // slug: Joi.string()
  //   .trim()
  //   .required(),

  content: Joi.string()
    .allow("")
    .optional(),

  // imageUrl: Joi.string()
  //   .allow(null, "")
  //   .optional(),

  // imagePublicId: Joi.string()
  //   .allow(null, "")
  //   .optional(),

  //   description: Joi.string()
  // .allow("")
  // .optional(),
});