import asyncHandler from "express-async-handler";
import {
  createSegmentService,
  getAllSegmentService,
  getSegmentBySlugService,
} from "./segment.service.js";

export const createSegment = asyncHandler(async (req, res) => {
  const segment = await createSegmentService(req.body);

  res.status(201).json({
    success: true,
    data: segment,
  });
});

export const getAllSegments = asyncHandler(async (req, res) => {
  const data = await getAllSegmentService();

  res.status(200).json({
    success: true,
    data,
  });
});

export const getSegmentBySlug = asyncHandler(async (req, res) => {
  const data = await getSegmentBySlugService(req.params.slug);

  res.status(200).json({
    success: true,
    data,
  });
});