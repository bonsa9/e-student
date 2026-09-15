import React, { useState } from 'react';
import { User, Edit, Save, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PageHeaderBanner } from '../common/PageHeaderBanner';
import { ProfileSubTabNav } from './ProfileSubTabNav';
import { PersonalInfoSection } from './PersonalInfoSection';
import { ApplicantInfoSection } from './ApplicantInfoSection';
import { ContactAddressSection } from './ContactAddressSection';
import { EmergencyContactSection } from './EmergencyContactSection';
import { FamilyBackgroundSection } from './FamilyBackgroundSection';
import { EducationSection } from './EducationSection';
import { ExperienceSection } from './ExperienceSection';
import { ProgramPreferenceSection } from './ProgramPreferenceSection';

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
    <div className="space-y-6 w-full max-w-full font-sans">
      {saveToast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs flex items-center gap-2 shadow-sm animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Profile information updated successfully!
        </div>
      )}

      {/* Reusable Page Header Banner */}
      <PageHeaderBanner icon={User} title="Student Profile" />

      {/* Reusable Profile SubTab Nav */}
      <ProfileSubTabNav activeSubTab={profileSubTab} onTabChange={(t) => { setProfileSubTab(t); setIsEditing(false); }} />

      {/* Main Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
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

        <div className="p-6">
          {profileSubTab === 'personal' && <PersonalInfoSection data={studentProfile.personal} />}
          {profileSubTab === 'applicant' && <ApplicantInfoSection data={studentProfile.applicant} />}
          {profileSubTab === 'contact-address' && <ContactAddressSection data={studentProfile.contactAddress} />}
          {profileSubTab === 'emergency-contact' && <EmergencyContactSection data={studentProfile.emergencyContact} />}
          {profileSubTab === 'family-background' && <FamilyBackgroundSection data={studentProfile.familyBackground} />}
          {profileSubTab === 'education' && <EducationSection data={studentProfile.education} />}
          {profileSubTab === 'experience' && <ExperienceSection data={studentProfile.experience} />}
          {profileSubTab === 'program-preference' && <ProgramPreferenceSection data={studentProfile.programPreference} />}

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
