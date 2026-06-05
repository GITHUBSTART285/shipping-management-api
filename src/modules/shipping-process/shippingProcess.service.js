import ShippingProcess from "./shippingProcess.model.js";


export const createShippingProcessService = async (body, files) => {
  const steps = JSON.parse(body.steps);

  const videoUrl = files.video[0].path;

  const finalSteps = steps.map((step, index) => ({
    stepNumber: step.stepNumber,
    title: step.title,
    image: files.images[index]?.path,
  }));

  return await ShippingProcess.create({
    video: videoUrl,
    steps: finalSteps,
  });
};


//  get
export const getAllShippingProcessService = async () => {
  return await ShippingProcess.find();
};