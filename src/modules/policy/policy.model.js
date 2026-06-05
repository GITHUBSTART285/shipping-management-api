import mongoose from "mongoose";

const policySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["terms", "privacy"],
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      default: "",
    },

    pdfUrl: {
      type: String,
      default: null,
      trim: true,
    },

    pdfPublicId: {
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

export default mongoose.model("Policy", policySchema);