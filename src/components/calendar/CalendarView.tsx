
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileDown, Calendar as CalendarIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { useAuth } from "@/context/AuthContext";
import { EventsList } from "./EventsList";

export const CalendarView = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleAddEvent = () => {
    toast({
      title: "Add new event",
      description: "Event creation form opened",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export initiated",
      description: "Calendar is being exported",
    });
  };

  // Example events for demo
  const events = [
    { 
      id: 1, 
      title: "Staff Meeting", 
      date: new Date(2023, 4, 15), 
      time: "09:00 - 10:30",
      location: "Main Hall",
      type: "staff"
    },
    { 
      id: 2, 
      title: "Term 2 Begins", 
      date: new Date(2023, 4, 8), 
      time: "All day",
      location: "Whole School",
      type: "academic"
    },
    { 
      id: 3, 
      title: "Parent-Teacher Meeting", 
      date: new Date(2023, 4, 22), 
      time: "14:00 - 17:00",
      location: "Classrooms",
      type: "parent"
    },
    { 
      id: 4, 
      title: "Sports Day", 
      date: new Date(2023, 4, 25), 
      time: "08:00 - 14:00",
      location: "Sports Field",
      type: "event"
    }
  ];

  // Get event markers for calendar display
  const eventDates = events.map(event => format(event.date, "yyyy-MM-dd"));
  
  const isAdmin = user?.role === 'admin';
  const isTeacher = user?.role === 'teacher';
  const canAddEvents = isAdmin || isTeacher;

  // Filter events for the selected date
  const selectedDateEvents = date 
    ? events.filter(event => format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"))
    : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">School Calendar</h2>
          <p className="text-muted-foreground">
            View and manage school events and important dates
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {canAddEvents && (
            <Button onClick={handleAddEvent} size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>School Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                event: (date) => {
                  return eventDates.includes(format(date, "yyyy-MM-dd"));
                },
              }}
              modifiersClassNames={{
                event: "bg-primary/10 font-bold text-primary",
              }}
            />
          </CardContent>
        </Card>

        <Card className="md:row-span-2">
          <CardHeader>
            <CardTitle>Events for {date ? format(date, "MMMM d, yyyy") : "Selected Date"}</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map(event => (
                  <div key={event.id} className="border-l-4 border-primary pl-4 py-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{event.title}</h3>
                      {event.type === 'academic' && <Badge className="bg-blue-500">Academic</Badge>}
                      {event.type === 'staff' && <Badge className="bg-purple-500">Staff</Badge>}
                      {event.type === 'event' && <Badge className="bg-green-500">Event</Badge>}
                      {event.type === 'parent' && <Badge className="bg-amber-500">Parent</Badge>}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="mt-1">{event.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 text-center">
                <CalendarIcon className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">No events scheduled for this date</p>
                {canAddEvents && (
                  <Button variant="outline" size="sm" className="mt-4" onClick={handleAddEvent}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="academic">Academic Calendar</TabsTrigger>
          <TabsTrigger value="exams">Examination Dates</TabsTrigger>
          <TabsTrigger value="holidays">Holidays</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <EventsList
            events={events}
            filter="all"
          />
        </TabsContent>
        <TabsContent value="academic">
          <EventsList
            events={events.filter(e => e.type === 'academic')}
            filter="academic"
          />
        </TabsContent>
        <TabsContent value="exams">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center text-center">
                <CalendarIcon className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Exam Schedule Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  Examination dates for Term 2 will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="holidays">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center text-center">
                <CalendarIcon className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Holiday Schedule Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                  School holiday schedule will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
