import InternationalServiceFeature from "./internationalServiceFeature.model.js";

export const createInternationalServiceFeatureService = async (
  data
) => {
  return await InternationalServiceFeature.create(data);
};

// get all

export const getAllInternationalServiceFeaturesService = async () => {
  return await InternationalServiceFeature.find()
    .sort({ createdAt: -1 })
    .lean();
};