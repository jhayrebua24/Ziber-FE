import { useState } from "react";
import { useDispatch } from "react-redux";
import useFetchProfile from "hooks/useFetchProfile";
import supabase from "utils/supabase";

import { setAuth } from "./redux/authSlice";
import { LoginHook, LoginPayload } from "./types";

export const useLogin = (): LoginHook => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const fetchProfile = useFetchProfile();
  const [error, setError] = useState("");

  const login = async (payload: LoginPayload) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword(payload);
      if (error) throw new Error(error.message);
      await fetchProfile();
      dispatch(setAuth(true));
    } catch (e) {
      setError((e as Record<string, string>)?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [login, isLoading, error];
};
