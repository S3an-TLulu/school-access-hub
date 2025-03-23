import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
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
import { useToast } from "@/hooks/use-toast";

interface StudentListProps {
  filter: "all" | "active" | "payment" | "attendance";
  searchTerm: string;
  selectedGrade: string;
  selectedStatus: string;
}

// Mock data for students
const mockStudents = [
  {
    id: "1",
    name: "Chanda Mutale",
    grade: "Grade 5A",
    gradeValue: "grade5",
    section: "A",
    admissionNumber: "GHA2020-001",
    status: "active",
    attendance: { present: 42, absent: 3, total: 45, percentage: 93.3 },
    fees: { total: 3000, paid: 3000, pending: 0, status: "paid" },
    avatar: "https://ui-avatars.com/api/?name=Chanda+Mutale&background=10B981&color=fff",
    parent: "Mr. & Mrs. Mutale",
    parentContact: "+260 977 123456",
    performance: 82
  },
  {
    id: "2",
    name: "David Mulenga",
    grade: "Grade 3B",
    gradeValue: "grade3",
    section: "B",
    admissionNumber: "GHA2021-042",
    status: "active",
    attendance: { present: 38, absent: 7, total: 45, percentage: 84.4 },
    fees: { total: 2700, paid: 1350, pending: 1350, status: "partial" },
    avatar: "https://ui-avatars.com/api/?name=David+Mulenga&background=6366F1&color=fff",
    parent: "Mr. James Mulenga",
    parentContact: "+260 966 789012",
    performance: 68
  },
  {
    id: "3",
    name: "Faith Mwansa",
    grade: "Reception",
    gradeValue: "reception",
    section: "C",
    admissionNumber: "GHA2022-135",
    status: "active",
    attendance: { present: 44, absent: 1, total: 45, percentage: 97.8 },
    fees: { total: 2700, paid: 2700, pending: 0, status: "paid" },
    avatar: "https://ui-avatars.com/api/?name=Faith+Mwansa&background=EC4899&color=fff",
    parent: "Mrs. Susan Mwansa",
    parentContact: "+260 955 345678",
    performance: 91
  },
  {
    id: "4",
    name: "Peter Tembo",
    grade: "Grade 7A",
    gradeValue: "grade7",
    section: "A",
    admissionNumber: "GHA2019-027",
    status: "active",
    attendance: { present: 40, absent: 5, total: 45, percentage: 88.9 },
    fees: { total: 3000, paid: 1500, pending: 1500, status: "partial" },
    avatar: "https://ui-avatars.com/api/?name=Peter+Tembo&background=8B5CF6&color=fff",
    parent: "Dr. Tembo",
    parentContact: "+260 977 234567",
    performance: 76
  },
  {
    id: "5",
    name: "Grace Banda",
    grade: "Grade 2C",
    gradeValue: "grade2",
    section: "C",
    admissionNumber: "GHA2022-078",
    status: "active",
    attendance: { present: 32, absent: 13, total: 45, percentage: 71.1 },
    fees: { total: 2700, paid: 2700, pending: 0, status: "paid" },
    avatar: "https://ui-avatars.com/api/?name=Grace+Banda&background=F59E0B&color=fff",
    parent: "Mrs. Banda",
    parentContact: "+260 966 456789",
    performance: 64
  },
  {
    id: "6",
    name: "John Daka",
    grade: "Grade 6B",
    gradeValue: "grade6",
    section: "B",
    admissionNumber: "GHA2020-054",
    status: "suspended",
    attendance: { present: 35, absent: 10, total: 45, percentage: 77.8 },
    fees: { total: 3000, paid: 0, pending: 3000, status: "unpaid" },
    avatar: "https://ui-avatars.com/api/?name=John+Daka&background=EF4444&color=fff",
    parent: "Mr. Daka",
    parentContact: "+260 977 345678",
    performance: 58
  },
  {
    id: "7",
    name: "Mary Phiri",
    grade: "Grade 1A",
    gradeValue: "grade1",
    section: "A",
    admissionNumber: "GHA2023-012",
    status: "active",
    attendance: { present: 43, absent: 2, total: 45, percentage: 95.6 },
    fees: { total: 2700, paid: 1800, pending: 900, status: "partial" },
    avatar: "https://ui-avatars.com/api/?name=Mary+Phiri&background=3B82F6&color=fff",
    parent: "Mrs. Phiri",
    parentContact: "+260 966 567890",
    performance: 88
  },
  {
    id: "8",
    name: "James Zulu",
    grade: "Baby Class",
    gradeValue: "baby",
    section: "A",
    admissionNumber: "GHA2024-003",
    status: "active",
    attendance: { present: 41, absent: 4, total: 45, percentage: 91.1 },
    fees: { total: 3000, paid: 3000, pending: 0, status: "paid" },
    avatar: "https://ui-avatars.com/api/?name=James+Zulu&background=06B6D4&color=fff",
    parent: "Mr. & Mrs. Zulu",
    parentContact: "+260 977 456789",
    performance: 86
  },
  {
    id: "9",
    name: "Janet Musonda",
    grade: "Middle Class",
    gradeValue: "middle",
    section: "B",
    admissionNumber: "GHA2023-089",
    status: "active",
    attendance: { present: 39, absent: 6, total: 45, percentage: 86.7 },
    fees: { total: 2700, paid: 0, pending: 2700, status: "unpaid" },
    avatar: "https://ui-avatars.com/api/?name=Janet+Musonda&background=A855F7&color=fff",
    parent: "Mrs. Musonda",
    parentContact: "+260 966 678901",
    performance: 72
  },
  {
    id: "10",
    name: "Emmanuel Bwalya",
    grade: "Grade 4C",
    gradeValue: "grade4",
    section: "C",
    admissionNumber: "GHA2021-123",
    status: "withdrawn",
    attendance: { present: 15, absent: 30, total: 45, percentage: 33.3 },
    fees: { total: 2700, paid: 900, pending: 1800, status: "partial" },
    avatar: "https://ui-avatars.com/api/?name=Emmanuel+Bwalya&background=F97316&color=fff",
    parent: "Mr. Bwalya",
    parentContact: "+260 977 567890",
    performance: 45
  }
];

export const StudentList = ({ 
  filter, 
  searchTerm, 
  selectedGrade, 
  selectedStatus 
}: StudentListProps) => {
  const { user, hasPermission } = useAuth();
  const { toast } = useToast();
  const isTeacher = user?.role === "teacher";
  const isAdmin = user?.role === "admin";
  const isFinance = user?.role === "finance";

  // Filter students based on the filter prop, search term, grade and status
  const filteredStudents = mockStudents.filter(student => {
    // Apply main filter
    if (filter === "payment" && student.fees.status !== "unpaid" && student.fees.status !== "partial") {
      return false;
    }
    if (filter === "attendance" && student.attendance.percentage > 85) {
      return false;
    }
    if (filter === "active" && student.status !== "active") {
      return false;
    }

    // Apply search filter
    if (searchTerm && !student.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Apply grade filter
    if (selectedGrade !== "all" && student.gradeValue !== selectedGrade) {
      return false;
    }

    // Apply status filter
    if (selectedStatus !== "all" && student.status !== selectedStatus) {
      return false;
    }

    return true;
  });

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
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                  No students match your filter criteria
                </TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
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
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
