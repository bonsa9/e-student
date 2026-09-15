import React from 'react';
import { Phone, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DormitoryView: React.FC = () => {
  const { dormitory, studentProfile } = useApp();

  return (
    <div className="space-y-6 w-full max-w-full font-sans">
      <div className="bg-blue-600 rounded-xl p-6 text-white flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold font-display">Dormitory Placement</h2>
          <p className="text-xs text-blue-100 mt-1">Student Housing & Campus Accommodation</p>
        </div>
        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
          {dormitory.status}
        </span>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <span className="text-xs text-blue-600 font-semibold block uppercase">Block Assignment</span>
            <span className="text-2xl font-bold text-slate-800">{dormitory.blockNumber}</span>
          </div>

          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <span className="text-xs text-emerald-600 font-semibold block uppercase">Room Number</span>
            <span className="text-2xl font-bold text-slate-800">{dormitory.roomNumber}</span>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <span className="text-xs text-purple-600 font-semibold block uppercase">Bed Assignment</span>
            <span className="text-2xl font-bold text-slate-800">{dormitory.bedNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 text-xs">
          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-3">Residence Hall Information</h4>
            <div className="space-y-2">
              <p className="text-slate-500">Building Name: <strong className="text-slate-800">{dormitory.buildingName}</strong></p>
              <p className="text-slate-500">Occupant: <strong className="text-slate-800">{studentProfile.personal.fullName} ({studentProfile.personal.idNumber})</strong></p>
              <p className="text-slate-500">Academic Year: <strong className="text-slate-800">2024/2025</strong></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-3">Dormitory Administration</h4>
            <div className="space-y-2">
              <p className="text-slate-500 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" /> Dorm Proctor: <strong className="text-slate-800">{dormitory.dormProctorName}</strong>
              </p>
              <p className="text-slate-500 flex items-center gap-1.5 font-mono">
                <Phone className="w-3.5 h-3.5 text-blue-600" /> Proctor Phone: <strong className="text-slate-800">{dormitory.proctorPhone}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
