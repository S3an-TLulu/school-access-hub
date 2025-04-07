
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AcademicsStats } from "./AcademicsStats";
import { AcademicsFilters } from "./AcademicsFilters";
import { GradesTable } from "./grades/GradesTable";
import { SubjectsTable } from "./subjects/SubjectsTable";
import { ExamsTable } from "./exams/ExamsTable";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";

export const AcademicsView = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const isTeacher = user?.role === "teacher";
  const isStudent = user?.role === "student";
  const isParent = user?.role === "parent";

  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedTerm, setSelectedTerm] = useState<string>("current");
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Academic Records</h2>
        <p className="text-muted-foreground">
          Manage grades, subjects, exams, and academic performance
        </p>
      </div>

      {(isAdmin || isTeacher) && <AcademicsStats />}

      <AcademicsFilters
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Separator />

      <Tabs defaultValue="grades" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="grades">Grades</TabsTrigger>
          {(isAdmin || isTeacher) && <TabsTrigger value="subjects">Subjects</TabsTrigger>}
          <TabsTrigger value="exams">Exams</TabsTrigger>
        </TabsList>
        
        <TabsContent value="grades">
          <GradesTable
            selectedGrade={selectedGrade}
            selectedSubject={selectedSubject}
            selectedTerm={selectedTerm}
            searchTerm={searchTerm}
          />
        </TabsContent>
        
        {(isAdmin || isTeacher) && (
          <TabsContent value="subjects">
            <SubjectsTable
              selectedGrade={selectedGrade}
              searchTerm={searchTerm}
            />
          </TabsContent>
        )}
        
        <TabsContent value="exams">
          <ExamsTable
            selectedGrade={selectedGrade}
            selectedSubject={selectedSubject}
            selectedTerm={selectedTerm}
            searchTerm={searchTerm}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
