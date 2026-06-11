import mongoose from "mongoose";

const helpSchema = new mongoose.Schema(
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Help = mongoose.model("Help", helpSchema);

export default Help;