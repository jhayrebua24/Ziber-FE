import { TRootState } from 'redux/store';

export const selectIsAuth = (state: TRootState) => state.auth.isAuth;
