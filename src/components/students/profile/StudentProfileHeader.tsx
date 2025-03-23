
import { Student } from "@/types/student";

interface StudentProfileHeaderProps {
  student: Student;
}

export const StudentProfileHeader = ({ student }: StudentProfileHeaderProps) => {
  return (
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
  );
};
