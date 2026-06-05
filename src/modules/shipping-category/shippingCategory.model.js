import mongoose from "mongoose";

const shippingCategorySchema = new mongoose.Schema(
  {
    backgroundImage: {
      type: String,
      required: true,
    },

    categories: [
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
  "ShippingCategory",
  shippingCategorySchema
);