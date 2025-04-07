
// Mock data for grades
export const mockGradesData = [
  {
    id: "1",
    studentId: "1",
    studentName: "Chanda Mutale",
    gradeLevel: "Grade 5A",
    subject: "Mathematics",
    examName: "Mid-term Exam",
    score: 42,
    maxScore: 50,
    grade: "A",
    term: "Term 1, 2025",
    date: "2025-02-15"
  },
  {
    id: "2",
    studentId: "1",
    studentName: "Chanda Mutale",
    gradeLevel: "Grade 5A",
    subject: "English",
    examName: "Grammar Test",
    score: 38,
    maxScore: 50,
    grade: "B+",
    term: "Term 1, 2025",
    date: "2025-02-18"
  },
  {
    id: "3",
    studentId: "2",
    studentName: "David Mulenga",
    gradeLevel: "Grade 3B",
    subject: "Science",
    examName: "Science Project",
    score: 28,
    maxScore: 40,
    grade: "B",
    term: "Term 1, 2025",
    date: "2025-02-20"
  },
  {
    id: "4",
    studentId: "3",
    studentName: "Faith Mwansa",
    gradeLevel: "Reception",
    subject: "Reading",
    examName: "Reading Assessment",
    score: 19,
    maxScore: 20,
    grade: "A+",
    term: "Term 1, 2025",
    date: "2025-03-01"
  },
  {
    id: "5",
    studentId: "4",
    studentName: "Peter Tembo",
    gradeLevel: "Grade 7A",
    subject: "Social Studies",
    examName: "History Test",
    score: 35,
    maxScore: 50,
    grade: "C+",
    term: "Term 1, 2025",
    date: "2025-03-05"
  },
  {
    id: "6",
    studentId: "5",
    studentName: "Grace Banda",
    gradeLevel: "Grade 2C",
    subject: "Mathematics",
    examName: "Addition & Subtraction",
    score: 18,
    maxScore: 25,
    grade: "B+",
    term: "Term 1, 2025",
    date: "2025-03-10"
  },
  {
    id: "7",
    studentId: "6",
    studentName: "John Daka",
    gradeLevel: "Grade 6B",
    subject: "Physical Education",
    examName: "Sports Skills",
    score: 30,
    maxScore: 50,
    grade: "C",
    term: "Term 1, 2025",
    date: "2025-03-12"
  },
  {
    id: "8",
    studentId: "7",
    studentName: "Mary Phiri",
    gradeLevel: "Grade 1A",
    subject: "Art",
    examName: "Drawing Project",
    score: 45,
    maxScore: 50,
    grade: "A",
    term: "Term 1, 2025",
    date: "2025-03-15"
  },
  {
    id: "9",
    studentId: "8",
    studentName: "James Zulu",
    gradeLevel: "Baby Class",
    subject: "Basic Colors",
    examName: "Colors Recognition",
    score: 18,
    maxScore: 20,
    grade: "A",
    term: "Term 1, 2025",
    date: "2025-03-18"
  },
  {
    id: "10",
    studentId: "9",
    studentName: "Janet Musonda",
    gradeLevel: "Middle Class",
    subject: "Numbers",
    examName: "Counting Test",
    score: 17,
    maxScore: 20,
    grade: "A-",
    term: "Term 1, 2025",
    date: "2025-03-20"
  },
  {
    id: "11",
    studentId: "10",
    studentName: "Emmanuel Bwalya",
    gradeLevel: "Grade 4C",
    subject: "Science",
    examName: "Plant Life Cycle",
    score: 22,
    maxScore: 50,
    grade: "F",
    term: "Term 1, 2025",
    date: "2025-03-22"
  }
];

