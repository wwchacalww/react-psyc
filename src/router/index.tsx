import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { DashboardPage } from "../pages/Dashboard";
import { LandingPage } from "../pages/Landing";
import { Signin } from "../pages/Signin";

export function Router() {
  const { user } = useAuth();
  if (user.role) {
    console.log("User logado", user.role);
  } else {
    console.log("User não logado");
  }
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
