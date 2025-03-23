
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { StudentTableRow } from "./StudentTableRow";
import { useAuth } from "@/context/AuthContext";

interface Student {
  id: string;
  name: string;
  grade: string;
  gradeValue: string;
  section: string;
  admissionNumber: string;
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

interface StudentTableProps {
  students: Student[];
}

export const StudentTable = ({ students }: StudentTableProps) => {
  const { user } = useAuth();
  const isTeacher = user?.role === "teacher";
  const isAdmin = user?.role === "admin";
  const isFinance = user?.role === "finance";

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Admission No.</TableHead>
              <TableHead>Attendance</TableHead>
              {(isAdmin || isFinance) && <TableHead>Fees Status</TableHead>}
              {(isAdmin || isTeacher) && <TableHead>Performance</TableHead>}
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                  No students match your filter criteria
                </TableCell>
              </TableRow>
            ) : (
              students.map((student) => (
                <StudentTableRow key={student.id} student={student} />
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
