import { Route } from "react-router-dom";

import { adminAccessApps } from "../datasets";

function AdminRoutes() {
  return adminAccessApps.map(({ component: Component, ...app }) => (
    <Route key={app.label} path={app.path} element={<Component />} />
  ));
}

export default AdminRoutes;
