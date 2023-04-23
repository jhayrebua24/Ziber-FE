import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "common/not-found/NotFound";
import { Homepage } from "modules/portal";
import { useGetAccessRoutes } from "modules/portal/homepage/hooks";

function PrivateRoutes() {
  const accessRoutes = useGetAccessRoutes();

  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route path="/login" element={<Navigate to="/" />} />
      {accessRoutes}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrivateRoutes;
