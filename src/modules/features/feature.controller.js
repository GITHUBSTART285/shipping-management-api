
import {
  createFeatureService,
   getAllFeaturesService,
  //  getFeatureBySlugService,,
   updateFeatureService,
   deleteFeatureService
} from "./feature.service.js";

import {
  createFeatureValidation,
} from "./feature.validation.js";

export const createFeature = async (
  req,
  res
) => {
  try {

    console.log("CONTENT TYPE =>", req.headers["content-type"]);
    console.log("BODY =>", req.body);
    const { error } =
      createFeatureValidation.validate(
        req.body
      );

    if (error) {
      return res.status(400).json({
        success: false,
        message:
          error.details[0].message,
      });
    }

    // if (!req.file) {
    //   return res.status(400).json({
    //     success: false,
    //     message:
    //       "Feature image is required",
    //   });
    // }

    const feature =
      await createFeatureService({
        title: req.body.title,
        //slug: req.body.slug,
        content: req.body.content,
        // description: req.body.hoverDescription,
        // //imageUrl:
         // req.file.path,

      //  // imagePublicId:
      //     req.file.filename,
       });

    return res.status(201).json({
      success: true,
      message:
        "Feature created successfully",
      data: feature,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all


export const getAllFeatures = async (req, res) => {
  try {
    const features = await getAllFeaturesService();

    return res.status(200).json({
      success: true,
      message: "Features fetched successfully",
      count: features.length,
      data: features,
    });

  } catch (error) {
    console.log("GET ALL FEATURES ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch features",
      error: error.message,
    });
  }
};

// get by slug 


// export const getFeatureBySlug = async (req, res) => {
//   try {
//     const { slug } = req.params;

//     const feature = await getFeatureBySlugService(slug);

//     if (!feature) {
//       return res.status(404).json({
//         success: false,
//         message: "Feature not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: feature,
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// update by id

export const updateFeature = async (req, res) => {
  try {
    const feature = await updateFeatureService(req.params.id, req.body);

    if (!feature) {
      return res.status(404).json({
        success: false,
        message: "Feature not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Feature updated successfully",
      data: feature,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delte by id
export const deleteFeature = async (req, res) => {
  try {
    const feature = await deleteFeatureService(req.params.id);

    if (!feature) {
      return res.status(404).json({
        success: false,
        message: "Feature not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Feature deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};