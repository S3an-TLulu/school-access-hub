
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type GradeFee = {
  id: string;
  grade: string;
  cashAmount: number;
  installmentAmount: number;
};

export const TuitionFees = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [editingFee, setEditingFee] = useState<GradeFee | null>(null);
  
  // Initialize with data from the image
  const [fees, setFees] = useState<GradeFee[]>([
    { id: '1', grade: 'Baby Class', cashAmount: 3000, installmentAmount: 3200 },
    { id: '2', grade: 'Middle Class', cashAmount: 2700, installmentAmount: 2900 },
    { id: '3', grade: 'Reception', cashAmount: 2700, installmentAmount: 2900 },
    { id: '4', grade: 'Grade 1-4', cashAmount: 2700, installmentAmount: 2900 },
    { id: '5', grade: 'Grade 5-7', cashAmount: 3000, installmentAmount: 3200 },
  ]);

  const handleEditFee = (fee: GradeFee) => {
    setEditingFee({ ...fee });
    setOpen(true);
  };

  const handleSaveFee = () => {
    if (!editingFee) return;
    
    setFees(fees.map(fee => 
      fee.id === editingFee.id ? editingFee : fee
    ));
    
    toast({
      title: "Fees Updated",
      description: `${editingFee.grade} fees have been updated successfully.`,
    });
    
    setOpen(false);
    setEditingFee(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Tuition Fees</h3>
        <p className="text-sm text-muted-foreground">Term One (2025)</p>
      </div>

      <Table>
        <TableCaption>Great Highway Academy Tuition Fees</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Grade/Section</TableHead>
            <TableHead className="text-right">Cash Amount (K)</TableHead>
            <TableHead className="text-right">Installments (K)</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fees.map((fee) => (
            <TableRow key={fee.id}>
              <TableCell className="font-medium">{fee.grade}</TableCell>
              <TableCell className="text-right">{fee.cashAmount}</TableCell>
              <TableCell className="text-right">{fee.installmentAmount}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => handleEditFee(fee)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Tuition Fee</DialogTitle>
            <DialogDescription>
              Update the tuition fee amounts for {editingFee?.grade}
            </DialogDescription>
          </DialogHeader>
          {editingFee && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cash-amount">Cash Amount (K)</Label>
                <Input 
                  id="cash-amount" 
                  type="number" 
                  value={editingFee.cashAmount} 
                  onChange={(e) => setEditingFee({
                    ...editingFee,
                    cashAmount: Number(e.target.value)
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="installment-amount">Installment Amount (K)</Label>
                <Input 
                  id="installment-amount" 
                  type="number" 
                  value={editingFee.installmentAmount} 
                  onChange={(e) => setEditingFee({
                    ...editingFee,
                    installmentAmount: Number(e.target.value)
                  })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveFee}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
