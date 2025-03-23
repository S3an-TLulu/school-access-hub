
import { MainLayout } from "@/components/layout/MainLayout";
import { AttendanceView } from "@/components/attendance/AttendanceView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Attendance = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("attendance", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <AttendanceView />
    </MainLayout>
  );
};

export default Attendance;
