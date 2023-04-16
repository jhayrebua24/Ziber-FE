import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "modules/auth/redux/authSlice";
import supabase from "utils/supabase";

const useCheckAuth = (): boolean => {
  const dispatch = useDispatch();
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    const checkIfAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setAppReady(true);
      if (data) {
        dispatch(setAuth(true));
      }
    };

    checkIfAuth();
  }, []);

  return isAppReady;
};

export default useCheckAuth;
