
import { MainLayout } from "@/components/layout/MainLayout";
import { CommunicationsView } from "@/components/communications/CommunicationsView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Communications = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("communications", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <CommunicationsView />
    </MainLayout>
  );
};

export default Communications;
