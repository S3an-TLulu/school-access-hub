
import { useState } from "react";
import { AttendanceStats } from "./AttendanceStats";
import { AttendanceFilters } from "./AttendanceFilters";
import { AttendanceTable } from "./AttendanceTable";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

export const AttendanceView = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleTakeAttendance = () => {
    toast({
      title: "New attendance session",
      description: "Starting a new attendance session",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export initiated",
      description: "Attendance report is being generated",
    });
  };

  const isTeacherOrAdmin = user?.role === 'teacher' || user?.role === 'admin';

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>
          <p className="text-muted-foreground">
            Track and manage student attendance records
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {isTeacherOrAdmin && (
            <Button onClick={handleTakeAttendance} size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Take Attendance
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <AttendanceStats />

      <AttendanceFilters
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="termly">Term</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <AttendanceTable 
            date={selectedDate}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            period="daily"
          />
        </TabsContent>
        <TabsContent value="weekly">
          <AttendanceTable 
            date={selectedDate}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            period="weekly"
          />
        </TabsContent>
        <TabsContent value="monthly">
          <AttendanceTable 
            date={selectedDate}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            period="monthly"
          />
        </TabsContent>
        <TabsContent value="termly">
          <AttendanceTable 
            date={selectedDate}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            period="termly"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
