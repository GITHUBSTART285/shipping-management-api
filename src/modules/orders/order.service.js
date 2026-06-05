import Order from "./order.model.js";

export const createOrder = async (data) => {
  let subtotal = 0;

  //calculate items total
  data.items.forEach((item) => {
    item.totalPrice = item.quantity * item.price;
    subtotal += item.totalPrice;
  });

  // ensure pricing exists
  if (!data.pricing) data.pricing = {};

  data.pricing.subtotal = subtotal;

  data.pricing.totalAmount =
    subtotal +
    (data.pricing.shippingCharges || 0) -
    (data.pricing.discount || 0);

  // 🚚 default status
  data.status = "CREATED";

  // 📊 timeline init
  data.timeline = [
    {
      status: "CREATED",
      note: "Order created successfully",
      updatedBy: "system",
      updatedAt: new Date(),
    },
  ];

  //save order
  const order = await Order.create(data);

  return order;
};