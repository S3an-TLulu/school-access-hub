
import { mockStudents } from "@/data/mockStudents";

interface FilterOptions {
  filter: "all" | "active" | "payment" | "attendance";
  searchTerm: string;
  selectedGrade: string;
  selectedStatus: string;
}

export const filterStudents = ({ filter, searchTerm, selectedGrade, selectedStatus }: FilterOptions) => {
  return mockStudents.filter(student => {
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
};
