
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  BookMarked,
  Clock,
  Home,
  GraduationCap
} from 'lucide-react';

// Navigation items with role-based access
const navItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home,
    roles: ['admin', 'teacher', 'finance', 'parent', 'student', 'librarian'],
  },
  {
    title: 'Students',
    href: '/students',
    icon: GraduationCap,
    roles: ['admin', 'teacher', 'finance', 'parent'],
  },
  {
    title: 'Teachers',
    href: '/teachers',
    icon: Users,
    roles: ['admin'],
  },
  {
    title: 'Attendance',
    href: '/attendance',
    icon: Clock,
    roles: ['admin', 'teacher', 'parent', 'student'],
  },
  {
    title: 'Fees & Payments',
    href: '/fees',
    icon: CreditCard,
    roles: ['admin', 'finance', 'parent', 'student'],
  },
  {
    title: 'Academics',
    href: '/academics',
    icon: BookOpen,
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    title: 'Library',
    href: '/library',
    icon: BookMarked,
    roles: ['admin', 'librarian', 'teacher', 'student'],
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: Calendar,
    roles: ['admin', 'teacher', 'parent', 'student'],
  },
  {
    title: 'Communications',
    href: '/communications',
    icon: MessageSquare,
    roles: ['admin', 'teacher', 'parent'],
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: FileText,
    roles: ['admin', 'teacher', 'finance'],
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    roles: ['admin', 'finance'],
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
    roles: ['admin'],
  },
];

export const NavigationPanel = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  
  // Filter navigation items based on user role
  const filteredNavItems = user
    ? navItems.filter((item) => item.roles.includes(user.role))
    : navItems.filter((item) => item.href === '/login');

  return (
    <nav className="flex h-full flex-col p-4">
      <div className="py-2">
        <h2 className="px-4 text-lg font-semibold tracking-tight">
          Navigation
        </h2>
        <div className="mt-3 space-y-1">
          {filteredNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
