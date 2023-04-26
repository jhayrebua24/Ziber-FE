import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { AnyObject, ApiResponse } from "common/types";
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

export const useCreateEditOrganizations = (): [
  (payload: AnyObject) => Promise<any>,
  boolean,
] => {
  const client = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(
    ["ORGANIZATIONS"],
    async (payload: AnyObject) => {
      try {
        await api.post("/organizations", payload);
        client.invalidateQueries(["ORGANIZATIONS"]);
      } catch (e) {
        throw new Error();
      }
    },
  );
  return [mutateAsync, isLoading];
};
