import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calculator, Info } from 'lucide-react';

const PALETTES = [
  { 
    name: 'Aavaran Curated', 
    colors: [
      { id: 'av1', name: 'Morning Silk', hex: '#EAEAE0' },
      { id: 'av2', name: 'Royal Velvet', hex: '#2C3E50' },
      { id: 'av3', name: 'Desert Dune', hex: '#D2B48C' },
    ] 
  },
  { 
    name: 'Earth Tones', 
    colors: [
      { id: 'e1', name: 'Olive Grove', hex: '#556B2F' },
      { id: 'e2', name: 'Clay Pot', hex: '#A0522D' },
      { id: 'e3', name: 'Slate Stone', hex: '#708090' },
    ] 
  },
];

export default function Visualizer() {
  const [selectedColor, setSelectedColor] = useState(PALETTES[0].colors[0]);
  const [area, setArea] = useState(250);
  const [twoCoats, setTwoCoats] = useState(true);

  const calculatePaint = () => {
    const coveragePerLiter = 100; // sq ft per liter
    const coats = twoCoats ? 2 : 1;
    return ((area * coats) / coveragePerLiter).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Panel: Color Palette */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-surface-container">
            <h3 className="text-xl font-extrabold mb-8 flex items-center gap-3">
               <span className="w-1.5 h-6 bg-secondary rounded-full" />
               Color Palette
            </h3>
            
            <div className="space-y-10">
               {PALETTES.map(p => (
                 <div key={p.name}>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant opacity-50 mb-6">{p.name}</p>
                    <div className="grid grid-cols-1 gap-3">
                       {p.colors.map(color => (
                         <button
                           key={color.id}
                           onClick={() => setSelectedColor(color)}
                           className={`flex items-center gap-4 p-3 rounded-2xl border-2 transition-all text-left ${
                             selectedColor.id === color.id ? 'border-primary bg-surface-container-low' : 'border-transparent hover:bg-surface-container-low'
                           }`}
                         >
                           <div className="w-10 h-10 rounded-xl shadow-sm border border-black/5" style={{ backgroundColor: color.hex }} />
                           <div>
                              <p className="font-extrabold text-xs uppercase text-primary">{color.name}</p>
                              <p className="text-[10px] font-medium text-on-surface-variant/60">{color.id.toUpperCase()}</p>
                           </div>
                           {selectedColor.id === color.id && <Check size={16} className="ml-auto text-primary" />}
                         </button>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Center Panel: Visualizer */}
        <div className="lg:col-span-6">
           <div className="aspect-[4/3] relative rounded-[3.5rem] overflow-hidden shadow-2xl bg-white border border-surface-container group">
              <img 
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
              />
              <div 
                className="absolute inset-0 mix-blend-multiply opacity-50 transition-colors duration-1000" 
                style={{ backgroundColor: selectedColor.hex }} 
              />
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-20 transition-colors duration-1000" 
                style={{ backgroundColor: selectedColor.hex }} 
              />

              <div className="absolute top-8 left-8 flex gap-3">
                 <button className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-lg">Perspective View</button>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/50">
                 <div className="w-14 h-14 rounded-2xl shadow-inner border border-black/5" style={{ backgroundColor: selectedColor.hex }} />
                 <div>
                    <p className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest opacity-60">Visualizing Tone</p>
                    <p className="text-lg font-extrabold text-primary uppercase leading-tight">{selectedColor.id.toUpperCase()}-{selectedColor.name}</p>
                 </div>
              </div>
           </div>
           
           <div className="mt-8 flex items-center justify-center gap-12 text-on-surface-variant/40">
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">light_mode</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Simulated Day</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">hd</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Ultra Render</span>
              </div>
           </div>
        </div>

        {/* Right Panel: Tools */}
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-surface-container">
              <h3 className="text-xl font-extrabold mb-8 flex items-center gap-3 text-secondary">
                 <Calculator size={24} />
                 Coverage Calc
              </h3>

              <div className="space-y-8">
                 <div>
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant opacity-40 mb-3 block">Total Area (Sq Ft)</label>
                    <input 
                      type="number" 
                      value={area} 
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full bg-surface-container px-6 py-4 rounded-2xl font-extrabold text-xl focus:ring-2 focus:ring-secondary transition-all outline-none"
                    />
                 </div>

                 <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-on-surface-variant">Recommended 2 Coats</span>
                    <button 
                      onClick={() => setTwoCoats(!twoCoats)}
                      className={`w-12 h-6 rounded-full transition-all relative ${twoCoats ? 'bg-secondary' : 'bg-surface-container'}`}
                    >
                       <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${twoCoats ? 'left-7' : 'left-1'}`} />
                    </button>
                 </div>

                 <div className="p-6 bg-secondary/5 rounded-3xl border border-secondary/10 text-center">
                    <p className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest opacity-40 mb-1">Estimated Need</p>
                    <p className="text-4xl font-extrabold text-secondary leading-none">{calculatePaint()} <span className="text-lg">Liters</span></p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
