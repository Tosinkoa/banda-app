import { createSlice } from "@reduxjs/toolkit";

const apartmentSlice = createSlice({
  name: "apartment",
  initialState: { apartments_id: [] },
  reducers: {
    getApartmentID: (state, action) => {
      const apartmentID = action.payload;
      if (!state.apartments_id.includes(apartmentID)) {
        state.apartments_id.push(apartmentID);
      }
    },
  },
});

export const apartmentActions = apartmentSlice.actions;
export default apartmentSlice;
