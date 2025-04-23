export interface UploadType {
  id: string;
  name: string;
  description: string;
  sampleHeaders: string[];
  templateFilename: string;
  templateData: { [key: string]: string }[];
}

export const uploadTypes: UploadType[] = [
  {
    id: 'students',
    name: 'Students Data',
    description: 'Upload student information including first name, last name, grade, and section',
    sampleHeaders: ['First Name', 'Last Name', 'Grade', 'Section', 'Parent Name', 'Parent Contact'],
    templateFilename: 'students_template.xlsx',
    templateData: [
      { 
        'First Name': 'John', 
        'Last Name': 'Doe', 
        'Grade': '5', 
        'Section': 'A', 
        'Parent Name': 'Jane Doe', 
        'Parent Contact': '1234567890' 
      },
      { 
        'First Name': 'Jane', 
        'Last Name': 'Smith', 
        'Grade': '5', 
        'Section': 'B', 
        'Parent Name': 'John Smith', 
        'Parent Contact': '0987654321' 
      }
    ]
  },
  {
    id: 'attendance',
    name: 'Attendance Records',
    description: 'Upload daily attendance records for students',
    sampleHeaders: ['Student ID', 'Date', 'Status', 'Remarks'],
    templateFilename: 'attendance_template.xlsx',
    templateData: [
      { 'Student ID': 'ST001', 'Date': '2023-10-01', 'Status': 'Present', 'Remarks': '' },
      { 'Student ID': 'ST002', 'Date': '2023-10-01', 'Status': 'Absent', 'Remarks': 'Sick leave' }
    ]
  },
  {
    id: 'lunch',
    name: 'Lunch Records',
    description: 'Upload lunch participation and meal preferences',
    sampleHeaders: ['Student ID', 'Date', 'Meal Type', 'Participation', 'Special Requirements'],
    templateFilename: 'lunch_template.xlsx',
    templateData: [
      { 'Student ID': 'ST001', 'Date': '2023-10-01', 'Meal Type': 'Regular', 'Participation': 'Yes', 'Special Requirements': '' },
      { 'Student ID': 'ST002', 'Date': '2023-10-01', 'Meal Type': 'Vegetarian', 'Participation': 'Yes', 'Special Requirements': 'No nuts' }
    ]
  },
  {
    id: 'transport',
    name: 'Transport Records',
    description: 'Upload transport route and pickup details',
    sampleHeaders: ['Student ID', 'Route Number', 'Pickup Location', 'Pickup Time', 'Drop Location', 'Drop Time'],
    templateFilename: 'transport_template.xlsx',
    templateData: [
      { 'Student ID': 'ST001', 'Route Number': 'R1', 'Pickup Location': 'Main St', 'Pickup Time': '7:30 AM', 'Drop Location': 'School', 'Drop Time': '8:00 AM' },
      { 'Student ID': 'ST002', 'Route Number': 'R2', 'Pickup Location': 'Park Ave', 'Pickup Time': '7:45 AM', 'Drop Location': 'School', 'Drop Time': '8:15 AM' }
    ]
  }
];
