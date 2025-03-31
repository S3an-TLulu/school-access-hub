
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Printer, Download, X } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface ReceiptData {
  receiptNumber: string;
  studentName: string;
  studentId: string;
  paymentDate: string;
  paymentAmount: number;
  paymentMethod: string;
  paymentFor: string;
  paymentStatus: string;
}

interface ReceiptGeneratorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  receiptData?: Partial<ReceiptData>;
}

export const ReceiptGenerator = ({ open, onOpenChange, receiptData }: ReceiptGeneratorProps) => {
  const { toast } = useToast();
  const [receipt, setReceipt] = useState<ReceiptData>({
    receiptNumber: receiptData?.receiptNumber || `GHA-${Math.floor(Math.random() * 10000)}`,
    studentName: receiptData?.studentName || "",
    studentId: receiptData?.studentId || "",
    paymentDate: receiptData?.paymentDate || format(new Date(), "yyyy-MM-dd"),
    paymentAmount: receiptData?.paymentAmount || 0,
    paymentMethod: receiptData?.paymentMethod || "cash",
    paymentFor: receiptData?.paymentFor || "tuition",
    paymentStatus: receiptData?.paymentStatus || "paid"
  });

  const handlePrint = () => {
    toast({
      title: "Printing Receipt",
      description: `Receipt #${receipt.receiptNumber} sent to printer`,
    });
    // In a real application, this would trigger the print dialog
  };

  const handleDownload = () => {
    toast({
      title: "Receipt Downloaded",
      description: `Receipt #${receipt.receiptNumber} has been downloaded`,
    });
    // In a real application, this would generate a PDF for download
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Payment Receipt</DialogTitle>
          <DialogDescription>
            Generate a receipt for the student fee payment.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-4 border rounded-md space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">Great Highway Academy</h3>
              <p className="text-sm text-muted-foreground">School Fee Receipt</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">Receipt #: {receipt.receiptNumber}</p>
              <p className="text-sm text-muted-foreground">Date: {format(new Date(receipt.paymentDate), "MMM dd, yyyy")}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="studentName">Student Name</Label>
                <Input 
                  id="studentName" 
                  value={receipt.studentName}
                  onChange={(e) => setReceipt({...receipt, studentName: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="studentId">Student ID</Label>
                <Input 
                  id="studentId" 
                  value={receipt.studentId}
                  onChange={(e) => setReceipt({...receipt, studentId: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="paymentAmount">Amount Paid (K)</Label>
                <Input 
                  id="paymentAmount" 
                  type="number"
                  value={receipt.paymentAmount}
                  onChange={(e) => setReceipt({...receipt, paymentAmount: parseFloat(e.target.value)})}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <Select 
                  value={receipt.paymentMethod}
                  onValueChange={(value) => setReceipt({...receipt, paymentMethod: value})}
                >
                  <SelectTrigger id="paymentMethod">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                    <SelectItem value="mobile_money">Mobile Money</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="paymentFor">Payment For</Label>
                <Select 
                  value={receipt.paymentFor}
                  onValueChange={(value) => setReceipt({...receipt, paymentFor: value})}
                >
                  <SelectTrigger id="paymentFor">
                    <SelectValue placeholder="Select fee type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tuition">Tuition Fee</SelectItem>
                    <SelectItem value="lunch">Lunch Fee</SelectItem>
                    <SelectItem value="transport">Transport Fee</SelectItem>
                    <SelectItem value="uniforms">Uniforms</SelectItem>
                    <SelectItem value="other">Other Fees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="paymentStatus">Payment Status</Label>
                <Select 
                  value={receipt.paymentStatus}
                  onValueChange={(value) => setReceipt({...receipt, paymentStatus: value})}
                >
                  <SelectTrigger id="paymentStatus">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Fully Paid</SelectItem>
                    <SelectItem value="partial">Partial Payment</SelectItem>
                    <SelectItem value="installment">Installment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Amount:</span>
                <span className="font-bold">K{receipt.paymentAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center pt-4 border-t text-center text-sm text-muted-foreground">
            <p>Thank you for your payment. For inquiries, please contact the school office.</p>
          </div>
        </div>
        
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            <X className="mr-2 h-4 w-4" />
            Close
          </Button>
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
