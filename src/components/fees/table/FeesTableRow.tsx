
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Receipt } from "lucide-react";
import { format } from "date-fns";
import { StatusBadge } from "./StatusBadge";
import { formatCurrency, formatGradeName } from "./FormatUtils";

interface FeeRecord {
  id: number;
  studentId: string;
  studentName: string;
  grade: string;
  feeType: string;
  amount: number;
  amountPaid: number;
  balance: number;
  dueDate: Date;
  lastPaymentDate: Date | null;
  status: string;
  paymentMethod: string;
}

interface FeesTableRowProps {
  record: FeeRecord;
  onViewDetails: (id: number) => void;
  onEditPayment: (id: number) => void;
  onGenerateReceipt: (record: FeeRecord) => void;
  isEditable: boolean;
}

export const FeesTableRow = ({
  record,
  onViewDetails,
  onEditPayment,
  onGenerateReceipt,
  isEditable
}: FeesTableRowProps) => {
  return (
    <TableRow key={record.id}>
      <TableCell className="font-medium">{record.studentId}</TableCell>
      <TableCell>{record.studentName}</TableCell>
      <TableCell>{formatGradeName(record.grade)}</TableCell>
      <TableCell>{formatCurrency(record.amount)}</TableCell>
      <TableCell>{formatCurrency(record.amountPaid)}</TableCell>
      <TableCell>{formatCurrency(record.balance)}</TableCell>
      <TableCell>{format(record.dueDate, "MMM dd, yyyy")}</TableCell>
      <TableCell><StatusBadge status={record.status} /></TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onViewDetails(record.id)}
          >
            <Eye className="h-4 w-4" />
            <span className="sr-only">View</span>
          </Button>
          {isEditable && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onEditPayment(record.id)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
          )}
          {(record.status === 'paid' || record.status === 'partial') && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onGenerateReceipt(record)}
            >
              <Receipt className="h-4 w-4" />
              <span className="sr-only">Receipt</span>
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};
