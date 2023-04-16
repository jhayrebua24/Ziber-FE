export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type LoginHook = [(payload: LoginPayload) => Promise<any>, boolean, string];
