import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import detailReducer from "./detailSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
