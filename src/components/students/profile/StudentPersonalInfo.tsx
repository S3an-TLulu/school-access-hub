
import { Student } from "@/types/student";

interface StudentPersonalInfoProps {
  student: Student;
}

export const StudentPersonalInfo = ({ student }: StudentPersonalInfoProps) => {
  return (
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
  );
};
