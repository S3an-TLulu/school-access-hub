
import { MainLayout } from "@/components/layout/MainLayout";
import { LibraryView } from "@/components/library/LibraryView";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Library = () => {
  const { user, hasPermission } = useAuth();

  // Redirect if not logged in or doesn't have permission
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasPermission("library", "view")) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <LibraryView />
    </MainLayout>
  );
};

export default Library;
