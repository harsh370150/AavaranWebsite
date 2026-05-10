import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royale Glitz',
    brand: 'Asian Paints',
    category: 'Interior',
    image: 'https://www.asianpaints.com/content/dam/asian_paints/products/packshot/interior-walls-royale-glitz-asian-paints.png',
    description: 'Ultra-luxury interior paint with Teflon surface protector.'
  },
  {
    id: '2',
    name: 'Apex Ultima Protek',
    brand: 'Asian Paints',
    category: 'Exterior',
    image: 'https://www.asianpaints.com/content/dam/asian_paints/products/packshot/exterior-walls-apex-ultima-protek-asian-paints.png',
    description: 'Extreme protection against water and dust.'
  },
  {
    id: '3',
    name: 'Impressions Eco Clean',
    brand: 'Kansai Nerolac',
    category: 'Interior',
    image: 'https://nerolac.com/sites/default/files/2021-08/Nerolac-Impressions-Eco-Clean.png',
    description: 'Low VOC, high sheen interior emulsion.'
  },
  {
    id: '4',
    name: 'Dulux Weathershield',
    brand: 'Dulux',
    category: 'Exterior',
    image: 'https://www.dulux.in/content/dam/akzonobel-dulux/in/en/products/dulux-weathershield-powerflexx/packshot.png',
    description: 'Keeps your exterior walls up to 5°C cooler.'
  },
  {
      id: '5',
      name: 'Fenomastic Wonderwall',
      brand: 'Jotun',
      category: 'Interior',
      image: 'https://www.jotun.com/jotun/paints/paints/Fenomastic_Wonderwall_Lux_tcm324-192534.png',
      description: 'The most beautiful wall finish from Jotun.'
  },
  {
      id: '6',
      name: 'Excel Mica Marble',
      brand: 'Kansai Nerolac',
      category: 'Exterior',
      image: 'https://nerolac.com/sites/default/files/2021-08/Nerolac-Excel-Mica-Marble.png',
      description: 'Mica and Marble based high-performance exterior paint.'
  }
];

const CATEGORIES = ['All', 'Interior', 'Exterior', 'Waterproofing', 'Wood & Metal'];

export default function Catalog() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">The <span className="text-secondary opacity-20">Catalog.</span></h1>
        <p className="text-on-surface-variant text-xl max-w-2xl font-medium">
          A comprehensive collection of specialized architectural and automotive coatings, sourced from global industry leaders.
        </p>
      </div>

      <div className="mb-32">
        <div className="flex items-center gap-3 mb-12">
           <span className="w-12 h-1px bg-on-surface-variant/20" />
           <span className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant opacity-60">Home Coating Essentials</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: 'Interior Paints', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop' },
            { name: 'Exterior Paints', img: 'https://images.unsplash.com/photo-1541604193435-22287d32c2c2?q=80&w=2070&auto=format&fit=crop' },
            { name: 'Brushes', img: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2074&auto=format&fit=crop' },
            { name: 'Rollers', img: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070&auto=format&fit=crop' },
            { name: 'Texture', img: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=2070&auto=format&fit=crop' },
          ].map((cat, i) => (
            <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer">
              <img src={cat.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center text-center p-4">
                <h3 className="text-white font-extrabold text-sm md:text-lg uppercase tracking-wider">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="flex-1 p-12 md:p-24">
           <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-8">
              Automotive Grade
           </div>
           <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-8">Car Paint.</h2>
           <p className="text-on-surface-variant text-lg mb-12 max-w-md font-medium leading-relaxed">
             Specialized coatings for automotive restoration and industrial prototyping. Extreme durability with high-solid finishes.
           </p>
           
           <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-secondary" />
                 <span className="font-bold text-primary">Metallic & Pearl Finishes</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-secondary" />
                 <span className="font-bold text-primary">Matte & Satin Topcoats</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-secondary" />
                 <span className="font-bold text-primary">Crystal Clear UV Protection</span>
              </div>
           </div>

        </div>
        <div className="flex-1 min-h-[400px]">
           <img 
            src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Car Paint" 
          />
        </div>
      </div>
    </div>
  );
}
