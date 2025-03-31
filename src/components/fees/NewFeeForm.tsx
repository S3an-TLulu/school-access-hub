
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
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, SaveIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

interface NewFeeFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewFeeForm = ({ open, onOpenChange }: NewFeeFormProps) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>(new Date());
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    grade: "",
    feeType: "tuition",
    amount: "",
    paymentMethod: "cash",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would submit the form data to an API
    toast({
      title: "Payment Recorded",
      description: `Payment of K${formData.amount} recorded successfully for ${formData.studentName}.`,
    });
    
    // Reset form and close dialog
    setFormData({
      studentId: "",
      studentName: "",
      grade: "",
      feeType: "tuition",
      amount: "",
      paymentMethod: "cash",
      notes: ""
    });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Record New Fee Payment</DialogTitle>
          <DialogDescription>
            Enter the payment details to record a new fee collection.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input 
                id="studentId" 
                value={formData.studentId}
                onChange={(e) => handleChange("studentId", e.target.value)}
                placeholder="GHA000"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name</Label>
              <Input 
                id="studentName" 
                value={formData.studentName}
                onChange={(e) => handleChange("studentName", e.target.value)}
                placeholder="Full name"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select 
                value={formData.grade}
                onValueChange={(value) => handleChange("grade", value)}
                required
              >
                <SelectTrigger id="grade">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
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
              <Label htmlFor="feeType">Fee Type</Label>
              <Select 
                value={formData.feeType}
                onValueChange={(value) => handleChange("feeType", value)}
                required
              >
                <SelectTrigger id="feeType">
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
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (K)</Label>
              <Input 
                id="amount" 
                type="number"
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                placeholder="0.00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Payment Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(date, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select 
              value={formData.paymentMethod}
              onValueChange={(value) => handleChange("paymentMethod", value)}
              required
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
          
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea 
              id="notes" 
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              placeholder="Any additional information about this payment"
              className="min-h-[80px]"
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              <SaveIcon className="mr-2 h-4 w-4" />
              Save Payment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
