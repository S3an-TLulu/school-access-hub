
import { useState } from "react";
import { StudentList } from "./StudentList";
import { StudentFilters } from "./StudentFilters";
import { StudentStats } from "./StudentStats";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const StudentsView = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your student data is being exported to CSV",
    });
    // In a real app, this would trigger an actual export
  };

  const handlePrintReport = () => {
    toast({
      title: "Generating Report",
      description: "Your student report is being generated",
    });
    // In a real app, this would generate a printable report
  };

  const handleAddStudent = () => {
    toast({
      title: "Add Student Feature",
      description: "This feature would open a student creation form",
    });
    // In a real app, this would open a form or modal
  };

  const isTeacher = user?.role === "teacher";
  const isAdmin = user?.role === "admin";
  const isFinance = user?.role === "finance";

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
          <p className="text-muted-foreground">
            {isTeacher 
              ? "Manage and view your students' information" 
              : isAdmin 
                ? "Complete student management dashboard"
                : isFinance
                  ? "View student fee information and payment status"
                  : "View student information"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {(isAdmin || isTeacher) && (
            <Button onClick={handleAddStudent}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          )}
          <Button variant="outline" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" onClick={handlePrintReport}>
            <FileText className="mr-2 h-4 w-4" />
            Print Report
          </Button>
        </div>
      </div>

      <StudentStats />
      
      <StudentFilters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
          <TabsTrigger value="all">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="payment">Payment Due</TabsTrigger>
          <TabsTrigger value="attendance">Attendance Issues</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <StudentList 
            filter="all" 
            searchTerm={searchTerm} 
            selectedGrade={selectedGrade}
            selectedStatus={selectedStatus}
          />
        </TabsContent>
        <TabsContent value="active" className="mt-6">
          <StudentList 
            filter="active" 
            searchTerm={searchTerm} 
            selectedGrade={selectedGrade}
            selectedStatus={selectedStatus}
          />
        </TabsContent>
        <TabsContent value="payment" className="mt-6">
          <StudentList 
            filter="payment" 
            searchTerm={searchTerm} 
            selectedGrade={selectedGrade}
            selectedStatus={selectedStatus}
          />
        </TabsContent>
        <TabsContent value="attendance" className="mt-6">
          <StudentList 
            filter="attendance" 
            searchTerm={searchTerm} 
            selectedGrade={selectedGrade}
            selectedStatus={selectedStatus}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
