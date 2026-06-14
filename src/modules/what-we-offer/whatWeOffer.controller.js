import {
  createWhatWeOfferService,getAllWhatWeOfferService
} from "./whatWeOffer.service.js";

import {
  createWhatWeOfferValidation,
} from "./whatWeOffer.validation.js";

export const createWhatWeOffer = async (
  req,
  res
) => {
  try {
    const { error } =
      createWhatWeOfferValidation.validate(
        req.body
      );

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const offer =
      await createWhatWeOfferService({
        sectionTitle: req.body.sectionTitle,
        sectionDescription:
          req.body.sectionDescription,
        value: req.body.value,
        description: req.body.description,
        imageUrl: req.file.path,
        imagePublicId: req.file.filename,
      });

    return res.status(201).json({
      success: true,
      message:
        "What we offer created successfully",
      data: offer,
    });

  } catch (error) {
    console.error(
      "CREATE WHAT WE OFFER ERROR =>",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all.

export const getAllWhatWeOffer = async (
  req,
  res
) => {
  try {
    const offers =
      await getAllWhatWeOfferService();

    return res.status(200).json({
      success: true,
      message:
        "What we offer data fetched successfully",
      count: offers.length,
      data: offers,
    });

  } catch (error) {
    console.error(
      "GET WHAT WE OFFER ERROR =>",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch what we offer data",
      error: error.message,
    });
  }
};