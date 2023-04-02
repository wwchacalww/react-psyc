import { RouteProps, Route } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { Signin } from "../pages/Signin";

type RouteDomProps = RouteProps & {
  role?: string;
  component: React.ComponentType;
};

const AuthRoutes: React.FC<RouteDomProps> = ({
  role = "Paciente",
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  if (role === user.role) {
    return <Route {...rest} element={<Component />} />;
  }

  return <Route {...rest} path="/signin" element={<Signin />} />;
};

export { AuthRoutes };
