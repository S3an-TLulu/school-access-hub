
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (module: string, action: 'view' | 'create' | 'edit' | 'delete') => boolean;
}

// Mock users for demonstration
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@gha.edu',
    role: 'admin',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff',
  },
  {
    id: '2',
    name: 'Teacher User',
    email: 'teacher@gha.edu',
    role: 'teacher',
    avatar: 'https://ui-avatars.com/api/?name=Teacher+User&background=2E7D32&color=fff',
  },
  {
    id: '3',
    name: 'Finance Officer',
    email: 'finance@gha.edu',
    role: 'finance',
    avatar: 'https://ui-avatars.com/api/?name=Finance+Officer&background=C62828&color=fff',
  },
  {
    id: '4',
    name: 'Parent User',
    email: 'parent@gha.edu',
    role: 'parent',
    avatar: 'https://ui-avatars.com/api/?name=Parent+User&background=7B1FA2&color=fff',
  },
  {
    id: '5',
    name: 'Student User',
    email: 'student@gha.edu',
    role: 'student',
    avatar: 'https://ui-avatars.com/api/?name=Student+User&background=FB8C00&color=fff',
  },
  {
    id: '6',
    name: 'Librarian User',
    email: 'librarian@gha.edu',
    role: 'librarian',
    avatar: 'https://ui-avatars.com/api/?name=Librarian+User&background=6D4C41&color=fff',
  },
];

// Role-based permissions mapping
const ROLE_PERMISSIONS = {
  admin: {
    all: true,
  },
  teacher: {
    students: { view: true, create: false, edit: true, delete: false },
    attendance: { view: true, create: true, edit: true, delete: false },
    grades: { view: true, create: true, edit: true, delete: false },
    communications: { view: true, create: true, edit: false, delete: false },
    calendar: { view: true, create: true, edit: true, delete: true },
  },
  finance: {
    fees: { view: true, create: true, edit: true, delete: true },
    reports: { view: true, create: true, edit: false, delete: false },
    students: { view: true, create: false, edit: false, delete: false },
  },
  parent: {
    students: { view: 'own', create: false, edit: false, delete: false },
    fees: { view: 'own', create: false, edit: false, delete: false },
    attendance: { view: 'own', create: false, edit: false, delete: false },
    grades: { view: 'own', create: false, edit: false, delete: false },
    communications: { view: true, create: true, edit: false, delete: false },
    calendar: { view: true, create: false, edit: false, delete: false },
  },
  student: {
    attendance: { view: 'own', create: false, edit: false, delete: false },
    grades: { view: 'own', create: false, edit: false, delete: false },
    fees: { view: 'own', create: false, edit: false, delete: false },
    communications: { view: 'own', create: false, edit: false, delete: false },
    calendar: { view: true, create: false, edit: false, delete: false },
  },
  librarian: {
    library: { view: true, create: true, edit: true, delete: true },
    students: { view: true, create: false, edit: false, delete: false },
  },
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  hasPermission: () => false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in local storage
    const savedUser = localStorage.getItem('gha_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call delay
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Find user with matching email
    const foundUser = MOCK_USERS.find((u) => u.email === email);
    
    if (foundUser) {
      // In a real app, you would validate the password here
      setUser(foundUser);
      localStorage.setItem('gha_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gha_user');
  };

  const hasPermission = (module: string, action: 'view' | 'create' | 'edit' | 'delete') => {
    if (!user) return false;
    
    // Admin has all permissions
    if (user.role === 'admin') return true;
    
    const rolePermissions = ROLE_PERMISSIONS[user.role];
    if (!rolePermissions) return false;
    
    // Check specific module permissions
    const modulePermissions = rolePermissions[module];
    if (!modulePermissions) return false;
    
    return !!modulePermissions[action];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
