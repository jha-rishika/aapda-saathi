import React from 'react';

export default function Sidebar({ currentView, setCurrentView }) {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen sticky top-0 shadow-xl">
      {/* Branding Header */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-black text-red-500 tracking-wider uppercase">
          Aapda Saathi
        </h1>
        <p className="text-xs text-slate-400 font-medium mt-1">
          Disaster Management Portal
        </p>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 p-4 space-y-6">
        <div>
          <span className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            User Roles
          </span>
          <div className="mt-2 space-y-1">
            <button
              onClick={() => setCurrentView('citizen')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'citizen'
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-900/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              🚨 Citizen Portal
            </button>
            <button
              onClick={() => setCurrentView('admin')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'admin'
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              🛡️ Admin Control Room
            </button>
          </div>
        </div>
      </nav>

      {/* Footer Meta */}
      <div className="p-4 border-t border-slate-800 text-center text-xs text-slate-500">
        Connecting for a Resilient India
      </div>
    </aside>
  );
}