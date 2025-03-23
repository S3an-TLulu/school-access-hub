import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, FileEdit, BookOpen, Clock, DollarSign, Mail, Printer, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

// Mock data for a single student
const mockStudents = [
  {
    id: "1",
    name: "Chanda Mutale",
    grade: "Grade 5A",
    gradeValue: "grade5",
    section: "A",
    admissionNumber: "GHA2020-001",
    status: "active",
    dateOfBirth: "2015-05-12",
    gender: "Female",
    address: "123 Lusaka Road, Lusaka",
    bloodGroup: "O+",
    medicalConditions: "None",
    attendance: { present: 42, absent: 3, total: 45, percentage: 93.3 },
    fees: { 
      total: 3000, 
      paid: 3000, 
      pending: 0, 
      status: "paid",
      history: [
        { date: "2023-01-15", amount: 1500, type: "Cash", description: "First term deposit" },
        { date: "2023-02-10", amount: 1500, type: "Bank Transfer", description: "Final payment" }
      ]
    },
    avatar: "https://ui-avatars.com/api/?name=Chanda+Mutale&background=10B981&color=fff",
    parent: {
      name: "Mr. & Mrs. Mutale",
      contact: "+260 977 123456",
      email: "mutale@example.com",
      occupation: "Doctor & Teacher",
      address: "123 Lusaka Road, Lusaka"
    },
    emergency: {
      name: "Sarah Mutale",
      relationship: "Aunt",
      contact: "+260 966 789012"
    },
    performance: {
      overall: 82,
      subjects: [
        { name: "Mathematics", score: 78, grade: "B+" },
        { name: "English", score: 85, grade: "A" },
        { name: "Science", score: 92, grade: "A+" },
        { name: "Social Studies", score: 75, grade: "B" },
        { name: "Art", score: 88, grade: "A" }
      ]
    },
    attendanceHistory: [
      { date: "2023-03-01", status: "present" },
      { date: "2023-03-02", status: "present" },
      { date: "2023-03-03", status: "absent", reason: "Sick" },
      { date: "2023-03-06", status: "present" },
      { date: "2023-03-07", status: "present" }
    ]
  },
  // ... other students would be here
];

interface StudentProfileViewProps {
  studentId: string;
}

