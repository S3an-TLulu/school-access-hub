
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FeesFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

export const FeesFilters = ({
  searchTerm,
  setSearchTerm,
  selectedGrade,
  setSelectedGrade,
  selectedStatus,
  setSelectedStatus
}: FeesFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search student name or ID..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Select 
        value={selectedGrade} 
        onValueChange={setSelectedGrade}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Grade" />
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
        value={selectedStatus} 
        onValueChange={setSelectedStatus}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="paid">Fully Paid</SelectItem>
          <SelectItem value="partial">Partial Payment</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="overdue">Overdue</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
