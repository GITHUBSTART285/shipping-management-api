import mongoose from "mongoose";

const internationalBannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      default: "",
      trim: true,
    },

    imageUrl: {
      type: String,
      default: null,
      trim: true,
    },

    imagePublicId: {
      type: String,
      default: null,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "InternationalBanner",
  internationalBannerSchema
);