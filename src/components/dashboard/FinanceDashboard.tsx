
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, DollarSign, Users, TrendingUp, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

export const FinanceDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Finance Dashboard</h2>
        <p className="text-muted-foreground">
          Financial overview of Great Highway Academy
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Collections
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">K892,400</div>
            <p className="text-xs text-muted-foreground">
              +K54,200 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Outstanding Fees
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">K126,800</div>
            <p className="text-xs text-muted-foreground">
              12.4% of total fees
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Students with Balance
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-muted-foreground">
              13% of total students
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Collection Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.6%</div>
            <p className="text-xs text-muted-foreground">
              +2.3% from last term
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle>Collection Progress by Grade</CardTitle>
            <CardDescription>
              Fee collection status for current term
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Baby Class (K3,000 per student)</p>
                  <p className="text-sm font-medium">90.2%</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground justify-between mb-2">
                  <p>98 students • K264,600 collected of K294,000 total</p>
                  <p>K29,400 outstanding</p>
                </div>
                <Progress value={90.2} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Middle Class (K2,700 per student)</p>
                  <p className="text-sm font-medium">85.7%</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground justify-between mb-2">
                  <p>112 students • K258,552 collected of K302,400 total</p>
                  <p>K43,848 outstanding</p>
                </div>
                <Progress value={85.7} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Reception (K2,700 per student)</p>
                  <p className="text-sm font-medium">95.7%</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground justify-between mb-2">
                  <p>104 students • K268,056 collected of K280,800 total</p>
                  <p>K12,744 outstanding</p>
                </div>
                <Progress value={95.7} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Grade 1-4 (K2,700 per student)</p>
                  <p className="text-sm font-medium">88.5%</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground justify-between mb-2">
                  <p>425 students • K1,014,750 collected of K1,147,500 total</p>
                  <p>K132,750 outstanding</p>
                </div>
                <Progress value={88.5} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Grade 5-7 (K3,000 per student)</p>
                  <p className="text-sm font-medium">84.2%</p>
                </div>
                <div className="flex items-center text-xs text-muted-foreground justify-between mb-2">
                  <p>325 students • K821,850 collected of K975,000 total</p>
                  <p>K153,150 outstanding</p>
                </div>
                <Progress value={84.2} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/fees">
              <Button variant="outline" className="w-full">
                <span>View detailed fee records</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Last 10 fee payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Chanda Mutale - Grade 6A</p>
                  <span className="font-medium text-green-500">K3,000</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">Term 1 Fees - Full Payment</p>
                  <p className="text-xs text-muted-foreground">Today, 9:32 AM</p>
                </div>
              </div>
              
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">David Mulenga - Grade 3B</p>
                  <span className="font-medium text-green-500">K1,350</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">Term 1 Fees - Partial Payment</p>
                  <p className="text-xs text-muted-foreground">Today, 8:15 AM</p>
                </div>
              </div>
              
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Faith Mwansa - Reception</p>
                  <span className="font-medium text-green-500">K2,700</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">Term 1 Fees - Full Payment</p>
                  <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                </div>
              </div>
              
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Peter Tembo - Grade 7A</p>
                  <span className="font-medium text-green-500">K1,500</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">Term 1 Fees - Partial Payment</p>
                  <p className="text-xs text-muted-foreground">Yesterday, 11:20 AM</p>
                </div>
              </div>
              
              <div className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Grace Banda - Grade 2C</p>
                  <span className="font-medium text-green-500">K2,700</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">Term 1 Fees - Full Payment</p>
                  <p className="text-xs text-muted-foreground">Apr 21, 2025, 2:10 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <span>View all transactions</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Financial reports and statements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Term 1 Collection Report</p>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Detailed fee collection report for Term 1, 2025
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Outstanding Balances</p>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    List of students with outstanding balances
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Financial Summary 2025</p>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Annual financial summary report
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/reports">
              <Button variant="outline" className="w-full">
                <span>View all reports</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fee Analytics</CardTitle>
            <CardDescription>
              Financial performance insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium">Collection Trend</p>
                </div>
                <div className="h-28 w-full rounded-md bg-secondary">
                  <div className="flex h-full items-end p-2">
                    <div className="w-1/12 h-[30%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[40%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[45%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[60%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[75%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[65%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[80%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[90%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[85%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[95%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[88%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[95%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Fee Payment Methods</p>
                    <p className="text-xs text-muted-foreground">
                      Analysis of payment methods used
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">View</Button>
              </div>
              
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Term Comparison</p>
                    <p className="text-xs text-muted-foreground">
                      Fee collection across terms
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">View</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/analytics">
              <Button variant="outline" className="w-full">
                <span>View detailed analytics</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
