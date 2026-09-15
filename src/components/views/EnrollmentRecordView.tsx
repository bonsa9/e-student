import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EnrollmentRecordView: React.FC = () => {
  const { studentProfile, enrolledCourses } = useApp();
  const totalCredits = enrolledCourses.reduce((sum, c) => sum + c.creditHours, 0);

  return (
    <div className="space-y-6 w-full max-w-full font-sans">
      <div className="bg-blue-600 rounded-xl p-6 text-white flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold font-display">Enrollment Record</h2>
          <p className="text-xs text-blue-100 mt-1">2024/2025 Second Semester • ASTU Regular Program</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold font-mono">
            {totalCredits} Total Credits
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
          <div>
            <p className="text-slate-500 font-medium">Student Name:</p>
            <p className="font-bold text-slate-800 text-sm">{studentProfile.personal.fullName}</p>
          </div>
          <div>
            <p className="text-slate-500 font-medium">ID Number:</p>
            <p className="font-bold text-slate-800 text-sm font-mono">{studentProfile.personal.idNumber}</p>
          </div>
          <div>
            <p className="text-slate-500 font-medium">Advisor Clearance:</p>
            <p className="font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Approved by Advisor
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3">Course Code</th>
                <th className="p-3">Course Title</th>
                <th className="p-3">Cr. Hrs</th>
                <th className="p-3">Section</th>
                <th className="p-3">Lecture Schedule</th>
                <th className="p-3">Instructor</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {enrolledCourses.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-blue-600">{c.code}</td>
                  <td className="p-3 font-semibold text-slate-800">{c.title}</td>
                  <td className="p-3 font-bold">{c.creditHours}</td>
                  <td className="p-3 text-slate-600">{c.section}</td>
                  <td className="p-3 text-slate-600">{c.schedule}</td>
                  <td className="p-3 text-slate-600">{c.instructor}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
