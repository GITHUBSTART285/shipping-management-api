import Contact from "./contact.model.js";

export const createContactService = async (payload) => {
  return await Contact.create(payload);
};

export const getContactsService = async () => {
  return await Contact.find();
};