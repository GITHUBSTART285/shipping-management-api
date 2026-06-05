import mongoose from "mongoose";

const authSchema = new mongoose.Schema(

  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },

    last_name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^[6-9]\d{9}$/, "Invalid mobile number"],
    },

    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6,
    },

    shipment_types: {
      type: [String],
      enum: [
        "domestic",
        "hyperlocal",
        "cross-border"
      ],
      default: ["domestic"],
    },

    is_active: {
      type: Boolean,
      default: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    otp: {
      type: String,
      default: null,
    },

    otp_expiry: {
      type: Date,
      default: null,
    },

    is_otp_verified: {
      type: Boolean,
      default: false,
    },

  },

  {
    timestamps: true,
    versionKey: false,
  }

);

const User = mongoose.model(
  "User",
  authSchema
);

export default User;