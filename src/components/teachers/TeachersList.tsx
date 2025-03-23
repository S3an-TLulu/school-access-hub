
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Check, Mail, Phone } from "lucide-react";

interface TeachersListProps {
  searchTerm: string;
  departmentFilter: string;
  statusFilter: string;
}

// Mock teacher data for demonstration
const TEACHERS_DATA = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@gha.edu",
    phone: "+260 97 1234567",
    department: "primary",
    subjects: ["English", "Mathematics"],
    grade: "Grade 2",
    experience: "8 years",
    status: "active",
    avatarUrl: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=2E7D32&color=fff",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@gha.edu",
    phone: "+260 96 7654321",
    department: "secondary",
    subjects: ["Physics", "Chemistry"],
    grade: "Grade 7",
    experience: "12 years",
    status: "active",
    avatarUrl: "https://ui-avatars.com/api/?name=Michael+Chen&background=0D8ABC&color=fff",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@gha.edu",
    phone: "+260 95 5551234",
    department: "primary",
    subjects: ["Art", "Social Studies"],
    grade: "Grade 3",
    experience: "5 years",
    status: "leave",
    avatarUrl: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=C62828&color=fff",
  },
  {
    id: 4,
    name: "David Ndlovu",
    email: "david.ndlovu@gha.edu",
    phone: "+260 97 8887777",
    department: "mathematics",
    subjects: ["Mathematics", "Computer Science"],
    grade: "Grade 5-7",
    experience: "10 years",
    status: "active",
    avatarUrl: "https://ui-avatars.com/api/?name=David+Ndlovu&background=7B1FA2&color=fff",
  },
  {
    id: 5,
    name: "Fatima Mwanawasa",
    email: "fatima.mwanawasa@gha.edu",
    phone: "+260 96 3332211",
    department: "languages",
    subjects: ["French", "English Literature"],
    grade: "Grade 4-6",
    experience: "7 years",
    status: "contract",
    avatarUrl: "https://ui-avatars.com/api/?name=Fatima+Mwanawasa&background=FB8C00&color=fff",
  },
  {
    id: 6,
    name: "Robert Zimba",
    email: "robert.zimba@gha.edu",
    phone: "+260 95 4445555",
    department: "physical",
    subjects: ["Physical Education", "Health"],
    grade: "All Grades",
    experience: "4 years",
    status: "active",
    avatarUrl: "https://ui-avatars.com/api/?name=Robert+Zimba&background=6D4C41&color=fff",
  },
  {
    id: 7,
    name: "Grace Mpundu",
    email: "grace.mpundu@gha.edu",
    phone: "+260 97 9998887",
    department: "science",
    subjects: ["Biology", "Environmental Science"],
    grade: "Grade 6-7",
    experience: "9 years",
    status: "training",
    avatarUrl: "https://ui-avatars.com/api/?name=Grace+Mpundu&background=5D4037&color=fff",
  },
  {
    id: 8,
    name: "Thomas Banda",
    email: "thomas.banda@gha.edu",
    phone: "+260 96 1112222",
    department: "arts",
    subjects: ["Music", "Drama"],
    grade: "All Grades",
    experience: "6 years",
    status: "active",
    avatarUrl: "https://ui-avatars.com/api/?name=Thomas+Banda&background=546E7A&color=fff",
  },
];

export const TeachersList = ({ searchTerm, departmentFilter, statusFilter }: TeachersListProps) => {
  const filteredTeachers = TEACHERS_DATA.filter((teacher) => {
    // Apply search filter
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Apply department filter
    const matchesDepartment = departmentFilter === 'all' || teacher.department === departmentFilter;
    
    // Apply status filter
    const matchesStatus = statusFilter === 'all' || teacher.status === statusFilter;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const handleContactTeacher = (email: string) => {
    toast({
      title: "Contact initiated",
      description: `Email drafted to ${email}`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case 'leave':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">On Leave</Badge>;
      case 'training':
        return <Badge className="bg-blue-500 hover:bg-blue-600">In Training</Badge>;
      case 'contract':
        return <Badge variant="outline" className="text-purple-500 border-purple-500">Contract</Badge>;
      case 'retired':
        return <Badge variant="destructive">Retired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (filteredTeachers.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <p className="text-center text-muted-foreground">No teachers match your search criteria.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredTeachers.map((teacher) => (
        <Card key={teacher.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="bg-muted p-4 text-center">
                <Avatar className="h-20 w-20 mx-auto">
                  <AvatarImage src={teacher.avatarUrl} alt={teacher.name} />
                  <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="mt-2 font-medium">{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.subjects.join(", ")}</p>
                <div className="mt-2">{getStatusBadge(teacher.status)}</div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm truncate">{teacher.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Grade</p>
                    <p>{teacher.grade}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Experience</p>
                    <p>{teacher.experience}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full text-sm" 
                  onClick={() => handleContactTeacher(teacher.email)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
