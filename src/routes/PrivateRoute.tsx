// src/routes/PrivateRoute.tsx
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.user);
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
