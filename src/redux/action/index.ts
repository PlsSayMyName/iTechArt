// Add item to cart
export const addCart = (product) => ({
  type: "ADDITEM",
  payload: product,
});

// For delete item from cart
export const delCart = (product) => ({
  type: "DELITEM",
  payload: product,
});
