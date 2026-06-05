import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    items: [
      {
        productId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        totalPrice: {
          type: Number,
          default: 0,
        },
      },
    ],

    pricing: {
      subtotal: { type: Number, default: 0 },
      shippingCharges: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      totalAmount: { type: Number, required: true },
      currency: { type: String, default: "INR" },
    },

    address: {
      fullName: String,
      phone: String,
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: { type: String, default: "India" },
    },

    payment: {
      method: {
        type: String,
        enum: ["COD", "ONLINE"],
        required: true,
      },
      status: {
        type: String,
        enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
        default: "PENDING",
      },
      transactionId: String,
    },

    status: {
      type: String,
      enum: [
        "CREATED",
        "CONFIRMED",
        "PACKED",
        "SHIPPED",
        "OUT_FOR_DELIVERY",
        "DELIVERED",
        "CANCELLED",
      ],
      default: "CREATED",
      index: true,
    },

    tracking: {
      trackingId: { type: String, index: true },
      courierPartner: String,
      trackingUrl: String,
    },

    timeline: [
      {
        status: String,
        note: String,
        updatedBy: { type: String, default: "system" },
        updatedAt: { type: Date, default: Date.now },
      },
    ],

    couponCode: String,

    isDeleted: {
      type: Boolean,
      default: false,
    },

    deletedAt: Date,
  },
  { timestamps: true }
);
export default orderSchema;