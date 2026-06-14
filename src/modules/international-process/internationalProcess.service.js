import InternationalProcess from "./internationalProcess.model.js";

export const createInternationalProcessService = async (
  data
) => {
  return await InternationalProcess.create(data);
};

// get all


export const getAllInternationalProcessesService = async () => {
  return await InternationalProcess.find()
    .sort({ stepNumber: 1 })
    .lean();
};