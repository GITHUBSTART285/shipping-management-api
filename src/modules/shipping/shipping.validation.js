import Joi from "joi";


export const createShippingValidation = Joi.object({

  order_id: Joi.string().required(),

  customer: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().optional(),
  }),

  pickup_address: Joi.object({
    city: Joi.string().required(),
    state: Joi.string().required(),
    pincode: Joi.string().required(),
  }),

  delivery_address: Joi.object({
    city: Joi.string().required(),
    state: Joi.string().required(),
    pincode: Joi.string().required(),
  }),

  package_details: Joi.object({
    weight: Joi.number().required(),
    length: Joi.number().required(),
    width: Joi.number().required(),
    height: Joi.number().required(),
  }),

  order_value: Joi.number().optional(),

  payment_mode: Joi.string().valid("prepaid", "cod").required(),

})
.unknown(true);  
export const shippingChargesValidation = Joi.object({
  pickup_pincode: Joi.string().required(),
  delivery_pincode: Joi.string().required(),
  weight: Joi.number().required(),
  payment_mode: Joi.string().valid("prepaid", "cod").optional(),
}).unknown(true);