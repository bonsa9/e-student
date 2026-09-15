import React from 'react';
import { useApp } from '../../context/AppContext';

export const CurriculumView: React.FC = () => {
  const { studentProfile } = useApp();

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      <div className="bg-blue-600 rounded-xl p-6 text-white shadow-md">
        <h2 className="text-2xl font-bold font-display">Program Curriculum</h2>
        <p className="text-xs text-blue-100 mt-1">{studentProfile.personal.program} • ASTU Requirements</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-bold text-slate-800 text-xs">
            Year 1 - Semester I (Freshman Pre-Engineering)
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/50 text-slate-500 font-semibold uppercase text-[10px]">
              <tr>
                <th className="p-3">Course Code</th>
                <th className="p-3">Course Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Credit Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 font-mono font-bold text-blue-600">Math1011</td>
                <td className="p-3 font-semibold">Mathematics for Natural Sciences</td>
                <td className="p-3 text-slate-500">Compulsory Core</td>
                <td className="p-3 font-bold">4</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-blue-600">Phys1011</td>
                <td className="p-3 font-semibold">General Physics I</td>
                <td className="p-3 text-slate-500">Compulsory Core</td>
                <td className="p-3 font-bold">3</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-blue-600">Chem1011</td>
                <td className="p-3 font-semibold">General Chemistry</td>
                <td className="p-3 text-slate-500">Compulsory Core</td>
                <td className="p-3 font-bold">3</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-blue-600">EnLa1011</td>
                <td className="p-3 font-semibold">Communicative English Skills I</td>
                <td className="p-3 text-slate-500">General Education</td>
                <td className="p-3 font-bold">3</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-blue-600">InSc1011</td>
                <td className="p-3 font-semibold">Intro to Computing & Programming</td>
                <td className="p-3 text-slate-500">Compulsory Core</td>
                <td className="p-3 font-bold">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