// Mock data for subjects
export const mockSubjectsData = [
  {
    id: "1",
    name: "Mathematics",
    gradeLevel: "Grade 5A",
    teacherName: "Mrs. Williams",
    schedule: "Mon, Wed, Fri - 8:00 AM",
    numberOfStudents: 28,
    averagePerformance: 76.2,
    description: "Basic arithmetic, fractions, and introduction to algebra"
  },
  {
    id: "2",
    name: "English",
    gradeLevel: "Grade 5A",
    teacherName: "Ms. Garcia",
    schedule: "Tue, Thu - 10:00 AM",
    numberOfStudents: 28,
    averagePerformance: 81.5,
    description: "Grammar, vocabulary, and creative writing"
  },
  {
    id: "3",
    name: "Science",
    gradeLevel: "Grade 3B",
    teacherName: "Mr. Thompson",
    schedule: "Mon, Fri - 11:00 AM",
    numberOfStudents: 25,
    averagePerformance: 72.8,
    description: "Basic science concepts and experiments"
  },
  {
    id: "4",
    name: "Reading",
    gradeLevel: "Reception",
    teacherName: "Mrs. Johnson",
    schedule: "Daily - 9:00 AM",
    numberOfStudents: 20,
    averagePerformance: 88.3,
    description: "Phonics and early reading skills"
  },
  {
    id: "5",
    name: "Social Studies",
    gradeLevel: "Grade 7A",
    teacherName: "Mr. Davis",
    schedule: "Tue, Thu - 1:00 PM",
    numberOfStudents: 30,
    averagePerformance: 68.7,
    description: "History, geography, and current events"
  },
  {
    id: "6",
    name: "Mathematics",
    gradeLevel: "Grade 2C",
    teacherName: "Mr. Wilson",
    schedule: "Mon, Wed, Fri - 10:00 AM",
    numberOfStudents: 22,
    averagePerformance: 79.1,
    description: "Numbers, counting, and basic operations"
  },
  {
    id: "7",
    name: "Physical Education",
    gradeLevel: "Grade 6B",
    teacherName: "Coach Miller",
    schedule: "Tue, Thu - 2:00 PM",
    numberOfStudents: 32,
    averagePerformance: 85.4,
    description: "Sports, teamwork, and physical fitness"
  },
  {
    id: "8",
    name: "Art",
    gradeLevel: "Grade 1A",
    teacherName: "Ms. Clark",
    schedule: "Wed - 11:00 AM",
    numberOfStudents: 24,
    averagePerformance: 90.2,
    description: "Drawing, painting, and creativity"
  },
  {
    id: "9",
    name: "Basic Colors",
    gradeLevel: "Baby Class",
    teacherName: "Mrs. Turner",
    schedule: "Daily - 9:30 AM",
    numberOfStudents: 15,
    averagePerformance: 92.1,
    description: "Colors recognition and basic motor skills"
  },
  {
    id: "10",
    name: "Numbers",
    gradeLevel: "Middle Class",
    teacherName: "Ms. Adams",
    schedule: "Daily - 10:30 AM",
    numberOfStudents: 18,
    averagePerformance: 85.7,
    description: "Counting and number recognition"
  }
];

// Mock data for exams
export const mockExamsData = [
  {
    id: "1",
    name: "Mid-term Exam",
    subject: "Mathematics",
    gradeLevel: "Grade 5A",
    date: "2025-02-15",
    duration: "1 hour",
    term: "Term 1, 2025",
    status: "Completed",
    description: "Covers chapters 1-5"
  },
  {
    id: "2",
    name: "Grammar Test",
    subject: "English",
    gradeLevel: "Grade 5A",
    date: "2025-02-18",
    duration: "45 minutes",
    term: "Term 1, 2025",
    status: "Completed",
    description: "Parts of speech and basic grammar rules"
  },
  {
    id: "3",
    name: "Science Mid-Term",
    subject: "Science",
    gradeLevel: "Grade 5A",
    date: "2025-04-10",
    duration: "1 hour",
    term: "Term 1, 2025",
    status: "Upcoming",
    description: "Ecosystems and environments"
  },
  {
    id: "4",
    name: "Reading Assessment",
    subject: "Reading",
    gradeLevel: "Reception",
    date: "2025-03-01",
    duration: "30 minutes",
    term: "Term 1, 2025",
    status: "Completed",
    description: "Basic reading skills assessment"
  },
  {
    id: "5",
    name: "History Test",
    subject: "Social Studies",
    gradeLevel: "Grade 7A",
    date: "2025-03-05",
    duration: "1 hour",
    term: "Term 1, 2025",
    status: "Grading",
    description: "Local history and cultural heritage"
  },
  {
    id: "6",
    name: "Addition & Subtraction",
    subject: "Mathematics",
    gradeLevel: "Grade 2C",
    date: "2025-03-10",
    duration: "40 minutes",
    term: "Term 1, 2025",
    status: "Completed",
    description: "Basic addition and subtraction operations"
  },
  {
    id: "7",
    name: "Sports Skills",
    subject: "Physical Education",
    gradeLevel: "Grade 6B",
    date: "2025-03-12",
    duration: "1 hour",
    term: "Term 1, 2025",
    status: "Completed",
    description: "Assessment of various sports skills"
  },
  {
    id: "8",
    name: "End-Term Exam",
    subject: "Mathematics",
    gradeLevel: "Grade 5A",
    date: "2025-04-25",
    duration: "2 hours",
    term: "Term 1, 2025",
    status: "Upcoming",
    description: "Comprehensive exam covering all term content"
  },
  {
    id: "9",
    name: "Final English Exam",
    subject: "English",
    gradeLevel: "Grade 5A",
    date: "2025-04-27",
    duration: "1.5 hours",
    term: "Term 1, 2025",
    status: "Upcoming",
    description: "Grammar, writing, and reading comprehension"
  },
  {
    id: "10",
    name: "Science Final",
    subject: "Science",
    gradeLevel: "Grade 5A",
    date: "2025-04-20",
    duration: "1.5 hours",
    term: "Term 1, 2025",
    status: "In Progress",
    description: "Comprehensive science assessment"
  }
];
