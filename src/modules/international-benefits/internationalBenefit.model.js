import mongoose from "mongoose";

const internationalBenefitSchema = new mongoose.Schema(
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

    category: {
      type: String,
      required: true,
      enum: ["Express", "Air", "Sea"],
    },

    points: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "InternationalBenefit",
  internationalBenefitSchema
);