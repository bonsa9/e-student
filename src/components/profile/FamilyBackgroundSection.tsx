import React from 'react';
import type { FamilyBackgroundInfo } from '../../types';

interface Props {
  data: FamilyBackgroundInfo;
}

export const FamilyBackgroundSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">Father's Full Name:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.fatherFullName}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Father's Occupation:</p>
        <p className="font-semibold text-slate-800">{data.fatherOccupation}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Mother's Full Name:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.motherFullName}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Mother's Occupation:</p>
        <p className="font-semibold text-slate-800">{data.motherOccupation}</p>
      </div>
    </div>
  );
};
