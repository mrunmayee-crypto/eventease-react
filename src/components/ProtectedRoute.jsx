import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Only lets logged-in users see the page inside it.
// Everyone else is redirected to the Login page.
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
