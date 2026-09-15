import React from 'react';
import type { ContactAddressInfo } from '../../types';

interface Props {
  data: ContactAddressInfo;
}

export const ContactAddressSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 text-xs w-full">
      <div>
        <p className="text-slate-500 font-medium mb-1">Country:</p>
        <p className="font-semibold text-slate-800 text-sm">{data.country}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Street Address:</p>
        <p className="font-semibold text-slate-800">{data.streetAddress}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Mobile:</p>
        <p className="font-semibold text-slate-800 font-mono">{data.mobile}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Email:</p>
        <p className="font-semibold text-slate-800">{data.email}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Zone:</p>
        <p className="font-semibold text-slate-800">{data.zone}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Woreda:</p>
        <p className="font-semibold text-slate-800">{data.woreda}</p>
      </div>

      <div>
        <p className="text-slate-500 font-medium mb-1">Kebele:</p>
        <p className="font-semibold text-slate-800">{data.kebele}</p>
      </div>
    </div>
  );
};
