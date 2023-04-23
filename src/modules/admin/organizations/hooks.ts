import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ApiResponse } from "common/types";
import api from "utils/api";

import { OrganizationType } from "./types";

export const useGetOrganizations = (): [OrganizationType[], boolean] => {
  const { data, isLoading } = useQuery(["ORGANIZATIONS"], async () => {
    try {
      const { data }: AxiosResponse<ApiResponse<OrganizationType[]>> = await api.get(
        "/organizations",
      );
      return data.data;
    } catch (_e) {
      return [];
    }
  });
  return [data ?? [], isLoading];
};
