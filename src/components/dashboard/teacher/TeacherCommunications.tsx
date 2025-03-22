
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const TeacherCommunications = () => {
  return (
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
  );
};
