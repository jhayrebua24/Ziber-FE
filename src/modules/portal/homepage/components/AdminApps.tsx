import { Route, Routes } from "react-router-dom";

import { adminAccessApps } from "../datasets";

import AppTile from "./AppTile";

function AdminApps() {
  return (
    <div className="w-full mt-12">
      <h4 className="text-gray-500 font-normal text-2xl">Admin</h4>
      <div className="grid grid-cols-8 gap-x-4">
        {adminAccessApps.map((app) => (
          <AppTile key={app.label} {...app} />
        ))}
      </div>

      <Routes>
        <Route path="/organizations" element={<div />} />
        {adminAccessApps.map(({ component: Component, ...app }) => (
          <Route key={app.label} path={app.path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default AdminApps;
