import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const CLINICS = [
  {
    id: 'garland',
    city: 'Garland',
    address: '1705 Beltline Rd. Garland, TX 75044',
    phone: '(972) 897-1784',
    hours: 'Mon-Thu: 8am-6pm | Fri: 8am-1pm',
    colorName: 'Healing Green',
    glowHex: '#b8cf25',
    buttonFrom: '#b8cf25',
    buttonTo: '#8cb320',
    buttonShadow: 'rgba(184, 207, 37, 0.4)',
  },
  {
    id: 'dallas',
    city: 'Dallas',
    address: '1011 S. Cockrell Hill Rd, Ste. 105, Dallas, TX 75211',
    phone: '(214) 272-9286',
    hours: 'Mon-Thu: 8am-6pm | Fri: 8am-1pm',
    colorName: 'Sapphire Blue',
    glowHex: '#38bdf8',
    buttonFrom: '#38bdf8',
    buttonTo: '#0284c7',
    buttonShadow: 'rgba(56, 189, 248, 0.4)',
  },
  {
    id: 'mesquite',
    city: 'Mesquite',
    address: '3815 N. Town East Blvd. Mesquite, TX 75150',
    phone: '(214) 242-9713',
    hours: 'Mon-Thu: 8am-6pm | Fri: 8am-1pm',
    colorName: 'Sunset Orange',
    glowHex: '#ff9a3d',
    buttonFrom: '#ff9a3d',
    buttonTo: '#ea580c',
    buttonShadow: 'rgba(255, 154, 61, 0.4)',
  },
  {
    id: 'irving',
    city: 'Irving',
    address: "2940 N. O'Connor Rd Ste. 129, Irving, TX 75062",
    phone: '(972) 600-9003',
    hours: 'Mon-Thu: 8am-6pm | Fri: 8am-1pm',
    colorName: 'Amethyst Purple',
    glowHex: '#a855f7',
    buttonFrom: '#c084fc',
    buttonTo: '#9333ea',
    buttonShadow: 'rgba(192, 132, 252, 0.4)',
  },
  {
    id: 'plano',
    city: 'Plano',
    address: 'Plano, TX (Central Area)',
    phone: '(972) 123-4567',
    hours: 'Mon-Thu: 8am-6pm | Fri: 8am-1pm',
    colorName: 'Cyan Ocean',
    glowHex: '#2dd4bf',
    buttonFrom: '#2dd4bf',
    buttonTo: '#0d9488',
    buttonShadow: 'rgba(45, 212, 191, 0.4)',
  },
  {
    id: 'fortworth',
    city: 'Fort Worth',
    address: 'Fort Worth, TX Area',
    phone: '(817) 402-9484',
    hours: 'Mon-Thu: 8am-6pm | Fri: 8am-1pm',
    colorName: 'Ruby Red',
    glowHex: '#fb7185',
    buttonFrom: '#fb7185',
    buttonTo: '#e11d48',
    buttonShadow: 'rgba(251, 113, 133, 0.4)',
  },
];

