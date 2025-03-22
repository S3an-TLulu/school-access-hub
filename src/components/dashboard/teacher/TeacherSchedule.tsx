
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const TeacherSchedule = () => {
  return (
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
  );
};
