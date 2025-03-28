
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface OutstandingBalancesReportProps {
  period: string;
}

export const OutstandingBalancesReport = ({ period }: OutstandingBalancesReportProps) => {
  // Mock data for the report - in a real app, this would come from an API
  const outstandingData = [
    { status: "Critical (>30 days)", count: 32, amount: 48000, color: "#ef4444" },
    { status: "High (15-30 days)", count: 48, amount: 62400, color: "#f97316" },
    { status: "Medium (7-14 days)", count: 56, amount: 44800, color: "#eab308" },
    { status: "Low (<7 days)", count: 51, amount: 30600, color: "#22c55e" },
  ];

  const totalOutstanding = outstandingData.reduce((sum, item) => sum + item.amount, 0);
  const totalStudents = outstandingData.reduce((sum, item) => sum + item.count, 0);

  // Sample student data with outstanding balances
  const studentsWithBalance = [
    { id: "GHA025", name: "Mulenga Chanda", grade: "Grade 3B", balance: 2500, daysOverdue: 45 },
    { id: "GHA118", name: "Tembo David", grade: "Grade 7A", balance: 1500, daysOverdue: 22 },
    { id: "GHA056", name: "Banda Mary", grade: "Grade 5C", balance: 3000, daysOverdue: 18 },
    { id: "GHA073", name: "Phiri Joseph", grade: "Baby Class", balance: 1200, daysOverdue: 12 },
    { id: "GHA099", name: "Zimba Grace", grade: "Middle Class", balance: 750, daysOverdue: 5 },
    { id: "GHA132", name: "Mwansa Faith", grade: "Grade 1A", balance: 1350, daysOverdue: 9 },
    { id: "GHA045", name: "Nkonde Paul", grade: "Grade 4B", balance: 2700, daysOverdue: 30 },
    { id: "GHA087", name: "Lungu Peter", grade: "Grade 6A", balance: 1800, daysOverdue: 15 },
    { id: "GHA115", name: "Sakala Hope", grade: "Reception", balance: 950, daysOverdue: 3 },
    { id: "GHA062", name: "Mutale John", grade: "Grade 2C", balance: 1050, daysOverdue: 25 },
  ];

  const formatCurrency = (amount: number) => {
    return `K${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getOverdueStatus = (days: number) => {
    if (days > 30) {
      return <Badge variant="destructive">Critical</Badge>;
    } else if (days > 14) {
      return <Badge className="bg-orange-500">High</Badge>;
    } else if (days > 7) {
      return <Badge variant="outline" className="text-yellow-500 border-yellow-500">Medium</Badge>;
    } else {
      return <Badge variant="outline" className="text-green-500 border-green-500">Low</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Outstanding</CardTitle>
            <CardDescription>Total unpaid fees for {period}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalOutstanding)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Students with Balance</CardTitle>
            <CardDescription>Number of students with outstanding fees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Average Outstanding</CardTitle>
            <CardDescription>Average balance per student</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(Math.round(totalOutstanding / totalStudents))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Outstanding Balances by Status</CardTitle>
            <CardDescription>Distribution of overdue payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={outstandingData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {outstandingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Outstanding Balance Stats</CardTitle>
            <CardDescription>Analysis by overdue status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Overdue Status</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>% of Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {outstandingData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.status}</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell>{formatCurrency(item.amount)}</TableCell>
                    <TableCell>{Math.round((item.amount / totalOutstanding) * 100)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Students with Outstanding Balances</CardTitle>
          <CardDescription>Detailed list of unpaid fees</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Outstanding</TableHead>
                <TableHead>Days Overdue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentsWithBalance.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{formatCurrency(student.balance)}</TableCell>
                  <TableCell>{student.daysOverdue}</TableCell>
                  <TableCell>{getOverdueStatus(student.daysOverdue)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
