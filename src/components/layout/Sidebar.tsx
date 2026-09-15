import React, { useState } from 'react';
import { 
  GraduationCap, 
  Home, 
  User, 
  FileText, 
  BookOpen, 
  Building, 
  ChevronDown, 
  ChevronUp, 
  PlusCircle, 
  MinusCircle, 
  CheckSquare, 
  HelpCircle,
  CreditCard,
  ClipboardList
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { SidebarTab } from '../../types';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const [academicsOpen, setAcademicsOpen] = useState(true);
  const [requestOpen, setRequestOpen] = useState(true);

  const mainNav: { id: SidebarTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Student Profile', icon: User },
    { id: 'enrollment', label: 'Enrollment Record', icon: FileText },
    { id: 'academic-history', label: 'Academic History', icon: BookOpen },
    { id: 'dormitory', label: 'Dormitory', icon: Building },
  ];

  const academicsNav: { id: SidebarTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'registration', label: 'Registration', icon: ClipboardList },
    { id: 'course-audit', label: 'Course Audit', icon: FileText },
    { id: 'payment', label: 'Payment', icon: CreditCard },
  ];

  const requestNav: { id: SidebarTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'add-drop', label: 'Add Drop', icon: PlusCircle },
    { id: 'withdrawal', label: 'Withdrawal', icon: MinusCircle },
    { id: 'clearances', label: 'Clearances', icon: CheckSquare },
    { id: 'course-exemption', label: 'Course Exemption', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 font-sans">
      <div>
        {/* Brand Header */}
        <div className="p-4 flex items-center gap-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base font-bold text-blue-600 leading-tight">EduCore SIMS</h1>
            <p className="text-[11px] text-slate-400 font-medium">2024/2025 Second Semester</p>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="p-3 space-y-1 text-xs">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Academics Group */}
          <div className="pt-2">
            <button
              onClick={() => setAcademicsOpen(!academicsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-slate-500 hover:text-slate-800 font-medium text-xs"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-slate-400" /> Academics
              </span>
              {academicsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {academicsOpen && (
              <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-100 ml-5">
                {academicsNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Request Group */}
          <div className="pt-2">
            <button
              onClick={() => setRequestOpen(!requestOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-slate-500 hover:text-slate-800 font-medium text-xs"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" /> Request
              </span>
              {requestOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {requestOpen && (
              <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-100 ml-5">
                {requestNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="p-4 border-t border-slate-100 text-[11px] text-slate-400 text-center">
        EduCore SIMS v2.4 • ASTU Portal
      </div>
    </aside>
  );
};
