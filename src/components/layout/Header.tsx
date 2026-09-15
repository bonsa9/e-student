import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  const { activeTab, studentProfile } = useApp();

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'profile': return 'Profile';
      case 'enrollment': return 'Enrollment Record';
      case 'academic-history': return 'Academic History';
      case 'dormitory': return 'Dormitory';
      case 'curriculum': return 'Curriculum';
      case 'registration': return 'Registration';
      case 'course-audit': return 'Course Audit';
      case 'payment': return 'Payment';
      case 'add-drop': return 'Add Drop Request';
      case 'withdrawal': return 'Withdrawal Request';
      case 'clearances': return 'Clearances';
      case 'course-exemption': return 'Course Exemption';
      default: return 'Profile';
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm z-20">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
          <LayoutDashboard className="w-4 h-4" />
        </div>
        <h1 className="text-base font-bold text-slate-800 tracking-tight">{getTitle()}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs font-bold text-slate-800">{studentProfile.personal.fullName}</p>
          <p className="text-[11px] text-slate-500">{studentProfile.contactAddress.email}</p>
        </div>
        <button
          onClick={() => alert('Logged out successfully.')}
          className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-md transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};
