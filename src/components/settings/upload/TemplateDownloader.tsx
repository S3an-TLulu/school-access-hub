
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { downloadTemplate } from './utils';
import { uploadTypes } from './types';

interface TemplateDownloaderProps {
  uploadType: string;
}

export const TemplateDownloader = ({ uploadType }: TemplateDownloaderProps) => {
  const handleDownloadTemplate = () => {
    downloadTemplate(uploadType, uploadTypes);
  };

  return (
    <Button 
      onClick={handleDownloadTemplate} 
      variant="outline" 
      className="flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      Download Template
    </Button>
  );
};
