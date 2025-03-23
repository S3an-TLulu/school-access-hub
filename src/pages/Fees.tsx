
import { MainLayout } from "@/components/layout/MainLayout";
import { FeesView } from "@/components/fees/FeesView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Fees = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("fees", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <FeesView />
    </MainLayout>
  );
};

export default Fees;
