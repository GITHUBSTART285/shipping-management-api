import {
  createContactService,
  getContactsService,
} from "./contact.service.js";

export const createContact = async (req, res) => {
  try {
    const result = await createContactService(req.body);

    res.status(201).json({
      success: true,
      message: "Contact details submitted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const result = await getContactsService();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};