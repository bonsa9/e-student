import React from 'react';
import type { EducationInfo } from '../../types';

interface Props {
  data: EducationInfo;
}

export const EducationSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">Preparatory High School:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.highSchoolName}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Region:</p>
        <p className="font-semibold text-slate-800">{data.region}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Grade 12 National Exam Result:</p>
        <p className="font-semibold text-blue-600 font-mono text-sm font-extrabold">{data.grade12Result} / 700</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Completion Year:</p>
        <p className="font-semibold text-slate-800">{data.completionYear}</p>
      </div>
    </div>
  );
};
