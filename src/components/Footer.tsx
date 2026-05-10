import { Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-container text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Aavaran The Paint Planet</h3>
          <p className="text-on-primary-container text-sm leading-relaxed max-w-sm">
            Empowering your creative vision with world-class coatings and professional expertise. 
            Your dream space, our canvas.
          </p>
          <a 
            href="https://www.instagram.com/aavaranthepaintplanet/" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-on-primary-container hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="text-sm">Instagram</span>
          </a>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {['Interior Paints', 'Exterior Paints', 'Color Visualizer', 'Privacy Policy', 'Contact Us'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-on-primary-container hover:text-white transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-on-primary-container text-sm">
              <Phone size={18} className="text-secondary-container" />
              <span>+91 70215 58623</span>
            </div>
            <div className="flex items-start gap-3 text-on-primary-container text-sm">
              <MapPin size={18} className="text-secondary-container flex-shrink-0 mt-1" />
              <span>
                Shop No. 3, Kshetrapal Square 2, Near Aavaran paint, 
                Opp. Commerce College, Bhuj - 370001
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-on-primary-container text-xs tracking-wider">
          © 2026-2050 Aavaran The Paint Planet. Authorized Partner for Asian Paints, Kansai Nerolac, Dulux, Jotun, Birla Opus, MRF, Duco, Birla White.
        </p>
      </div>

      {/* WhatsApp Support FAB */}
      <a 
        href="https://wa.me/919913548444" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95 group"
      >
        <span className="material-symbols-outlined text-xl">chat</span>
        <span className="font-semibold text-sm">Inquire Now</span>
      </a>
    </footer>
  );
}
