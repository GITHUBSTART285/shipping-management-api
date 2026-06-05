import mongoose from "mongoose";

const featureBannerSchema = new mongoose.Schema(
  {
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
  "FeatureBanner",
  featureBannerSchema
);