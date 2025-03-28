
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileDown, Filter } from "lucide-react";
import { FeeCollectionReport } from "./FeeCollectionReport";
import { OutstandingBalancesReport } from "./OutstandingBalancesReport";
import { PaymentHistoryReport } from "./PaymentHistoryReport";
import { useToast } from "@/hooks/use-toast";

export const ReportsView = () => {
  const { toast } = useToast();
  const [selectedPeriod, setSelectedPeriod] = useState("current-term");

  const handleExport = () => {
    toast({
      title: "Report exported",
      description: "The report has been exported to Excel format",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
          <p className="text-muted-foreground">
            Comprehensive reports on fee collection and financial performance
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleExport}>
          <FileDown className="mr-2 h-4 w-4" />
          Export to Excel
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Report Period</CardTitle>
          <CardDescription>Select time period for the reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedPeriod === "current-term" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedPeriod("current-term")}
            >
              Current Term
            </Button>
            <Button 
              variant={selectedPeriod === "last-term" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedPeriod("last-term")}
            >
              Last Term
            </Button>
            <Button 
              variant={selectedPeriod === "current-year" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedPeriod("current-year")}
            >
              Current Year
            </Button>
            <Button 
              variant={selectedPeriod === "last-year" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedPeriod("last-year")}
            >
              Last Year
            </Button>
            <Button 
              variant={selectedPeriod === "custom" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedPeriod("custom")}
            >
              <Filter className="mr-2 h-4 w-4" />
              Custom Range
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="collection" className="space-y-4">
        <TabsList>
          <TabsTrigger value="collection">Fee Collection</TabsTrigger>
          <TabsTrigger value="outstanding">Outstanding Balances</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="collection">
          <FeeCollectionReport period={selectedPeriod} />
        </TabsContent>
        
        <TabsContent value="outstanding">
          <OutstandingBalancesReport period={selectedPeriod} />
        </TabsContent>
        
        <TabsContent value="history">
          <PaymentHistoryReport period={selectedPeriod} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
