
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';
import { AdminDashboard } from './AdminDashboard';
import { TeacherDashboard } from './TeacherDashboard';
import { FinanceDashboard } from './FinanceDashboard';
import { ParentDashboard } from './ParentDashboard';
import { StudentDashboard } from './StudentDashboard';
import { LibrarianDashboard } from './LibrarianDashboard';

export const RoleBasedDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-muted-foreground">Please log in to view your dashboard</p>
      </div>
    );
  }

  // Render dashboard based on user role
  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'teacher':
      return <TeacherDashboard />;
    case 'finance':
      return <FinanceDashboard />;
    case 'parent':
      return <ParentDashboard />;
    case 'student':
      return <StudentDashboard />;
    case 'librarian':
      return <LibrarianDashboard />;
    default:
      return (
        <div className="flex h-96 items-center justify-center">
          <p className="text-muted-foreground">No dashboard available for your role</p>
        </div>
      );
  }
};
