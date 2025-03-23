
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Eye, 
  FileEdit, 
  MoreVertical, 
  UserX, 
  Mail, 
  DollarSign,
  BookOpen,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

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

interface StudentTableRowProps {
  student: Student;
}

export const StudentTableRow = ({ student }: StudentTableRowProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const isTeacher = user?.role === "teacher";
  const isAdmin = user?.role === "admin";
  const isFinance = user?.role === "finance";

  const handleEditStudent = (studentId: string) => {
    toast({
      title: "Edit Student",
      description: `Editing student record for ID: ${studentId}`,
    });
  };

  const handleContactParent = (studentId: string) => {
    toast({
      title: "Contact Parent",
      description: `Contacting parent for student ID: ${studentId}`,
    });
  };

  const handleViewFees = (studentId: string) => {
    toast({
      title: "View Fees",
      description: `Viewing fee details for student ID: ${studentId}`,
    });
  };

  const handleViewGrades = (studentId: string) => {
    toast({
      title: "View Grades",
      description: `Viewing academic records for student ID: ${studentId}`,
    });
  };

  const handleViewAttendance = (studentId: string) => {
    toast({
      title: "View Attendance",
      description: `Viewing attendance records for student ID: ${studentId}`,
    });
  };

  const handleSuspendStudent = (studentId: string) => {
    toast({
      title: "Suspend Student",
      description: `Student ID: ${studentId} would be suspended`,
      variant: "destructive"
    });
  };

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{student.name}</p>
            <p className="text-xs text-muted-foreground">{student.parent}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>{student.grade}</TableCell>
      <TableCell>{student.admissionNumber}</TableCell>
      <TableCell>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span>{student.attendance.percentage}%</span>
            <span className="text-muted-foreground">
              {student.attendance.present}/{student.attendance.total} days
            </span>
          </div>
          <Progress value={student.attendance.percentage} className="h-2" />
        </div>
      </TableCell>
      {(isAdmin || isFinance) && (
        <TableCell>
          {student.fees.status === "paid" && (
            <Badge className="bg-green-500">Paid</Badge>
          )}
          {student.fees.status === "partial" && (
            <Badge className="bg-orange-500">Partial</Badge>
          )}
          {student.fees.status === "unpaid" && (
            <Badge className="bg-red-500">Unpaid</Badge>
          )}
          <div className="text-xs text-muted-foreground mt-1">
            {student.fees.status !== "paid" && 
              `K${student.fees.pending} outstanding`}
            {student.fees.status === "paid" && 
              `K${student.fees.total} fully paid`}
          </div>
        </TableCell>
      )}
      {(isAdmin || isTeacher) && (
        <TableCell>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>{student.performance}%</span>
              <span className="text-muted-foreground">
                {student.performance >= 80 
                  ? "Excellent" 
                  : student.performance >= 70
                    ? "Good"
                    : student.performance >= 60
                      ? "Average"
                      : "Needs Improvement"}
              </span>
            </div>
            <Progress 
              value={student.performance} 
              className={`h-2 ${
                student.performance >= 80 
                  ? "bg-green-500" 
                  : student.performance >= 70
                    ? "bg-blue-500"
                    : student.performance >= 60
                      ? "bg-orange-500"
                      : "bg-red-500"
              }`} 
            />
          </div>
        </TableCell>
      )}
      <TableCell>
        {student.status === "active" && (
          <Badge className="bg-green-500">Active</Badge>
        )}
        {student.status === "suspended" && (
          <Badge className="bg-red-500">Suspended</Badge>
        )}
        {student.status === "withdrawn" && (
          <Badge variant="outline">Withdrawn</Badge>
        )}
        {student.status === "transfer" && (
          <Badge variant="outline" className="bg-blue-500">Transfer</Badge>
        )}
        {student.status === "graduate" && (
          <Badge variant="outline" className="bg-purple-500">Graduate</Badge>
        )}
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link to={`/student/${student.id}`}>
                <Eye className="mr-2 h-4 w-4" />
                View Profile
              </Link>
            </DropdownMenuItem>
            {(isAdmin || isTeacher) && (
              <DropdownMenuItem onClick={() => handleEditStudent(student.id)}>
                <FileEdit className="mr-2 h-4 w-4" />
                Edit Record
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleContactParent(student.id)}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Parent
            </DropdownMenuItem>
            {(isAdmin || isFinance) && (
              <DropdownMenuItem onClick={() => handleViewFees(student.id)}>
                <DollarSign className="mr-2 h-4 w-4" />
                View Fees
              </DropdownMenuItem>
            )}
            {(isAdmin || isTeacher) && (
              <DropdownMenuItem onClick={() => handleViewGrades(student.id)}>
                <BookOpen className="mr-2 h-4 w-4" />
                View Grades
              </DropdownMenuItem>
            )}
            {(isAdmin || isTeacher) && (
              <DropdownMenuItem onClick={() => handleViewAttendance(student.id)}>
                <Clock className="mr-2 h-4 w-4" />
                View Attendance
              </DropdownMenuItem>
            )}
            {isAdmin && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => handleSuspendStudent(student.id)}
                  className="text-red-600"
                >
                  <UserX className="mr-2 h-4 w-4" />
                  Suspend Student
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
