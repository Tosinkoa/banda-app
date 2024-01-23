import { createSlice } from "@reduxjs/toolkit";

const localStorageDataSlice = createSlice({
  name: "localStorageData",
  initialState: {
    isAddingCartToLocalStorage: false,
    isAddingWishlistToLocalStorage: false,
  },
  reducers: {
    addedCartToLocalStorage: (state, action) => {
      state.isAddingCartToLocalStorage = action.payload;
    },
    addedWishlistToLocalStorage: (state, action) => {
      state.isAddingWishlistToLocalStorage = action.payload;
    },
  },
});

export const localStorageDataActions = localStorageDataSlice.actions;
export default localStorageDataSlice;
