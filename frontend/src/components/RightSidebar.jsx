import { useState } from 'react';

export default function RightSidebar() {
  const [inventory] = useState({
    rations: '4,210 Units',
    water: '12,850 Liters',
    medical: '340 Kits'
  });

  return (
    <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col h-auto md:h-[calc(100vh-4rem)] md:sticky md:top-16 p-4 space-y-6 overflow-y-auto">
      
      {/* Segment A: Inventory Telemetry */}
      <div>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3">
          Relief Resource Pools
        </span>
        <div className="space-y-2">
          <div className="bg-[#036c5f]/5 p-2.5 rounded-xl border border-[#036c5f]/10">
            <p className="text-[9px] text-[#036c5f] font-bold uppercase tracking-wider">Emergency Rations</p>
            <p className="text-xs font-black text-slate-900 mt-0.5">{inventory.rations}</p>
          </div>
          <div className="bg-[#036c5f]/5 p-2.5 rounded-xl border border-[#036c5f]/10">
            <p className="text-[9px] text-[#036c5f] font-bold uppercase tracking-wider">Water Supply Reserves</p>
            <p className="text-xs font-black text-slate-900 mt-0.5">{inventory.water}</p>
          </div>
          <div className="bg-[#036c5f]/5 p-2.5 rounded-xl border border-[#036c5f]/10">
            <p className="text-[9px] text-[#036c5f] font-bold uppercase tracking-wider">Medical Trauma Kits</p>
            <p className="text-xs font-black text-slate-900 mt-0.5">{inventory.medical}</p>
          </div>
        </div>
      </div>

      {/* Segment B: Adaption of image_5beccd.png Contacts Quick Grid */}
      <div>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3">
          Emergency Command Hotlines
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          <a href="tel:101" className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center hover:bg-slate-100 transition-all group">
            <p className="text-[10px] font-black text-slate-800 group-hover:text-[#036c5f]">Fire Rescue</p>
            <p className="text-[9px] font-mono font-bold text-slate-400 mt-0.5">Dial 101</p>
          </a>
          <a href="tel:1990" className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center hover:bg-slate-100 transition-all group">
            <p className="text-[10px] font-black text-slate-800 group-hover:text-[#036c5f]">Suwa Seriya</p>
            <p className="text-[9px] font-mono font-bold text-slate-400 mt-0.5">Dial 1990</p>
          </a>
          <a href="tel:102" className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center hover:bg-slate-100 transition-all group">
            <p className="text-[10px] font-black text-slate-800 group-hover:text-[#036c5f]">Hospital</p>
            <p className="text-[9px] font-mono font-bold text-slate-400 mt-0.5">Dial 102</p>
          </a>
          <a href="tel:100" className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center hover:bg-slate-100 transition-all group">
            <p className="text-[10px] font-black text-slate-800 group-hover:text-[#036c5f]">Police Control</p>
            <p className="text-[9px] font-mono font-bold text-slate-400 mt-0.5">Dial 100</p>
          </a>
        </div>
      </div>

    </aside>
  );
}