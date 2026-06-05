import Feature from "./feature.model.js";

// export const createFeatureService = async (
//   data
// ) => {
//   const existingFeature =
//     await Feature.findOne({
//       slug: data.slug,
//     });

//   if (existingFeature) {
//     throw new Error(
//       "Feature slug already exists"
//     );
//   }

//   return await Feature.create(data);
// };





export const createFeatureService = async (data) => {
  return await Feature.create(data);
};

//  gett all


export const getAllFeaturesService = async () => {
  const features = await Feature.find()
    .sort({ createdAt: -1 })
    .lean();

  return features;
};


// // get by slug .
// export const getFeatureBySlugService = async (slug) => {
//   const feature = await Feature.findOne({ slug });

//   return feature;
// };

// update  by id
export const updateFeatureService = async (id, updateData) => {
  return await Feature.findByIdAndUpdate(id, updateData, 
    { new: true, runValidators: true });
};
// delte by id

export const deleteFeatureService = async (id) => {
  return await Feature.findByIdAndDelete(id);
};