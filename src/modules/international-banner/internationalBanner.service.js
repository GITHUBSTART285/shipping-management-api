import InternationalBanner from "./internationalBanner.model.js";

export const createInternationalBannerService = async (
  data
) => {
  return await InternationalBanner.create(data);
};

// get all


export const getAllInternationalBannersService = async () => {
  return await InternationalBanner.find()
    .sort({ createdAt: -1 })
    .lean();
};