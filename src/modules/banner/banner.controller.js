import {
  createBannerService,
  getBannerService,
} from "./banner.service.js";

export const createBanner = async (req, res) => {
  const data = await createBannerService(req.body);

  res.status(201).json({
    success: true,
    data,
  });
};

export const getBanner = async (req, res) => {
  const data = await getBannerService();

  res.status(200).json({
    success: true,
    data,
  });
};