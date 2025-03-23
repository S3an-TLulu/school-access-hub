
import { CalendarIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface AttendanceFiltersProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}

export const AttendanceFilters = ({
  selectedDate,
  setSelectedDate,
  selectedGrade,
  setSelectedGrade,
  selectedStatus,
  setSelectedStatus
}: AttendanceFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full sm:w-[240px] justify-start text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      
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
          <SelectItem value="present">Present</SelectItem>
          <SelectItem value="absent">Absent</SelectItem>
          <SelectItem value="late">Late</SelectItem>
          <SelectItem value="excused">Excused</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
