import { useQuery } from "@tanstack/react-query";
import { UserProfile } from "apps/portal/auth/types";
import { AxiosResponse } from "axios";
import { ApiResponse } from "common/types";
import api from "utils/api";

export const useGetUsers = (): [UserProfile[], boolean] => {
  const { data, isLoading } = useQuery(["MODULES"], async () => {
    try {
      const { data }: AxiosResponse<ApiResponse<UserProfile[]>> = await api.get("/users");
      return data.data;
    } catch (_e) {
      return [];
    }
  });
  return [data ?? [], isLoading];
};
