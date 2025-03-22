
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, CalendarDays, Clock, CheckSquare, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

export const TeacherDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your classes and students
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              My Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">
              Across 3 classes
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Grade
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72.4%</div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last term
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attendance Today
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.3%</div>
            <p className="text-xs text-muted-foreground">
              83/87 students present
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Tasks
            </CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              3 high priority
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle>My Classes</CardTitle>
            <CardDescription>
              Your teaching schedule and class performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Grade 5A - Mathematics</p>
                    <p className="text-sm text-muted-foreground">
                      Mon, Wed, Fri • 8:00 AM - 9:30 AM
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Take Attendance</Button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Performance: 76.2%</span>
                    <span>Attendance: 94.1%</span>
                  </div>
                  <Progress value={76.2} className="mt-2" />
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Grade 6B - Mathematics</p>
                    <p className="text-sm text-muted-foreground">
                      Tue, Thu • 10:00 AM - 11:30 AM
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Take Attendance</Button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Performance: 68.7%</span>
                    <span>Attendance: 89.2%</span>
                  </div>
                  <Progress value={68.7} className="mt-2" />
                </div>
              </div>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Grade 7C - Mathematics</p>
                    <p className="text-sm text-muted-foreground">
                      Mon, Wed, Fri • 1:00 PM - 2:30 PM
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Take Attendance</Button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Performance: 71.5%</span>
                    <span>Attendance: 92.8%</span>
                  </div>
                  <Progress value={71.5} className="mt-2" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/academics">
              <Button variant="outline" className="w-full">
                <span>View all class details</span>
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
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Grade 5A - Mathematics</p>
                    <span className="text-xs text-muted-foreground">8:00 AM</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Room 202 • 28 students
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-500">In progress</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Staff Meeting</p>
                    <span className="text-xs text-muted-foreground">11:00 AM</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Conference Room • 45 minutes
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <span className="text-xs text-orange-500">Upcoming</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Grade 7C - Mathematics</p>
                    <span className="text-xs text-muted-foreground">1:00 PM</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Room 105 • 30 students
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <span className="text-xs text-orange-500">Upcoming</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Grade Committee</p>
                    <span className="text-xs text-muted-foreground">3:30 PM</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Staff Room • 60 minutes
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                    <span className="text-xs text-orange-500">Upcoming</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/calendar">
              <Button variant="outline" className="w-full">
                <span>View full calendar</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Parent Communications</CardTitle>
            <CardDescription>
              Recent messages from parents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Sarah Johnson (Parent of Michael)</p>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Question about the upcoming mathematics test preparation...
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">David Wilson (Parent of Emma)</p>
                    <span className="text-xs text-muted-foreground">Yesterday</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Thank you for the additional resources you provided for Emma...
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-md border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Maria Garcia (Parent of Carlos)</p>
                    <span className="text-xs text-muted-foreground">3 days ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Carlos will be absent next Monday due to a medical appointment...
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/communications">
              <Button variant="outline" className="w-full">
                <span>View all messages</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tasks & Reminders</CardTitle>
            <CardDescription>
              Your pending academic tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <p className="text-sm font-medium">Submit Grade 5A test scores</p>
                </div>
                <span className="text-xs font-medium text-red-500">Due today</span>
              </div>
              
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <p className="text-sm font-medium">Prepare term progress reports</p>
                </div>
                <span className="text-xs font-medium text-red-500">Due tomorrow</span>
              </div>
              
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <p className="text-sm font-medium">Science fair project reviews</p>
                </div>
                <span className="text-xs text-muted-foreground">Due in 3 days</span>
              </div>
              
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <p className="text-sm font-medium">Submit lesson plans for next week</p>
                </div>
                <span className="text-xs text-muted-foreground">Due in 4 days</span>
              </div>
              
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <p className="text-sm font-medium">Curriculum development meeting</p>
                </div>
                <span className="text-xs text-muted-foreground">Due in 1 week</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button size="sm" variant="outline">Add New Task</Button>
            <Button size="sm">Mark Complete</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
