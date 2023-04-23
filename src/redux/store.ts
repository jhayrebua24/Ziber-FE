import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, authSlice } from "apps/portal/auth/redux/authSlice";
import { LayoutReducer, layoutSlice } from "common/components/layout/redux/layoutSlice";

const store = configureStore({
  reducer: {
    [authSlice.name]: AuthReducer,
    [layoutSlice.name]: LayoutReducer,
  },
  devTools: !import.meta.env.PROD,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

export default store;
