export default function TopBar({ currentView, setCurrentView, user }) {
  return (
    <header className="w-full h-16 bg-[#036c5f] text-white flex items-center justify-between px-6 fixed top-0 left-0 z-50 shadow-md border-b border-[#024038]/30">
      
      {/* Branding Hub */}
      <div className="flex items-center space-x-3">
        <div className="bg-white/10 p-1.5 rounded-lg border border-[#b3e0dc]/20">
          <div className="w-4 h-4 rounded-sm bg-[#b3e0dc]"></div>
        </div>
        <div>
          <h1 className="text-sm font-black tracking-wider uppercase leading-none">Aapda Saathi</h1>
          <p className="text-[9px] text-[#b3e0dc] font-bold tracking-tight mt-0.5">National Civil Resilience Grid</p>
        </div>
      </div>

      {/* Segmented Application Tab Controls */}
      <nav className="flex items-center space-x-1 bg-[#024038]/40 p-1 rounded-xl border border-[#024038]/30">
        <button
          onClick={() => setCurrentView('citizen')}
          className={`px-4 py-1.5 rounded-lg text-xs font-black tracking-wide transition-all ${
            currentView === 'citizen'
              ? 'bg-[#048c7f] text-white shadow-sm border border-[#05998c]'
              : 'text-[#b3e0dc] hover:text-white'
          }`}
        >
          SOS Workspace
        </button>
        <button
          onClick={() => setCurrentView('bulletins')}
          className={`px-4 py-1.5 rounded-lg text-xs font-black tracking-wide transition-all ${
            currentView === 'bulletins'
              ? 'bg-[#048c7f] text-white shadow-sm border border-[#05998c]'
              : 'text-[#b3e0dc] hover:text-white'
          }`}
        >
          Live Bulletins
        </button>
        <button
          onClick={() => setCurrentView('profile')}
          className={`px-4 py-1.5 rounded-lg text-xs font-black tracking-wide transition-all ${
            currentView === 'profile'
              ? 'bg-[#048c7f] text-white shadow-sm border border-[#05998c]'
              : 'text-[#b3e0dc] hover:text-white'
          }`}
        >
          Medical Profile
        </button>
      </nav>

      {/* Node Credentials Badge */}
      <div className="text-right hidden sm:block">
        <p className="text-xs font-black tracking-tight capitalize">{user?.name || 'Authorized Node'}</p>
        <p className="text-[9px] text-[#b3e0dc] font-mono font-bold mt-0.5">Role: {user?.role || 'Citizen'}</p>
      </div>

    </header>
  );
}