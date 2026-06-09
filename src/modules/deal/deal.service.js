import Deal from "./deal.model.js";

export const createDealService = async (data) => {
  return await Deal.create(data);
};

export const getDealService = async () => {
  return await Deal.find().sort({ createdAt: -1 });
};