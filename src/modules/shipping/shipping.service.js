
import Shipping from "./shipping.model.js";
export const createShippingService = async (data) => {
  try {
    const shipping = await Shipping.create(data);
    return shipping;
  } catch (error) {
    throw error;
  }
};
console.log("Shipping Service Loaded");
// SHIPPING CALCULATION GET
export const calculateShippingChargesService = async (data) => {
  const {
    pickup_pincode,
    delivery_pincode,
    dead_weight,
    length,
    breadth,
    height,
    payment_mode,
    order_value,
  } = data;

  // 1. Base charge
  let base_charge = 40;

  // 2. Weight logic
  let weight_charge = dead_weight * 12;

  // 3. Volumetric weight (industry standard)
  let volumetric_weight = 0;

  if (length && breadth && height) {
    volumetric_weight = (length * breadth * height) / 5000;
  }

  const chargeable_weight = Math.max(dead_weight, volumetric_weight);

  // 4. Distance logic (simple pincode heuristic)
  const distance_factor =
    pickup_pincode.substring(0, 3) !== delivery_pincode.substring(0, 3)
      ? 1.8
      : 1;

  // 5. COD charge
  let cod_charge = payment_mode === "cod" ? 30 : 0;

  // 6. Fuel surcharge
  let fuel_charge = chargeable_weight * 5;

  // 7. Tax
  let sub_total =
    (base_charge + weight_charge + fuel_charge + cod_charge) *
    distance_factor;

  let tax = sub_total * 0.18;

  let total = sub_total + tax;

  return {
    base_charge,
    weight_charge,
    volumetric_weight,
    chargeable_weight,
    fuel_charge,
    cod_charge,
    tax,
    total,
  };
};