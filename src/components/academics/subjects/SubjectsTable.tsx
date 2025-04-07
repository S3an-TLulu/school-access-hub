
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
import { PlusCircle, Download, FileEdit, Trash2 } from "lucide-react";
import { mockSubjectsData } from "../data/mockAcademicsData";

interface SubjectsTableProps {
  selectedGrade: string;
  searchTerm: string;
}

export const SubjectsTable = ({
  selectedGrade,
  searchTerm
}: SubjectsTableProps) => {
  // Filter the subjects data based on the selected filters
  const filteredSubjects = mockSubjectsData.filter(subject => {
    return (
      (selectedGrade === "all" || subject.gradeLevel === selectedGrade) &&
      (searchTerm === "" || 
       subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       subject.teacherName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">Subject List</h3>
        <div className="flex space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Subject
          </Button>
          
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
                <TableHead>Subject</TableHead>
                <TableHead>Grade Level</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>No. of Students</TableHead>
                <TableHead>Average Performance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                    No subjects match your filter criteria
                  </TableCell>
                </TableRow>
              ) : (
                filteredSubjects.map((subject) => (
                  <TableRow key={subject.id}>
                    <TableCell className="font-medium">{subject.name}</TableCell>
                    <TableCell>{subject.gradeLevel}</TableCell>
                    <TableCell>{subject.teacherName}</TableCell>
                    <TableCell>{subject.schedule}</TableCell>
                    <TableCell>{subject.numberOfStudents}</TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getPerformanceColor(subject.averagePerformance)}`}>
                        {subject.averagePerformance}%
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button variant="ghost" size="icon">
                          <FileEdit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
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

// Helper function to get color based on performance percentage
function getPerformanceColor(percentage: number): string {
  if (percentage >= 80) return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
  if (percentage >= 70) return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
  if (percentage >= 60) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
  if (percentage >= 50) return "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-400";
  return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400";
}
