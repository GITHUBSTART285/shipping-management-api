import InternationalBenefit from "./internationalBenefit.model.js";

export const createInternationalBenefitService = async (data) => {
  return await InternationalBenefit.create(data);
};

// get al 

export const getAllInternationalBenefitsService = async () => {
  return await InternationalBenefit.find()
    .sort({ createdAt: -1 })
    .lean();
};

//put by id


export const updateInternationalBenefitService = async (
  id,
  data
) => {
  return await InternationalBenefit.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};
// delte by id
export const deleteInternationalBenefitService = async (
  id
) => {
  return await InternationalBenefit.findByIdAndDelete(
    id
  );
};