import mongoose from "mongoose";

const whatWeOfferSchema = new mongoose.Schema(
  {
    sectionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    sectionDescription: {
      type: String,
      required: true,
      trim: true,
    },

    value: {
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
  "WhatWeOffer",
  whatWeOfferSchema
);