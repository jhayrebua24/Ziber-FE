import { configureStore } from "@reduxjs/toolkit";

import { AuthReducer, authSlice } from "../modules/auth/redux/authSlice";

const store = configureStore({
  reducer: {
    [authSlice.name]: AuthReducer,
  },
  devTools: !import.meta.env.PROD,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

export default store;
