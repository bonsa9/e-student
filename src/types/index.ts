export type SidebarTab = 
  | 'dashboard' 
  | 'profile' 
  | 'enrollment' 
  | 'academic-history' 
  | 'dormitory' 
  | 'curriculum' 
  | 'registration' 
  | 'course-audit' 
  | 'payment' 
  | 'add-drop' 
  | 'withdrawal' 
  | 'clearances' 
  | 'course-exemption';

export type ProfileSubTab = 
  | 'personal' 
  | 'applicant' 
  | 'contact-address' 
  | 'emergency-contact' 
  | 'family-background' 
  | 'education' 
  | 'experience' 
  | 'program-preference';

export interface PersonalInfo {
  fullName: string;
  idNumber: string;
  school: string;
  admission: string;
  classYear: string;
  program: string;
  academicYear: string;
  registrationNumber: string;
  matriculationResult: number;
  tuitionType: string;
}

export interface ContactAddressInfo {
  country: string;
  streetAddress: string;
  mobile: string;
  email: string;
  zone: string;
  woreda: string;
  kebele: string;
}

export interface EmergencyContactInfo {
  fullName: string;
  relationship: string;
  phone: string;
  city: string;
  occupation: string;
}

export interface FamilyBackgroundInfo {
  fatherFullName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherFullName: string;
  motherOccupation: string;
  motherPhone: string;
}

export interface EducationInfo {
  highSchoolName: string;
  region: string;
  grade12Result: number;
  completionYear: string;
  stream: string;
}

export interface ExperienceInfo {
  organization: string;
  position: string;
  duration: string;
}

export interface ProgramPreferenceInfo {
  firstChoice: string;
  secondChoice: string;
  assignedProgram: string;
  status: string;
}

export interface StudentProfileData {
  personal: PersonalInfo;
  applicant: PersonalInfo;
  contactAddress: ContactAddressInfo;
  emergencyContact: EmergencyContactInfo;
  familyBackground: FamilyBackgroundInfo;
  education: EducationInfo;
  experience: ExperienceInfo;
  programPreference: ProgramPreferenceInfo;
}

export interface EnrolledCourse {
  code: string;
  title: string;
  creditHours: number;
  instructor: string;
  schedule: string;
  section: string;
  status: 'Registered' | 'Pending Approval' | 'Dropped';
}

export interface SemesterGrade {
  code: string;
  title: string;
  creditHours: number;
  grade: string;
  gradePoint: number;
}

export interface SemesterRecord {
  semesterName: string;
  academicYear: string;
  courses: SemesterGrade[];
  sgpa: number;
  cgpa: number;
}

export interface DormitoryInfo {
  blockNumber: string;
  roomNumber: string;
  bedNumber: string;
  buildingName: string;
  dormProctorName: string;
  proctorPhone: string;
  status: string;
}

export interface RequestItem {
  id: string;
  requestType: 'Add Drop' | 'Withdrawal' | 'Clearance' | 'Course Exemption';
  dateSubmitted: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
  details: string;
}
