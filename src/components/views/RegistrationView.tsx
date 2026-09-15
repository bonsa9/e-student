import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RegistrationView: React.FC = () => {
  const { enrolledCourses } = useApp();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      <div className="bg-blue-600 rounded-xl p-6 text-white flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold font-display">Semester Course Registration</h2>
          <p className="text-xs text-blue-100 mt-1">2024/2025 Second Semester • ASTU Registration Portal</p>
        </div>
        {submitted && (
          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Registration Submitted
          </span>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
        <h3 className="font-bold text-slate-800 text-sm">Selected Courses for Semester II</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px]">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3">Title</th>
                <th className="p-3">Credit Hours</th>
                <th className="p-3">Section</th>
                <th className="p-3">Schedule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {enrolledCourses.map((c) => (
                <tr key={c.code}>
                  <td className="p-3 font-mono font-bold text-blue-600">{c.code}</td>
                  <td className="p-3 font-semibold text-slate-800">{c.title}</td>
                  <td className="p-3 font-bold">{c.creditHours}</td>
                  <td className="p-3">{c.section}</td>
                  <td className="p-3">{c.schedule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-100">
          <button
            onClick={() => setSubmitted(true)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
          >
            Submit Registration to Advisor
          </button>
        </div>
      </div>
    </div>
  );
};
