
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

type UniformItem = {
  id: string;
  item: string;
  price: number;
};

export const UniformFees = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<UniformItem | null>(null);
  
  // Initialize with data from the image
  const [uniformItems, setUniformItems] = useState<UniformItem[]>([
    { id: '1', item: 'Girl Dress', price: 250 },
    { id: '2', item: 'Girl Skirt', price: 200 },
    { id: '3', item: 'Long Sleeved Shirt', price: 180 },
    { id: '4', item: 'Short Sleeved Shirt', price: 180 },
    { id: '5', item: 'Shorts', price: 150 },
    { id: '6', item: 'Trousers', price: 200 },
    { id: '7', item: 'Tracksuit', price: 600 },
    { id: '8', item: 'Boys & Girls Jersey', price: 350 },
    { id: '9', item: 'Physical Education Shirts', price: 150 },
    { id: '10', item: 'Physical Education Shorts', price: 200 },
    { id: '11', item: 'Physical Education Skirts', price: 200 },
    { id: '12', item: '2 Pairs of Socks', price: 100 },
  ]);

  const handleEditItem = (item: UniformItem) => {
    setEditingItem({ ...item });
    setOpen(true);
  };

  const handleSaveItem = () => {
    if (!editingItem) return;
    
    setUniformItems(uniformItems.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    
    toast({
      title: "Uniform Price Updated",
      description: `${editingItem.item} price has been updated successfully.`,
    });
    
    setOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Uniform Fees</h3>
        <p className="text-sm text-muted-foreground">Term One (2025)</p>
      </div>

      <Table>
        <TableCaption>Great Highway Academy Uniform Prices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Uniform Item</TableHead>
            <TableHead className="text-right">Price (K)</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {uniformItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.item}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
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
            <DialogTitle>Edit Uniform Price</DialogTitle>
            <DialogDescription>
              Update the price for {editingItem?.item}
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (K)</Label>
                <Input 
                  id="price" 
                  type="number" 
                  value={editingItem.price} 
                  onChange={(e) => setEditingItem({
                    ...editingItem,
                    price: Number(e.target.value)
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
