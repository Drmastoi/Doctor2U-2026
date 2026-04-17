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
              your Home , Your time , Your Doctor. GMC-registered expert medical care across Lancashire and Manchester.
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
                { id: 'innovation', label: 'Innovation' },
                { id: 'booking', label: 'Book Online' },
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
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 border border-teal-100">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Headquarters</p>
                  <p className="text-slate-700 font-bold leading-tight">Doctor2U Ltd<br />Manchester City Centre<br />Central Clinic, M1 1AD</p>
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

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">Our Locations</h4>
            <ul className="space-y-4">
              {[
                { id: 'pgp-manchester', label: 'Private Doctor Manchester' },
                { id: 'pgp-preston', label: 'Private Doctor Preston' },
                { id: 'pgp-blackburn', label: 'Private Doctor Blackburn' },
                { id: 'hvd-manchester', label: 'Home Visit Doctor Manchester' },
                { id: 'doctor-home-visit-manchester', label: 'Private Home Doctor Manchester' },
                { id: 'same-day-doctor-manchester', label: 'Same-Day Doctor Manchester' },
                { id: 'hvd-lancashire', label: 'Home Visit Doctor Lancashire' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setPage(item.id as Page)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-left"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Doctor2U. All rights reserved. Registered in England & Wales.
            </p>
            <div className="flex gap-8 text-sm text-slate-400">
              <button onClick={() => setPage('privacy')} className="hover:text-teal-700 transition-colors">Privacy Policy</button>
              <button onClick={() => setPage('home')} className="hover:text-teal-700 transition-colors">Terms of Service</button>
              <button onClick={() => setPage('home')} className="hover:text-teal-700 transition-colors">Cookie Policy</button>
            </div>
          </div>
          
          <div className="bg-slate-100 p-6 rounded-2xl">
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-medium text-center">
              The Doctor2U AI support tool does not prescribe medication, provide clinical diagnosis, or replace a consultation with a qualified clinician. All medical decisions, prescriptions, and referrals are made solely by GMC-registered doctors during a separate consultation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

