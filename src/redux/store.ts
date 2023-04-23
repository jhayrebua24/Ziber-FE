import { configureStore } from "@reduxjs/toolkit";
import { LayoutReducer, layoutSlice } from "common/components/layout/redux/layoutSlice";
import { AuthReducer, authSlice } from "modules/portal/auth/redux/authSlice";

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
