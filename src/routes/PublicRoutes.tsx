import { Navigate, Route, Routes } from "react-router-dom";
import AuthContainer from "modules/auth";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AuthContainer />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default PublicRoutes;
