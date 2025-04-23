
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  grade: string;
  gradeValue: string;
  section: string;
  status: string;
  attendance: { 
    present: number; 
    absent: number; 
    total: number; 
    percentage: number; 
  };
  fees: { 
    total: number; 
    paid: number; 
    pending: number; 
    status: string; 
  };
  avatar: string;
  parent: string;
  parentContact: string;
  performance: number;
}
