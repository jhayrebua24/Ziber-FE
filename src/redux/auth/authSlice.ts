import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TAuthState {
  isAuth: boolean;
}

const initialState: TAuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export const AuthReducer = authSlice.reducer;
