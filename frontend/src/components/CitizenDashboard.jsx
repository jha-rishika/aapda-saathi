import { useState } from 'react';

export default function CitizenDashboard({ user }) {
  const [disasterType, setDisasterType] = useState('Flood');
  const [message, setMessage] = useState('');
  const [sosStatus, setSosStatus] = useState('idle'); // idle, sending, triggered

  const handleSosTrigger = (e) => {
    e.preventDefault();
    setSosStatus('sending');
    
    // Simulating instant transmission response loop
    setTimeout(() => {
      setSosStatus('triggered');
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner Context Card */}
      <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            Jai Hind, {user?.name || 'Citizen'}
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Your telemetry profile is actively linked to tracking node: <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">+91 {user?.phone}</span>
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-2 text-xs flex items-center space-x-2 text-red-700 font-bold self-start sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
          <span>Broadcast Channel Open</span>
        </div>
      </div>

      {/* Grid: Feature Breakdowns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* FEATURE 1: CRITICAL INTERACTIVE SOS PANIC FORM */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center space-x-2">
              <span className="text-red-500 text-xl">🚨</span>
              <span>Critical SOS Dispatch</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Triggers instant multi-agency ping coordinates to municipal emergency command arrays.
            </p>

            {sosStatus !== 'triggered' ? (
              <form onSubmit={handleSosTrigger} className="mt-4 space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Disaster Classification Category
                  </label>
                  <select
                    value={disasterType}
                    onChange={(e) => setDisasterType(e.target.value)}
                    className="w-full text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-red-500"
                  >
                    <option value="Flood">🌊 Flood / Inundation Event</option>
                    <option value="Earthquake">🌋 Tectonic / Earthquake Dislocation</option>
                    <option value="Fire">🔥 Structure / Forest Wildfire Runaway</option>
                    <option value="Cyclone">🌪️ High Velocity Cyclone / Storm Surge</option>
                    <option value="Medical">🏥 Mass Casualty Medical Cluster Outbreak</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Situational Notes / Custom Requirements
                  </label>
                  <textarea
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide specific details (ex: 3 citizens trapped on roof terrace, rising water line...)"
                    className="w-full text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 p-2.5 rounded-xl focus:outline-none focus:border-red-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={sosStatus === 'sending'}
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-md transition-all duration-200 ${
                    sosStatus === 'sending'
                      ? 'bg-amber-500 animate-pulse'
                      : 'bg-red-600 hover:bg-red-700 shadow-red-500/10'
                  }`}
                >
                  {sosStatus === 'sending' ? 'Transmitting Encryption Array...' : '📢 Execute Critical Panic Loop'}
                </button>
              </form>
            ) : (
              /* SUCCESS SOS VIEW STATE */
              <div className="mt-6 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-3">
                <span className="text-3xl animate-bounce inline-block">📡</span>
                <h4 className="text-sm font-bold text-emerald-800">SOS Transmission Anchored!</h4>
                <p className="text-[11px] text-emerald-600 leading-relaxed font-medium">
                  Response dispatch logs verified. Incident command center mapping telemetry parameters to municipal responder crews. Stay absolute calm.
                </p>
                <button 
                  onClick={() => { setSosStatus('idle'); setMessage(''); }}
                  className="text-[10px] bg-white border border-emerald-200 font-bold px-3 py-1 rounded-md text-emerald-700 hover:bg-emerald-100 transition-all"
                >
                  Reset Dispatch Form
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN CARDS FOR ADDITIONAL COMPREHENSIVE FEATURES */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* FEATURE 2: ACTIVE REGIONAL METRIC INVENTORY TRACKING COUNTERS */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Localized Relief Inventory Pools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-500 font-medium">Ration Kits</span>
                  <span className="text-lg">🍞</span>
                </div>
                <div className="text-xl font-black text-slate-800">4,210</div>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Stable Supply</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-500 font-medium">Clean Water Blocks</span>
                  <span className="text-lg">💧</span>
                </div>
                <div className="text-xl font-black text-slate-800">12,850 L</div>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Stable Supply</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs col-span-2 sm:col-span-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-500 font-medium">Medical Trauma Packs</span>
                  <span className="text-lg">💼</span>
                </div>
                <div className="text-xl font-black text-slate-800">340</div>
                <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">In High Demand</span>
              </div>
            </div>
          </div>

          {/* FEATURE 3: LIVE RE-ROUTING ANNOUNCEMENT TICKER */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs">
            <h3 className="text-sm font-black text-slate-800 tracking-tight flex items-center space-x-2 mb-3">
              <span className="text-blue-500">📢</span>
              <span>Active Civil Command Broadcasts</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="bg-red-100 text-red-700 font-bold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider mt-0.5">Alert</span>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Route 4 sector highway layout disrupted near local terminal crossover. Civic drivers directed to safely route around.
                </p>
              </div>
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="bg-emerald-100 text-emerald-700 font-bold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider mt-0.5">Info</span>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Sector B Regional Indoor Stadium re-architected fully as an emergency safe shelter space hub. Capacity points standing baseline stable.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}