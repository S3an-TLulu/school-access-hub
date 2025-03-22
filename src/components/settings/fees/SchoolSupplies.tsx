
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type SupplyCategory = {
  id: string;
  title: string;
  items: string[];
};

export const SchoolSupplies = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<SupplyCategory | null>(null);
  
  // Initialize with data from the image
  const [supplyCategories, setSupplyCategories] = useState<SupplyCategory[]>([
    { 
      id: '1', 
      title: 'Required Supplies per Term', 
      items: [
        'Ream of Paper and Tissues',
        'Ream of Paper',
        '2 Handy Andy (toilet cleaner)',
        '2 Handwash',
        'Ream of Paper',
        '2 Domestos (thick bleach) & 2 Handwash',
        'Ream of Paper',
        '1 Cobra (1 liter) & 2 Handwash'
      ] 
    },
    { 
      id: '2', 
      title: 'Payment Information', 
      items: [
        'Bank Name: First Alliance Bank',
        'Branch: East Park Branch',
        'Account Name: GREAT HIGHWAY ACADEMY',
        'Account No: 0060700054001',
        'Currency: Zambian Kwacha',
        'Please indicate child\'s name and grade for reference purpose',
        'Please provide a screenshot or proof of payment via WhatsApp or Messages'
      ] 
    },
    { 
      id: '3', 
      title: 'Contact & Inquiry', 
      items: [
        '0977772677',
        '0966772677'
      ] 
    }
  ]);

  const handleEditCategory = (category: SupplyCategory) => {
    setEditingCategory({ ...category });
    setOpen(true);
  };

  const handleSaveCategory = () => {
    if (!editingCategory) return;
    
    setSupplyCategories(supplyCategories.map(category => 
      category.id === editingCategory.id ? editingCategory : category
    ));
    
    toast({
      title: "Category Updated",
      description: `${editingCategory.title} has been updated successfully.`,
    });
    
    setOpen(false);
    setEditingCategory(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">School Supplies and Other Requirements</h3>
        <p className="text-sm text-muted-foreground">Term One (2025)</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {supplyCategories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>
                Required for all students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => handleEditCategory(category)}>
                Edit Requirements
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit {editingCategory?.title}</DialogTitle>
            <DialogDescription>
              Update the list of required items
            </DialogDescription>
          </DialogHeader>
          {editingCategory && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Category Title</Label>
                <Input 
                  id="title" 
                  value={editingCategory.title} 
                  onChange={(e) => setEditingCategory({
                    ...editingCategory,
                    title: e.target.value
                  })}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="items">Items (One per line)</Label>
                <Textarea 
                  id="items" 
                  className="min-h-[200px]"
                  value={editingCategory.items.join('\n')} 
                  onChange={(e) => setEditingCategory({
                    ...editingCategory,
                    items: e.target.value.split('\n').filter(item => item.trim() !== '')
                  })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveCategory}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
