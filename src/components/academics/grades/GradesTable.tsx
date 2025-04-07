
import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Download, FileEdit } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { mockGradesData } from "../data/mockAcademicsData";
import { AddGradeForm } from "./AddGradeForm";

interface GradesTableProps {
  selectedGrade: string;
  selectedSubject: string;
  selectedTerm: string;
  searchTerm: string;
}

export const GradesTable = ({
  selectedGrade,
  selectedSubject,
  selectedTerm,
  searchTerm
}: GradesTableProps) => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const isTeacher = user?.role === "teacher";
  const canEditGrades = isAdmin || isTeacher;
  
  const [openDialog, setOpenDialog] = useState(false);
  
  // Filter the grades data based on the selected filters
  const filteredGrades = mockGradesData.filter(grade => {
    return (
      (selectedGrade === "all" || grade.gradeLevel === selectedGrade) &&
      (selectedSubject === "all" || grade.subject === selectedSubject) &&
      (selectedTerm === "current" || grade.term === selectedTerm) &&
      (searchTerm === "" || 
        grade.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grade.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">Student Grades</h3>
        <div className="flex space-x-2">
          {canEditGrades && (
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Grade
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Grade</DialogTitle>
                  <DialogDescription>
                    Enter student grade information below
                  </DialogDescription>
                </DialogHeader>
                <AddGradeForm onSuccess={() => setOpenDialog(false)} />
              </DialogContent>
            </Dialog>
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
                <TableHead>Student</TableHead>
                <TableHead>Grade Level</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Exam</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Term</TableHead>
                <TableHead>Date</TableHead>
                {canEditGrades && <TableHead className="text-right">Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={canEditGrades ? 9 : 8} className="text-center py-6 text-muted-foreground">
                    No grade records match your filter criteria
                  </TableCell>
                </TableRow>
              ) : (
                filteredGrades.map((grade) => (
                  <TableRow key={grade.id}>
                    <TableCell>{grade.studentName}</TableCell>
                    <TableCell>{grade.gradeLevel}</TableCell>
                    <TableCell>{grade.subject}</TableCell>
                    <TableCell>{grade.examName}</TableCell>
                    <TableCell>
                      {grade.score}/{grade.maxScore} ({Math.round((grade.score/grade.maxScore) * 100)}%)
                    </TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getGradeColor(grade.score, grade.maxScore)}`}>
                        {getLetterGrade(grade.score, grade.maxScore)}
                      </div>
                    </TableCell>
                    <TableCell>{grade.term}</TableCell>
                    <TableCell>{grade.date}</TableCell>
                    {canEditGrades && (
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <FileEdit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    )}
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

// Helper function to get letter grade based on percentage
function getLetterGrade(score: number, maxScore: number): string {
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 90) return "A+";
  if (percentage >= 85) return "A";
  if (percentage >= 80) return "A-";
  if (percentage >= 75) return "B+";
  if (percentage >= 70) return "B";
  if (percentage >= 65) return "B-";
  if (percentage >= 60) return "C+";
  if (percentage >= 55) return "C";
  if (percentage >= 50) return "C-";
  if (percentage >= 45) return "D+";
  if (percentage >= 40) return "D";
  return "F";
}

// Helper function to get color based on grade percentage
function getGradeColor(score: number, maxScore: number): string {
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 80) return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400";
  if (percentage >= 70) return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400";
  if (percentage >= 60) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400";
  if (percentage >= 50) return "bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-400";
  return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400";
}