export default function InteractiveClinics({ mapTexture }) {
  const [activeClinic, setActiveClinic] = React.useState(CLINICS[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-12 w-full">
      {/* Sidebar Tabs */}
      <div className="flex lg:flex-col overflow-x-auto hide-scrollbar gap-3 pb-4 lg:pb-0 lg:w-1/3 flex-shrink-0 snap-x">
        {CLINICS.map(clinic => {
          const isActive = activeClinic.id === clinic.id;
          return (
            <button 
              key={clinic.id}
              onClick={() => setActiveClinic(clinic)}
              className={`relative flex items-center justify-between p-4 rounded-2xl transition-all duration-500 snap-center min-w-[200px] lg:min-w-0 ${
                isActive 
                  ? 'bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-transparent scale-[1.02]' 
                  : 'bg-white/40 hover:bg-white/80 border-white/60 hover:border-white shadow-sm hover:scale-[1.01]'
              } border-[2px]`}
            >
              {/* Active Background Glow inside the button */}
              {isActive && (
                 <div 
                   className="absolute inset-0 rounded-2xl opacity-[0.08]"
                   style={{ background: `linear-gradient(to right, ${clinic.buttonFrom}, ${clinic.buttonTo})` }}
                 />
              )}
              
              <div className="flex items-center relative z-10">
                <div 
                  className="glass-orb w-10 h-10 rounded-full flex items-center justify-center shadow-sm mr-4 transition-colors duration-500 border border-white/50"
                  style={{ background: isActive ? `linear-gradient(to bottom, ${clinic.buttonFrom}, ${clinic.buttonTo})` : '#e2e8f0' }}
                >
                  <MapPin className={`w-5 h-5 ${isActive ? 'text-white drop-shadow-md' : 'text-slate-400'} relative z-10`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-bold text-lg leading-tight transition-colors duration-500 ${isActive ? 'text-[#084654]' : 'text-slate-600'}`}>{clinic.city}</h3>
                  <p className={`text-[11px] font-semibold uppercase tracking-wider transition-colors duration-500 ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>{isActive ? clinic.colorName : 'Select Clinic'}</p>
                </div>
              </div>
              
              {isActive && (
                <div className="hidden lg:block relative z-10">
                   <ArrowRight className="w-5 h-5 text-slate-400 opacity-60" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Main Dashboard Area */}
      <div className="lg:w-2/3 glass-panel rounded-[2.5rem] p-1 border-[4px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white/50 backdrop-blur-2xl relative overflow-hidden flex flex-col">
        {/* Dynamic Ambient Light Bleed inside the panel */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none transition-colors duration-1000 ease-in-out opacity-20"
          style={{ backgroundColor: activeClinic.glowHex }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none transition-colors duration-1000 ease-in-out opacity-20"
          style={{ backgroundColor: activeClinic.glowHex }}
        />

        <div className="p-6 md:p-10 flex flex-col h-full z-10 relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-4xl font-extrabold text-[#084654] mb-2">{activeClinic.city} Clinic</h3>
              <p className="text-slate-600 font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-2" style={{ color: activeClinic.buttonTo }}/> 
                {activeClinic.address}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 flex-grow">
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Contact</p>
                <p className="text-xl font-bold text-[#084654]">{activeClinic.phone}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</p>
                <p className="text-md font-bold text-[#084654] leading-relaxed">{activeClinic.hours}</p>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-aero-dynamic px-6 py-4 rounded-full flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 w-full font-bold"
                  style={{ 
                    '--btn-from': activeClinic.buttonFrom, 
                    '--btn-to': activeClinic.buttonTo,
                    '--btn-shadow': activeClinic.buttonShadow 
                  }}
                >
                   <span className="relative z-10 flex items-center justify-center w-full">
                     <Phone className="w-5 h-5 mr-2 drop-shadow-sm text-white" /> Call Clinic
                   </span>
                </button>
                <button 
                  className="btn-aero-glass px-6 py-4 rounded-full flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 w-full shadow-xl border-white/40"
                >
                   <span className="relative z-10 flex items-center justify-center w-full text-[#084654] font-bold">
                     <MapPin className="w-5 h-5 mr-2 drop-shadow-sm" style={{ color: activeClinic.buttonTo }} /> Directions
                   </span>
                </button>
              </div>
            </div>
            
            <div className="h-48 md:h-auto rounded-3xl overflow-hidden relative shadow-inner border-[4px] border-white/80">
              <img src={mapTexture} className="w-full h-full object-cover opacity-60 mix-blend-multiply" alt="Map View" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div 
                   className="glass-orb w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-[3px] border-white transition-colors duration-1000"
                   style={{ background: `linear-gradient(to bottom, ${activeClinic.buttonFrom}, ${activeClinic.buttonTo})` }}
                >
                   <MapPin className="w-8 h-8 text-white drop-shadow-md relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
