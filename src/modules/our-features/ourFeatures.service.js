import OurFeatures from "./ourFeatures.model.js";

export const createOurFeatureService = async (payload) => {
  return await OurFeatures.create(payload);
};

export const getOurFeaturesService = async () => {
  return await OurFeatures.find();
};