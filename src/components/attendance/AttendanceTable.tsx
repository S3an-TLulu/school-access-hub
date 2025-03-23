
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pencil, CheckCircle, XCircle, AlertCircle, Clock, Info } from "lucide-react";
import { format, subDays } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/context/AuthContext";

interface AttendanceTableProps {
  date: Date | undefined;
  gradeFilter: string;
  statusFilter: string;
  period: "daily" | "weekly" | "monthly" | "termly";
}

// Mock attendance data
const ATTENDANCE_DATA = [
  {
    id: 1,
    studentId: "GHA001",
    studentName: "Chipo Mulenga",
    grade: "grade3",
    date: new Date(),
    status: "present",
    time: "07:45 AM",
    notes: "",
  },
  {
    id: 2,
    studentId: "GHA002",
    studentName: "Mutale Banda",
    grade: "grade3",
    date: new Date(),
    status: "present",
    time: "07:50 AM",
    notes: "",
  },
  {
    id: 3,
    studentId: "GHA003",
    studentName: "Thandiwe Phiri",
    grade: "grade3",
    date: new Date(),
    status: "absent",
    time: "",
    notes: "Parent called - sick",
  },
  {
    id: 4,
    studentId: "GHA004",
    studentName: "John Mumba",
    grade: "grade2",
    date: new Date(),
    status: "present",
    time: "07:40 AM",
    notes: "",
  },
  {
    id: 5,
    studentId: "GHA005",
    studentName: "Mary Tembo",
    grade: "grade2",
    date: new Date(),
    status: "late",
    time: "08:15 AM",
    notes: "Traffic delay",
  },
  {
    id: 6,
    studentId: "GHA006",
    studentName: "David Zimba",
    grade: "baby",
    date: new Date(),
    status: "present",
    time: "07:30 AM",
    notes: "",
  },
  {
    id: 7,
    studentId: "GHA007",
    studentName: "Grace Lungu",
    grade: "middle",
    date: new Date(),
    status: "present",
    time: "07:35 AM",
    notes: "",
  },
  {
    id: 8,
    studentId: "GHA008",
    studentName: "Emmanuel Mwanza",
    grade: "reception",
    date: new Date(),
    status: "excused",
    time: "",
    notes: "Doctor's appointment",
  },
  {
    id: 9,
    studentId: "GHA009",
    studentName: "Natasha Mwila",
    grade: "grade1",
    date: new Date(),
    status: "present",
    time: "07:45 AM",
    notes: "",
  },
  {
    id: 10,
    studentId: "GHA010",
    studentName: "Samuel Ndlovu",
    grade: "grade7",
    date: new Date(),
    status: "present",
    time: "07:40 AM",
    notes: "",
  },
  // Previous day records
  {
    id: 11,
    studentId: "GHA001",
    studentName: "Chipo Mulenga",
    grade: "grade3",
    date: subDays(new Date(), 1),
    status: "present",
    time: "07:45 AM",
    notes: "",
  },
  {
    id: 12,
    studentId: "GHA002",
    studentName: "Mutale Banda",
    grade: "grade3",
    date: subDays(new Date(), 1),
    status: "absent",
    time: "",
    notes: "No notification",
  },
];

export const AttendanceTable = ({ date, gradeFilter, statusFilter, period }: AttendanceTableProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [attendanceData] = useState(ATTENDANCE_DATA);

  // Filter attendance data based on props
  const filteredData = attendanceData.filter((record) => {
    // Apply date filter if specified
    const dateMatch = !date || (
      period === "daily" 
        ? format(record.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
        : true // For other periods, we'd typically filter differently but show all for demo
    );
    
    // Apply grade filter
    const gradeMatch = gradeFilter === "all" || record.grade === gradeFilter;
    
    // Apply status filter
    const statusMatch = statusFilter === "all" || record.status === statusFilter;
    
    return dateMatch && gradeMatch && statusMatch;
  });

  const handleEditAttendance = (studentId: string) => {
    toast({
      title: "Edit Attendance",
      description: `Editing attendance for student ID: ${studentId}`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-500 hover:bg-green-600 flex items-center gap-1"><CheckCircle className="h-3 w-3" />Present</Badge>;
      case 'absent':
        return <Badge variant="destructive" className="flex items-center gap-1"><XCircle className="h-3 w-3" />Absent</Badge>;
      case 'late':
        return <Badge className="bg-amber-500 hover:bg-amber-600 flex items-center gap-1"><Clock className="h-3 w-3" />Late</Badge>;
      case 'excused':
        return <Badge variant="outline" className="flex items-center gap-1"><AlertCircle className="h-3 w-3" />Excused</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const isEditable = user?.role === 'admin' || user?.role === 'teacher';

  if (filteredData.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-center text-muted-foreground">No attendance records match your filters.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Notes</TableHead>
              {isEditable && <TableHead className="w-[80px]">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.studentId}</TableCell>
                <TableCell>{record.studentName}</TableCell>
                <TableCell>
                  {record.grade === "baby" && "Baby Class"}
                  {record.grade === "middle" && "Middle Class"}
                  {record.grade === "reception" && "Reception"}
                  {record.grade === "grade1" && "Grade 1"}
                  {record.grade === "grade2" && "Grade 2"}
                  {record.grade === "grade3" && "Grade 3"}
                  {record.grade === "grade4" && "Grade 4"}
                  {record.grade === "grade5" && "Grade 5"}
                  {record.grade === "grade6" && "Grade 6"}
                  {record.grade === "grade7" && "Grade 7"}
                </TableCell>
                <TableCell>{format(record.date, "MMM dd, yyyy")}</TableCell>
                <TableCell>{getStatusBadge(record.status)}</TableCell>
                <TableCell>{record.time || "-"}</TableCell>
                <TableCell className="max-w-[200px] truncate" title={record.notes}>
                  {record.notes || "-"}
                </TableCell>
                {isEditable && (
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleEditAttendance(record.studentId)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
