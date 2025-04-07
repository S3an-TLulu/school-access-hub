
import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EmptyState = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-center p-6">
        <div className="text-center">
          <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
          <p className="text-center text-muted-foreground">No payment records match your filters.</p>
        </div>
      </CardContent>
    </Card>
  );
};
