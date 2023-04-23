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
    </div>
  );
}

export default AdminApps;
