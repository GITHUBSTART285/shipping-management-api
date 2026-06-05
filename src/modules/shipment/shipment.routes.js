import express from "express";
import { getShipmentTypes } from"../../modules/shipment/shipment.controller.js";

const router = express.Router();

router.get("/", getShipmentTypes);

export default router;