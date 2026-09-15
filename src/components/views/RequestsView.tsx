import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Calendar, CheckCircle2, Upload, Plus, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { RequestItem } from '../../types';

interface RequestsViewProps {
  requestType: RequestItem['requestType'];
}

export const RequestsView: React.FC<RequestsViewProps> = ({ requestType }) => {
  const { studentProfile, addRequest } = useApp();

  // Add/Drop State
  const [addDropType, setAddDropType] = useState<'add' | 'drop'>('add');
  const [selectedCourseToAdd, setSelectedCourseToAdd] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [addDropReason, setAddDropReason] = useState('');

  // Course Exemption State
  const [instituteName, setInstituteName] = useState('');
  const [equivalentSemester, setEquivalentSemester] = useState('');
  const [exemptFileUploaded, setExemptFileUploaded] = useState(false);

  const [submittedToast, setSubmittedToast] = useState(false);

  const availableCoursesToAdd = [
    { code: 'CS431', title: 'Artificial Intelligence' },
    { code: 'CS432', title: 'Machine Learning' },
    { code: 'CS433', title: 'Cloud Computing' },
    { code: 'SE401', title: 'Advanced Software Engineering' },
    { code: 'CS434', title: 'Computer Security' },
  ];

  const handleSubmitAddDrop = (e: React.FormEvent) => {
    e.preventDefault();
    addRequest({
      requestType: 'Add Drop',
      reason: `${addDropType === 'add' ? 'Add' : 'Drop'} Course: ${selectedCourseToAdd || 'CS431'}`,
      details: addDropReason || `Request to ${addDropType} course for Section ${selectedSection || '1'}`
    });
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
    setSelectedCourseToAdd('');
    setAddDropReason('');
  };

  const handleSubmitExemption = (e: React.FormEvent) => {
    e.preventDefault();
    addRequest({
      requestType: 'Course Exemption',
      reason: `Exemption from ${instituteName || 'Transferred University'}`,
      details: `Equivalent semester: ${equivalentSemester || 'Semester I'}`
    });
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3000);
    setInstituteName('');
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      {submittedToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs flex items-center gap-2 shadow-sm animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Request submitted successfully to Registrar!
        </div>
      )}

      {/* 1. ADD / DROP COURSE REQUEST PAGE */}
      {requestType === 'Add Drop' && (
        <div className="space-y-6">
          {/* Top Blue Header Banner */}
          <div className="bg-blue-600 rounded-xl p-6 text-white shadow-md">
            <h2 className="text-2xl font-bold font-display">Add/Drop Course Request</h2>
            <p className="text-xs text-blue-100 mt-1">Submit your add or drop course request</p>
          </div>

          {/* Add/Drop Open Period Info Box */}
          <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 flex items-center gap-3 text-xs text-blue-900 shadow-sm">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-blue-900">Add/Drop Period: Currently Open</p>
              <p className="text-slate-600 text-[11px]">January 20, 2025 - February 5, 2025</p>
            </div>
          </div>

          {/* Form Card Container */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            <h3 className="text-base font-bold text-slate-800 font-display">Request Details</h3>

            {/* Request Type Toggle Buttons */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-700">Request Type</p>
              <div className="grid grid-cols-2 gap-3 max-w-xl">
                <button
                  type="button"
                  onClick={() => setAddDropType('add')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    addDropType === 'add'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <PlusCircle className="w-4 h-4" /> Add Course
                </button>
                <button
                  type="button"
                  onClick={() => setAddDropType('drop')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    addDropType === 'drop'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <MinusCircle className="w-4 h-4" /> Drop Course
                </button>
              </div>
            </div>

            {/* 2-Column Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
              <div>
                <p className="text-slate-500">Full Name:</p>
                <p className="font-bold text-slate-800">{studentProfile.personal.fullName}</p>
              </div>
              <div>
                <p className="text-slate-500">ID Number:</p>
                <p className="font-bold text-slate-800 font-mono">{studentProfile.personal.idNumber}</p>
              </div>
              <div>
                <p className="text-slate-500">Program:</p>
                <p className="font-bold text-slate-800">Software Engineering</p>
              </div>
              <div>
                <p className="text-slate-500">Class Year:</p>
                <p className="font-bold text-slate-800">Fifth Year</p>
              </div>
            </div>

            {/* Interactive Add Drop Form */}
            <form onSubmit={handleSubmitAddDrop} className="space-y-4 text-xs pt-2">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {addDropType === 'add' ? 'Course to Add' : 'Course to Drop'}
                </label>
                <select
                  value={selectedCourseToAdd}
                  onChange={(e) => setSelectedCourseToAdd(e.target.value)}
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-4 py-2.5 border border-slate-200 focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select course...</option>
                  {availableCoursesToAdd.map(c => (
                    <option key={c.code} value={`${c.code} - ${c.title}`}>
                      {c.code} - {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Preferred Section</label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-4 py-2.5 border border-slate-200 focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select section...</option>
                  <option value="Section 1">Section 1</option>
                  <option value="Section 2">Section 2</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Reason for {addDropType === 'add' ? 'Adding' : 'Dropping'}
                </label>
                <textarea
                  value={addDropReason}
                  onChange={(e) => setAddDropReason(e.target.value)}
                  placeholder={`Please provide a detailed reason for ${addDropType === 'add' ? 'adding' : 'dropping'} this course...`}
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-4 py-3 border border-slate-200 h-28 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-colors"
                >
                  Submit {addDropType === 'add' ? 'Add' : 'Drop'} Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. COURSE EXEMPTION REQUEST PAGE (Matching Screenshot 4) */}
      {requestType === 'Course Exemption' && (
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-xl p-6 text-white shadow-md">
            <h2 className="text-2xl font-bold font-display">Course Exemption Request</h2>
            <p className="text-xs text-blue-100 mt-1">Request credit exemption for equivalent courses completed elsewhere</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            {/* User Circle Placeholder Header */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                <User className="w-10 h-10 text-slate-400" />
              </div>
            </div>

            {/* 2-Column Info Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
              <div>
                <p className="text-slate-500">Full Name:</p>
                <p className="font-bold text-slate-800">{studentProfile.personal.fullName}</p>
              </div>
              <div>
                <p className="text-slate-500">ID Number:</p>
                <p className="font-bold text-slate-800 font-mono">{studentProfile.personal.idNumber}</p>
              </div>
              <div>
                <p className="text-slate-500">Admission Year:</p>
                <p className="font-bold text-slate-800">2020/2021</p>
              </div>
              <div>
                <p className="text-slate-500">Dormitory:</p>
                <p className="font-bold text-slate-800">B356, R-34</p>
              </div>
              <div>
                <p className="text-slate-500">Program:</p>
                <p className="font-bold text-slate-800">Software Engineering</p>
              </div>
              <div>
                <p className="text-slate-500">Admission:</p>
                <p className="font-bold text-slate-800">Undergraduate Regular</p>
              </div>
              <div>
                <p className="text-slate-500">Class Year:</p>
                <p className="font-bold text-slate-800">Fifth Year</p>
              </div>
              <div>
                <p className="text-slate-500">Section:</p>
                <p className="font-bold text-slate-800">Section 2</p>
              </div>
            </div>

            {/* Exemption Form */}
            <form onSubmit={handleSubmitExemption} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Institute Name</label>
                <input
                  type="text"
                  value={instituteName}
                  onChange={(e) => setInstituteName(e.target.value)}
                  placeholder="Enter institute name"
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-4 py-2.5 border border-slate-200"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Equivalent Semester</label>
                <select
                  value={equivalentSemester}
                  onChange={(e) => setEquivalentSemester(e.target.value)}
                  className="w-full bg-slate-50 text-slate-800 rounded-xl px-4 py-2.5 border border-slate-200"
                  required
                >
                  <option value="">Select...</option>
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Document</label>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-slate-500 flex items-center justify-between">
                    <span>{exemptFileUploaded ? 'Official_Transcript.pdf' : 'Choose File No file chosen'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExemptFileUploaded(true)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 font-semibold rounded-xl flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" /> Browse
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-300 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add Course
                </button>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md"
                >
                  Submit Exemption Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. WITHDRAWAL & CLEARANCE OTHER PAGES */}
      {requestType !== 'Add Drop' && requestType !== 'Course Exemption' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4 text-xs">
          <h3 className="font-bold text-slate-800 text-sm">{requestType} Form</h3>
          <p className="text-slate-600">Official form for {requestType} processing.</p>
        </div>
      )}
    </div>
  );
};