export const StudentProfileView = ({ studentId }: StudentProfileViewProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  
  const isTeacher = user?.role === "teacher";
  const isAdmin = user?.role === "admin";
  const isFinance = user?.role === "finance";
  
  // Find the student from mock data
  const student = mockStudents.find(s => s.id === studentId);
  
  if (!student) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Student Not Found</h2>
        <p className="mb-6">The requested student profile could not be found.</p>
        <Button onClick={() => navigate('/students')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Students List
        </Button>
      </div>
    );
  }

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Opening student profile editor",
    });
  };

  const handlePrintProfile = () => {
    toast({
      title: "Print Profile",
      description: "Generating printable student profile",
    });
  };

  const handleContactParent = () => {
    toast({
      title: "Contact Parent",
      description: `Contacting ${student.parent.name}`,
    });
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => navigate('/students')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Student Profile</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Student Info Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="mx-auto h-24 w-24">
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4">{student.name}</CardTitle>
            <CardDescription>{student.admissionNumber}</CardDescription>
            <div className="mt-2 flex justify-center">
              {student.status === "active" && (
                <Badge className="bg-green-500">Active</Badge>
              )}
              {student.status === "suspended" && (
                <Badge className="bg-red-500">Suspended</Badge>
              )}
              {student.status === "withdrawn" && (
                <Badge variant="outline">Withdrawn</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Grade:</div>
                <div>{student.grade}</div>
                
                <div className="font-medium">Section:</div>
                <div>{student.section}</div>
                
                <div className="font-medium">Date of Birth:</div>
                <div>{student.dateOfBirth}</div>
                
                <div className="font-medium">Gender:</div>
                <div>{student.gender}</div>
                
                <div className="font-medium">Blood Group:</div>
                <div>{student.bloodGroup}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col space-y-2">
            <Button onClick={handleEditProfile} className="w-full" variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            <Button onClick={handlePrintProfile} className="w-full" variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="fees">Fees</TabsTrigger>
              <TabsTrigger value="parent">Parent Info</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Student Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold mb-2">Attendance</h3>
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>{student.attendance.percentage}%</span>
                          <span className="text-muted-foreground">
                            {student.attendance.present}/{student.attendance.total} days
                          </span>
                        </div>
                        <Progress value={student.attendance.percentage} className="h-2" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Academic Performance</h3>
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>{student.performance.overall}%</span>
                          <span className="text-muted-foreground">
                            {student.performance.overall >= 80 
                              ? "Excellent" 
                              : student.performance.overall >= 70
                                ? "Good"
                                : student.performance.overall >= 60
                                  ? "Average"
                                  : "Needs Improvement"}
                          </span>
                        </div>
                        <Progress 
                          value={student.performance.overall} 
                          className="h-2" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Fee Status</h3>
                      <div className="flex items-center space-x-2">
                        {student.fees.status === "paid" && (
                          <Badge className="bg-green-500">Paid</Badge>
                        )}
                        {student.fees.status === "partial" && (
                          <Badge className="bg-orange-500">Partial</Badge>
                        )}
                        {student.fees.status === "unpaid" && (
                          <Badge className="bg-red-500">Unpaid</Badge>
                        )}
                        <span className="text-sm">
                          {student.fees.status === "paid" 
                            ? "All fees are paid" 
                            : `K${student.fees.pending} outstanding`}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Contact Information</h3>
                      <div className="text-sm space-y-1">
                        <p>Parent: {student.parent.name}</p>
                        <p>Contact: {student.parent.contact}</p>
                        <div className="mt-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={handleContactParent}
                          >
                            <Mail className="mr-2 h-3 w-3" />
                            Contact Parent
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Mathematics Test</p>
                        <p className="text-xs text-muted-foreground">Score: 85% - 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Absent</p>
                        <p className="text-xs text-muted-foreground">Reason: Sick - 1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Fee Payment</p>
                        <p className="text-xs text-muted-foreground">K1,500 paid - 2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Academic Tab */}
            <TabsContent value="academic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>
                    Current term subject grades and scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {student.performance.subjects.map((subject, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between text-sm font-medium">
                          <p>{subject.name}</p>
                          <p>{subject.score}% ({subject.grade})</p>
                        </div>
                        <div className="mt-2">
                          <Progress 
                            value={subject.score} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <h3 className="font-semibold mb-3">Teacher Comments</h3>
                    <div className="rounded-lg border p-3 text-sm">
                      <p>Chanda is a hardworking student who shows great promise. She excels particularly in Science and English, though she needs some additional support in Social Studies. Her participation in class discussions is commendable.</p>
                      <p className="mt-2 text-xs text-muted-foreground">- Ms. Tembo, Class Teacher</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Report Card
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Attendance Tab */}
            <TabsContent value="attendance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Record</CardTitle>
                  <CardDescription>
                    Overall attendance: {student.attendance.percentage}% ({student.attendance.present} out of {student.attendance.total} days)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Attendance Rate</span>
                        <span>{student.attendance.percentage}%</span>
                      </div>
                      <Progress value={student.attendance.percentage} className="h-2" />
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold mb-3">Recent Attendance</h3>
                      <div className="space-y-2">
                        {student.attendanceHistory.map((record, index) => (
                          <div key={index} className="flex items-center justify-between border-b py-2 text-sm">
                            <span>{record.date}</span>
                            {record.status === "present" ? (
                              <Badge className="bg-green-500">Present</Badge>
                            ) : (
                              <div className="text-right">
                                <Badge className="bg-red-500">Absent</Badge>
                                {record.reason && (
                                  <div className="text-xs text-muted-foreground mt-1">
                                    Reason: {record.reason}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Attendance Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Fees Tab */}
            <TabsContent value="fees" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fee Information</CardTitle>
                  <CardDescription>
                    Current term: K{student.fees.total} ({student.fees.status === "paid" ? "Fully Paid" : `K${student.fees.pending} outstanding`})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Payment Progress</span>
                        <span>{(student.fees.paid / student.fees.total * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={(student.fees.paid / student.fees.total * 100)} className="h-2" />
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold mb-3">Payment History</h3>
                      <div className="rounded-lg border overflow-hidden">
                        <table className="min-w-full divide-y divide-border">
                          <thead className="bg-muted">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Date</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Amount</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Payment Type</th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {student.fees.history.map((payment, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2 text-sm">{payment.date}</td>
                                <td className="px-4 py-2 text-sm">K{payment.amount}</td>
                                <td className="px-4 py-2 text-sm">{payment.type}</td>
                                <td className="px-4 py-2 text-sm">{payment.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Fee Statement
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Parent Info Tab */}
            <TabsContent value="parent" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Parent/Guardian Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="font-semibold mb-2">Primary Contact</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Name:</div>
                        <div>{student.parent.name}</div>
                        
                        <div className="font-medium">Relation:</div>
                        <div>Parents</div>
                        
                        <div className="font-medium">Phone:</div>
                        <div>{student.parent.contact}</div>
                        
                        <div className="font-medium">Email:</div>
                        <div>{student.parent.email}</div>
                        
                        <div className="font-medium">Occupation:</div>
                        <div>{student.parent.occupation}</div>
                        
                        <div className="font-medium">Address:</div>
                        <div>{student.parent.address}</div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={handleContactParent}
                      >
                        <Mail className="mr-2 h-3 w-3" />
                        Contact Parent
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold mb-2">Emergency Contact</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Name:</div>
                        <div>{student.emergency.name}</div>
                        
                        <div className="font-medium">Relation:</div>
                        <div>{student.emergency.relationship}</div>
                        
                        <div className="font-medium">Phone:</div>
                        <div>{student.emergency.contact}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <h3 className="font-semibold mb-3">Notes</h3>
                    <div className="rounded-lg border p-3 text-sm">
                      <p>Parents are very engaged in Chanda's education. They regularly attend parent-teacher meetings and follow up on her academic progress. They prefer to be contacted via phone call rather than email.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
