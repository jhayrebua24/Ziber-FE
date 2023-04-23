import { Layout } from "common/components/layout";
import useGetProfile from "hooks/useGetProfile";

import AdminApps from "./components/AdminApps";

function PortalContainer() {
  const profile = useGetProfile();

  return (
    <Layout title="Portal">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="font-light text-3xl">Welcome {profile?.first_name}!</h1>
        {profile?.role.role === "super_admin" && <AdminApps />}
      </div>
    </Layout>
  );
}

export default PortalContainer;
