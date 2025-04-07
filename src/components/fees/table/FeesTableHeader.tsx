
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

export const FeesTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Student ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Grade</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Paid</TableHead>
        <TableHead>Balance</TableHead>
        <TableHead>Due Date</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};
