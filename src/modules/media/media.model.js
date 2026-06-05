import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    public_id: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },

    size: {
      type: Number, // bytes
      default: 0,
    },

    format: {
      type: String, // jpg, png, mp4
    },

    original_name: {
      type: String,
    },

    uploaded_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt auto
  }
);

const Media = mongoose.model("Media", mediaSchema);

export default Media;