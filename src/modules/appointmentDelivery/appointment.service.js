import Appointment from "./appointment.model.js";

export const createAppointmentService = async (data) => {
  return await Appointment.create(data);
};

export const getAppointmentService = async () => {
  return await Appointment.find();
};