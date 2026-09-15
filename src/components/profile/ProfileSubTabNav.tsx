import React from 'react';
import type { ProfileSubTab } from '../../types';

interface ProfileSubTabNavProps {
  activeSubTab: ProfileSubTab;
  onTabChange: (tab: ProfileSubTab) => void;
}

export const ProfileSubTabNav: React.FC<ProfileSubTabNavProps> = ({ activeSubTab, onTabChange }) => {
  const subTabs: { id: ProfileSubTab; label: string }[] = [
    { id: 'personal', label: 'Personal' },
    { id: 'applicant', label: 'Applicant' },
    { id: 'contact-address', label: 'Contact Address' },
    { id: 'emergency-contact', label: 'Emergency Contact' },
    { id: 'family-background', label: 'Family Background' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'program-preference', label: 'Program Preference' },
  ];

  return (
    <div className="bg-slate-100/80 p-1.5 rounded-xl flex items-center justify-start gap-1 overflow-x-auto border border-slate-200/80 text-xs w-full">
      {subTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
            activeSubTab === tab.id
              ? 'bg-white text-slate-800 font-semibold shadow-sm border border-slate-200/60'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
