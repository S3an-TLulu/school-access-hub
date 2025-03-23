
import { StudentTable } from "./StudentTable";
import { filterStudents } from "./StudentUtils";

interface StudentListProps {
  filter: "all" | "active" | "payment" | "attendance";
  searchTerm: string;
  selectedGrade: string;
  selectedStatus: string;
}

export const StudentList = ({ 
  filter, 
  searchTerm, 
  selectedGrade, 
  selectedStatus 
}: StudentListProps) => {
  // Filter students based on props
  const filteredStudents = filterStudents({
    filter,
    searchTerm,
    selectedGrade,
    selectedStatus
  });

  return <StudentTable students={filteredStudents} />;
};
