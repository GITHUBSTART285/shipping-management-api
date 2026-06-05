export const validateOrder = (data) => {
  const errors = [];

  // 👤 USER CHECK
  if (!data.userId) {
    errors.push("userId is required");
  }

  // ITEMS CHECK
  if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
    errors.push("items are required");
  } else {
    data.items.forEach((item, index) => {
      if (!item.productId) {
        errors.push(`items[${index}].productId is required`);
      }

      if (!item.name) {
        errors.push(`items[${index}].name is required`);
      }

      if (!item.quantity || item.quantity < 1) {
        errors.push(`items[${index}].quantity must be >= 1`);
      }

      if (item.price == null || item.price < 0) {
        errors.push(`items[${index}].price must be valid`);
      }
    });
  }

  // 💳 PAYMENT CHECK
  if (!data.payment || !data.payment.method) {
    errors.push("payment method is required (COD or ONLINE)");
  } else {
    const allowed = ["COD", "ONLINE"];
    if (!allowed.includes(data.payment.method)) {
      errors.push("payment method must be COD or ONLINE");
    }
  }

  // 📍 ADDRESS CHECK (basic)
  if (data.address?.phone && data.address.phone.length !== 10) {
    errors.push("phone number must be 10 digits");
  }

  if (data.address?.pincode && data.address.pincode.length !== 6) {
    errors.push("pincode must be 6 digits");
  }

  return errors;
};