import InternationalSolution from "./internationalSolution.model.js";
export const createInternationalSolutionService =
  async (data) => {
    return await InternationalSolution.create(
      data
    );
  };
  // gett all
  

export const getAllInternationalSolutionsService =
  async () => {
    return await InternationalSolution.find()
      .sort({ createdAt: -1 })
      .lean();
  };