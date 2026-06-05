import axios from "axios"; 
const sendSMS = async (phone, otp) => {
  try {
    const response = await axios.get(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        params: {
          authorization: process.env.FAST2SMS_API_KEY,
          route: "otp",
          variables_values: otp,
          flash: "0",
          numbers: phone.toString(), // 🔥 important
        },
      }
    );

    console.log("FAST2SMS RESPONSE:", response.data);
  } catch (error) {
    console.log("FAST2SMS ERROR:", error.response?.data || error.message);
  }
};

export default sendSMS;