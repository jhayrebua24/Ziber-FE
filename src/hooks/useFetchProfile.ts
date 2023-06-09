import { useDispatch } from "react-redux";
import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { setProfile } from "apps/portal/auth/redux/authSlice";
import { UserProfile } from "apps/portal/auth/types";
import { AxiosResponse } from "axios";
import { USER_PROFILE } from "common/constants";
import { ApiResponse } from "common/types";
import api from "utils/api";

const useFetchProfile = (): UseMutateAsyncFunction => {
  const dispatch = useDispatch();
  const { mutateAsync } = useMutation([USER_PROFILE], async () => {
    try {
      const { data }: AxiosResponse<ApiResponse<UserProfile>> = await api.get(
        "/users/profile/current",
      );
      dispatch(setProfile(data.data));
    } catch (e) {
      //
    }
  });

  return mutateAsync;
};

export default useFetchProfile;
