
export type UserRole = 'admin' | 'teacher' | 'finance' | 'parent' | 'student' | 'librarian';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
  allowedRoles: UserRole[];
}

export interface Permission {
  module: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}

export interface RolePermissions {
  [key: string]: {
    [key: string]: Permission;
  };
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  section: string;
  admissionNumber: string;
  parentId: string;
  fees: {
    total: number;
    paid: number;
    pending: number;
  };
  attendance: {
    present: number;
    absent: number;
    total: number;
  };
  grades: {
    [subject: string]: number;
  };
}

export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  classes: string[];
}

export interface FeesData {
  id: string;
  studentId: string;
  studentName: string;
  grade: string;
  feeType: string;
  amount: number;
  dueDate: string;
  paid: boolean;
  transactionId?: string;
  transactionDate?: string;
}

export interface Attendance {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  remark?: string;
}

export interface Grade {
  id: string;
  studentId: string;
  subject: string;
  exam: string;
  score: number;
  maxScore: number;
  term: string;
  year: string;
}

export interface Communication {
  id: string;
  sender: string;
  senderId: string;
  receiver: string;
  receiverId: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}
