
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Pencil, Receipt, Info } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/context/AuthContext";

interface FeesTableProps {
  searchTerm: string;
  gradeFilter: string;
  statusFilter: string;
  feeType: "tuition" | "lunch" | "transport" | "uniforms";
}

// Mock fees data
const FEES_DATA = [
  {
    id: 1,
    studentId: "GHA001",
    studentName: "Chipo Mulenga",
    grade: "grade3",
    feeType: "tuition",
    amount: 2500,
    amountPaid: 2500,
    balance: 0,
    dueDate: new Date(2023, 4, 30),
    lastPaymentDate: new Date(2023, 3, 15),
    status: "paid",
    paymentMethod: "Cash",
  },
  {
    id: 2,
    studentId: "GHA002",
    studentName: "Mutale Banda",
    grade: "grade3",
    feeType: "tuition",
    amount: 2500,
    amountPaid: 1500,
    balance: 1000,
    dueDate: new Date(2023, 4, 30),
    lastPaymentDate: new Date(2023, 3, 20),
    status: "partial",
    paymentMethod: "Bank Transfer",
  },
  {
    id: 3,
    studentId: "GHA003",
    studentName: "Thandiwe Phiri",
    grade: "grade3",
    feeType: "tuition",
    amount: 2500,
    amountPaid: 0,
    balance: 2500,
    dueDate: new Date(2023, 4, 30),
    lastPaymentDate: null,
    status: "pending",
    paymentMethod: "",
  },
  {
    id: 4,
    studentId: "GHA004",
    studentName: "John Mumba",
    grade: "grade2",
    feeType: "tuition",
    amount: 2300,
    amountPaid: 2300,
    balance: 0,
    dueDate: new Date(2023, 4, 30),
    lastPaymentDate: new Date(2023, 3, 10),
    status: "paid",
    paymentMethod: "Mobile Money",
  },
  {
    id: 5,
    studentId: "GHA001",
    studentName: "Chipo Mulenga",
    grade: "grade3",
    feeType: "lunch",
    amount: 500,
    amountPaid: 500,
    balance: 0,
    dueDate: new Date(2023, 4, 5),
    lastPaymentDate: new Date(2023, 4, 2),
    status: "paid",
    paymentMethod: "Cash",
  },
  {
    id: 6,
    studentId: "GHA002",
    studentName: "Mutale Banda",
    grade: "grade3",
    feeType: "lunch",
    amount: 500,
    amountPaid: 0,
    balance: 500,
    dueDate: new Date(2023, 4, 5),
    lastPaymentDate: null,
    status: "overdue",
    paymentMethod: "",
  },
  {
    id: 7,
    studentId: "GHA001",
    studentName: "Chipo Mulenga",
    grade: "grade3",
    feeType: "transport",
    amount: 800,
    amountPaid: 800,
    balance: 0,
    dueDate: new Date(2023, 4, 10),
    lastPaymentDate: new Date(2023, 4, 5),
    status: "paid",
    paymentMethod: "Mobile Money",
  },
  {
    id: 8,
    studentId: "GHA006",
    studentName: "David Zimba",
    grade: "baby",
    feeType: "tuition",
    amount: 2000,
    amountPaid: 1000,
    balance: 1000,
    dueDate: new Date(2023, 4, 30),
    lastPaymentDate: new Date(2023, 3, 25),
    status: "partial",
    paymentMethod: "Cash",
  },
  {
    id: 9,
    studentId: "GHA005",
    studentName: "Mary Tembo",
    grade: "grade2",
    feeType: "uniforms",
    amount: 450,
    amountPaid: 450,
    balance: 0,
    dueDate: new Date(2023, 3, 15),
    lastPaymentDate: new Date(2023, 3, 12),
    status: "paid",
    paymentMethod: "Cash",
  },
  {
    id: 10,
    studentId: "GHA007",
    studentName: "Grace Lungu",
    grade: "middle",
    feeType: "transport",
    amount: 750,
    amountPaid: 350,
    balance: 400,
    dueDate: new Date(2023, 4, 10),
    lastPaymentDate: new Date(2023, 4, 3),
    status: "partial",
    paymentMethod: "Bank Transfer",
  }
];

export const FeesTable = ({ searchTerm, gradeFilter, statusFilter, feeType }: FeesTableProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  
  // Filter fees data based on props
  const filteredData = FEES_DATA.filter((record) => {
    // Apply search filter
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply grade filter
    const gradeMatch = gradeFilter === "all" || record.grade === gradeFilter;
    
    // Apply status filter
    const statusMatch = statusFilter === "all" || record.status === statusFilter;
    
    // Apply fee type filter
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

  const handleGenerateReceipt = (id: number) => {
    toast({
      title: "Generate Receipt",
      description: `Generating receipt for payment ID: ${id}`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-500 hover:bg-green-600">Paid</Badge>;
      case 'partial':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Partial</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'overdue':
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatCurrency = (amount: number) => {
    return `K${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const isEditable = user?.role === 'admin' || user?.role === 'finance';

  if (filteredData.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">
            <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-center text-muted-foreground">No payment records match your filters.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
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
          <TableBody>
            {filteredData.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.studentId}</TableCell>
                <TableCell>{record.studentName}</TableCell>
                <TableCell>
                  {record.grade === "baby" && "Baby Class"}
                  {record.grade === "middle" && "Middle Class"}
                  {record.grade === "reception" && "Reception"}
                  {record.grade === "grade1" && "Grade 1"}
                  {record.grade === "grade2" && "Grade 2"}
                  {record.grade === "grade3" && "Grade 3"}
                  {record.grade === "grade4" && "Grade 4"}
                  {record.grade === "grade5" && "Grade 5"}
                  {record.grade === "grade6" && "Grade 6"}
                  {record.grade === "grade7" && "Grade 7"}
                </TableCell>
                <TableCell>{formatCurrency(record.amount)}</TableCell>
                <TableCell>{formatCurrency(record.amountPaid)}</TableCell>
                <TableCell>{formatCurrency(record.balance)}</TableCell>
                <TableCell>{format(record.dueDate, "MMM dd, yyyy")}</TableCell>
                <TableCell>{getStatusBadge(record.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleViewDetails(record.id)}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    {isEditable && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditPayment(record.id)}
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    )}
                    {record.status === 'paid' || record.status === 'partial' ? (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleGenerateReceipt(record.id)}
                      >
                        <Receipt className="h-4 w-4" />
                        <span className="sr-only">Receipt</span>
                      </Button>
                    ) : null}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
