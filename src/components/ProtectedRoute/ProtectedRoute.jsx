import { Navigate } from "react-router-dom";

function ProtectedRoute({ token, children }) {
  return token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
