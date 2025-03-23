
import { useParams, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { StudentProfileView } from "@/components/students/StudentProfileView";
import { useAuth } from "@/context/AuthContext";

const StudentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("students", "view")) {
    return <Navigate to="/" />;
  }

  if (!id) {
    return <Navigate to="/students" />;
  }

  return (
    <MainLayout>
      <StudentProfileView studentId={id} />
    </MainLayout>
  );
};

export default StudentProfile;
