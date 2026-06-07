import { useState } from 'react';

export default function AuthGateway({ onLoginSuccess }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adminKey, setAdminKey] = useState('');

  const handleCitizenSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      return alert('Please enter your name and contact node.');
    }
    
    // Enforce precise 10-digit validation before passing state
    if (phone.length !== 10) {
      return alert('Invalid Payload: Contact number must be exactly 10 digits.');
    }
    
    // Pass user profile parameters immediately to the parent application state
    onLoginSuccess({
      role: 'citizen',
      name: name,
      phone: phone,
    });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (!adminKey) {
      return alert('Secure Security Clearance Token Required.');
    }
    
    // Simulate encrypted terminal authentication clearance
    if (adminKey === 'ADMIN123') {
      onLoginSuccess({
        role: 'admin',
        name: 'Command Officer',
      });
    } else {
      alert('Invalid Security Clearance Token.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 antialiased selection:bg-[#048c7f] selection:text-white">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden p-6 space-y-6">
        
        {/* BRANDING HEADER MAP */}
        <div className="text-center space-y-1">
          <span className="text-2xl">🛡️</span>
          <h1 className="text-xl font-black text-slate-900 uppercase tracking-wider">Aapda Saathi</h1>
          <p className="text-xs font-semibold text-[#048c7f]">National Civil Resilience Terminal</p>
        </div>

        {/* ROLE SELECTION SEGMENT CONTROL */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setIsAdminMode(false)}
            className={`py-2 text-xs font-black rounded-lg transition-all ${
              !isAdminMode 
                ? 'bg-[#036c5f] text-white shadow-xs' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            📢 Citizen Bypass
          </button>
          <button
            type="button"
            onClick={() => setIsAdminMode(true)}
            className={`py-2 text-xs font-black rounded-lg transition-all ${
              isAdminMode 
                ? 'bg-[#036c5f] text-white shadow-xs' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            🔒 Admin Clearance
          </button>
        </div>

        {/* CONDITIONALLY RENDERED INTERFACES */}
        {!isAdminMode ? (
          /* CITIZEN NO-SIGNUP MODE FORM */
          <form onSubmit={handleCitizenSubmit} className="space-y-4">
            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold text-amber-800 leading-normal">
                ⚠️ Emergency Rapid Access Mode Enabled. No registration or password required to transmit telemetry.
              </p>
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Rishika"
                className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-[#048c7f] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Active Contact Number (For Rescue Verification)
              </label>
              <input
                type="tel"
                value={phone}
                // Instantly filter out non-numeric entries and reject lengths greater than 10
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                  if (onlyNums.length <= 10) {
                    setPhone(onlyNums);
                  }
                }}
                maxLength={10}
                placeholder="Ex: 9876543210"
                className="w-full text-xs font-mono font-bold text-slate-700 bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-[#048c7f] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#048c7f] hover:bg-[#036c5f] rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-md shadow-teal-900/10 transition-all"
            >
              Initialize Command Dashboard
            </button>
          </form>
        ) : (
          /* ADMIN AUTHENTICATED PORTAL FORM */
          <form onSubmit={handleAdminSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Command Node Security Key
              </label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter 24/7 Security Token (Try: ADMIN123)"
                className="w-full text-xs font-mono font-bold text-slate-700 bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-[#048c7f] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-md transition-all"
            >
              Verify Authority Pipeline
            </button>
          </form>
        )}

      </div>
    </div>
  );
}