import { useMemo } from "react";
import useGetProfile from "hooks/useGetProfile";

export const useGetAccessApps = () => {
  const profile = useGetProfile();

  const role = useMemo(() => profile?.role.role, [profile]);
  const isSuperAdmin = role === "super_admin";

  console.log(isSuperAdmin);
  return [];
};
