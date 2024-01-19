import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  orders: [],
  status: "idle",
  error: null,
};

// Fetch user orders
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      return orders;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Add a new order
export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const orderRef = doc(collection(db, "orders"));
      await setDoc(orderRef, orderData, { merge: true });
      // Retrieve created order
      const createdDocSnapshot = await getDoc(orderRef);
      const createdOrderData = createdDocSnapshot.data();

      return { id: orderRef.id, ...createdOrderData };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Update an order status by an admin
export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ orderId, newStatus }, { rejectWithValue }) => {
    try {
      const orderRef = doc(collection(db, "orders"), orderId);
      await updateDoc(orderRef, { status: newStatus });
      // Retrieve updated order
      const updatedDocSnapshot = await getDoc(orderRef);
      const updatedOrderData = updatedDocSnapshot.data();
      return { id: orderId, ...updatedOrderData };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedIndex = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.orders[updatedIndex] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
export const selectOrders = (state) => state.orders;
