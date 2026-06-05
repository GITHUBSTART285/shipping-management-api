import bcrypt from "bcrypt";
import User from "./auth.model.js";
import jwt from "jsonwebtoken";
import sendSMS from "../../services/sendSMS.js";

export const registerService = async (data) => {
     console.log("REGISTER BODY =>", data);
  const { email, phone, password, first_name, last_name, shipment_types } =
    data;

  // Check if user exists
  const exists = await User.findOne({
    $or: [{ email }, { phone }],
  });

  if (exists) {
    throw new Error("User already exists");
  }
console.log("REGISTER BODY =>", data);
  // Hash password
  const hash = await bcrypt.hash(password, 10);
console.log("HASH CREATED");
  // Create user
  const user = await User.create({
    first_name,
    last_name,
    email,
    phone,
    password: hash,
    shipment_types,
  });

  return user;
};

//  login



export const loginService = async (data) => {

  const { email, password } = data;

  // FIND REGISTERED USER
  const user = await User.findOne({
    email
  }).select("+password");

  // CHECK USER
  if (!user) {
    throw new Error("Registered email not found");
  }

  // CHECK PASSWORD
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  // GENERATE TOKEN
  const token = jwt.sign(

    {
      id: user._id,
      role: user.role
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "7d"
    }

  );

  // REMOVE PASSWORD
  user.password = undefined;

  return {
    user,
    token
  };

};

// forggot 


export const sendOtpService = async (phone) => {

  const user = await User.findOne({ phone });
 console.log("PHONE:", phone);

  if (!user) {
    throw new Error("User not found");
  }

  const otp = Math.floor(
    100000 + Math.random() * 900000
  ).toString();
  user.otp = otp;
console.log("OTP GENERATED:", otp);
  user.otp_expiry = Date.now() + 5 * 60 * 1000;

  user.is_otp_verified = false;

  await user.save();

await sendSMS(phone, otp);

return otp;
};


// veryfy otp
export const verifyOtpService = async (
  phone,
  otp
) => {

  const user = await User.findOne({ phone });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (user.otp_expiry < Date.now()) {
    throw new Error("OTP Expired");
  }

  user.is_otp_verified = true;

  await user.save();

  return true;
};

export const resetPasswordService = async (
  phone,
  newPassword
) => {

  const user = await User.findOne({ phone }).select("+password");

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.is_otp_verified) {
    throw new Error("OTP not verified");
  }

  const hashedPassword = await bcrypt.hash(
    newPassword,
    10
  );

  user.password = hashedPassword;

  user.otp = null;

  user.otp_expiry = null;

  user.is_otp_verified = false;

  await user.save();

  return true;
};

export default sendSMS;