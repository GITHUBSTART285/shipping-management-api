import Help from "./help.model.js";

export const createHelpService = async (payload) => {
  return await Help.create(payload);
};

export const getHelpService = async () => {
  return await Help.find();
};