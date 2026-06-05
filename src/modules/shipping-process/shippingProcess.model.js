import mongoose from "mongoose";

const shippingProcessSchema = new mongoose.Schema(
  {
    video: {
      type: String,
      required: true,
    },

    steps: [
      {
        stepNumber: {
          type: Number,
          required: true,
        },

        title: {
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
  "ShippingProcess",
  shippingProcessSchema
); 