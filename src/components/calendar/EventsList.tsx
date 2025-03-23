
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Pencil, Trash2 } from "lucide-react";
import { format, isFuture } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: string;
}

interface EventsListProps {
  events: Event[];
  filter: string;
}

export const EventsList = ({ events, filter }: EventsListProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  
  // Sort events by date (upcoming first)
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  
  // Filter events based on filter prop and upcoming only
  const filteredEvents = sortedEvents.filter(event => {
    const matchesFilter = filter === 'all' || event.type === filter;
    const isUpcoming = isFuture(event.date);
    return matchesFilter && isUpcoming;
  });

  const handleViewEvent = (id: number) => {
    toast({
      title: "View Event",
      description: `Viewing event ID: ${id}`,
    });
  };

  const handleEditEvent = (id: number) => {
    toast({
      title: "Edit Event",
      description: `Editing event ID: ${id}`,
    });
  };

  const handleDeleteEvent = (id: number) => {
    toast({
      title: "Delete Event",
      description: `Deleting event ID: ${id}`,
      variant: "destructive",
    });
  };

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case 'academic':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Academic</Badge>;
      case 'staff':
        return <Badge className="bg-purple-500 hover:bg-purple-600">Staff</Badge>;
      case 'event':
        return <Badge className="bg-green-500 hover:bg-green-600">Event</Badge>;
      case 'parent':
        return <Badge className="bg-amber-500 hover:bg-amber-600">Parent</Badge>;
      default:
        return <Badge>{type}</Badge>;
    }
  };

  const isAdmin = user?.role === 'admin';
  const isTeacher = user?.role === 'teacher';
  const canEditEvents = isAdmin || isTeacher;

  if (filteredEvents.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 flex items-center justify-center">
          <div className="text-center">
            <Calendar className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">No upcoming events found.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y">
          {filteredEvents.map((event) => (
            <div key={event.id} className="p-4 hover:bg-muted/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{event.title}</h3>
                    {getEventTypeBadge(event.type)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{format(event.date, "MMMM d, yyyy")} • {event.time}</span>
                    </div>
                    <div className="mt-1">{event.location}</div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleViewEvent(event.id)}
                  >
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  {canEditEvents && (
                    <>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditEvent(event.id)}
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
