import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { User, Mail, Shield, Book, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    course: 'B.Tech Computer Science',
    semester: 'Semester 5'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, send API request to update profile here
  };

  return (
    <div className="fade-in max-w-4xl mx-auto" style={{ maxWidth: '56rem', margin: '0 auto' }}>
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p className="text-gray mb-8">Manage your personal information and application settings.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="card flex flex-col items-center text-center">
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              {formData.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold">{formData.name}</h2>
            <p className="text-gray mb-6">{formData.course}</p>
            
            <button onClick={() => setIsEditing(!isEditing)} className="btn btn-secondary w-full mb-4" style={{ width: '100%' }}>
              {isEditing ? 'Cancel Edit' : 'Edit Profile'}
            </button>
            <button onClick={logout} className="btn w-full bg-red-100 text-red-700 hover:bg-red-200" style={{ width: '100%', backgroundColor: '#fee2e2', color: '#b91c1c' }}>
              <LogOut size={18} className="mr-2" style={{ marginRight: '0.5rem' }} /> Logout
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="card">
            <h3 className="text-lg font-bold mb-4 border-b pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>Personal Details</h3>
            {isEditing ? (
              <form onSubmit={handleSave} className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <div className="flex items-center gap-3">
                    <User size={20} className="text-gray" />
                    <input type="text" name="name" className="form-input flex-1" value={formData.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-gray" />
                    <input type="email" name="email" className="form-input flex-1" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Course</label>
                  <div className="flex items-center gap-3">
                    <Book size={20} className="text-gray" />
                    <input type="text" name="course" className="form-input flex-1" value={formData.course} onChange={handleChange} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary ml-auto mt-4" style={{ marginLeft: 'auto' }}>Save Changes</button>
              </form>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <User size={24} className="text-gray" />
                  <div>
                    <p className="text-sm text-gray">Full Name</p>
                    <p className="font-bold">{formData.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <Mail size={24} className="text-gray" />
                  <div>
                    <p className="text-sm text-gray">Email Address</p>
                    <p className="font-bold">{formData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <Book size={24} className="text-gray" />
                  <div>
                    <p className="text-sm text-gray">Course Details</p>
                    <p className="font-bold">{formData.course} • {formData.semester}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="card">
            <h3 className="text-lg font-bold mb-4 border-b pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>App Settings</h3>
            <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div>
                <p className="font-bold">Theme Preference</p>
                <p className="text-sm text-gray">Toggle between light and dark mode</p>
              </div>
              <button 
                onClick={toggleTheme} 
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', borderRadius: '20px' }}
              >
                {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 mt-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div>
                <p className="font-bold">Account Security</p>
                <p className="text-sm text-gray">Update your password</p>
              </div>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', borderRadius: '20px' }}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
