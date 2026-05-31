import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || !name) {
      alert('Please fill in all security verification fields.');
      return;
    }
    // Passing user information up to state management
    onLoginSuccess({ name, phone });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col md:flex-row font-sans">
      {/* Left Column: Informational Branding Side */}
      <div className="md:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 flex flex-col justify-between p-8 md:p-12 text-white">
        <div>
          <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-red-500/20">
            Govt of India Info-Network Sync
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-red-500 mt-6">
            Aapda Saathi
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-sm">
            Next-generation real-time disaster response system and localized community safety portal.
          </p>
        </div>

        <div className="space-y-4 my-8 md:my-0">
          <div className="flex items-start space-x-3">
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-bold text-slate-200 text-sm">Instant SOS Triggers</h4>
              <p className="text-xs text-slate-400">One-click immediate dispatch transmission to local disaster response teams.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-xl">📦</span>
            <div>
              <h4 className="font-bold text-slate-200 text-sm">Resource Integrity Mapping</h4>
              <p className="text-xs text-slate-400">Real-time localized visibility into relief inventory, shelters, and medical hubs.</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500">
          Secure encrypted terminal connection • Version 1.0.0
        </div>
      </div>

      {/* Right Column: Interactive Verification Box */}
      <div className="md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Citizen Verification Entry</h2>
            <p className="text-sm text-slate-500 mt-1">Please log in to access the active emergency response grid.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Ramesh Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                Active Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-2.5 text-sm text-slate-400 font-medium">+91</span>
                <input
                  type="tel"
                  required
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="9876543210"
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold text-sm py-3 rounded-xl hover:bg-red-600 shadow-md hover:shadow-red-500/10 transition-all duration-200 mt-2"
            >
              Enter Dashboard Terminal →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}