
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TeacherClassPerformance = () => {
  return (
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
  );
};
