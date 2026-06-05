import FeatureBanner from "./featureBanner.model.js";

export const getFeatureBannerService = async () => {
  return await FeatureBanner.findOne().lean();
};

export const updateFeatureBannerService = async (data) => {
  return await FeatureBanner.findOneAndUpdate(
    {},
    data,
    {
      new: true,
      upsert: true,
      runValidators: true,
    }
  );
};