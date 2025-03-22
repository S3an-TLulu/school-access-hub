
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CalendarDays, Clock, CreditCard, BookMarked, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

export const StudentDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back, Student! Here's your academic overview
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attendance Rate
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.2%</div>
            <p className="text-xs text-muted-foreground">
              2 absences this term
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Academic Average
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last term
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Assignments Due
            </CardTitle>
            <BookMarked className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              2 due this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Class Rank
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Out of 28 students
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle>Academic Progress</CardTitle>
            <CardDescription>
              Subject performance for current term
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Mathematics</p>
                  <p>72%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={72} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: B</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>English Language</p>
                  <p>85%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={85} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: A</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Science</p>
                  <p>78%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={78} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: B+</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Social Studies</p>
                  <p>81%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={81} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: A-</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Physical Education</p>
                  <p>90%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={90} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: A+</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Art</p>
                  <p>88%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={88} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: A</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Music</p>
                  <p>75%</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={75} className="h-2 flex-1" />
                  <div className="w-12 text-xs text-muted-foreground">Grade: B</div>
                </div>
              </div>
              
              <div className="pt-2 text-center">
                <p className="text-sm font-medium">
                  Overall Average: <span className="text-primary">78.5%</span>
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/academics">
              <Button variant="outline" className="w-full">
                <span>View detailed academic records</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>
              Wednesday, April 22, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Mathematics</p>
                    <p className="text-xs text-green-500">Completed</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    8:00 AM - 9:30 AM
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Room 202 • Mrs. Williams
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">English Language</p>
                    <p className="text-xs text-orange-500">In Progress</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    10:00 AM - 11:30 AM
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Room 205 • Ms. Garcia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Lunch Break</p>
                    <p className="text-xs text-muted-foreground">Upcoming</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    12:00 PM - 1:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground">
                    School Cafeteria
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Science</p>
                    <p className="text-xs text-muted-foreground">Upcoming</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    1:30 PM - 3:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Lab 101 • Mr. Thompson
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/calendar">
              <Button variant="outline" className="w-full">
                <span>View weekly schedule</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>
              Homework and projects due soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookMarked className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-medium">Mathematics Assignment</p>
                      <p className="text-xs text-muted-foreground">
                        Problems from Chapter 7
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-red-500">Due Tomorrow</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookMarked className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium">Science Project</p>
                      <p className="text-xs text-muted-foreground">
                        Ecosystem Diorama
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-orange-500">Due in 3 days</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookMarked className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium">English Book Report</p>
                      <p className="text-xs text-muted-foreground">
                        "The Lion, the Witch and the Wardrobe"
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-orange-500">Due in 5 days</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookMarked className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Social Studies Research</p>
                      <p className="text-xs text-muted-foreground">
                        Famous Historical Figures
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 2 weeks</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/assignments">
              <Button variant="outline" className="w-full">
                <span>View all assignments</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>School Events & Activities</CardTitle>
            <CardDescription>
              Upcoming school events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Science Fair</p>
                  <p className="text-sm text-muted-foreground">
                    April 25, 2025 • 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Math Competition</p>
                  <p className="text-sm text-muted-foreground">
                    April 28, 2025 • 1:00 PM - 3:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">End of Term Ceremony</p>
                  <p className="text-sm text-muted-foreground">
                    April 30, 2025 • 10:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Sports Day</p>
                  <p className="text-sm text-muted-foreground">
                    May 10, 2025 • 9:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/events">
              <Button variant="outline" className="w-full">
                <span>View all school events</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fee Information</CardTitle>
            <CardDescription>
              Your payment status and history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Term 1, 2025 Fees</p>
                    <p className="text-sm text-muted-foreground">Grade 5A</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">Paid in Full</p>
                  </div>
                  <p className="text-sm text-muted-foreground">K3,000</p>
                  <p className="text-xs text-muted-foreground">Paid on: Feb 10, 2025</p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-medium">Payment Breakdown:</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Tuition</span>
                    <span>K2,700</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Books & Materials</span>
                    <span>K200</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Extracurricular Activities</span>
                    <span>K100</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 rounded-lg border p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Term 2, 2025 Fees</p>
                    <p className="text-sm text-muted-foreground">Grade 5A</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <p className="text-sm font-medium">Upcoming</p>
                  <p className="text-sm text-muted-foreground">K3,000</p>
                  <p className="text-xs text-muted-foreground">Due on: May 15, 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/fees">
              <Button variant="outline" className="w-full">
                <span>View complete fee details</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
            <CardDescription>
              Study materials and references
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Mathematics Resources</p>
                    <p className="text-xs text-muted-foreground">
                      Practice problems for upcoming test
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Access</Button>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Science Lab Materials</p>
                    <p className="text-xs text-muted-foreground">
                      Instructions for ecosystem project
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Access</Button>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">English Literature</p>
                    <p className="text-xs text-muted-foreground">
                      Book report guidelines and rubric
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Access</Button>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Study Guides</p>
                    <p className="text-xs text-muted-foreground">
                      General revision materials for all subjects
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Access</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/resources">
              <Button variant="outline" className="w-full">
                <span>View all learning resources</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
