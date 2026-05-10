import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, Palette, Layers, Droplets } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const BRANDS = [
  { name: 'Asian Paints', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Asian-Paints.png' },
  { name: 'Dulux', logo: 'https://cdn.worldvectorlogo.com/logos/dulux.svg' },
  { name: 'Kansai Nerolac', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Kansai-Nerolac.png' },
  { name: 'Jotun', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Jotun.png' },
  { name: 'MRF', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/MRF-Logo.png' }
];

export default function Home({ onPageChange }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-[7rem] font-extrabold text-white leading-[0.9] tracking-tight mb-8">
              Transform Your <br/>
              Space Into A <br/>
              <span className="text-secondary-container">Masterpiece.</span>
            </h1>
            
            <div className="flex flex-wrap gap-5 mt-12">
              <button 
                onClick={() => onPageChange('catalog')}
                className="bg-secondary-container text-white px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-secondary-container/20"
              >
                Explore Catalog
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aavaran Selection Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-16 px-4">
           <span className="w-12 h-1px bg-on-surface-variant/20" />
           <span className="text-sm font-extrabold uppercase tracking-widest text-on-surface-variant opacity-60">Aavaran Selection</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden cursor-pointer" onClick={() => onPageChange('catalog')}>
            <img src="https://images.unsplash.com/photo-1549646692-a9b0a701d898?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-extrabold text-white mb-2">Professional Grade<br/>Pigments</h3>
              <p className="text-white/70 font-medium group-hover:text-white transition-colors">Explore heavy duty coatings</p>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <ArrowUpRight size={24} />
            </div>
          </div>

          <div className="group relative aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden cursor-pointer" onClick={() => onPageChange('visualizer')}>
            <img src="https://images.unsplash.com/photo-1572177812156-58036aae249c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-extrabold text-white mb-2">Color<br/>Visualizer</h3>
              <p className="text-white/70 font-medium group-hover:text-white transition-colors">Experiment with shades</p>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <ArrowUpRight size={24} />
            </div>
          </div>

          <div className="group relative aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden cursor-pointer" onClick={() => onPageChange('catalog')}>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-extrabold text-white mb-2">Luxury<br/>Textures</h3>
              <p className="text-white/70 font-medium group-hover:text-white transition-colors">Designer wall finishes</p>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Curated Palettes Section */}
      <section className="bg-white py-24 px-6 md:px-12 w-full border-y border-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
             <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Curated Palettes <br/> For Every Mood.</h2>
             <p className="text-on-surface-variant text-lg">Hand-picked color combinations designed by our interior consultants to harmonize your space.</p>
          </div>
          <button 
            onClick={() => onPageChange('catalog')}
            className="px-8 py-4 bg-surface-container hover:bg-primary hover:text-white transition-all font-bold rounded-2xl"
          >
            View Full Catalog
          </button>
        </div>

        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { name: 'Earthly Tranquility', colors: ['#4A5D4E', '#8C9A8D', '#D9DED9', '#F4F5F4'] },
             { name: 'Midnight Azure', colors: ['#1A2C42', '#3B5266', '#7C8FA1', '#D6DEE5'] },
             { name: 'Tuscan Sunset', colors: ['#8B4513', '#CD853F', '#DEB887', '#F5F5DC'] },
             { name: 'Minimalist Frost', colors: ['#2F4F4F', '#708090', '#B0C4DE', '#F0F8FF'] },
           ].map((palette, i) => (
             <div key={i} className="group flex flex-col gap-4">
                <div className="h-64 rounded-3xl overflow-hidden flex flex-col shadow-sm group-hover:shadow-xl transition-all">
                   {palette.colors.map(color => (
                     <div key={color} className="flex-1 w-full" style={{ backgroundColor: color }} />
                   ))}
                </div>
                <div className="px-2">
                   <h4 className="font-extrabold text-lg text-primary">{palette.name}</h4>
                   <p className="text-xs font-medium text-on-surface-variant/60 uppercase tracking-widest mt-1">4 Color Combination</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-tertiary-container p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary-container/20 blur-[100px] rounded-full" />
          <div className="relative z-10 flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Experience the Magic <br /> of <span className="text-secondary-container">Professional</span> Consultation.
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Need help choosing the right shade? Our experts are here to guide you through the latest trends and tech.
            </p>
          </div>
          <div className="flex-1 w-full relative h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
               alt="Consultation" 
               className="w-full h-full object-cover rounded-3xl"
             />
          </div>
        </div>
      </section>
    </div>
  );
}
