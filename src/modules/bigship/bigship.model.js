import mongoose from "mongoose";

const bigshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    items: [
      {
        name: String,
        logo: String
      }
    ]
  },
  { timestamps: true }
);

const Bigship = mongoose.model("Bigship", bigshipSchema);

export default Bigship;