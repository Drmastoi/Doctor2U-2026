import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ShieldCheck, Award, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const getPath = (id: string) => {
    const paths: Record<string, string> = {
      'home': '/',
      'services': '/services',
      'contact': '/contact',
      'booking': '/book',
      'innovation': '/innovation',
      'privacy': '/privacy',
      'about-us': '/about-us',
      'our-doctors': '/our-doctors',
      'clinical-governance': '/clinical-governance',
      'urgent-childrens-doctor-manchester': '/services/childrens-health',
      'emergency-uti-treatment-manchester': '/book',
      'elderly-care-home-visit-manchester': '/services/home-visit',
      'chest-infection-home-visit-manchester': '/book',
      'back-pain-home-visit-manchester': '/book',
      'doctor-home-visit-manchester': '/doctor-home-visit-manchester',
      'same-day-doctor-manchester': '/same-day-doctor-manchester',
      'urgent-doctor-manchester': '/urgent-doctor-manchester',
      'pgp-manchester': '/private-doctor/manchester',
      'out-of-hours-doctor-manchester': '/services/out-of-hours',
      'doctor-nursing-home-manchester': '/services/home-visit'
    };
    return paths[id] || '/';
  };

  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="cursor-pointer block">
              <Logo variant="dark" />
            </Link>
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

          {/* About Doctor2U / EEAT column */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">About Doctor2U</h4>
            <ul className="space-y-4">
              {[
                { id: 'about-us', label: 'Our Mission' },
                { id: 'our-doctors', label: 'Our GMC Doctors' },
                { id: 'clinical-governance', label: 'Clinical Governance' },
                { id: 'innovation', label: 'AI Health Innovation' },
                { id: 'contact', label: 'Contact & Support' }
              ].map((item) => (
                <li key={item.id}>
                  <Link 
                    to={getPath(item.id)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialist Care Cluster */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">Specialist Home Care</h4>
            <ul className="space-y-4">
              {[
                { id: 'urgent-childrens-doctor-manchester', label: 'Urgent Children\'s Doctor' },
                { id: 'emergency-uti-treatment-manchester', label: 'Emergency UTI Treatment' },
                { id: 'elderly-care-home-visit-manchester', label: 'Elderly Specialist Care' },
                { id: 'chest-infection-home-visit-manchester', label: 'Chest Infection Support' },
                { id: 'back-pain-home-visit-manchester', label: 'Acute Back Pain Relief' }
              ].map((item) => (
                <li key={item.id}>
                  <Link 
                    to={getPath(item.id)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-left"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-slate-900">Manchester Locations</h4>
            <ul className="space-y-4">
              {[
                { id: 'doctor-home-visit-manchester', label: 'Home Visit GP Manchester' },
                { id: 'same-day-doctor-manchester', label: 'Same-Day Doctor Manchester' },
                { id: 'urgent-doctor-manchester', label: 'Urgent Doctor Manchester' },
                { id: 'pgp-manchester', label: 'Private Doctor Central' },
                { id: 'out-of-hours-doctor-manchester', label: 'Out Of Hours Doctor' },
                { id: 'doctor-nursing-home-manchester', label: 'Nursing Home Visits' }
              ].map((item) => (
                <li key={item.id}>
                  <Link 
                    to={getPath(item.id)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-left"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </Link>
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
              <Link to="/privacy" className="hover:text-teal-700 transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-teal-700 transition-colors">Terms of Service</Link>
              <Link to="/" className="hover:text-teal-700 transition-colors">Cookie Policy</Link>
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

