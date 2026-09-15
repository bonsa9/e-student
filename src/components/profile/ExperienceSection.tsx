import React from 'react';
import type { ExperienceInfo } from '../../types';

interface Props {
  data: ExperienceInfo;
}

export const ExperienceSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">Organization:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.organization}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Position / Role:</p>
        <p className="font-semibold text-slate-800">{data.position}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Duration:</p>
        <p className="font-semibold text-slate-800">{data.duration}</p>
      </div>
    </div>
  );
};
