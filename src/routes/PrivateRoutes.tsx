import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "common/not-found/NotFound";
import Portal from "modules/portal";

function PrivateRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Portal />} />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrivateRoutes;
