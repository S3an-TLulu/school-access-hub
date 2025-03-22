
import { MainLayout } from "@/components/layout/MainLayout";
import { StudentsView } from "@/components/students/StudentsView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Students = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("students", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <StudentsView />
    </MainLayout>
  );
};

export default Students;
