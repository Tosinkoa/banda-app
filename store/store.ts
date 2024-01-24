import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fetcherApi } from "./fectherApi";
import localStorageDataSlice from "./slices/localstorage-data";

export const store = configureStore({
  reducer: {
    [fetcherApi.reducerPath]: fetcherApi.reducer,
    localStorageData: localStorageDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetcherApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
