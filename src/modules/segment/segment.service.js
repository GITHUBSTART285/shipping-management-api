import Segment from "./segment.model.js";

export const createSegmentService = async (data) => {
  return await Segment.create(data);
};

export const getAllSegmentService = async () => {
  return await Segment.find();
};

