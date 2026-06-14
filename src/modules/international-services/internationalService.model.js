import mongoose from "mongoose";

const internationalServiceSchema = new mongoose.Schema(
  {
      sectionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    sectionSubTitle: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    imageUrl: {
      type: String,
      default: null,
    },

    imagePublicId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "InternationalService",
  internationalServiceSchema
);