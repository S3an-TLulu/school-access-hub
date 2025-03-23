
import { useAuth } from "@/context/AuthContext";
import { 
  AlertTriangle,
  Construction,
  MessageSquare,
  Mail,
  Bell,
  Users 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const CommunicationsView = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleNotify = () => {
    toast({
      title: "Notification sent",
      description: "You'll be notified when the Communications module is available",
    });
  };

  // Special notice for parent accounts
  if (user?.role === 'parent') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Communications</h2>
          <p className="text-muted-foreground">
            Keep in touch with teachers and school administration
          </p>
        </div>

        <Card className="border-amber-500 bg-amber-50 dark:bg-amber-950/20">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Construction className="h-6 w-6 text-amber-500 mr-2" />
              <CardTitle>Parent Portal Under Development</CardTitle>
            </div>
            <CardDescription className="text-amber-700 dark:text-amber-300">
              Parent Communications Portal Coming Soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Dear {user.name}, we're currently developing an enhanced parent communications portal with these features:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Direct messaging with teachers</li>
                <li>School announcements and newsletters</li>
                <li>Permission slips and forms</li>
                <li>Student progress reports</li>
                <li>Event notifications and calendar integration</li>
              </ul>
              <p className="mt-4 font-medium">
                We expect this portal to be available within the next 14 days. In the meantime, please continue using email and phone for communications.
              </p>
              <div className="flex justify-end mt-4">
                <Button onClick={handleNotify}>
                  Notify me when available
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <CardTitle className="text-lg">Contact Administration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                For urgent matters, please contact the school office at:
                <br />
                <span className="font-medium">office@gha.edu</span> or 
                <br />
                <span className="font-medium">+260 97 1234567</span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-muted-foreground mr-2" />
                <CardTitle className="text-lg">Recent Announcements</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Term 2 Schedule Now Available</p>
              <p className="text-sm">Parent-Teacher Conference: May 22</p>
              <p className="text-sm">School Uniform Updates for Next Term</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                <CardTitle className="text-lg">Teacher Contact Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Teachers are available for parent consultations:
                <br />
                Monday-Thursday: 2:00 PM - 4:00 PM
                <br />
                Friday: By appointment only
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Regular view for other users
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Communications</h2>
        <p className="text-muted-foreground">
          Manage school communications and messaging
        </p>
      </div>

      <Card className="border-amber-500">
        <CardHeader>
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            <CardTitle>Under Maintenance</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            The communications module is currently under maintenance. We're working on implementing new features.
          </p>
          <p className="mt-2">
            Please check back soon. We apologize for any inconvenience.
          </p>
          <Button className="mt-4" variant="outline" onClick={handleNotify}>
            Notify me when available
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic Messaging</CardTitle>
          <CardDescription>Use temporary messaging services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              <p>You can continue using email and phone for essential communications.</p>
            </div>
            <Button onClick={() => toast({ title: "Temporary email service opened" })}>
              Open Email Client
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
