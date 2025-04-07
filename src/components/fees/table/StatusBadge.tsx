
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  switch (status) {
    case 'paid':
      return <Badge className="bg-green-500 hover:bg-green-600">Paid</Badge>;
    case 'partial':
      return <Badge className="bg-blue-500 hover:bg-blue-600">Partial</Badge>;
    case 'pending':
      return <Badge variant="outline">Pending</Badge>;
    case 'overdue':
      return <Badge variant="destructive">Overdue</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};
