import { createSlice } from "@reduxjs/toolkit";

let cart: any[] = [];

if (typeof window !== "undefined") {
  const cartData = localStorage.getItem("cart");
  cart = cartData ? JSON.parse(cartData) : [];
}

const initialState = {
  cart,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.cart.push(newItem);
      state.totalQuantity += 1;
      
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    

    clearCart(state) {
      state.cart = [];
      // Clear localStorage
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addItem,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;





export default cartSlice;
