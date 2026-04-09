import React from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Page } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'booking', label: 'Book Online' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
          <a href="tel:07488879077" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
            <Phone size={12} className="text-teal-400" />
            Call Us: 07488 879077
          </a>
          <a href="https://wa.me/443333395773" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
            <MessageSquare size={12} className="text-teal-400" />
            WhatsApp: 03333395773
          </a>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => setPage('home')}
          >
            <Logo variant="dark" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className={`text-sm font-bold transition-all hover:text-teal-700 relative group ${
                  currentPage === item.id ? 'text-teal-700' : 'text-slate-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full ${currentPage === item.id ? 'w-full' : ''}`}></span>
              </button>
            ))}
            <button 
              onClick={() => setPage('booking')}
              className="bg-teal-700 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-teal-800 transition-all shadow-lg shadow-teal-900/20 flex items-center gap-2"
            >
              <Phone size={16} />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPage(item.id as Page);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
                currentPage === item.id ? 'bg-teal-50 text-teal-700' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setPage('contact');
              setIsMenuOpen(false);
            }}
            className="w-full bg-teal-700 text-white px-4 py-3 rounded-xl text-base font-semibold text-center"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
