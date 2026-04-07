import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ShieldCheck, Award, Clock, MessageSquare } from 'lucide-react';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  setPage: (page: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div 
              className="cursor-pointer"
              onClick={() => setPage('home')}
            >
              <Logo variant="dark" />
            </div>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              your Home , Your time , Your Doctor. Providing unhurried, expert medical care across Lancashire and Manchester.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all border border-slate-200 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Our Services' },
                { id: 'booking', label: 'Book Appointment' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setPage(item.id as Page)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 border border-teal-100">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Call Us</p>
                  <a href="tel:07488879077" className="text-slate-700 hover:text-teal-700 font-bold transition-colors">07488 879077</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                  <a href="https://wa.me/443333395773" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-green-600 font-bold transition-colors">03333395773</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 border border-teal-100">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@doctor2u.co.uk" className="text-slate-700 hover:text-teal-700 font-bold transition-colors">hello@doctor2u.co.uk</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">Accreditations</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <ShieldCheck className="text-teal-700 mb-2" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Professional Care</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <Award className="text-teal-700 mb-2" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">GMC Certified</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <Clock className="text-teal-700 mb-2" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">24/7 Support</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
                <MapPin className="text-teal-700 mb-2" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Local Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Doctor2U. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-teal-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-700 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

