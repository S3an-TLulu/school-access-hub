
import { Student } from "@/types/student";

interface StudentProfileHeaderProps {
  student: Student;
}

export const StudentProfileHeader = ({ student }: StudentProfileHeaderProps) => {
  const fullName = `${student.firstName} ${student.lastName}`;
  
  return (
    <div className="flex items-center gap-4">
      <img 
        src={student.avatar} 
        alt={fullName} 
        className="h-24 w-24 rounded-full object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{fullName}</h1>
        <p className="text-muted-foreground">{student.grade} | {student.id}</p>
      </div>
    </div>
  );
};
