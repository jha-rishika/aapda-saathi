import { useState } from 'react';

export default function AdminDashboard() {
  // Mock live incoming alerts database
  const [alerts, setAlerts] = useState([
    {
      id: "SOS-8921",
      reporter: "Ramesh Kumar",
      phone: "9876543210",
      type: "Flood",
      timestamp: "10 mins ago",
      location: "Sector 5, Salt Lake",
      message: "Water entering ground floor, 3 family members trapped on terrace. Need immediate boat evacuation.",
      status: "Pending",
      priority: "Critical"
    },
    {
      id: "SOS-8922",
      reporter: "Ananya Das",
      phone: "9123456789",
      type: "Fire",
      timestamp: "24 mins ago",
      location: "New Town, Action Area II",
      message: "Electrical transformer spark caught on local warehouse structure. Smoke billowing heavily.",
      status: "Dispatched",
      priority: "High"
    },
    {
      id: "SOS-8923",
      reporter: "Subhasis Mitra",
      phone: "9432109876",
      type: "Medical",
      timestamp: "1 hour ago",
      location: "Howrah Baseline Hub",
      message: "Severe dehydration and waterborne symptoms clustered in community center. Requesting medical squad support.",
      status: "Resolved",
      priority: "Medium"
    }
  ]);

  // Action Handler: Simulate changing status of an incident
  const handleStatusChange = (id, newStatus) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === id ? { ...alert, status: newStatus } : alert
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Top Operations Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Incidents</div>
          <div className="text-3xl font-black text-slate-800 mt-1">
            {alerts.filter(a => a.status !== "Resolved").length}
          </div>
          <p className="text-[10px] text-red-600 font-semibold mt-1">Requires immediate dispatch</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending SOS</div>
          <div className="text-3xl font-black text-amber-500 mt-1">
            {alerts.filter(a => a.status === "Pending").length}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Awaiting triage confirmation</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Crews Dispatched</div>
          <div className="text-3xl font-black text-blue-600 mt-1">
            {alerts.filter(a => a.status === "Dispatched").length}
          </div>
          <p className="text-[10px] text-emerald-600 font-semibold mt-1">En-route / Active on scene</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resolved Cases</div>
          <div className="text-3xl font-black text-emerald-600 mt-1">
            {alerts.filter(a => a.status === "Resolved").length}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Life & property secured</p>
        </div>
      </div>

      {/* Main Incident Incident Management Console */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Live Emergency Incident Triage</h3>
            <p className="text-xs text-slate-500">Real-time incoming SOS telemetry feeds from verified citizen accounts.</p>
          </div>
          <span className="bg-blue-100 text-blue-800 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
            Auto-Refresh Active
          </span>
        </div>

        {/* Incidents List Container */}
        <div className="divide-y divide-slate-100">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-6 hover:bg-slate-50/60 transition-all flex flex-col lg:flex-row justify-between gap-6">
              
              {/* Left Column: Core Ticket Data */}
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {alert.id}
                  </span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                    alert.priority === 'Critical' ? 'bg-red-100 text-red-700 animate-pulse' :
                    alert.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {alert.priority} Priority
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    • {alert.timestamp} • Located at <strong className="text-slate-600">{alert.location}</strong>
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Incident Class: {alert.type === 'Flood' ? '🌊 Flood Event' : alert.type === 'Fire' ? '🔥 Fire Hazard' : '🏥 Medical Outbreak'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium italic">
                    "{alert.message}"
                  </p>
                </div>

                <div className="text-xs text-slate-500 flex items-center space-x-3">
                  <span>👤 Reporter: <strong>{alert.reporter}</strong></span>
                  <span>📞 Comm Token: <strong className="font-mono">{alert.phone}</strong></span>
                </div>
              </div>

              {/* Right Column: Interactive Dispatch Workflows */}
              <div className="flex flex-row lg:flex-col justify-between items-center lg:items-end gap-4 min-w-[200px]">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider lg:text-right mb-1">
                    Current Workflow Status
                  </span>
                  <span className={`inline-block font-black text-xs px-3 py-1 rounded-full uppercase tracking-wide ${
                    alert.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                    alert.status === 'Dispatched' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {alert.status === 'Pending' ? '⏳ Pending Review' : alert.status === 'Dispatched' ? '🚒 Dispatch Active' : '✅ Secured & Resolved'}
                  </span>
                </div>

                {/* Control Action Buttons */}
                <div className="flex space-x-1.5">
                  {alert.status === 'Pending' && (
                    <button
                      onClick={() => handleStatusChange(alert.id, 'Dispatched')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all"
                    >
                      🚀 Deploy Rescue Crew
                    </button>
                  )}
                  {alert.status === 'Dispatched' && (
                    <button
                      onClick={() => handleStatusChange(alert.id, 'Resolved')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all"
                    >
                      🔒 Close Case File
                    </button>
                  )}
                  {alert.status === 'Resolved' && (
                    <span className="text-slate-400 text-xs font-semibold italic">No actions needed</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}