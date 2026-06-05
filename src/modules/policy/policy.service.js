import Policy from "./policy.model.js";



export const createPolicyService = async (data) => {
  const existingPolicy = await Policy.findOne({
    type: data.type,
  });

  if (existingPolicy) {
    throw new Error(
      `${data.type} policy already exists`
    );
  }

  return await Policy.create(data);
};


export const getTermsService = async () => {
  return await Policy.findOne({
    type: "terms",
    isActive: true,
  });
};


export const getPrivacyService = async () => {
  return await Policy.findOne({
    type: "privacy",
    isActive: true,
  });
};
export const updatePolicyService = async (
  type,
  updateData
) => {
  return await Policy.findOneAndUpdate(
    { type },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};