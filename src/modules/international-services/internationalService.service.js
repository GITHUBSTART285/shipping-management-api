import InternationalService from "./internationalService.model.js";

export const createInternationalServiceService = async (data) => {
  return await InternationalService.create(data);
};

export const getAllInternationalServicesService = async () => {
  return await InternationalService.find()
    .sort({ createdAt: -1 })
    .lean();
};