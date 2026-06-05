import ShippingAudience from "./shippingAudience.model.js";

export const createShippingAudienceService = async (
  body,
  files
) => {
  const tabs = JSON.parse(body.tabs);

  const videoUrl = files.video[0].path;

  const finalTabs = tabs.map((tab, index) => ({
    title: tab.title,
    description: tab.description,
    image: files.images[index]?.path,
  }));

  return await ShippingAudience.create({
    video: videoUrl,
    tabs: finalTabs,
  });
};

export const getAllShippingAudienceService = async () => {
  return await ShippingAudience.find();
};