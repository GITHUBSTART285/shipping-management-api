import Courier from "./courier.model.js";

export const createCourierService = async (payload) => {
  return await Courier.create(payload);
};

export const getCouriersService = async () => {
  return await Courier.find();
};