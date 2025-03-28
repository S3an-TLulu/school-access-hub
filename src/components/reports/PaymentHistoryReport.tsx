
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { format } from "date-fns";

interface PaymentHistoryReportProps {
  period: string;
}

export const PaymentHistoryReport = ({ period }: PaymentHistoryReportProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("all");

  // Mock data for payment history - in a real app, this would come from an API
  const paymentHistory = [
    { id: "PMT654", studentId: "GHA025", studentName: "Mulenga Chanda", amount: 1500, date: new Date(2023, 3, 15), method: "cash", status: "success" },
    { id: "PMT655", studentId: "GHA118", studentName: "Tembo David", amount: 2000, date: new Date(2023, 3, 15), method: "bank", status: "success" },
    { id: "PMT656", studentId: "GHA056", studentName: "Banda Mary", amount: 1500, date: new Date(2023, 3, 16), method: "mobile", status: "success" },
    { id: "PMT657", studentId: "GHA073", studentName: "Phiri Joseph", amount: 1200, date: new Date(2023, 3, 16), method: "cash", status: "success" },
    { id: "PMT658", studentId: "GHA099", studentName: "Zimba Grace", amount: 750, date: new Date(2023, 3, 17), method: "mobile", status: "success" },
    { id: "PMT659", studentId: "GHA132", studentName: "Mwansa Faith", amount: 1350, date: new Date(2023, 3, 17), method: "bank", status: "success" },
    { id: "PMT660", studentId: "GHA045", studentName: "Nkonde Paul", amount: 2000, date: new Date(2023, 3, 18), method: "cash", status: "success" },
    { id: "PMT661", studentId: "GHA087", studentName: "Lungu Peter", amount: 1800, date: new Date(2023, 3, 18), method: "mobile", status: "success" },
    { id: "PMT662", studentId: "GHA115", studentName: "Sakala Hope", amount: 950, date: new Date(2023, 3, 19), method: "bank", status: "success" },
    { id: "PMT663", studentId: "GHA062", studentName: "Mutale John", amount: 1050, date: new Date(2023, 3, 19), method: "cash", status: "success" },
    { id: "PMT664", studentId: "GHA025", studentName: "Mulenga Chanda", amount: 1000, date: new Date(2023, 3, 20), method: "mobile", status: "failed" },
    { id: "PMT665", studentId: "GHA118", studentName: "Tembo David", amount: 1500, date: new Date(2023, 3, 20), method: "bank", status: "success" },
  ];

  // Filter payment history based on search and payment method
  const filteredPayments = paymentHistory.filter((payment) => {
    const matchesSearch = 
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      payment.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesMethod = paymentMethod === "all" || payment.method === paymentMethod;
    
    return matchesSearch && matchesMethod;
  });

  // Calculate statistics
  const totalPayments = filteredPayments.length;
  const totalAmount = filteredPayments.reduce((sum, payment) => sum + (payment.status === "success" ? payment.amount : 0), 0);
  const cashPayments = filteredPayments.filter(p => p.method === "cash" && p.status === "success").reduce((sum, p) => sum + p.amount, 0);
  const bankPayments = filteredPayments.filter(p => p.method === "bank" && p.status === "success").reduce((sum, p) => sum + p.amount, 0);
  const mobilePayments = filteredPayments.filter(p => p.method === "mobile" && p.status === "success").reduce((sum, p) => sum + p.amount, 0);

  const formatCurrency = (amount: number) => {
    return `K${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Payments</CardTitle>
            <CardDescription>Number of payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPayments}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Amount</CardTitle>
            <CardDescription>Total successful payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalAmount)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Breakdown by method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div className="flex justify-between">
                <span>Cash:</span>
                <span className="font-medium">{formatCurrency(cashPayments)}</span>
              </div>
              <div className="flex justify-between">
                <span>Bank Transfer:</span>
                <span className="font-medium">{formatCurrency(bankPayments)}</span>
              </div>
              <div className="flex justify-between">
                <span>Mobile Money:</span>
                <span className="font-medium">{formatCurrency(mobilePayments)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Average Payment</CardTitle>
            <CardDescription>Per transaction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalPayments ? Math.round(totalAmount / totalPayments * 100) / 100 : 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Search and filter payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by student name or ID..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="mobile">Mobile Money</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{payment.studentName}</div>
                      <div className="text-muted-foreground">{payment.studentId}</div>
                    </div>
                  </TableCell>
                  <TableCell>{format(payment.date, "MMM dd, yyyy")}</TableCell>
                  <TableCell>{formatCurrency(payment.amount)}</TableCell>
                  <TableCell>
                    {payment.method === "cash" && "Cash"}
                    {payment.method === "bank" && "Bank Transfer"}
                    {payment.method === "mobile" && "Mobile Money"}
                  </TableCell>
                  <TableCell>
                    {payment.status === "success" ? (
                      <Badge className="bg-green-500">Success</Badge>
                    ) : (
                      <Badge variant="destructive">Failed</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View Receipt</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
