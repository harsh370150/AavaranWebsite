import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, NAV_ITEMS } from '../types';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-surface-container">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 text-left hover:opacity-80 transition-opacity"
          >
            <img 
              alt="Aavaran Logo" 
              className="h-10 w-auto object-contain" 
              src="https://aavarangroup.com/wp-content/uploads/2019/11/Aavaran_Wide_Logo.png" 
            />
            <span className="font-extrabold tracking-tight text-xl md:text-2xl text-primary leading-none">
              Aavaran<br/>
              <span className="text-sm font-medium tracking-wide opacity-70">The Paint Planet</span>
            </span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            item.subItems ? (
              <div key={item.id} className="relative">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                  className="font-semibold text-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.label}
                </button>
                {openDropdown === item.id && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-2xl py-4 min-w-[200px] mt-2 border border-surface-container z-50">
                    {item.subItems.map(subItem => (
                      <button 
                        key={subItem.label} 
                        onClick={() => setOpenDropdown(null)}
                        className="block w-full text-left px-6 py-2 hover:bg-surface-container-low text-sm font-semibold text-on-surface-variant"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id as Page)}
                className={`font-semibold text-sm uppercase tracking-wider transition-colors ${
                  currentPage === item.id 
                    ? 'text-secondary font-bold' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-surface-container overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                item.subItems ? (
                  <div key={item.id} className="py-2">
                    <p className="font-semibold text-sm uppercase tracking-wider text-on-surface-variant mb-2">{item.label}</p>
                    <div className="flex flex-col gap-2 pl-4">
                      {item.subItems.map(subItem => (
                        <button 
                          key={subItem.label} 
                          className="text-left font-medium text-sm text-on-surface-variant"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id as Page);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left font-semibold text-sm uppercase tracking-wider py-2 ${
                      currentPage === item.id ? 'text-secondary' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a 
                href="https://wa.me/919913548444" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold mt-2"
              >
                <MessageCircle size={20} fill="currentColor" />
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
