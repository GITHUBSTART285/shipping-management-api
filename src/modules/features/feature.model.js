import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // slug: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    // },

    content: {
      type: String,
      default: "",
    },

    // description: {
    //   type: String,
    //   default: "",
    // },

    // imageUrl: {
    //   type: String,
    //   default: null,
    // },

    // imagePublicId: {
    //   type: String,
    //   default: null,
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "Feature",
  featureSchema
);