import { useState } from 'react';
import AuthGateway from './components/AuthGateway';
import TopBar from './components/TopBar';
import RightSidebar from './components/RightSidebar';
import CitizenDashboard from './components/CitizenDashboard';
import LiveBulletins from './components/LiveBulletins';
import MedicalVault from './components/MedicalVault';

export default function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('citizen'); // citizen, bulletins, profile
  
  // Shared medical data bucket to stitch directly into outgoing payloads
  const [medicalProfile, setMedicalProfile] = useState({
    age: '20',
    bloodGroup: 'O Positive',
    height: '174 cm',
    weight: '68 kg',
    allergies: 'Penicillin compounds, dust particles tracking',
    injuries: 'No historical major operations recorded'
  });

  if (!user) {
    return <AuthGateway onLoginSuccess={(session) => {
      setUser(session);
      setCurrentView('citizen');
    }} />;
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-[#048c7f] selection:text-white">
      
      {/* FIXED TOP NAVIGATION BAR */}
      <TopBar currentView={currentView} setCurrentView={setCurrentView} user={user} />

      {/* CORE WORKSPACE FRAME */}
      <div className="flex-1 flex flex-col md:flex-row w-full mt-16">
        
        {/* FIXED UTILITY SIDEBAR (LEFT/SIDE PLACEMENT) */}
        <RightSidebar />

        {/* PRIMARY ROUTE VIEWPORT CONTAINER */}
        <main className="flex-1 p-6 overflow-y-auto">
          {currentView === 'citizen' && (
            <CitizenDashboard user={user} medicalProfile={medicalProfile} />
          )}
          {currentView === 'bulletins' && <LiveBulletins />}
          {currentView === 'profile' && (
            <MedicalVault profile={medicalProfile} setProfile={setMedicalProfile} />
          )}
        </main>

      </div>
    </div>
  );
}