import React, { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import CitizenDashboard from './components/CitizenDashboard';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [user, setUser] = useState(null); // Tracks our logged-in citizen entity
  const [currentView, setCurrentView] = useState('citizen');

  // Authentication entry hook
  const handleLoginSuccess = (profileData) => {
    setUser(profileData);
  };

  // If user entity context doesn't exist, route instantly to authentication portal
  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans antialiased text-slate-800">
      {/* Dynamic Global Dashboard Side Navigation */}
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Grid Viewport Canvas Container */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center pb-5 mb-6 border-b border-slate-200">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Aapda Saathi Control Workspace
            </span>
            <h1 className="text-lg font-black text-slate-700 tracking-tight capitalize mt-0.5">
              {currentView === 'citizen' ? 'Citizen Operations Center' : 'Authority Command Grid'}
            </h1>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-1.5 rounded-xl shadow-xs border border-slate-200 text-xs font-bold text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Terminal Operational</span>
          </div>
        </header>

        {/* Navigation Core Display Matrix */}
        {currentView === 'citizen' ? (
          <CitizenDashboard user={user} />
        ) : (
          <AdminDashboard />
        )}
      </main>
    </div>
  );
}