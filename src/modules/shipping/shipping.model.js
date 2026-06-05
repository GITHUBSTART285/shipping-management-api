
import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      unique: true,
      required: true,
    },

    customer: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String },
    },

    pickup_address: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },

    delivery_address: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },

    // ✅ ONLY INPUT DATA
    package_details: {
      weight: { type: Number, required: true },
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },

      // ✅ CALCULATED (backend will fill)
      volumetric_weight: { type: Number, default: 0 },
      chargeable_weight: { type: Number, default: 0 },
    },

    order_value: {
      type: Number,
      default: 0,
    },

    payment_mode: {
      type: String,
      enum: ["prepaid", "cod"],
      required: true,
    },

    courier: {
      courier_id: String,
      courier_name: String,
      service_type: {
        type: String,
        enum: ["surface", "air", "express"],
      },
    },

    shipping_cost: {
      base_charge: { type: Number, default: 0 },
      cod_charge: { type: Number, default: 0 },
      fuel_charge: { type: Number, default: 0 },
      tax: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
    },

    shipment_status: {
      type: String,
      enum: ["pending", "calculated", "booked", "picked", "in_transit", "delivered", "cancelled"],
      default: "pending",
    },

    estimated_delivery_days: {
      type: Number,
      default: 0,
    },

    tracking: {
      awb_number: { type: String },
      tracking_url: { type: String },
    },

    meta: {
      source: String,
      ip_address: String,
      created_by: String,
    },
  },
  {
    timestamps: true,
  }
);

// indexes
// shippingSchema.index({ order_id: 1 });
shippingSchema.index({ shipment_status: 1 });
shippingSchema.index({
  "pickup_address.pincode": 1,
  "delivery_address.pincode": 1,
});


export default mongoose.model("Shipping", shippingSchema);