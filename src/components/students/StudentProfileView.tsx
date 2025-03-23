
import { useEffect, useState } from "react";
import { mockStudents } from "@/data/mockStudents";
import type { Student } from "@/types/student";

interface StudentProfileViewProps {
  studentId: string;
}

export const StudentProfileView = ({ studentId }: StudentProfileViewProps) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a timeout
    const timer = setTimeout(() => {
      const foundStudent = mockStudents.find(s => s.id === studentId) || null;
      setStudent(foundStudent);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [studentId]);

  if (loading) {
    return <div className="p-8 text-center">Loading student profile...</div>;
  }

  if (!student) {
    return <div className="p-8 text-center">Student not found</div>;
  }

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-4">
        <img 
          src={student.avatar} 
          alt={student.name} 
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{student.name}</h1>
          <p className="text-muted-foreground">{student.grade} | {student.admissionNumber}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2">
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium">{student.status}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">Parent/Guardian:</span>
              <span className="font-medium">{student.parent}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">Contact:</span>
              <span className="font-medium">{student.parentContact}</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Academic Performance</h2>
          <div className="space-y-2">
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">Overall:</span>
              <span className="font-medium">{student.performance}%</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">Attendance:</span>
              <span className="font-medium">{student.attendance.percentage}% ({student.attendance.present}/{student.attendance.total} days)</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">Fees Status:</span>
              <span className="font-medium">{student.fees.status}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
        <p>This section will contain more detailed information about the student, including academic history, behavior records, extracurricular activities, and more.</p>
      </div>
    </div>
  );
};
