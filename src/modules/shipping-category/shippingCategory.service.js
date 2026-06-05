import ShippingCategory from "./shippingCategory.model.js";

export const createShippingCategoryService = async (
  body,
  files
) => {
  const categories = JSON.parse(body.categories);

  const backgroundImage =
    files.backgroundImage[0].path;

  const finalCategories = categories.map(
    (category, index) => ({
      title: category.title,
      description: category.description,
      image: files.images[index]?.path,
    })
  );

  return await ShippingCategory.create({
    backgroundImage,
    categories: finalCategories,
  });
};

export const getAllShippingCategoryService =
  async () => {
    return await ShippingCategory.find();
  };