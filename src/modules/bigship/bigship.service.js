import Bigship from "./bigship.model.js";

export const createBigshipService = async (data) => {
  return await Bigship.create(data);
};

export const getBigshipService = async () => {
  return await Bigship.find();
};