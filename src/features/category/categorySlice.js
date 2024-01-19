import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

// Fetch all categories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
      return categories;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Add a new category
export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (categoryData, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "categories"));
      await setDoc(docRef, categoryData);
      return { id: docRef.id, ...categoryData };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Update a category
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "categories"), id);
      await updateDoc(docRef, categoryData);
      return { id: docRef.id, ...categoryData };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Delete a category
export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "categories"), categoryId);
      await deleteDoc(docRef);
      return categoryId;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const updatedIndex = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.categories[updatedIndex] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
        state.status = "succeeded";
      });
  },
});

export default categorySlice.reducer;
export const selectCategories = (state) => state.category;
