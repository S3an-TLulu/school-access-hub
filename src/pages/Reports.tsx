
import { MainLayout } from "@/components/layout/MainLayout";
import { ReportsView } from "@/components/reports/ReportsView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Reports = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("reports", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <ReportsView />
    </MainLayout>
  );
};

export default Reports;
