import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  SidebarTab, 
  ProfileSubTab, 
  StudentProfileData, 
  EnrolledCourse, 
  SemesterRecord, 
  DormitoryInfo, 
  RequestItem 
} from '../types';
import { 
  INITIAL_STUDENT_PROFILE, 
  INITIAL_ENROLLED_COURSES, 
  INITIAL_SEMESTER_RECORDS, 
  INITIAL_DORMITORY, 
  INITIAL_REQUESTS 
} from '../services/mockData';

interface AppContextType {
  activeTab: SidebarTab;
  setActiveTab: (tab: SidebarTab) => void;
  profileSubTab: ProfileSubTab;
  setProfileSubTab: (subTab: ProfileSubTab) => void;
  
  studentProfile: StudentProfileData;
  updatePersonal: (data: Partial<StudentProfileData['personal']>) => void;
  updateContactAddress: (data: Partial<StudentProfileData['contactAddress']>) => void;
  updateEmergencyContact: (data: Partial<StudentProfileData['emergencyContact']>) => void;

  enrolledCourses: EnrolledCourse[];
  semesterRecords: SemesterRecord[];
  dormitory: DormitoryInfo;
  requests: RequestItem[];
  addRequest: (request: Omit<RequestItem, 'id' | 'dateSubmitted' | 'status'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<SidebarTab>('profile');
  const [profileSubTab, setProfileSubTab] = useState<ProfileSubTab>('personal');

  const [studentProfile, setStudentProfile] = useState<StudentProfileData>(() => {
    const saved = localStorage.getItem('educore_student_profile');
    return saved ? JSON.parse(saved) : INITIAL_STUDENT_PROFILE;
  });

  const [enrolledCourses] = useState<EnrolledCourse[]>(INITIAL_ENROLLED_COURSES);
  const [semesterRecords] = useState<SemesterRecord[]>(INITIAL_SEMESTER_RECORDS);
  const [dormitory] = useState<DormitoryInfo>(INITIAL_DORMITORY);
  const [requests, setRequests] = useState<RequestItem[]>(() => {
    const saved = localStorage.getItem('educore_requests');
    return saved ? JSON.parse(saved) : INITIAL_REQUESTS;
  });

  useEffect(() => {
    localStorage.setItem('educore_student_profile', JSON.stringify(studentProfile));
  }, [studentProfile]);

  useEffect(() => {
    localStorage.setItem('educore_requests', JSON.stringify(requests));
  }, [requests]);

  const updatePersonal = (data: Partial<StudentProfileData['personal']>) => {
    setStudentProfile(prev => ({
      ...prev,
      personal: { ...prev.personal, ...data },
      applicant: { ...prev.applicant, ...data }
    }));
  };

  const updateContactAddress = (data: Partial<StudentProfileData['contactAddress']>) => {
    setStudentProfile(prev => ({
      ...prev,
      contactAddress: { ...prev.contactAddress, ...data }
    }));
  };

  const updateEmergencyContact = (data: Partial<StudentProfileData['emergencyContact']>) => {
    setStudentProfile(prev => ({
      ...prev,
      emergencyContact: { ...prev.emergencyContact, ...data }
    }));
  };

  const addRequest = (req: Omit<RequestItem, 'id' | 'dateSubmitted' | 'status'>) => {
    const newReq: RequestItem = {
      ...req,
      id: `req-${Date.now()}`,
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setRequests(prev => [newReq, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        profileSubTab,
        setProfileSubTab,
        studentProfile,
        updatePersonal,
        updateContactAddress,
        updateEmergencyContact,
        enrolledCourses,
        semesterRecords,
        dormitory,
        requests,
        addRequest
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
