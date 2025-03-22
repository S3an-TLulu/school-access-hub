
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const TeacherTasks = () => {
  return (
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
  );
};
