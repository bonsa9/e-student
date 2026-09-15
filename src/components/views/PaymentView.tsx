import React, { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PaymentView: React.FC = () => {
  const { studentProfile } = useApp();
  const [bankSlipUploaded, setBankSlipUploaded] = useState(false);

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      <div className="bg-blue-600 rounded-xl p-6 text-white flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold font-display">Tuition & Cost Sharing Payment</h2>
          <p className="text-xs text-blue-100 mt-1">Ethiopian Cost-Sharing Agreement & Bank Slip Submission</p>
        </div>
        <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold font-mono rounded-full">
          {studentProfile.personal.tuitionType}
        </span>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 space-y-2">
            <h4 className="font-bold text-blue-900 text-sm">Cost-Sharing Contract Details</h4>
            <p className="text-slate-600">Student ID: <strong className="text-slate-800 font-mono">{studentProfile.personal.idNumber}</strong></p>
            <p className="text-slate-600">Institution: <strong className="text-slate-800">{studentProfile.personal.school}</strong></p>
            <p className="text-slate-600">Agreement Status: <strong className="text-emerald-700 font-bold">Active & Verified</strong></p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-800 text-sm">Upload Bank Transaction Slip</h4>
            <p className="text-slate-500">CBE / Commercial Bank of Ethiopia Payment Slip Verification.</p>

            {!bankSlipUploaded ? (
              <button
                onClick={() => setBankSlipUploaded(true)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Upload className="w-4 h-4" /> Upload Deposit Receipt Slip
              </button>
            ) : (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bank Slip Submitted for Registrar Verification!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
