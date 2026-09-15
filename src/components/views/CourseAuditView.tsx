import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const CourseAuditView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      <div className="bg-blue-600 rounded-xl p-6 text-white shadow-md">
        <h2 className="text-2xl font-bold font-display">Course Audit & Degree Check</h2>
        <p className="text-xs text-blue-100 mt-1">Audit of Completed & Outstanding Pre-Engineering Courses</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
          <span className="font-bold text-slate-800">Total Credits Earned: <strong className="text-blue-600 font-mono">34 Credit Hours</strong></span>
          <span className="font-bold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Degree Audit Passed
          </span>
        </div>

        <p className="text-xs text-slate-600">All required freshman core courses completed in full standing.</p>
      </div>
    </div>
  );
};
