
import { Student } from "@/types/student";

interface StudentAdditionalDetailsProps {
  student: Student;
}

export const StudentAdditionalDetails = ({ student }: StudentAdditionalDetailsProps) => {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
      <p>
        This section will contain more detailed information about the student, including academic history, 
        behavior records, extracurricular activities, and more.
      </p>
    </div>
  );
};
