
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Define the type of data that can be uploaded
interface UploadType {
  id: string;
  name: string;
  description: string;
  sampleHeaders: string[];
}

export const BulkDataUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadType, setUploadType] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Define different types of uploads
  const uploadTypes: UploadType[] = [
    {
      id: 'students',
      name: 'Students Data',
      description: 'Upload student information including name, grade, and section',
      sampleHeaders: ['Name', 'Grade', 'Section', 'Admission Number', 'Parent Name', 'Parent Contact']
    },
    {
      id: 'attendance',
      name: 'Attendance Records',
      description: 'Upload daily attendance records for students',
      sampleHeaders: ['Student ID', 'Date', 'Status', 'Remarks']
    },
    {
      id: 'lunch',
      name: 'Lunch Records',
      description: 'Upload lunch participation and meal preferences',
      sampleHeaders: ['Student ID', 'Date', 'Meal Type', 'Participation', 'Special Requirements']
    },
    {
      id: 'transport',
      name: 'Transport Records',
      description: 'Upload transport route and pickup details',
      sampleHeaders: ['Student ID', 'Route Number', 'Pickup Location', 'Pickup Time', 'Drop Location', 'Drop Time']
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check if it's an Excel file
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          file.type === 'application/vnd.ms-excel' ||
          file.name.endsWith('.xlsx') ||
          file.name.endsWith('.xls')) {
        setSelectedFile(file);
        generatePreview(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an Excel file (.xlsx or .xls)",
          variant: "destructive"
        });
        e.target.value = '';
        setSelectedFile(null);
      }
    }
  };

  const generatePreview = (file: File) => {
    // In a real application, you would use a library like xlsx to parse the Excel file
    // For this example, we'll simulate a preview with mock data
    const mockPreviewData = [
      { id: 1, name: "John Doe", grade: "5", section: "A" },
      { id: 2, name: "Jane Smith", grade: "5", section: "B" },
      { id: 3, name: "Bob Johnson", grade: "6", section: "A" },
    ];
    
    setPreviewData(mockPreviewData);
  };

  const handleUpload = async () => {
    if (!selectedFile || !uploadType) {
      toast({
        title: "Missing information",
        description: "Please select both a file and data type",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    try {
      // Simulate an upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Upload successful",
        description: `${selectedFile.name} has been processed successfully.`,
      });
      
      // Reset the form
      setSelectedFile(null);
      setPreviewData([]);
      setIsDialogOpen(false);
      
      // Reset the file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
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

  const selectedUploadType = uploadTypes.find(type => type.id === uploadType);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Data Upload</CardTitle>
        <CardDescription>
          Import data from Excel files to update student records, attendance, lunch, and transport information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Select upload type</h3>
          <Select value={uploadType} onValueChange={setUploadType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select data type to upload" />
            </SelectTrigger>
            <SelectContent>
              {uploadTypes.map(type => (
                <SelectItem key={type.id} value={type.id}>
                  {type.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {uploadType && (
          <div className="space-y-4">
            <div className="rounded-md border border-dashed p-6 text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
              <h3 className="mt-2 text-sm font-medium">Upload {selectedUploadType?.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {selectedUploadType?.description}
              </p>
              <Input
                id="file-upload"
                type="file"
                className="mt-4"
                onChange={handleFileChange}
                accept=".xlsx,.xls"
              />
            </div>

            {selectedUploadType && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Expected Excel columns</h4>
                <div className="text-xs p-3 bg-muted rounded-md overflow-auto">
                  {selectedUploadType.sampleHeaders.join(' | ')}
                </div>
              </div>
            )}
          </div>
        )}

        {selectedFile && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full mt-4">
                Preview Data
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Data Preview</DialogTitle>
                <DialogDescription>
                  Showing a preview of the data to be imported from {selectedFile.name}
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[400px] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Section</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {previewData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.grade}</TableCell>
                        <TableCell>{row.section}</TableCell>
                      </TableRow>
                    ))}
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
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          disabled={!selectedFile || !uploadType || isUploading}
          onClick={handleUpload}
        >
          {isUploading ? "Processing..." : "Upload Data"}
        </Button>
      </CardFooter>
    </Card>
  );
};
