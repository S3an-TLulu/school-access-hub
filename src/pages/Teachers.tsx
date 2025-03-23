
import { MainLayout } from "@/components/layout/MainLayout";
import { TeachersView } from "@/components/teachers/TeachersView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Teachers = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("teachers", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <TeachersView />
    </MainLayout>
  );
};

export default Teachers;
