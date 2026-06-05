import mongoose from "mongoose";

const shippingAudienceSchema = new mongoose.Schema(
  {
    video: {
      type: String,
      required: true,
    },

    tabs: [
      {
        title: {
          type: String,
          required: true,
        },

        description: {
          type: String,
          required: true,
        },

        image: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "ShippingAudience",
  shippingAudienceSchema
);