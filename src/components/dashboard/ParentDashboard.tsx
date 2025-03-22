
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, CreditCard, CalendarDays, BookOpen, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

export const ParentDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Parent Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome! Monitor your child's progress and school activities
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>My Children</CardTitle>
            <CardDescription>
              Academic overview and status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="font-medium">Michael Johnson</h3>
                      <p className="text-sm text-muted-foreground">Grade 5A • Student ID: GHA2025-156</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button variant="outline" size="sm">
                        <Clock className="mr-2 h-3 w-3" />
                        Attendance
                      </Button>
                      <Button variant="outline" size="sm">
                        <BookOpen className="mr-2 h-3 w-3" />
                        Academics
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-6 sm:grid-cols-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Academic Performance</p>
                        <p className="text-sm font-medium">78%</p>
                      </div>
                      <Progress value={78} className="mt-2 h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        Above class average by 3.2%
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Attendance</p>
                        <p className="text-sm font-medium">96.2%</p>
                      </div>
                      <Progress value={96.2} className="mt-2 h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        2 absences this term
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Fee Status</p>
                        <p className="text-sm font-medium">100%</p>
                      </div>
                      <Progress value={100} className="mt-2 h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        Fully paid for current term
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="font-medium">Emma Johnson</h3>
                      <p className="text-sm text-muted-foreground">Grade 2B • Student ID: GHA2025-243</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button variant="outline" size="sm">
                        <Clock className="mr-2 h-3 w-3" />
                        Attendance
                      </Button>
                      <Button variant="outline" size="sm">
                        <BookOpen className="mr-2 h-3 w-3" />
                        Academics
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-6 sm:grid-cols-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Academic Performance</p>
                        <p className="text-sm font-medium">85%</p>
                      </div>
                      <Progress value={85} className="mt-2 h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        Above class average by 7.5%
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Attendance</p>
                        <p className="text-sm font-medium">93.8%</p>
                      </div>
                      <Progress value={93.8} className="mt-2 h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        3 absences this term
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Fee Status</p>
                        <p className="text-sm font-medium">100%</p>
                      </div>
                      <Progress value={100} className="mt-2 h-2" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        Fully paid for current term
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>
              Fee payments and upcoming dues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Term 1, 2025 Fees</p>
                      <p className="text-sm text-muted-foreground">Michael Johnson - Grade 5A</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">K3,000</p>
                    <p className="text-xs text-green-500">Paid in full</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Term 1, 2025 Fees</p>
                      <p className="text-sm text-muted-foreground">Emma Johnson - Grade 2B</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">K2,700</p>
                    <p className="text-xs text-green-500">Paid in full</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Term 2, 2025 Fees</p>
                      <p className="text-sm text-muted-foreground">Michael Johnson - Grade 5A</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">K3,000</p>
                    <p className="text-xs text-muted-foreground">Due: May 15, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Term 2, 2025 Fees</p>
                      <p className="text-sm text-muted-foreground">Emma Johnson - Grade 2B</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">K2,700</p>
                    <p className="text-xs text-muted-foreground">Due: May 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/fees">
              <Button variant="outline" className="w-full">
                <span>View payment details & history</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Academic Calendar</CardTitle>
            <CardDescription>
              Upcoming events and activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Parent-Teacher Meeting</p>
                  <p className="text-sm text-muted-foreground">
                    April 24, 2025 • 3:00 PM - 5:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Individual sessions with subject teachers
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Science Fair</p>
                  <p className="text-sm text-muted-foreground">
                    April 25, 2025 • 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    All students will showcase science projects
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Term End & Report Collection</p>
                  <p className="text-sm text-muted-foreground">
                    April 30, 2025 • 9:00 AM - 12:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Collect term reports from respective class teachers
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/calendar">
              <Button variant="outline" className="w-full">
                <span>View full school calendar</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Messages from Teachers</CardTitle>
            <CardDescription>
              Recent communications from school
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Mrs. Williams (Mathematics)</p>
                      <p className="text-xs text-muted-foreground">Regarding: Michael Johnson</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
                <p className="mt-2 text-sm">
                  Michael has been showing excellent progress in his mathematics class. The upcoming test on Friday will cover chapters 6-8.
                </p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Mr. Thompson (Science)</p>
                      <p className="text-xs text-muted-foreground">Regarding: Emma Johnson</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
                <p className="mt-2 text-sm">
                  Emma's science project is progressing well. Please ensure she brings her completed project model on Monday for the preliminary review.
                </p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Ms. Garcia (English)</p>
                      <p className="text-xs text-muted-foreground">Regarding: Michael Johnson</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
                <p className="mt-2 text-sm">
                  Michael needs to complete his book report by next week. He should choose a book from the recommended reading list I shared last month.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to="/communications">
              <Button variant="outline">View all messages</Button>
            </Link>
            <Button>Send Message</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
            <CardDescription>
              Support materials for your children
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Grade 5 Mathematics</p>
                      <p className="text-xs text-muted-foreground">For: Michael Johnson</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                <p className="mt-2 text-sm">
                  Additional practice problems and solution guides for current unit.
                </p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Grade 2 Reading List</p>
                      <p className="text-xs text-muted-foreground">For: Emma Johnson</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                <p className="mt-2 text-sm">
                  Recommended books and reading materials for this term.
                </p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Science Fair Guidelines</p>
                      <p className="text-xs text-muted-foreground">For: All Students</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                <p className="mt-2 text-sm">
                  Instructions and requirements for the upcoming science fair projects.
                </p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Term 1 Curriculum Overview</p>
                      <p className="text-xs text-muted-foreground">For: All Parents</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                <p className="mt-2 text-sm">
                  Summary of learning objectives and topics for Term 1.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/resources">
              <Button variant="outline" className="w-full">
                <span>Explore all learning resources</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
