
import { MainLayout } from "@/components/layout/MainLayout";
import { CalendarView } from "@/components/calendar/CalendarView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Calendar = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("calendar", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <CalendarView />
    </MainLayout>
  );
};

export default Calendar;
