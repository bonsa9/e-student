import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { StudentProfileView } from './components/profile/StudentProfileView';
import { DashboardView } from './components/views/DashboardView';
import { EnrollmentRecordView } from './components/views/EnrollmentRecordView';
import { AcademicHistoryView } from './components/views/AcademicHistoryView';
import { DormitoryView } from './components/views/DormitoryView';
import { CurriculumView } from './components/views/CurriculumView';
import { RegistrationView } from './components/views/RegistrationView';
import { CourseAuditView } from './components/views/CourseAuditView';
import { PaymentView } from './components/views/PaymentView';
import { RequestsView } from './components/views/RequestsView';

const MainLayout: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="flex-1 p-6 w-full max-w-full">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'profile' && <StudentProfileView />}
          {activeTab === 'enrollment' && <EnrollmentRecordView />}
          {activeTab === 'academic-history' && <AcademicHistoryView />}
          {activeTab === 'dormitory' && <DormitoryView />}
          {activeTab === 'curriculum' && <CurriculumView />}
          {activeTab === 'registration' && <RegistrationView />}
          {activeTab === 'course-audit' && <CourseAuditView />}
          {activeTab === 'payment' && <PaymentView />}
          {activeTab === 'add-drop' && <RequestsView requestType="Add Drop" />}
          {activeTab === 'withdrawal' && <RequestsView requestType="Withdrawal" />}
          {activeTab === 'clearances' && <RequestsView requestType="Clearance" />}
          {activeTab === 'course-exemption' && <RequestsView requestType="Course Exemption" />}
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
