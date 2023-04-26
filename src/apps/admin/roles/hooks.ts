import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponse } from "common/types";
import api from "utils/api";

import { RoleType } from "./types";

export const useGetRoles = (): [RoleType[], boolean] => {
  const { data, isLoading } = useQuery(["ROLES"], async () => {
    try {
      const { data }: AxiosResponse<ApiResponse<RoleType[]>> = await api.get("/roles");
      return data.data;
    } catch (_e) {
      return [];
    }
  });
  return [data ?? [], isLoading];
};
