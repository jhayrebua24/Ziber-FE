import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponse } from "common/types";
import api from "utils/api";

import { ModuleType } from "./types";

export const useGetModules = (): [ModuleType[], boolean] => {
  const { data, isLoading } = useQuery(["MODULES"], async () => {
    try {
      const { data }: AxiosResponse<ApiResponse<ModuleType[]>> = await api.get(
        "/modules",
      );
      return data.data;
    } catch (_e) {
      return [];
    }
  });
  return [data ?? [], isLoading];
};
