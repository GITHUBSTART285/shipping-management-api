import Banner from "./banner.model.js";

export const createBannerService = async (payload) => {
  return await Banner.create(payload);
};

export const getBannerService = async () => {
  return await Banner.find();
};