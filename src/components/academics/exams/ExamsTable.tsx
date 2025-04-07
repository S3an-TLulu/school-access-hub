
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, FileEdit, Eye } from "lucide-react";
import { mockExamsData } from "../data/mockAcademicsData";
import { useAuth } from "@/context/AuthContext";

interface ExamsTableProps {
  selectedGrade: string;
  selectedSubject: string;
  selectedTerm: string;
  searchTerm: string;
}

export const ExamsTable = ({
  selectedGrade,
  selectedSubject,
  selectedTerm,
  searchTerm
}: ExamsTableProps) => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const isTeacher = user?.role === "teacher";
  const canManageExams = isAdmin || isTeacher;
  
  // Filter the exams data based on the selected filters
  const filteredExams = mockExamsData.filter(exam => {
    return (
      (selectedGrade === "all" || exam.gradeLevel === selectedGrade) &&
      (selectedSubject === "all" || exam.subject === selectedSubject) &&
      (selectedTerm === "current" || exam.term === selectedTerm) &&
      (searchTerm === "" || 
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">Exams Schedule</h3>
        <div className="flex space-x-2">
          {canManageExams && (
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Schedule Exam
            </Button>
          )}
          
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Grade Level</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Term</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredExams.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                    No exams match your filter criteria
                  </TableCell>
                </TableRow>
              ) : (
                filteredExams.map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell className="font-medium">{exam.name}</TableCell>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>{exam.gradeLevel}</TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>{exam.duration}</TableCell>
                    <TableCell>{exam.term}</TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(exam.status)}`}>
                        {exam.status}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {canManageExams && (
                          <Button variant="ghost" size="icon">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to get color based on exam status
function getStatusColor(status: string): string {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
    case "Upcoming":
      return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
    case "Grading":
      return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400";
  }
}
