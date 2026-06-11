import mongoose from "mongoose";

const ourFeaturesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    features: [
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

const OurFeatures = mongoose.model("OurFeatures", ourFeaturesSchema);

export default OurFeatures;