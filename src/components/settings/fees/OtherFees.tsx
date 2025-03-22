
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type OtherFeeItem = {
  id: string;
  item: string;
  price: number | string;
  description?: string;
};

export const OtherFees = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<OtherFeeItem | null>(null);
  
  // Initialize with data from the image
  const [otherFees, setOtherFees] = useState<OtherFeeItem[]>([
    { id: '1', item: 'Enrollment Form', price: 100 },
    { id: '2', item: 'Lunch (Per Month)', price: 500 },
    { id: '3', item: 'Transport (Per Month)', price: "600 - 1000", description: "Depending on distance" },
    { id: '4', item: 'Water (Per Term)', price: 40 },
    { id: '5', item: 'Assessment Tests', price: 200 },
  ]);

  const handleEditItem = (item: OtherFeeItem) => {
    setEditingItem({ ...item });
    setOpen(true);
  };

  const handleSaveItem = () => {
    if (!editingItem) return;
    
    setOtherFees(otherFees.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    
    toast({
      title: "Fee Updated",
      description: `${editingItem.item} fee has been updated successfully.`,
    });
    
    setOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Other School Fees</h3>
        <p className="text-sm text-muted-foreground">Term One (2025)</p>
      </div>

      <Table>
        <TableCaption>Great Highway Academy Additional Fees</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Fee Item</TableHead>
            <TableHead className="text-right">Price (K)</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {otherFees.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.item}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
              <TableCell>{item.description || ""}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => handleEditItem(item)}>
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
            <DialogTitle>Edit Fee</DialogTitle>
            <DialogDescription>
              Update the fee for {editingItem?.item}
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (K)</Label>
                <Input 
                  id="price" 
                  value={String(editingItem.price)} 
                  onChange={(e) => setEditingItem({
                    ...editingItem,
                    price: e.target.value
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input 
                  id="description" 
                  value={editingItem.description || ""} 
                  onChange={(e) => setEditingItem({
                    ...editingItem,
                    description: e.target.value
                  })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveItem}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
