
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface StudentFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedGrade: string;
  setSelectedGrade: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
}

export const StudentFilters = ({
  searchTerm,
  setSearchTerm,
  selectedGrade,
  setSelectedGrade,
  selectedStatus,
  setSelectedStatus,
}: StudentFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search students by name or admission number..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:w-2/3">
        <div className="space-y-2">
          <Label htmlFor="grade-filter">Grade/Class</Label>
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger id="grade-filter">
              <SelectValue placeholder="All Grades" />
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
        </div>
        <div className="space-y-2">
          <Label htmlFor="status-filter">Status</Label>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger id="status-filter">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
              <SelectItem value="withdrawn">Withdrawn</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
