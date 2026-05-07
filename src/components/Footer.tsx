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
      'doctor-nursing-home-manchester': '/services/home-visit',
      'private-gp-lancashire': '/private-gp-lancashire',
      'private-gp-manchester-seo': '/private-gp-manchester',
      'gp-home-visits': '/gp-home-visits',
      'same-day-gp': '/same-day-gp',
      'private-prescriptions': '/private-prescriptions',
      'private-sick-note': '/private-sick-note',
      'private-gp-preston': '/private-gp-preston',
      'private-gp-blackburn': '/private-gp-blackburn',
      'private-gp-burnley': '/private-gp-burnley',
      'private-adhd-assessment': '/private-adhd-assessment-lancashire',
      'private-gp-chorley': '/private-gp-chorley',
      'private-gp-bolton': '/private-gp-bolton',
      'private-gp-wigan': '/private-gp-wigan',
      'private-gp-lancaster': '/private-gp-lancaster',
      'urgent-doctor-lancashire': '/urgent-doctor-lancashire',
      'drivers-medical-lancashire': '/drivers-medical-lancashire',
      'drivers-medical-manchester': '/drivers-medical-manchester',
      'private-gp-children': '/private-gp-children-lancashire',
      'weight-management-lancashire': '/weight-management-lancashire'
    };
    return paths[id] || '/';
  };

  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="cursor-pointer block">
              <Logo variant="dark" />
            </Link>
            <p className="text-slate-500 leading-relaxed max-w-xs text-sm">
              Your Home, Your Time, Your Doctor. GMC-registered expert medical care across Lancashire and Manchester.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all border border-slate-200 shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* About Doctor2U / EEAT column */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-slate-900 uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
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
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-slate-900 uppercase tracking-widest italic">Medical Services</h4>
            <ul className="space-y-3">
              {[
                { id: 'private-adhd-assessment', label: 'ADHD Assessment' },
                { id: 'weight-management-lancashire', label: 'Weight Management' },
                { id: 'same-day-gp', label: 'Same-Day Private GP' },
                { id: 'gp-home-visits', label: 'GP Home Visits' },
                { id: 'private-prescriptions', label: 'Private Prescriptions' },
                { id: 'private-sick-note', label: 'Private Sick Notes' },
                { id: 'private-gp-children', label: 'Children\'s Health' }
              ].map((item) => (
                <li key={item.id}>
                  <Link 
                    to={getPath(item.id)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-sm text-left italic"
                  >
                    <div className="w-1 h-1 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all italic"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manchester Locations */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-slate-900 uppercase tracking-widest italic">Manchester</h4>
            <ul className="space-y-3">
              {[
                { id: 'private-gp-manchester-seo', label: 'Private GP Manchester' },
                { id: 'drivers-medical-manchester', label: 'Drivers Medical' },
                { id: 'doctor-home-visit-manchester', label: 'Home Visit GP' },
                { id: 'same-day-doctor-manchester', label: 'Same-Day Doctor' },
                { id: 'urgent-doctor-manchester', label: 'Urgent Doctor' }
              ].map((item) => (
                <li key={item.id}>
                  <Link 
                    to={getPath(item.id)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-sm text-left italic"
                  >
                    <div className="w-1 h-1 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all italic"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lancashire Locations */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-slate-900 uppercase tracking-widest italic">Lancashire</h4>
            <ul className="space-y-3">
              {[
                { id: 'private-gp-lancashire', label: 'All Lancashire' },
                { id: 'private-gp-preston', label: 'Preston' },
                { id: 'private-gp-blackburn', label: 'Blackburn' },
                { id: 'private-gp-burnley', label: 'Burnley' },
                { id: 'private-gp-chorley', label: 'Chorley' },
                { id: 'private-gp-bolton', label: 'Bolton' },
                { id: 'private-gp-wigan', label: 'Wigan' },
                { id: 'private-gp-lancaster', label: 'Lancaster' },
                { id: 'urgent-doctor-lancashire', label: 'Urgent Doctor' },
                { id: 'drivers-medical-lancashire', label: 'Drivers Medical' }
              ].map((item) => (
                <li key={item.id}>
                  <Link 
                    to={getPath(item.id)}
                    className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 group text-sm text-left italic"
                  >
                    <div className="w-1 h-1 rounded-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-all italic"></div>
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

