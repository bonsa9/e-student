import React, { useState } from 'react';
import { User, Edit, Save, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { ProfileSubTab } from '../../types';

export const StudentProfileView: React.FC = () => {
  const { 
    profileSubTab, 
    setProfileSubTab, 
    studentProfile, 
    updatePersonal, 
    updateContactAddress, 
    updateEmergencyContact 
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  // Edit State Form fields
  const [editFormData, setEditFormData] = useState({
    fullName: studentProfile.personal.fullName,
    mobile: studentProfile.contactAddress.mobile,
    email: studentProfile.contactAddress.email,
    streetAddress: studentProfile.contactAddress.streetAddress,
    zone: studentProfile.contactAddress.zone,
    woreda: studentProfile.contactAddress.woreda,
    kebele: studentProfile.contactAddress.kebele,
    emergencyName: studentProfile.emergencyContact.fullName,
    emergencyPhone: studentProfile.emergencyContact.phone,
  });

  const subTabs: { id: ProfileSubTab; label: string }[] = [
    { id: 'personal', label: 'Personal' },
    { id: 'applicant', label: 'Applicant' },
    { id: 'contact-address', label: 'Contact Address' },
    { id: 'emergency-contact', label: 'Emergency Contact' },
    { id: 'family-background', label: 'Family Background' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'program-preference', label: 'Program Preference' },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonal({ fullName: editFormData.fullName });
    updateContactAddress({
      mobile: editFormData.mobile,
      email: editFormData.email,
      streetAddress: editFormData.streetAddress,
      zone: editFormData.zone,
      woreda: editFormData.woreda,
      kebele: editFormData.kebele,
    });
    updateEmergencyContact({
      fullName: editFormData.emergencyName,
      phone: editFormData.emergencyPhone,
    });
    setIsEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      {/* Toast Notification */}
      {saveToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs flex items-center gap-2 shadow-sm animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Profile information updated successfully!
        </div>
      )}

      {/* Top Main Blue Banner */}
      <div className="bg-blue-600 rounded-xl p-6 text-white flex items-center gap-4 shadow-md">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border border-white/30">
          <User className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold font-display tracking-tight">Student Profile</h2>
      </div>

      {/* Sub Navigation Pill Bar */}
      <div className="bg-slate-100/80 p-1.5 rounded-xl flex items-center gap-1 overflow-x-auto border border-slate-200/80 text-xs">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setProfileSubTab(tab.id);
              setIsEditing(false);
            }}
            className={`px-3.5 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
              profileSubTab === tab.id
                ? 'bg-white text-slate-800 font-semibold shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Profile Card Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Tab Header Banner */}
        <div className="bg-blue-600 px-6 py-3 text-white font-bold text-lg font-display">
          {profileSubTab === 'personal' && 'Personal Information'}
          {profileSubTab === 'applicant' && 'Applicant Information'}
          {profileSubTab === 'contact-address' && 'Contact Address'}
          {profileSubTab === 'emergency-contact' && 'Emergency Contact'}
          {profileSubTab === 'family-background' && 'Family Background'}
          {profileSubTab === 'education' && 'Education Background'}
          {profileSubTab === 'experience' && 'Work Experience'}
          {profileSubTab === 'program-preference' && 'Program Preference'}
        </div>

        {/* Card Content Grid */}
        <div className="p-6">
          {/* 1. Personal Information Tab */}
          {profileSubTab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">Full Name:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.personal.fullName}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">ID Number:</p>
                <p className="font-semibold text-slate-800 text-sm font-mono">{studentProfile.personal.idNumber}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">School:</p>
                <p className="font-semibold text-slate-800">{studentProfile.personal.school}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Admission:</p>
                <p className="font-semibold text-slate-800">{studentProfile.personal.admission}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Class Year:</p>
                <p className="font-semibold text-slate-800">{studentProfile.personal.classYear}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Program:</p>
                <p className="font-semibold text-slate-800">{studentProfile.personal.program}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Academic Year:</p>
                <p className="font-semibold text-slate-800">{studentProfile.personal.academicYear}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Registration Number:</p>
                <p className="font-semibold text-slate-800 font-mono">{studentProfile.personal.registrationNumber}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Matriculation Result:</p>
                <p className="font-semibold text-slate-800 font-mono text-sm">{studentProfile.personal.matriculationResult}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Tuition Type:</p>
                <p className="font-semibold text-slate-800">{studentProfile.personal.tuitionType}</p>
              </div>
            </div>
          )}

          {/* 2. Applicant Information Tab */}
          {profileSubTab === 'applicant' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">ID Number:</p>
                <p className="font-semibold text-slate-800 font-mono text-sm">{studentProfile.applicant.idNumber}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">School:</p>
                <p className="font-semibold text-slate-800">{studentProfile.applicant.school}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Admission:</p>
                <p className="font-semibold text-slate-800">{studentProfile.applicant.admission}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Class Year:</p>
                <p className="font-semibold text-slate-800">{studentProfile.applicant.classYear}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Program:</p>
                <p className="font-semibold text-slate-800">{studentProfile.applicant.program}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Academic Year:</p>
                <p className="font-semibold text-slate-800">{studentProfile.applicant.academicYear}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Registration Number:</p>
                <p className="font-semibold text-slate-800 font-mono">{studentProfile.applicant.registrationNumber}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Matriculation Result:</p>
                <p className="font-semibold text-slate-800 font-mono">{studentProfile.applicant.matriculationResult}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Tuition Type:</p>
                <p className="font-semibold text-slate-800">{studentProfile.applicant.tuitionType}</p>
              </div>
            </div>
          )}

          {/* 3. Contact Address Tab */}
          {profileSubTab === 'contact-address' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">Country:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.contactAddress.country}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Street Address:</p>
                <p className="font-semibold text-slate-800">{studentProfile.contactAddress.streetAddress}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Mobile:</p>
                <p className="font-semibold text-slate-800 font-mono">{studentProfile.contactAddress.mobile}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Email:</p>
                <p className="font-semibold text-slate-800">{studentProfile.contactAddress.email}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Zone:</p>
                <p className="font-semibold text-slate-800">{studentProfile.contactAddress.zone}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Woreda:</p>
                <p className="font-semibold text-slate-800">{studentProfile.contactAddress.woreda}</p>
              </div>

              <div>
                <p className="text-slate-500 font-medium mb-1">Kebele:</p>
                <p className="font-semibold text-slate-800">{studentProfile.contactAddress.kebele}</p>
              </div>
            </div>
          )}

          {/* 4. Emergency Contact Tab */}
          {profileSubTab === 'emergency-contact' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">Contact Name:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.emergencyContact.fullName}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Relationship:</p>
                <p className="font-semibold text-slate-800">{studentProfile.emergencyContact.relationship}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Phone Number:</p>
                <p className="font-semibold text-slate-800 font-mono">{studentProfile.emergencyContact.phone}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">City / Region:</p>
                <p className="font-semibold text-slate-800">{studentProfile.emergencyContact.city}</p>
              </div>
            </div>
          )}

          {/* 5. Family Background Tab */}
          {profileSubTab === 'family-background' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">Father's Full Name:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.familyBackground.fatherFullName}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Father's Occupation:</p>
                <p className="font-semibold text-slate-800">{studentProfile.familyBackground.fatherOccupation}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Mother's Full Name:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.familyBackground.motherFullName}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Mother's Occupation:</p>
                <p className="font-semibold text-slate-800">{studentProfile.familyBackground.motherOccupation}</p>
              </div>
            </div>
          )}

          {/* 6. Education Tab */}
          {profileSubTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">Preparatory High School:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.education.highSchoolName}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Region:</p>
                <p className="font-semibold text-slate-800">{studentProfile.education.region}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Grade 12 National Exam Result:</p>
                <p className="font-semibold text-blue-600 font-mono text-sm font-extrabold">{studentProfile.education.grade12Result} / 700</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Completion Year:</p>
                <p className="font-semibold text-slate-800">{studentProfile.education.completionYear}</p>
              </div>
            </div>
          )}

          {/* 7. Experience Tab */}
          {profileSubTab === 'experience' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">Organization:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.experience.organization}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Position / Role:</p>
                <p className="font-semibold text-slate-800">{studentProfile.experience.position}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Duration:</p>
                <p className="font-semibold text-slate-800">{studentProfile.experience.duration}</p>
              </div>
            </div>
          )}

          {/* 8. Program Preference Tab */}
          {profileSubTab === 'program-preference' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-xs">
              <div>
                <p className="text-slate-500 font-medium mb-1">First Choice Program:</p>
                <p className="font-semibold text-slate-800 text-sm">{studentProfile.programPreference.firstChoice}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Second Choice Program:</p>
                <p className="font-semibold text-slate-800">{studentProfile.programPreference.secondChoice}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium mb-1">Officially Assigned Program:</p>
                <p className="font-semibold text-blue-600 text-sm font-bold">{studentProfile.programPreference.assignedProgram}</p>
              </div>
            </div>
          )}

          {/* EDIT BUTTON AT BOTTOM */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-start">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md border border-slate-300/70 flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Edit className="w-3.5 h-3.5 text-slate-600" /> Edit
              </button>
            ) : (
              <form onSubmit={handleSave} className="w-full space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Update Profile Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={editFormData.fullName}
                      onChange={(e) => setEditFormData({ ...editFormData, fullName: e.target.value })}
                      className="w-full bg-white text-slate-800 border border-slate-300 rounded-lg px-3 py-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">Mobile Phone</label>
                    <input
                      type="text"
                      value={editFormData.mobile}
                      onChange={(e) => setEditFormData({ ...editFormData, mobile: e.target.value })}
                      className="w-full bg-white text-slate-800 border border-slate-300 rounded-lg px-3 py-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={editFormData.email}
                      onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                      className="w-full bg-white text-slate-800 border border-slate-300 rounded-lg px-3 py-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">Street Address</label>
                    <input
                      type="text"
                      value={editFormData.streetAddress}
                      onChange={(e) => setEditFormData({ ...editFormData, streetAddress: e.target.value })}
                      className="w-full bg-white text-slate-800 border border-slate-300 rounded-lg px-3 py-1.5"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-medium rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" /> Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
