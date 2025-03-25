
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { uploadTypes } from './types';
import { validateFile, generatePreview } from './utils';

interface FileUploaderProps {
  uploadType: string;
  onFileChange: (file: File | null, previewData: any[]) => void;
}

export const FileUploader = ({ uploadType, onFileChange }: FileUploaderProps) => {
  const selectedUploadType = uploadTypes.find(type => type.id === uploadType);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (validateFile(file)) {
        const previewData = generatePreview(file);
        onFileChange(file, previewData);
      } else {
        e.target.value = '';
        onFileChange(null, []);
      }
    }
  };

  return (
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
        accept=".xlsx,.xls,.csv"
      />

      {selectedUploadType && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Expected Excel columns</h4>
          <div className="text-xs p-3 bg-muted rounded-md overflow-auto">
            {selectedUploadType.sampleHeaders.join(' | ')}
          </div>
        </div>
      )}
    </div>
  );
};
