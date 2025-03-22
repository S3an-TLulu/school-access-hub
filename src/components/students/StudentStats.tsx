
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wallet, Clock, GraduationCap } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const StudentStats = () => {
  const { user } = useAuth();
  const isFinance = user?.role === "finance";
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Students
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,248</div>
          <p className="text-xs text-muted-foreground">
            +4.2% from last term
          </p>
        </CardContent>
      </Card>
      
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {isFinance ? "Fee Collection Rate" : "Average Attendance"}
          </CardTitle>
          {isFinance ? (
            <Wallet className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Clock className="h-4 w-4 text-muted-foreground" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isFinance ? "86.4%" : "94.2%"}</div>
          <p className="text-xs text-muted-foreground">
            {isFinance ? "K964,800 collected" : "For current term"}
          </p>
        </CardContent>
      </Card>
      
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {isFinance ? "Outstanding Fees" : "Academic Performance"}
          </CardTitle>
          {isFinance ? (
            <Wallet className="h-4 w-4 text-muted-foreground" />
          ) : (
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isFinance ? "K152,400" : "73.8%"}</div>
          <p className="text-xs text-muted-foreground">
            {isFinance ? "13.6% of total fees" : "Average score"}
          </p>
        </CardContent>
      </Card>
      
      <Card className="transition-transform duration-200 hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {isFinance ? "Payment Due Students" : "New Enrollments"}
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isFinance ? "183" : "42"}</div>
          <p className="text-xs text-muted-foreground">
            {isFinance ? "14.7% of total students" : "This term"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
