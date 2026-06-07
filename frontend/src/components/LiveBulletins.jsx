import { useState } from 'react';

export default function LiveBulletins() {
  const [bulletins] = useState([
    {
      id: 1,
      title: 'Flash Flood Warning: Coastal Infrastructure Sectors',
      meta: 'Kegalle District Update',
      desc: 'Heavy intense rain patterns projected across the next 24 consecutive operational cycles. Stand by for localized evacuation configurations.',
      severity: 'Critical'
    },
    {
      id: 2,
      title: 'Major Landslide Obstruction: Highway A4 Intersection',
      meta: 'Ratnapura Transit Corridor',
      desc: 'Structural soil shifts detected. Arterial highway lines are locked downstream until clearance parameters are approved. Request alternative routing vectors.',
      severity: 'High Warning'
    }
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-base font-black text-slate-900 tracking-tight">Active Infrastructure Threat Feed</h2>
        <p className="text-[11px] text-slate-400 mt-0.5">Real-time localized hazard alerts confirmed by central regional commands.</p>
      </div>

      <div className="grid gap-3">
        {bulletins.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200/80 rounded-2xl shadow-sm p-5 flex flex-col md:flex-row justify-between items-start gap-4 hover:border-[#036c5f]/30 transition-all">
            <div className="space-y-1.5 flex-1">
              <span className="text-[9px] font-black font-mono tracking-widest px-2 py-0.5 bg-red-50 text-[#b91c1c] border border-red-100 rounded-md uppercase">
                {item.severity}
              </span>
              <h3 className="text-sm font-black text-slate-900 tracking-tight pt-1">{item.title}</h3>
              <p className="text-[10px] font-bold text-[#036c5f]">{item.meta}</p>
              <p className="text-xs font-medium text-slate-500 leading-relaxed pt-1">"{item.desc}"</p>
            </div>
            
            {/* Visual placeholder box tracking app imagery aspect structures */}
            <div className="w-full md:w-36 h-24 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-slate-400 font-mono tracking-wider uppercase">
              Incident Plot
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}