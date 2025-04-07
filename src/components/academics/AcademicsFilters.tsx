
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface AcademicsFiltersProps {
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedTerm: string;
  setSelectedTerm: (term: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const AcademicsFilters = ({
  selectedGrade,
  setSelectedGrade,
  selectedSubject,
  setSelectedSubject,
  selectedTerm,
  setSelectedTerm,
  searchTerm,
  setSearchTerm
}: AcademicsFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex items-center w-full md:w-auto">
        <Search className="absolute ml-2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search student or teacher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8 md:w-[250px]"
        />
      </div>
      
      <div className="grid gap-2 md:grid-flow-col">
        <Select
          value={selectedGrade}
          onValueChange={setSelectedGrade}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            <SelectItem value="baby">Baby Class</SelectItem>
            <SelectItem value="middle">Middle Class</SelectItem>
            <SelectItem value="reception">Reception</SelectItem>
            <SelectItem value="grade1">Grade 1</SelectItem>
            <SelectItem value="grade2">Grade 2</SelectItem>
            <SelectItem value="grade3">Grade 3</SelectItem>
            <SelectItem value="grade4">Grade 4</SelectItem>
            <SelectItem value="grade5">Grade 5</SelectItem>
            <SelectItem value="grade6">Grade 6</SelectItem>
            <SelectItem value="grade7">Grade 7</SelectItem>
          </SelectContent>
        </Select>
        
        <Select
          value={selectedSubject}
          onValueChange={setSelectedSubject}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="social">Social Studies</SelectItem>
            <SelectItem value="pe">Physical Education</SelectItem>
            <SelectItem value="art">Art</SelectItem>
            <SelectItem value="music">Music</SelectItem>
          </SelectContent>
        </Select>
        
        <Select
          value={selectedTerm}
          onValueChange={setSelectedTerm}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select Term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Term</SelectItem>
            <SelectItem value="term1">Term 1, 2025</SelectItem>
            <SelectItem value="term2">Term 2, 2024</SelectItem>
            <SelectItem value="term3">Term 3, 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
