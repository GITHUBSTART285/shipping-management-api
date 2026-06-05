import express from "express";
import {register,
         login,
         sendOtp,
         verifyOtp,
          resetPassword} from "./auth.controller.js";

const router = express.Router();

// Register User
router.post("/register", register);
router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);
export default router;