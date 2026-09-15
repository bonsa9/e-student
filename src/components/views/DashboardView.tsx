import React from 'react';
import { BookOpen, GraduationCap, Building, FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DashboardView: React.FC = () => {
  const { studentProfile, enrolledCourses, semesterRecords, dormitory, setActiveTab } = useApp();

  const totalCredits = enrolledCourses.reduce((sum, c) => sum + c.creditHours, 0);

  return (
    <div className="space-y-6 w-full max-w-full font-sans">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-6 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm mb-2">
            2024/2025 Second Semester • ASTU
          </span>
          <h2 className="text-2xl font-extrabold font-display">Welcome back, {studentProfile.personal.fullName}!</h2>
          <p className="text-xs text-blue-100 mt-1">
            Student ID: <span className="font-mono font-bold text-white">{studentProfile.personal.idNumber}</span> • {studentProfile.personal.program}
          </p>
        </div>

        <button
          onClick={() => setActiveTab('profile')}
          className="px-4 py-2 bg-white text-blue-700 hover:bg-blue-50 text-xs font-bold rounded-xl shadow transition-colors"
        >
          View Full Profile →
        </button>
      </div>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-medium">Enrolled Courses</p>
            <p className="text-xl font-bold text-slate-800">{enrolledCourses.length} Courses</p>
            <p className="text-[11px] text-blue-600 font-semibold">{totalCredits} Credit Hours</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-medium">Cumulative GPA</p>
            <p className="text-xl font-bold text-slate-800">{semesterRecords[1]?.cgpa || 3.86}</p>
            <p className="text-[11px] text-emerald-600 font-semibold">Great Academic Standing</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-medium">Dormitory Room</p>
            <p className="text-xl font-bold text-slate-800">{dormitory.roomNumber}</p>
            <p className="text-[11px] text-slate-500">{dormitory.blockNumber}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-slate-500 font-medium">Tuition Status</p>
            <p className="text-xl font-bold text-slate-800 uppercase">{studentProfile.personal.tuitionType}</p>
            <p className="text-[11px] text-emerald-600 font-semibold">Cost Sharing Agreement Verified</p>
          </div>
        </div>
      </div>

      {/* Enrolled Courses Table Quick View */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-800">Current Semester Registered Courses</h3>
          <button
            onClick={() => setActiveTab('enrollment')}
            className="text-xs text-blue-600 hover:underline font-semibold"
          >
            View Details →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3">Course Code</th>
                <th className="p-3">Course Title</th>
                <th className="p-3">Cr. Hrs</th>
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
