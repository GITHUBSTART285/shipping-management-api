import asyncHandler from "express-async-handler";
import {
  createAppointmentService,
  getAppointmentService,
} from "./appointment.service.js";

export const createAppointment = asyncHandler(async (req, res) => {
  const { title, description, videoUrl } = req.body;

  if (!title || !description || !videoUrl) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",   
    });
  }

  const appointment = await createAppointmentService({
    title,
    description,
    videoUrl,
  });

  res.status(201).json({
    success: true,
    data: appointment,
  });
});

export const getAppointment = asyncHandler(async (req, res) => {
  const appointments = await getAppointmentService();

  res.status(200).json({
    success: true,
    data: appointments,
  });
}); 