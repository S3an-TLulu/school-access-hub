
import { MainLayout } from "@/components/layout/MainLayout";
import { AcademicsView } from "@/components/academics/AcademicsView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Academics = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("academics", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <AcademicsView />
    </MainLayout>
  );
};

export default Academics;
