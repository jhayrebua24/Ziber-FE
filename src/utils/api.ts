import axios, {
  AxiosError,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";
import { openToast } from "common/components/toast/index.";
import { AnyObject } from "common/types";

import supabase from "./supabase";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (props: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const { data } = await supabase.auth.getSession();
    const { headers } = props;

    return {
      ...props,
      headers: {
        ...headers,
        Authorization: data.session ? `Bearer ${data.session?.access_token}` : "",
      } as AxiosRequestHeaders,
    };
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // handle error here
    let message = "Failed to connect to web service!";
    if (error?.response) {
      try {
        const {
          response: { status, data },
        } = error;

        const errorMessage = (data as AnyObject)?.message;

        if (status === 401) message = errorMessage || "Unauthorized";
        if (status === 400) message = errorMessage || "Bad Request";
        if (status === 404) message = errorMessage || "Invalid route";
        if (status === 405) message = errorMessage || "Request is not supported";
        if (status === 500) {
          message = "Something wrong with the server!";
        }
        if (status === 422) {
          message =
            Array.isArray(errorMessage) && errorMessage.length > 0
              ? errorMessage[0]
              : "Unprocessable request";
        }
        openToast({
          message,
          type: "error",
          title: "Error",
        });
      } catch {
        openToast({
          message,
          type: "error",
          title: "Error",
        });
      }
    } else {
      openToast({
        message,
        type: "error",
        title: "Error",
      });
    }
    console.log(message);
    return await Promise.reject(error);
  },
);

export default api;
