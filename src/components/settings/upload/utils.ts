
import { toast } from '@/hooks/use-toast';
import { UploadType } from './types';

export const generatePreview = (file: File) => {
  // This is a mock preview generator that would be replaced with actual Excel parsing
  const mockPreviewData = [
    { id: 1, name: "John Doe", grade: "5", section: "A" },
    { id: 2, name: "Jane Smith", grade: "5", section: "B" },
    { id: 3, name: "Bob Johnson", grade: "6", section: "A" },
  ];
  
  return mockPreviewData;
};

export const downloadTemplate = (uploadType: string, uploadTypes: UploadType[]) => {
  if (!uploadType) {
    toast({
      title: "Missing information",
      description: "Please select a data type first",
      variant: "destructive"
    });
    return;
  }

  const selectedUploadTypeObj = uploadTypes.find(type => type.id === uploadType);
  
  if (!selectedUploadTypeObj) {
    toast({
      title: "Error",
      description: "Invalid data type selected",
      variant: "destructive"
    });
    return;
  }
  
  // Create CSV content from the template data
  const headers = selectedUploadTypeObj.sampleHeaders;
  let csvContent = headers.join(',') + '\n';
  
  // Add sample data rows
  selectedUploadTypeObj.templateData.forEach(row => {
    const rowData = headers.map(header => {
      // Escape commas and quotes in the values
      const value = String(row[header] || '');
      return value.includes(',') || value.includes('"') 
        ? `"${value.replace(/"/g, '""')}"` 
        : value;
    });
    csvContent += rowData.join(',') + '\n';
  });
  
  // Create a Blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a download link and trigger download
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', selectedUploadTypeObj.templateFilename.replace('.xlsx', '.csv'));
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  toast({
    title: "Template downloaded",
    description: `${selectedUploadTypeObj.templateFilename.replace('.xlsx', '.csv')} has been downloaded.`,
  });
};

export const validateFile = (file: File) => {
  if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
      file.type === 'application/vnd.ms-excel' ||
      file.name.endsWith('.xlsx') ||
      file.name.endsWith('.xls') ||
      file.name.endsWith('.csv')) {
    return true;
  }
  
  toast({
    title: "Invalid file type",
    description: "Please upload an Excel file (.xlsx or .xls) or CSV file",
    variant: "destructive"
  });
  
  return false;
};
