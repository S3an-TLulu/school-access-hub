
import { useState } from "react";
import { FeesStats } from "./FeesStats";
import { FeesFilters } from "./FeesFilters";
import { FeesTable } from "./FeesTable";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

export const FeesView = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleNewPayment = () => {
    toast({
      title: "Record new payment",
      description: "Payment recording form opened",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export initiated",
      description: "Fees report is being generated",
    });
  };

  const isFinanceOrAdmin = user?.role === 'finance' || user?.role === 'admin';

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Fees & Payments</h2>
          <p className="text-muted-foreground">
            Track and manage student fee payments
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {isFinanceOrAdmin && (
            <Button onClick={handleNewPayment} size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Record Payment
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <FeesStats />

      <FeesFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <Tabs defaultValue="tuition" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="tuition">Tuition</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="uniforms">Uniforms</TabsTrigger>
        </TabsList>
        <TabsContent value="tuition">
          <FeesTable 
            searchTerm={searchTerm}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            feeType="tuition"
          />
        </TabsContent>
        <TabsContent value="lunch">
          <FeesTable 
            searchTerm={searchTerm}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            feeType="lunch"
          />
        </TabsContent>
        <TabsContent value="transport">
          <FeesTable 
            searchTerm={searchTerm}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            feeType="transport"
          />
        </TabsContent>
        <TabsContent value="uniforms">
          <FeesTable 
            searchTerm={searchTerm}
            gradeFilter={selectedGrade}
            statusFilter={selectedStatus}
            feeType="uniforms"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
