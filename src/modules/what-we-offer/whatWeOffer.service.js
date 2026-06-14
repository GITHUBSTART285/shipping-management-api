import WhatWeOffer from "./whatWeOffer.model.js";

export const createWhatWeOfferService = async (
  data
) => {
  return await WhatWeOffer.create(data);
};


// get all


export const getAllWhatWeOfferService = async () => {
  return await WhatWeOffer.find()
    .sort({ createdAt: -1 })
    .lean();
};