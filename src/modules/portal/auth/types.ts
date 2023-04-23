export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type LoginHook = [(payload: LoginPayload) => Promise<any>, boolean, string];

export interface UserProfile {
  id: number;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  position: null | string;
  organization: {
    name: string;
  };
  role: {
    role: string;
  };
  users_modules: number[];
}
