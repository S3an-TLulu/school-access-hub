
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, CreditCard, BookOpen, CalendarDays, Bell, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <p className="text-muted-foreground">
            Complete overview of Great Highway Academy
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Announcements
          </Button>
          <Button variant="outline">
            <CalendarDays className="mr-2 h-4 w-4" />
            Schedule
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="administration">Administration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-transform duration-200 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,438</div>
                <p className="text-xs text-muted-foreground">
                  +12 from last month
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-transform duration-200 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Fee Collection
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">K892,400</div>
                <p className="text-xs text-muted-foreground">
                  87.6% of total expected
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-transform duration-200 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Academic Performance
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76.8%</div>
                <p className="text-xs text-muted-foreground">
                  +2.4% from last term
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-transform duration-200 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Attendance Rate
                </CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">
                  -0.5% from last week
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="col-span-2 row-span-2">
              <CardHeader>
                <CardTitle>School Performance Overview</CardTitle>
                <CardDescription>
                  Key metrics across all departments for current term
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full rounded-md bg-secondary p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Academics Performance
                        </div>
                        <div className="text-sm font-medium">76.8%</div>
                      </div>
                      <Progress value={76.8} className="mt-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Fee Collection
                        </div>
                        <div className="text-sm font-medium">87.6%</div>
                      </div>
                      <Progress value={87.6} className="mt-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Attendance Rate
                        </div>
                        <div className="text-sm font-medium">94.2%</div>
                      </div>
                      <Progress value={94.2} className="mt-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Teacher Performance
                        </div>
                        <div className="text-sm font-medium">84.5%</div>
                      </div>
                      <Progress value={84.5} className="mt-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Parent Engagement
                        </div>
                        <div className="text-sm font-medium">68.2%</div>
                      </div>
                      <Progress value={68.2} className="mt-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">
                          Infrastructure Usage
                        </div>
                        <div className="text-sm font-medium">92.3%</div>
                      </div>
                      <Progress value={92.3} className="mt-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/reports">
                  <Button variant="outline" className="w-full">
                    <span>View detailed reports</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>
                  Latest school-wide announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium">Term 2 Schedule</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Term 2 begins on May 15, 2025. All teachers should submit their lesson plans by May 1.
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium">Staff Meeting</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Important staff meeting on April 28, 2025 at 2:00 PM in the conference room.
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium">Facility Updates</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      New computer lab equipment installation will begin next week.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <span>Post announcement</span>
                  <Bell className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Calendar for the next 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rounded-md border p-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <CalendarDays className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Parent-Teacher Meeting</p>
                      <p className="text-xs text-muted-foreground">
                        April 24, 2025 • 3:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-md border p-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <CalendarDays className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Science Fair</p>
                      <p className="text-xs text-muted-foreground">
                        April 25, 2025 • 10:00 AM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-md border p-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <CalendarDays className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Board Meeting</p>
                      <p className="text-xs text-muted-foreground">
                        April 27, 2025 • 9:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/calendar">
                  <Button variant="outline" className="w-full">
                    <span>View calendar</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="academics" className="space-y-4">
          <h3 className="text-lg font-medium">Academic Performance by Grade</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Academic content would go here */}
            <Card>
              <CardHeader>
                <CardTitle>Grade 5-7</CardTitle>
                <CardDescription>Performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Grade</span>
                    <span className="font-medium">78.2%</span>
                  </div>
                  <Progress value={78.2} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Attendance</span>
                    <span className="font-medium">92.5%</span>
                  </div>
                  <Progress value={92.5} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Homework Completion</span>
                    <span className="font-medium">87.0%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Grade 1-4</CardTitle>
                <CardDescription>Performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Grade</span>
                    <span className="font-medium">82.7%</span>
                  </div>
                  <Progress value={82.7} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Attendance</span>
                    <span className="font-medium">95.1%</span>
                  </div>
                  <Progress value={95.1} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Homework Completion</span>
                    <span className="font-medium">90.3%</span>
                  </div>
                  <Progress value={90.3} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Reception</CardTitle>
                <CardDescription>Performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Grade</span>
                    <span className="font-medium">88.4%</span>
                  </div>
                  <Progress value={88.4} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Attendance</span>
                    <span className="font-medium">93.8%</span>
                  </div>
                  <Progress value={93.8} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Activity Participation</span>
                    <span className="font-medium">96.2%</span>
                  </div>
                  <Progress value={96.2} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="finance" className="space-y-4">
          <h3 className="text-lg font-medium">Financial Overview</h3>
          {/* Finance content would go here */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Fee Collection Status</CardTitle>
                <CardDescription>Current term collection rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Grade 5-7</div>
                      <div className="text-sm font-medium">92.3%</div>
                    </div>
                    <Progress value={92.3} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Grade 1-4</div>
                      <div className="text-sm font-medium">88.5%</div>
                    </div>
                    <Progress value={88.5} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Reception</div>
                      <div className="text-sm font-medium">95.7%</div>
                    </div>
                    <Progress value={95.7} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Baby Class</div>
                      <div className="text-sm font-medium">90.2%</div>
                    </div>
                    <Progress value={90.2} className="mt-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/fees">
                  <Button size="sm">View all payment records</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Budget Allocation</CardTitle>
                <CardDescription>How funds are being utilized</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Staff Salaries</div>
                      <div className="text-sm font-medium">45%</div>
                    </div>
                    <Progress value={45} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Infrastructure</div>
                      <div className="text-sm font-medium">20%</div>
                    </div>
                    <Progress value={20} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Academic Resources</div>
                      <div className="text-sm font-medium">15%</div>
                    </div>
                    <Progress value={15} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Technology</div>
                      <div className="text-sm font-medium">10%</div>
                    </div>
                    <Progress value={10} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Other Expenses</div>
                      <div className="text-sm font-medium">10%</div>
                    </div>
                    <Progress value={10} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="administration" className="space-y-4">
          <h3 className="text-lg font-medium">Administration Tools</h3>
          {/* Administration content would go here */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Staff Management</CardTitle>
                <CardDescription>Manage school personnel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Staff</span>
                    <span className="font-medium">86</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Teachers</span>
                    <span className="font-medium">64</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Administrative</span>
                    <span className="font-medium">14</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Support</span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/staff">
                  <Button size="sm">Manage Staff</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>System Access</CardTitle>
                <CardDescription>User and role management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Users</span>
                    <span className="font-medium">1,642</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New Accounts (30d)</span>
                    <span className="font-medium">38</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pending Approvals</span>
                    <span className="font-medium text-orange-500">12</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/settings/users">
                  <Button size="sm">Manage Users</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>School Policies</CardTitle>
                <CardDescription>Review and update policies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="rounded-md border p-2">
                    <p className="text-sm font-medium">Academic Policy</p>
                    <p className="text-xs text-muted-foreground">Last updated: Mar 15, 2025</p>
                  </div>
                  <div className="rounded-md border p-2">
                    <p className="text-sm font-medium">Code of Conduct</p>
                    <p className="text-xs text-muted-foreground">Last updated: Jan 10, 2025</p>
                  </div>
                  <div className="rounded-md border p-2">
                    <p className="text-sm font-medium">Fee Policy</p>
                    <p className="text-xs text-muted-foreground">Last updated: Feb 22, 2025</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/settings/policies">
                  <Button size="sm">View All Policies</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
