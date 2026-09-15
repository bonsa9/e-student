import React from 'react';
import type { PersonalInfo } from '../../types';

interface Props {
  data: PersonalInfo;
}

export const PersonalInfoSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">Full Name:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.fullName}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">ID Number:</p>
        <p className="font-semibold text-slate-800 text-sm font-mono">{data.idNumber}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">School:</p>
        <p className="font-semibold text-slate-800">{data.school}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Admission:</p>
        <p className="font-semibold text-slate-800">{data.admission}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Class Year:</p>
        <p className="font-semibold text-slate-800">{data.classYear}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Program:</p>
        <p className="font-semibold text-slate-800">{data.program}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Academic Year:</p>
        <p className="font-semibold text-slate-800">{data.academicYear}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Registration Number:</p>
        <p className="font-semibold text-slate-800 font-mono">{data.registrationNumber}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Matriculation Result:</p>
        <p className="font-semibold text-slate-800 font-mono text-sm">{data.matriculationResult}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Tuition Type:</p>
        <p className="font-semibold text-slate-800">{data.tuitionType}</p>
      </div>
    </div>
  );
};
