
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { uploadTypes } from './types';

interface DataTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const DataTypeSelector = ({ value, onChange }: DataTypeSelectorProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Select upload type</h3>
      <Select value={value} onValueChange={onChange}>
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
  );
};
