
import { useAuth } from "@/context/AuthContext";
import { 
  AlertTriangle,
  Construction,
  Hammer,
  Settings 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const LibraryView = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleNotify = () => {
    toast({
      title: "Notification sent",
      description: "You'll be notified when the Library module is available",
    });
  };

  // Special notice for librarian accounts
  if (user?.role === 'librarian') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Library Management</h2>
          <p className="text-muted-foreground">
            Manage books, resources, and lending activities
          </p>
        </div>

        <Card className="border-amber-500 bg-amber-50 dark:bg-amber-950/20">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Construction className="h-6 w-6 text-amber-500 mr-2" />
              <CardTitle>System Upgrade In Progress</CardTitle>
            </div>
            <CardDescription className="text-amber-700 dark:text-amber-300">
              Librarian Portal Temporarily Unavailable
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Dear {user.name}, our library management system is currently being upgraded with new features:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Advanced book cataloging and tracking</li>
                <li>Digital resource management</li>
                <li>Student lending history and analytics</li>
                <li>Automated overdue notifications</li>
                <li>Integration with academic databases</li>
              </ul>
              <p className="mt-4 font-medium">
                We expect this module to be available within the next 7 days. Thank you for your patience.
              </p>
              <div className="flex justify-end mt-4">
                <Button onClick={handleNotify}>
                  Notify me when available
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Settings className="h-5 w-5 text-muted-foreground mr-2" />
                <CardTitle className="text-lg">System Requirements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All library data is being migrated to the new system. Your existing credentials will work with the upgraded system. No action is required from your end.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Hammer className="h-5 w-5 text-muted-foreground mr-2" />
                <CardTitle className="text-lg">Alternative Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                During this transition, you can continue managing library resources using the temporary paper-based system. All records will be synchronized once the system is back online.
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
        <h2 className="text-3xl font-bold tracking-tight">Library</h2>
        <p className="text-muted-foreground">
          Browse and manage library resources
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
            The library module is currently under maintenance. We're working to bring you an improved experience.
          </p>
          <p className="mt-2">
            Please check back soon. We apologize for any inconvenience.
          </p>
          <Button className="mt-4" variant="outline" onClick={handleNotify}>
            Notify me when available
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
