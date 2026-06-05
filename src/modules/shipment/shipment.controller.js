import { getShipmentTypesService } from "./shipment.service.js";

export const getShipmentTypes = async (req, res) => {
  try {
    const result = await getShipmentTypesService();

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.log("SHIPMENT TYPES ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};