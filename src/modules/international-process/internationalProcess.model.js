import mongoose from "mongoose";

const internationalProcessSchema = new mongoose.Schema(
  {
    sectionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    stepNumber: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    imagePublicId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "InternationalProcess",
  internationalProcessSchema
);