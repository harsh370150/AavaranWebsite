import { motion } from 'motion/react';
import { ShieldCheck, Globe, Zap, Heart } from 'lucide-react';

const PARTNERS = [
  {
    name: 'Jotun',
    role: 'Diamond Partner',
    desc: 'The only authorized Jotun store in Bhuj, offering luxury interior and advanced industrial coatings.',
    img: 'https://aavarangroup.com/wp-content/uploads/2026/05/Jotun.png',
    tag: 'Exclusive Status'
  },
  {
    name: 'Dulux',
    role: 'Strategic Partner',
    desc: 'Pioneering color trends and sustainable coating solutions as Bhuj\'s premium dealership.',
    img: 'https://cdn.worldvectorlogo.com/logos/dulux.svg',
    tag: 'Exclusive Status'
  }
];

const BRANDS = [
  { name: 'Asian Paints', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Asian-Paints.png' },
  { name: 'Kansai Nerolac', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Kansai-Nerolac.png' },
  { name: 'Nippon Paint', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Nippon-Paints.png' },
  { name: 'MRF', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/MRF-Logo.png' },
  { name: 'Duco', logo: 'https://companieslogo.com/img/orig/PPG.svg' },
  { name: 'Birla Opus', logo: 'https://aavarangroup.com/wp-content/uploads/2026/05/Birla-Opus.png' },
];

export default function Partners() {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-24">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">A Heritage of <br/><span className="text-secondary opacity-20">Partnership.</span></h1>
        <p className="text-on-surface-variant text-xl max-w-2xl font-medium">
          Strategic network of global industry leaders, bringing world-class paint technology to the heart of Kutch.
        </p>
      </div>

      <div className="mb-32">
        <div className="flex items-center gap-3 mb-12">
           <span className="w-12 h-1px bg-on-surface-variant/20" />
           <span className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant opacity-60">Exclusive Bhuj Dealerships</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {PARTNERS.map(p => (
             <div key={p.name} className="bg-surface-container rounded-[3rem] p-12 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-surface-container">
                <div className="h-20 mb-8 grayscale group-hover:grayscale-0 transition-all">
                   <img src={p.img} className="h-full w-auto object-contain" />
                </div>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-6">
                   <div className="w-1 h-1 bg-secondary rounded-full" />
                   {p.tag}
                </div>
                <h3 className="text-3xl font-extrabold text-primary mb-4">{p.name}</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed max-w-xs">{p.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="mb-32">
        <div className="flex items-center gap-3 mb-12">
           <span className="w-12 h-1px bg-on-surface-variant/20" />
           <span className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant opacity-60">Authorized Dealer Of</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
           {BRANDS.map(brand => (
             <div key={brand.name} className="bg-white p-6 rounded-3xl border border-surface-container flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
                <img src={brand.logo} className="max-h-12 w-auto object-contain" alt={brand.name} />
             </div>
           ))}
        </div>
      </div>

      <div className="bg-primary-container rounded-[4rem] text-white p-12 md:p-24 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
         <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 bg-secondary-container text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-8">
                  Super Stockiest
               </div>
               <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Birla White</h2>
               <p className="text-on-primary-container text-lg mb-12 max-w-md">
                 Official super stockiest for Birla White WallCare Putty and professional grade primers in Kutch.
               </p>

            </div>

         </div>
      </div>
    </div>
  );
}
