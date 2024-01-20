import { configureStore } from "@reduxjs/toolkit";
import { fetcherApi } from "./fectherApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import apartmentSlice from "./slices/apartments-slice";

const store = configureStore({
  reducer: {
    [fetcherApi.reducerPath]: fetcherApi.reducer,
    apartment: apartmentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetcherApi.middleware),
});
setupListeners(store.dispatch);

export default store;