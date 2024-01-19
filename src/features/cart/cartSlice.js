import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Load cart items from localStorage
const loadCartItems = () => {
  try {
    const serializedCartItems = localStorage.getItem("pizza-magic-cart-items");
    if (serializedCartItems === null) {
      return [];
    }
    return JSON.parse(serializedCartItems);
  } catch (err) {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartItems(),
  },
  reducers: {
    // ... existing reducers remain the same
    addItemToCart: (state, action) => {
      state.items.push({ product_id: action.payload, quantity: 1 });
      localStorage.setItem(
        "pizza-magic-cart-items",
        JSON.stringify(state.items)
      );
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload
      );
      localStorage.setItem(
        "pizza-magic-cart-items",
        JSON.stringify(state.items)
      );
    },
    addExtraToMenuItem: (state, action) => {
      const { menuItemId, extras } = action.payload;

      if (state.items.length === 0) {
        return state;
      }

      const menuItemIndex = state.items.findIndex(
        (item) => item.product_id === menuItemId
      );

      if (menuItemIndex === -1) {
        return state;
      }

      const menuItemInCart = state.items[menuItemIndex];

      if (!menuItemInCart.extras) {
        menuItemInCart.extras = [];
      }

      const existingExtras = menuItemInCart?.extras;
      // Filter out the extras that are already in the cart
      const newExtras = extras.filter(
        (extra) =>
          !existingExtras.some(
            (existingExtra) => existingExtra.name === extra.name
          )
      );

      menuItemInCart.extras.push(...newExtras);

      localStorage.setItem(
        "pizza-magic-cart-items",
        JSON.stringify(state.items)
      );
      toast.success("Extras ajoutés à votre pizza avec succès.");
    },
    increaseItemQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.product_id === action.payload
      );
      if (item) {
        item.quantity += 1;
        localStorage.setItem(
          "pizza-magic-cart-items",
          JSON.stringify(state.items)
        );
      }
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.product_id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem(
          "pizza-magic-cart-items",
          JSON.stringify(state.items)
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem(
        "pizza-magic-cart-items",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  addExtraToMenuItem,
} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCart = (state) => state.cart;
