
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { EmptyState } from "./table/EmptyState";
import { FeesTableRow } from "./table/FeesTableRow";
import { FeesTableHeader } from "./table/FeesTableHeader";
import { FEES_DATA } from "./data/FeesData";

interface FeesTableProps {
  searchTerm: string;
  gradeFilter: string;
  statusFilter: string;
  feeType: "tuition" | "lunch" | "transport" | "uniforms";
  onGenerateReceipt?: (data: any) => void;
}

export const FeesTable = ({ 
  searchTerm, 
  gradeFilter, 
  statusFilter, 
  feeType,
  onGenerateReceipt 
}: FeesTableProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  
  const filteredData = FEES_DATA.filter((record) => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const gradeMatch = gradeFilter === "all" || record.grade === gradeFilter;
    
    const statusMatch = statusFilter === "all" || record.status === statusFilter;
    
    const feeTypeMatch = record.feeType === feeType;
    
    return matchesSearch && gradeMatch && statusMatch && feeTypeMatch;
  });

  const handleViewDetails = (id: number) => {
    toast({
      title: "View Payment Details",
      description: `Viewing details for payment ID: ${id}`,
    });
  };

  const handleEditPayment = (id: number) => {
    toast({
      title: "Edit Payment",
      description: `Editing payment ID: ${id}`,
    });
  };

  const handleGenerateReceipt = (record: any) => {
    if (onGenerateReceipt) {
      onGenerateReceipt({
        receiptNumber: `GHA-${Math.floor(Math.random() * 10000)}`,
        studentName: record.studentName,
        studentId: record.studentId,
        paymentDate: format(record.lastPaymentDate || new Date(), "yyyy-MM-dd"),
        paymentAmount: record.amountPaid,
        paymentMethod: record.paymentMethod || "cash",
        paymentFor: record.feeType,
        paymentStatus: record.status
      });
    } else {
      toast({
        title: "Generate Receipt",
        description: `Generating receipt for payment ID: ${record.id}`,
      });
    }
  };

  const isEditable = user?.role === 'admin' || user?.role === 'finance';

  if (filteredData.length === 0) {
    return <EmptyState />;
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <FeesTableHeader />
          <TableBody>
            {filteredData.map((record) => (
              <FeesTableRow
                key={record.id}
                record={record}
                onViewDetails={handleViewDetails}
                onEditPayment={handleEditPayment}
                onGenerateReceipt={handleGenerateReceipt}
                isEditable={isEditable}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
