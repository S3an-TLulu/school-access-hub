
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface FeeCollectionReportProps {
  period: string;
}

export const FeeCollectionReport = ({ period }: FeeCollectionReportProps) => {
  // Mock data for the report - in a real app, this would come from an API
  const collectionData = [
    { grade: "Baby Class", expected: 294000, collected: 264600, collection_rate: 90 },
    { grade: "Middle Class", expected: 302400, collected: 258552, collection_rate: 86 },
    { grade: "Reception", expected: 280800, collected: 268056, collection_rate: 96 },
    { grade: "Grade 1", expected: 287500, collected: 258750, collection_rate: 90 },
    { grade: "Grade 2", expected: 287500, collected: 244375, collection_rate: 85 },
    { grade: "Grade 3", expected: 287500, collected: 264500, collection_rate: 92 },
    { grade: "Grade 4", expected: 285000, collected: 247000, collection_rate: 87 },
    { grade: "Grade 5", expected: 325000, collected: 284375, collection_rate: 88 },
    { grade: "Grade 6", expected: 325000, collected: 273000, collection_rate: 84 },
    { grade: "Grade 7", expected: 325000, collected: 264375, collection_rate: 81 },
  ];

  const chartData = collectionData.map(item => ({
    name: item.grade,
    Expected: item.expected / 1000,
    Collected: item.collected / 1000,
  }));

  const totalExpected = collectionData.reduce((sum, item) => sum + item.expected, 0);
  const totalCollected = collectionData.reduce((sum, item) => sum + item.collected, 0);
  const overallRate = Math.round((totalCollected / totalExpected) * 100);

  const formatCurrency = (amount: number) => {
    return `K${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Expected</CardTitle>
            <CardDescription>Total fees expected for {period}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalExpected)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Collected</CardTitle>
            <CardDescription>Total fees collected for {period}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalCollected)}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Collection Rate</CardTitle>
            <CardDescription>Overall collection percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">{overallRate}%</div>
              <Progress value={overallRate} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fee Collection by Grade</CardTitle>
          <CardDescription>Comparison of expected vs collected fees</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Amount (K thousands)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`K${value}k`, 'Amount']} />
                <Legend />
                <Bar dataKey="Expected" fill="#8884d8" />
                <Bar dataKey="Collected" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Collection Report</CardTitle>
          <CardDescription>Breakdown by grade</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Grade</TableHead>
                <TableHead>Expected</TableHead>
                <TableHead>Collected</TableHead>
                <TableHead>Outstanding</TableHead>
                <TableHead>Collection Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {collectionData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.grade}</TableCell>
                  <TableCell>{formatCurrency(item.expected)}</TableCell>
                  <TableCell>{formatCurrency(item.collected)}</TableCell>
                  <TableCell>{formatCurrency(item.expected - item.collected)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-xs">
                        <Progress value={item.collection_rate} className="h-2" />
                      </div>
                      <span className="text-xs font-medium">{item.collection_rate}%</span>
                    </div>
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
