import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "common/layout";
import NotFound from "common/not-found/NotFound";

function PrivateRoutes() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<div>test</div>} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default PrivateRoutes;
