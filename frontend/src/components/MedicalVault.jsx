export default function MedicalVault({ profile, setProfile }) {
  const handleSave = (e) => {
    e.preventDefault();
    alert('Medical baseline profile configurations synchronized globally within temporary application clusters.');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-md p-6">
      
      <div className="text-center max-w-md mx-auto mb-6 border-b border-slate-100 pb-4">
        <h2 className="text-base font-black text-slate-900 tracking-tight">Peace-Time Medical Parameters Vault</h2>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Pre-configure your vital analytics. This information automatically packages into any outgoing tactical SOS loop data packets.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Citizen Age</label>
            <input
              type="text"
              value={profile.age}
              onChange={(e) => setProfile({...profile, age: e.target.value})}
              className="w-full text-xs font-mono font-bold text-slate-700 bg-slate-50 border border-slate-200 p-2 rounded-xl focus:outline-none focus:border-[#036c5f]"
            />
          </div>
          <div>
            <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Blood Group Core</label>
            <input
              type="text"
              value={profile.bloodGroup}
              onChange={(e) => setProfile({...profile, bloodGroup: e.target.value})}
              className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 p-2 rounded-xl focus:outline-none focus:border-[#036c5f]"
            />
          </div>
          <div>
            <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Height Metric</label>
            <input
              type="text"
              value={profile.height}
              onChange={(e) => setProfile({...profile, height: e.target.value})}
              className="w-full text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 p-2 rounded-xl focus:outline-none focus:border-[#036c5f]"
            />
          </div>
          <div>
            <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Weight Metric</label>
            <input
              type="text"
              value={profile.weight}
              onChange={(e) => setProfile({...profile, weight: e.target.value})}
              className="w-full text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 p-2 rounded-xl focus:outline-none focus:border-[#036c5f]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Allergies and Hypersensitive Reactions</label>
          <textarea
            rows="2"
            value={profile.allergies}
            onChange={(e) => setProfile({...profile, allergies: e.target.value})}
            className="w-full text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 p-2 rounded-xl focus:outline-none focus:border-[#036c5f] resize-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Post Injuries and Historical Operations Done</label>
          <textarea
            rows="2"
            value={profile.injuries}
            onChange={(e) => setProfile({...profile, injuries: e.target.value})}
            className="w-full text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 p-2 rounded-xl focus:outline-none focus:border-[#036c5f] resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-[#036c5f] hover:bg-[#024038] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all"
        >
          Secure Medical Encryption Configuration
        </button>

      </form>
    </div>
  );
}