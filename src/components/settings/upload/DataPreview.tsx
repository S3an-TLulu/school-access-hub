
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/hooks/use-toast';
import { Student } from '@/types/student';

interface DataPreviewProps {
  file: File;
  previewData: Partial<Student>[];
  onUpload: () => Promise<void>;
  uploadType: string;
}

export const DataPreview = ({ file, previewData, onUpload, uploadType }: DataPreviewProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      await onUpload();
      setIsDialogOpen(false);
      toast({
        title: "Upload successful",
        description: "Student data has been successfully imported.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const renderPreviewHeaders = () => {
    if (uploadType === 'students') {
      return (
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Section</TableHead>
          <TableHead>Parent Info</TableHead>
        </TableRow>
      );
    }
    // Add other upload types preview headers here
    return null;
  };

  const renderPreviewRow = (row: any) => {
    if (uploadType === 'students') {
      return (
        <TableRow key={row.id}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.firstName}</TableCell>
          <TableCell>{row.lastName}</TableCell>
          <TableCell>{row.grade}</TableCell>
          <TableCell>{row.section}</TableCell>
          <TableCell>{`${row.parent} (${row.parentContact})`}</TableCell>
        </TableRow>
      );
    }
    // Add other upload types preview rows here
    return null;
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mt-4">
          Preview Data
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Data Preview</DialogTitle>
          <DialogDescription>
            Showing a preview of the data to be imported from {file.name}
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-auto">
          <Table>
            <TableHeader>
              {renderPreviewHeaders()}
            </TableHeader>
            <TableBody>
              {previewData.map((row) => renderPreviewRow(row))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => setIsDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleUpload} 
            disabled={isUploading}
          >
            {isUploading ? "Processing..." : "Upload Data"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
