import { ReactNode, useMemo } from "react";
import { Route } from "react-router-dom";
import useGetProfile from "hooks/useGetProfile";

import { adminAccessApps } from "./datasets";

export const useGetAccessRoutes = (): ReactNode => {
  const profile = useGetProfile();
  const role = useMemo(() => profile?.role.role, [profile]);

  const accessRoutes = useMemo(() => {
    const routes: JSX.Element[] = [];
    if (role === "super_admin") {
      routes.push(
        ...adminAccessApps.map(({ component: Component, ...app }) => (
          <Route key={app.label} path={app.path} element={<Component />} />
        )),
      );
    }

    return routes;
  }, [role]);

  return accessRoutes;
};
