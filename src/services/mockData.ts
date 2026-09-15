import type { 
  StudentProfileData, 
  EnrolledCourse, 
  SemesterRecord, 
  DormitoryInfo, 
  RequestItem 
} from '../types';

export const INITIAL_STUDENT_PROFILE: StudentProfileData = {
  personal: {
    fullName: 'Bonsa Asafa Ayana',
    idNumber: 'UGR/22810/13',
    school: 'Adama Science and Technology University',
    admission: 'Undergraduate Regular Full Time',
    classYear: 'First Year',
    program: 'BSc Degree in Pre Engineering (Undergraduate Regular)',
    academicYear: '2020/2021',
    registrationNumber: '190243',
    matriculationResult: 486,
    tuitionType: 'cost_sharing'
  },
  applicant: {
    fullName: 'Bonsa Asafa Ayana',
    idNumber: 'UGR/22810/13',
    school: 'Adama Science and Technology University',
    admission: 'Undergraduate Regular Full Time',
    classYear: 'First Year',
    program: 'BSc Degree in Pre Engineering (Undergraduate Regular)',
    academicYear: '2020/2021',
    registrationNumber: '190243',
    matriculationResult: 486,
    tuitionType: 'cost_sharing'
  },
  contactAddress: {
    country: 'ET',
    streetAddress: 'Geba Robi',
    mobile: '0949097048',
    email: 'bonsakakuu@gmail.com',
    zone: 'Kelam Welega',
    woreda: 'Hawa Gelan',
    kebele: 'Geba Robi 01'
  },
  emergencyContact: {
    fullName: 'Asafa Ayana',
    relationship: 'Father',
    phone: '0911223344',
    city: 'Adama',
    occupation: 'Civil Servant'
  },
  familyBackground: {
    fatherFullName: 'Asafa Ayana',
    fatherOccupation: 'Civil Servant',
    fatherPhone: '0911223344',
    motherFullName: 'Chaltu Tadesse',
    motherOccupation: 'Educator',
    motherPhone: '0922334455'
  },
  education: {
    highSchoolName: 'Geba Robi Secondary & Preparatory School',
    region: 'Oromia',
    grade12Result: 486,
    completionYear: '2020',
    stream: 'Natural Sciences'
  },
  experience: {
    organization: 'Oromia Innovation Club',
    position: 'Student STEM Ambassador',
    duration: '1 Year'
  },
  programPreference: {
    firstChoice: 'Software Engineering',
    secondChoice: 'Electrical & Computer Engineering',
    assignedProgram: 'Pre Engineering',
    status: 'Assigned'
  }
};

export const INITIAL_ENROLLED_COURSES: EnrolledCourse[] = [
  {
    code: 'Math1011',
    title: 'Mathematics for Natural Sciences',
    creditHours: 4,
    instructor: 'Dr. Kebede Tadesse',
    schedule: 'Mon / Wed 08:30 - 10:00 AM',
    section: 'Sec 02',
    status: 'Registered'
  },
  {
    code: 'Phys1011',
    title: 'General Physics I',
    creditHours: 3,
    instructor: 'Prof. Alemu Worku',
    schedule: 'Tue / Thu 10:30 - 12:00 PM',
    section: 'Sec 02',
    status: 'Registered'
  },
  {
    code: 'Chem1011',
    title: 'General Chemistry',
    creditHours: 3,
    instructor: 'Dr. Bethlehem Desta',
    schedule: 'Mon / Wed 02:00 - 03:30 PM',
    section: 'Sec 01',
    status: 'Registered'
  },
  {
    code: 'EnLa1011',
    title: 'Communicative English Language Skills I',
    creditHours: 3,
    instructor: 'Instructor Daniel Haile',
    schedule: 'Friday 08:30 - 11:30 AM',
    section: 'Sec 04',
    status: 'Registered'
  },
  {
    code: 'InSc1011',
    title: 'Introduction to Computer Science & Programming',
    creditHours: 4,
    instructor: 'Dr. Solomon Bekele',
    schedule: 'Tue / Thu 02:00 - 04:00 PM',
    section: 'Sec 01',
    status: 'Registered'
  }
];

export const INITIAL_SEMESTER_RECORDS: SemesterRecord[] = [
  {
    semesterName: '2020/2021 First Semester [First Year]',
    academicYear: '2020/2021',
    sgpa: 3.33,
    cgpa: 3.33,
    courses: [
      { code: 'CHEM 1101', title: 'General Chemistry', creditHours: 3, grade: 'B+', gradePoint: 10.5 },
      { code: 'MATH 1101', title: 'Applied Mathematics I', creditHours: 4, grade: 'B', gradePoint: 11.0 },
      { code: 'Phys 1101', title: 'General Physics', creditHours: 3, grade: 'B-', gradePoint: 8.25 },
      { code: 'SpSc1011', title: 'Physical Fitness and Conditioning I', creditHours: 0, grade: 'P', gradePoint: 0.0 },
      { code: 'EnLa1001', title: 'Communicative English', creditHours: 3, grade: 'B', gradePoint: 9.0 },
      { code: 'CSEg1011', title: 'Introduction to Computing', creditHours: 3, grade: 'A-', gradePoint: 11.25 }
    ]
  },
  {
    semesterName: '2020/2021 Second Semester [First Year]',
    academicYear: '2020/2021',
    sgpa: 3.85,
    cgpa: 3.59,
    courses: [
      { code: 'MATH 1102', title: 'Applied Mathematics II', creditHours: 4, grade: 'A', gradePoint: 16.0 },
      { code: 'Phys 1102', title: 'General Physics II', creditHours: 3, grade: 'A-', gradePoint: 11.25 },
      { code: 'Engg1021', title: 'Engineering Drawing & CAD', creditHours: 3, grade: 'A', gradePoint: 12.0 },
      { code: 'EnLa1002', title: 'Basic Writing Skills', creditHours: 3, grade: 'B+', gradePoint: 10.5 }
    ]
  }
];

export const INITIAL_DORMITORY: DormitoryInfo = {
  blockNumber: 'Block 42',
  roomNumber: 'Room 208',
  bedNumber: 'Bed 02',
  buildingName: 'ASTU Main Campus Boys Residence',
  dormProctorName: 'Proctor Gizachew Mamo',
  proctorPhone: '0911002233',
  status: 'Allocated'
};

export const INITIAL_REQUESTS: RequestItem[] = [
  {
    id: 'req-1',
    requestType: 'Add Drop',
    dateSubmitted: '2024-10-02',
    status: 'Approved',
    reason: 'Elective Course Adjustment',
    details: 'Added InSc1011 Intro to Computer Science Section 01'
  },
  {
    id: 'req-2',
    requestType: 'Clearance',
    dateSubmitted: '2024-06-15',
    status: 'Approved',
    reason: 'End of Semester Library & Lab Clearance',
    details: 'All university properties returned.'
  }
];
