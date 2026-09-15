import React from 'react';
import type { EmergencyContactInfo } from '../../types';

interface Props {
  data: EmergencyContactInfo;
}

export const EmergencyContactSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">Contact Name:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.fullName}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Relationship:</p>
        <p className="font-semibold text-slate-800">{data.relationship}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">Phone Number:</p>
        <p className="font-semibold text-slate-800 font-mono">{data.phone}</p>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">City / Region:</p>
        <p className="font-semibold text-slate-800">{data.city}</p>
      </div>
    </div>
  );
};
