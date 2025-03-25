
import { useState } from 'react';
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

import { DataTypeSelector } from './upload/DataTypeSelector';
import { TemplateDownloader } from './upload/TemplateDownloader';
import { FileUploader } from './upload/FileUploader';
import { DataPreview } from './upload/DataPreview';

export const BulkDataUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadType, setUploadType] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [previewData, setPreviewData] = useState<any[]>([]);

  const handleFileChange = (file: File | null, filePreviewData: any[]) => {
    setSelectedFile(file);
    setPreviewData(filePreviewData);
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Upload successful",
        description: `${selectedFile.name} has been processed successfully.`,
      });
      
      setSelectedFile(null);
      setPreviewData([]);
      
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Data Upload</CardTitle>
        <CardDescription>
          Import data from Excel files to update student records, attendance, lunch, and transport information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <DataTypeSelector value={uploadType} onChange={setUploadType} />

        {uploadType && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <TemplateDownloader uploadType={uploadType} />
            </div>
            
            <FileUploader 
              uploadType={uploadType} 
              onFileChange={handleFileChange} 
            />
          </div>
        )}

        {selectedFile && (
          <DataPreview 
            file={selectedFile} 
            previewData={previewData} 
            onUpload={handleUpload} 
          />
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
