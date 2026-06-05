import Joi from "joi";

export const uploadMediaValidation = Joi.object({
  // type: Joi.string()
  //   .valid("image", "video")
  //   .required()
  //   .messages({
  //     "any.only": "Type must be image or video",
  //     "any.required": "Type is required",
  //   }),
});