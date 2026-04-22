import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar, Activity, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/innovation', label: 'Innovation' },
    { path: '/book', label: 'Book Online' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-[2rem] px-6 transition-all duration-500 border border-transparent ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-teal-900/10 border-slate-100 py-3' 
            : 'bg-white/40 backdrop-blur-md border-white/20 py-4 shadow-sm'
        }`}>
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <Logo variant="dark" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all hover:text-teal-700 relative group ${
                  isActive(item.path) ? 'text-teal-700' : 'text-slate-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-700 transition-all group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <div className="h-6 w-px bg-slate-200 ml-2 mr-2"></div>
            <Link 
              to="/book"
              className="bg-teal-700 text-white px-8 py-3 rounded-2xl text-xs font-bold hover:bg-teal-800 transition-all shadow-lg shadow-teal-900/20 flex items-center gap-2 uppercase tracking-widest"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a href="tel:07488879077" className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-900/20">
              <Phone size={18} />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 bg-white/50 backdrop-blur-sm rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-100 shadow-2xl p-6 space-y-2 z-[110]"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-6 py-4 rounded-2xl text-base font-bold transition-all ${
                  isActive(item.path) ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <Link 
                to="/book"
                onClick={() => setIsMenuOpen(false)}
                className="bg-teal-700 text-white px-4 py-4 rounded-2xl text-sm font-bold shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book Online
              </Link>
              <a 
                href="https://wa.me/443333395773"
                className="bg-emerald-600 text-white px-4 py-4 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
