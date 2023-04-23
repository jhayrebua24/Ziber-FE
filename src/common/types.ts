export type AnyObject = Record<string, any>;

export interface ApiResponse<T = AnyObject> {
  data: T;
  message?: string;
}
