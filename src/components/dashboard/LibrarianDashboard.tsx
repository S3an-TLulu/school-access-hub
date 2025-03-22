
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked, Clock, Users, Search, Plus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

export const LibrarianDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Library Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to the Great Highway Academy Library management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Books
            </CardTitle>
            <BookMarked className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,642</div>
            <p className="text-xs text-muted-foreground">
              +125 added this term
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Books Borrowed
            </CardTitle>
            <BookMarked className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">287</div>
            <p className="text-xs text-muted-foreground">
              Currently checked out
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overdue Returns
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">42</div>
            <p className="text-xs text-muted-foreground">
              Pending collection
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-transform duration-200 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Members
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">864</div>
            <p className="text-xs text-muted-foreground">
              72% of total students
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest book check-outs and returns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <p className="font-medium">David Mulenga (Grade 3B)</p>
                    <p className="text-sm text-muted-foreground">
                      Borrowed: <span className="font-medium">"Charlotte's Web"</span>
                    </p>
                  </div>
                  <p className="text-xs text-green-500">Just now</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <p>Book ID: GHA-LIB-1057</p>
                  <p>Due: May 6, 2025</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <p className="font-medium">Faith Mwansa (Reception)</p>
                    <p className="text-sm text-muted-foreground">
                      Returned: <span className="font-medium">"The Very Hungry Caterpillar"</span>
                    </p>
                  </div>
                  <p className="text-xs text-green-500">10 minutes ago</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <p>Book ID: GHA-LIB-0358</p>
                  <p>Condition: Good</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <p className="font-medium">Michael Mbewe (Grade 6A)</p>
                    <p className="text-sm text-muted-foreground">
                      Borrowed: <span className="font-medium">"Percy Jackson & The Lightning Thief"</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <p>Book ID: GHA-LIB-2571</p>
                  <p>Due: May 6, 2025</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <p className="font-medium">Grace Banda (Grade 2C)</p>
                    <p className="text-sm text-muted-foreground">
                      Returned: <span className="font-medium">"Matilda"</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <p>Book ID: GHA-LIB-1842</p>
                  <p>Condition: Excellent</p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <p className="font-medium">John Mumba (Grade 7B)</p>
                    <p className="text-sm text-muted-foreground">
                      Borrowed: <span className="font-medium">"The Hobbit"</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <p>Book ID: GHA-LIB-0926</p>
                  <p>Due: May 5, 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full gap-2">
              <Button variant="outline" className="flex-1">
                <span>Check-out book</span>
                <BookMarked className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex-1">
                <span>Return book</span>
                <BookMarked className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Library management tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-primary" />
                    <p className="font-medium">Search Books</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Find books by title, author, or ID
                  </p>
                  <div className="mt-2 w-full">
                    <input
                      type="text"
                      placeholder="Enter search term..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button size="sm" className="mt-2">Search</Button>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    <p className="font-medium">Add New Book</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <p className="font-medium">Overdue Books</p>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <p className="font-medium">Member Management</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/library/inventory">
              <Button variant="outline" className="w-full">
                <span>Manage book inventory</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Book Inventory Status</CardTitle>
            <CardDescription>
              Current library collection statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Fiction Books</p>
                  <p className="text-sm">1,845 books</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={72} className="h-2 flex-1" />
                  <div className="w-20 text-xs text-muted-foreground">72% available</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Non-Fiction Books</p>
                  <p className="text-sm">1,256 books</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={85} className="h-2 flex-1" />
                  <div className="w-20 text-xs text-muted-foreground">85% available</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Reference Books</p>
                  <p className="text-sm">384 books</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={95} className="h-2 flex-1" />
                  <div className="w-20 text-xs text-muted-foreground">95% available</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Educational Resources</p>
                  <p className="text-sm">157 items</p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={62} className="h-2 flex-1" />
                  <div className="w-20 text-xs text-muted-foreground">62% available</div>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Books needing repair:</span>
                  <span className="font-medium text-orange-500">47</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Books to be replaced:</span>
                  <span className="font-medium text-red-500">23</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>New acquisitions (this month):</span>
                  <span className="font-medium text-green-500">34</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full gap-2">
              <Button variant="outline" className="flex-1">Order Books</Button>
              <Button variant="outline" className="flex-1">Inventory Report</Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Library Usage Analytics</CardTitle>
            <CardDescription>
              Borrowing trends and popular books
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Monthly Borrowing Trend</p>
                <div className="mt-2 h-28 w-full rounded-md bg-secondary">
                  <div className="flex h-full items-end p-2">
                    <div className="w-1/12 h-[40%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[35%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[50%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[60%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[65%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[55%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[70%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[75%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[80%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[85%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[95%] bg-primary mx-[0.2rem] rounded-t-md"></div>
                    <div className="w-1/12 h-[90%] bg-primary mx-[0.2rem] rounded-t-md"></div>
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
              
              <div>
                <p className="text-sm font-medium">Most Popular Books This Month</p>
                <div className="mt-2 space-y-2">
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">"Harry Potter and the Philosopher's Stone"</p>
                      <span className="text-xs font-medium">24 borrows</span>
                    </div>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">"Percy Jackson & The Lightning Thief"</p>
                      <span className="text-xs font-medium">19 borrows</span>
                    </div>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">"Diary of a Wimpy Kid"</p>
                      <span className="text-xs font-medium">17 borrows</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium">Borrowing by Grade Level</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Grades 5-7</span>
                    <span>42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Grades 1-4</span>
                    <span>35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Reception</span>
                    <span>15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Baby Class</span>
                    <span>8%</span>
                  </div>
                  <Progress value={8} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/library/reports">
              <Button variant="outline" className="w-full">
                <span>View detailed reports</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
