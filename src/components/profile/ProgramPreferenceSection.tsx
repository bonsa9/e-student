import React from 'react';
import type { ProgramPreferenceInfo } from '../../types';

interface Props {
  data: ProgramPreferenceInfo;
}

export const ProgramPreferenceSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">First Choice Program:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.firstChoice}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Second Choice Program:</p>
        <p className="font-semibold text-slate-800">{data.secondChoice}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Officially Assigned Program:</p>
        <p className="font-semibold text-blue-600 text-sm font-bold">{data.assignedProgram}</p>
      </div>
    </div>
  );
};
