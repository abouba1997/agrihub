import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import {
  closeProductCreate,
  closeProductDelete,
  closeProductUpdate,
} from "../modal/modalSlice";

const initialState = {
  menuItems: [],
  status: "idle",
  error: null,
};

// Fetch all menu items
export const fetchMenuItems = createAsyncThunk(
  "menuItems/fetchMenuItems",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "menuItems"));
      const menuItems = [];
      querySnapshot.forEach((doc) => {
        menuItems.push({ id: doc.id, ...doc.data() });
      });
      return menuItems;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Add a new menuItem
export const addMenuItem = createAsyncThunk(
  "menuItems/addMenuItem",
  async (
    { productName, category, productPrice, description, productImage },
    { dispatch, rejectWithValue }
  ) => {
    try {
      let downloadURL = null;
      if (productImage) {
        const storageRef = ref(
          storage,
          `menu_items_images/${productImage.name + uuidv4()}`
        );

        const snapshot = await uploadBytes(storageRef, productImage);
        downloadURL = await getDownloadURL(snapshot.ref);
      }

      const docRef = doc(collection(db, "menuItems"));
      await setDoc(
        docRef,
        {
          productName,
          category,
          productPrice,
          description,
          productImage: downloadURL,
        },
        { merge: true }
      );

      // Retrieve created menu item
      const createdDocSnapshot = await getDoc(docRef);
      const createdMenuItemData = createdDocSnapshot.data();
      dispatch(closeProductCreate());
      return { id: docRef.id, ...createdMenuItemData };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Update a menuItem
export const updateMenuItem = createAsyncThunk(
  "menuItems/updateMenuItem",
  async ({ id, menuItemData }, { dispatch, rejectWithValue }) => {
    try {
      let downloadURL = menuItemData?.productImage;

      if (menuItemData?.productImageUpdate) {
        const storageRef = ref(
          storage,
          `menu_items_images/${
            menuItemData?.productImageUpdate.name + uuidv4()
          }`
        );

        // Delete the existing image if it exists
        if (downloadURL) {
          const existingImageRef = ref(storage, downloadURL);
          await deleteObject(existingImageRef);
        }

        const snapshot = await uploadBytes(
          storageRef,
          menuItemData?.productImageUpdate
        );
        downloadURL = await getDownloadURL(snapshot.ref);
      }

      const docRef = doc(collection(db, "menuItems"), id);

      const newProductImage = menuItemData?.productImageUpdate
        ? downloadURL
        : menuItemData?.productImage;

      const { productName, category, productPrice, description } = menuItemData;

      await updateDoc(docRef, {
        productName,
        category,
        productPrice,
        description,
        productImage: newProductImage,
      });

      // Retrieve updated menu item
      const updatedDocSnapshot = await getDoc(docRef);
      const updatedMenuItemData = updatedDocSnapshot.data();
      dispatch(closeProductUpdate());
      return { id: docRef.id, ...updatedMenuItemData };
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

// Delete a MenuItems
export const deleteMenuItem = createAsyncThunk(
  "menuItems/deleteMenuItem",
  async (menuItemId, { dispatch, rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "menuItems"), menuItemId);
      await deleteDoc(docRef);
      dispatch(closeProductDelete());
      return menuItemId;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const menuItemSlice = createSlice({
  name: "MenuItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.menuItems = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addMenuItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMenuItem.fulfilled, (state, action) => {
        state.menuItems.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addMenuItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateMenuItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        const updatedIndex = state.menuItems.findIndex(
          (MenuItems) => MenuItems.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.menuItems[updatedIndex] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateMenuItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteMenuItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        state.menuItems = state.menuItems.filter(
          (menuItem) => menuItem.id !== action.payload
        );
        state.status = "succeeded";
      })
      .addCase(deleteMenuItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default menuItemSlice.reducer;
export const selectMenuItems = (state) => state.menuItems;
