
import { Student } from "@/types/student";

interface StudentAcademicPerformanceProps {
  student: Student;
}

export const StudentAcademicPerformance = ({ student }: StudentAcademicPerformanceProps) => {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Academic Performance</h2>
      <div className="space-y-2">
        <div className="grid grid-cols-2">
          <span className="text-muted-foreground">Overall:</span>
          <span className="font-medium">{student.performance}%</span>
        </div>
        <div className="grid grid-cols-2">
          <span className="text-muted-foreground">Attendance:</span>
          <span className="font-medium">
            {student.attendance.percentage}% ({student.attendance.present}/{student.attendance.total} days)
          </span>
        </div>
        <div className="grid grid-cols-2">
          <span className="text-muted-foreground">Fees Status:</span>
          <span className="font-medium">{student.fees.status}</span>
        </div>
      </div>
    </div>
  );
};
