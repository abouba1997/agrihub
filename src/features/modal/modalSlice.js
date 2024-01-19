import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchModalOpen: false,
  isLoginModalOpen: false,
  isMobileMenuOpen: false,
  isUserMenuModalOpen: false,
  isProductPreviewOpen: false,
  isProductCreateOpen: false,
  isProductUpdateOpen: false,
  isProductDeleteOpen: false,
  isProductItemPreviewOpen: false,
  isCartPageOpen: false,
  selectedProduct: null,
  isCategoryCreateOrUpdateOpen: false,
  isCategoryDeleteOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSearchModal: (state) => {
      state.isSearchModalOpen = true;
    },
    closeSearchModal: (state) => {
      state.isSearchModalOpen = false;
    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    openUserMenuModal: (state) => {
      state.isUserMenuModalOpen = true;
    },
    closeUserMenuModal: (state) => {
      state.isUserMenuModalOpen = false;
    },
    openProductPreview: (state, actions) => {
      state.isProductPreviewOpen = true;
      state.selectedProduct = actions.payload;
    },
    closeProductPreview: (state) => {
      state.isProductPreviewOpen = false;
      state.selectedProduct = null;
    },
    openProductCreate: (state) => {
      state.isProductCreateOpen = true;
    },
    closeProductCreate: (state) => {
      state.isProductCreateOpen = false;
    },
    openProductUpdate: (state, actions) => {
      state.isProductUpdateOpen = true;
      state.selectedProduct = actions.payload;
    },
    closeProductUpdate: (state) => {
      state.isProductUpdateOpen = false;
      state.selectedProduct = null;
    },
    openProductDelete: (state, actions) => {
      state.isProductDeleteOpen = true;
      state.selectedProduct = actions.payload;
    },
    closeProductDelete: (state) => {
      state.isProductDeleteOpen = false;
      state.selectedProduct = null;
    },
    openCartPage: (state) => {
      state.isCartPageOpen = true;
    },
    closeCartPage: (state) => {
      state.isCartPageOpen = false;
    },
    openCategoryCreateOrUpdate: (state) => {
      state.isCategoryCreateOrUpdateOpen = true;
    },
    closeCategoryCreateOrUpdate: (state) => {
      state.isCategoryCreateOrUpdateOpen = false;
    },
    openCategoryDelete: (state) => {
      state.isCategoryDeleteOpen = true;
    },
    closeCategoryDelete: (state) => {
      state.isCategoryDeleteOpen = false;
    },
    openProductItemPreview: (state) => {
      state.isProductItemPreviewOpen = true;
    },
    closeProductItemPreview: (state) => {
      state.isProductItemPreviewOpen = false;
    },
  },
});

export const {
  openSearchModal,
  closeSearchModal,
  openLoginModal,
  closeLoginModal,
  openMobileMenu,
  closeMobileMenu,
  openUserMenuModal,
  closeUserMenuModal,
  openProductPreview,
  closeProductPreview,
  openProductCreate,
  closeProductCreate,
  openProductUpdate,
  closeProductUpdate,
  openProductDelete,
  closeProductDelete,
  openCartPage,
  closeCartPage,
  openCategoryCreateOrUpdate,
  closeCategoryCreateOrUpdate,
  openCategoryDelete,
  closeCategoryDelete,
  openProductItemPreview,
  closeProductItemPreview,
} = modalSlice.actions;

export default modalSlice.reducer;

export const selectSearchModalOpen = (state) => state.modal.isSearchModalOpen;
export const selectLoginModalOpen = (state) => state.modal.isLoginModalOpen;
export const selectMobileMenuOpen = (state) => state.modal.isMobileMenuOpen;
export const selectUserMenuModalOpen = (state) =>
  state.modal.isUserMenuModalOpen;
export const selectProductPreviewOpen = (state) =>
  state.modal.isProductPreviewOpen;
export const selectProductCreateOpen = (state) =>
  state.modal.isProductCreateOpen;
export const selectProductUpdateOpen = (state) =>
  state.modal.isProductUpdateOpen;
export const selectProductDeleteOpen = (state) =>
  state.modal.isProductDeleteOpen;
export const selectProductItemPreview = (state) =>
  state.modal.isProductItemPreviewOpen;
export const selectModalProduct = (state) => state.modal.selectedProduct;
export const selectCartPage = (state) => state.modal.isCartPageOpen;
export const selectCategoryCreateOrUpdate = (state) =>
  state.modal.isCategoryCreateOrUpdateOpen;
export const selectCategoryDelete = (state) => state.modal.isCategoryDeleteOpen;
