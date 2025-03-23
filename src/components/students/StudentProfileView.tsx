
import { useEffect, useState } from "react";
import { mockStudents } from "@/data/mockStudents";
import type { Student } from "@/types/student";
import { StudentProfileHeader } from "./profile/StudentProfileHeader";
import { StudentPersonalInfo } from "./profile/StudentPersonalInfo";
import { StudentAcademicPerformance } from "./profile/StudentAcademicPerformance";
import { StudentAdditionalDetails } from "./profile/StudentAdditionalDetails";

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
      <StudentProfileHeader student={student} />

      <div className="grid gap-6 md:grid-cols-2">
        <StudentPersonalInfo student={student} />
        <StudentAcademicPerformance student={student} />
      </div>

      <StudentAdditionalDetails student={student} />
    </div>
  );
};
