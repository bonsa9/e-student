import React, { useState } from 'react';
import { BookOpen, TrendingUp, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AcademicHistoryView: React.FC = () => {
  const { semesterRecords } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'transcript' | 'gpa-summary' | 'grade-report' | 'assessment' | 'attendance' | 'cost-sharing'>('transcript');
  const [selectedSemesterFilter, setSelectedSemesterFilter] = useState('2020/2021 First Semester');

  const tabs = [
    { id: 'transcript', label: 'Transcript' },
    { id: 'gpa-summary', label: 'GPA summary' },
    { id: 'grade-report', label: 'Grade report' },
    { id: 'assessment', label: 'Assessment result' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'cost-sharing', label: 'Cost sharing history' },
  ];

  return (
    <div className="space-y-6 w-full max-w-full font-sans">
      {/* Top Main Blue Header Banner */}
      <div className="bg-blue-600 rounded-xl p-6 text-white flex items-center gap-4 shadow-md">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30">
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold font-display tracking-tight">Academic History</h2>
      </div>

      {/* Sub Navigation Pill Tabs Bar */}
      <div className="bg-slate-100/80 p-1.5 rounded-xl flex items-center justify-start gap-1 overflow-x-auto border border-slate-200/80 text-xs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeSubTab === tab.id
                ? 'bg-white text-slate-800 font-semibold shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. TRANSCRIPT TAB */}
      {activeSubTab === 'transcript' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <p className="text-xs font-semibold text-red-500">* This is not official transcript</p>

          {semesterRecords.map((sem, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-bold text-slate-800 tracking-tight">
                {sem.semesterName}
              </h3>

              <div className="rounded-xl overflow-hidden border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-red-500 text-white font-bold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 w-1/5">Code</th>
                      <th className="p-3.5 w-2/5">Course Title</th>
                      <th className="p-3.5 w-1/6 text-center">Credit Hour</th>
                      <th className="p-3.5 w-1/6 text-center">Grade</th>
                      <th className="p-3.5 w-1/6 text-center">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                    {sem.courses.map((c) => (
                      <tr key={c.code} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-bold text-slate-800 font-mono">{c.code}</td>
                        <td className="p-3.5 font-medium text-slate-800">{c.title}</td>
                        <td className="p-3.5 text-center font-bold text-slate-700">{c.creditHours}</td>
                        <td className="p-3.5 text-center">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[11px] ${
                            c.grade.startsWith('A') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            c.grade.startsWith('B') ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                            c.grade.startsWith('C') ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}>
                            {c.grade}
                          </span>
                        </td>
                        <td className="p-3.5 text-center font-mono font-bold text-slate-800">{c.gradePoint}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. GRADE REPORT TAB (Matching Screenshot 1) */}
      {activeSubTab === 'grade-report' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800 font-display flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" /> Grade Report
            </h3>
            <p className="text-xs text-slate-400">Choose Course to view assessment result for that course</p>
          </div>

          {/* Semester Dropdown Selector */}
          <div className="relative max-w-md">
            <select
              value={selectedSemesterFilter}
              onChange={(e) => setSelectedSemesterFilter(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 text-xs font-semibold rounded-xl px-4 py-2.5 border border-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="2020/2021 First Semester">2020/2021 First Semester</option>
              <option value="2020/2021 Second Semester">2020/2021 Second Semester</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-slate-800 tracking-tight">
              2020/2021 First Semester [First Year]
            </h4>

            {/* Clean Light Table */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Course Code</th>
                    <th className="p-3.5">Course Title</th>
                    <th className="p-3.5 text-center">Credit Hours</th>
                    <th className="p-3.5 text-center">Grade</th>
                    <th className="p-3.5 text-center">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  {[
                    { code: 'CHEM1101', title: 'General Chemistry', creditHours: 3, grade: 'B+', points: 10.5 },
                    { code: 'MATH 1101', title: 'Applied Mathematics - I', creditHours: 4, grade: 'B-', points: 11 },
                    { code: 'Phys 1101', title: 'General Physics', creditHours: 3, grade: 'B-', points: 8.25 },
                    { code: 'SpSc1011', title: 'Physical Fitness and Conditioning', creditHours: 0, grade: 'P', points: 0 },
                    { code: 'EnLa1001', title: 'Communicative English', creditHours: 3, grade: 'B', points: 9 },
                    { code: 'CSEg1011', title: 'Introduction to Computing', creditHours: 3, grade: 'A-', points: 11.25 },
                    { code: 'LART1002', title: 'Logic and Critical Thinking', creditHours: 3, grade: 'C+', points: 7.5 },
                  ].map((row) => (
                    <tr key={row.code} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-800 font-mono">{row.code}</td>
                      <td className="p-3.5 font-medium text-slate-800">{row.title}</td>
                      <td className="p-3.5 text-center font-bold text-slate-700">{row.creditHours}</td>
                      <td className="p-3.5 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[11px] ${
                          row.grade.startsWith('A') ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                          row.grade.startsWith('B') ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                          row.grade.startsWith('C') ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                          'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {row.grade}
                        </span>
                      </td>
                      <td className="p-3.5 text-center font-mono font-bold text-slate-800">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. GPA SUMMARY / ASSESSMENT / ATTENDANCE / COST SHARING HISTORY TABS */}
      {activeSubTab !== 'transcript' && activeSubTab !== 'grade-report' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center text-xs text-slate-500 space-y-2">
          <p className="font-bold text-slate-700 text-sm">Official Record Summary</p>
          <p>All academic reports verified by ASTU Registrar Office for 2020-2025.</p>
        </div>
      )}
    </div>
  );
};
