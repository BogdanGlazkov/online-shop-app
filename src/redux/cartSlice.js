import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push({
        id: action.payload.gadget.id,
        gadgetId: action.payload.gadget.id,
        name: action.payload.gadget.name,
        quantity: action.payload.quantity,
        price: action.payload.gadget.price,
        totalPrice: action.payload.quantity * action.payload.gadget.price,
      });
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },

    updateQuantity: (state, action) => {
      const newCart = [];

      state.cartItems.forEach((item) => {
        if (item.gadgetId === action.payload.gadget.id) {
          let newQuantity = item.quantity + action.payload.quantity;
          let totalSum = item.price * newQuantity;
          const changeCart = {
            ...item,
            quantity: newQuantity,
            totalPrice: totalSum,
          };
          newCart.push(changeCart);
        } else {
          newCart.push(item);
        }
      });
      state.cartItems = newCart;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
};

export const getCartItems = (state) => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
