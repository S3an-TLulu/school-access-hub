
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, FileCheck, TrendingUp } from "lucide-react";

export const AcademicsStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Subjects
          </CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <p className="text-xs text-muted-foreground">
            Across all grades
          </p>
        </CardContent>
      </Card>
      
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Performance
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">74.3%</div>
          <p className="text-xs text-muted-foreground">
            +2.1% from last term
          </p>
        </CardContent>
      </Card>
      
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Upcoming Exams
          </CardTitle>
          <FileCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground">
            Next: Science Mid-Term
          </p>
        </CardContent>
      </Card>
      
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Top Performing Class
          </CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Grade 7A</div>
          <p className="text-xs text-muted-foreground">
            Average: 82.6%
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
