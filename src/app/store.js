import { configureStore } from "@reduxjs/toolkit";
import {
  cartReducer,
  categoryReducer,
  courseReducer,
  menuItemReducer,
  modalReducer,
  orderReducer,
  pageReducer,
  userReducer,
} from "../features";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    page: pageReducer,
    category: categoryReducer,
    menuItems: menuItemReducer,
    cart: cartReducer,
    orders: orderReducer,
    courses: courseReducer,
  },
});

export default store;
