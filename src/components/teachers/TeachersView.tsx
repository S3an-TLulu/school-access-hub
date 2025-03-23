
import { useState } from "react";
import { TeachersList } from "./TeachersList";
import { TeacherFilters } from "./TeacherFilters";
import { TeacherStats } from "./TeacherStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const TeachersView = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleNewTeacher = () => {
    toast({
      title: "Feature coming soon",
      description: "Teacher registration will be available in the next update",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teachers</h2>
          <p className="text-muted-foreground">
            Manage and view all Great Highway Academy teachers
          </p>
        </div>
        <Button onClick={handleNewTeacher} size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Teacher
        </Button>
      </div>

      <TeacherStats />

      <TeacherFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="all">All Teachers</TabsTrigger>
          <TabsTrigger value="primary">Primary</TabsTrigger>
          <TabsTrigger value="secondary">Secondary</TabsTrigger>
          <TabsTrigger value="specialized">Specialized</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <TeachersList
            searchTerm={searchTerm}
            departmentFilter={selectedDepartment}
            statusFilter={selectedStatus}
          />
        </TabsContent>
        <TabsContent value="primary">
          <TeachersList 
            searchTerm={searchTerm}
            departmentFilter="primary"
            statusFilter={selectedStatus}
          />
        </TabsContent>
        <TabsContent value="secondary">
          <TeachersList 
            searchTerm={searchTerm}
            departmentFilter="secondary"
            statusFilter={selectedStatus}
          />
        </TabsContent>
        <TabsContent value="specialized">
          <TeachersList 
            searchTerm={searchTerm}
            departmentFilter="specialized"
            statusFilter={selectedStatus}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
