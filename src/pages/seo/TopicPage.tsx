import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, AlertCircle, Activity, HeartPulse, Stethoscope 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HubLink from '../../components/HubLink';
import SEO from '../../components/SEO';

interface TopicPageProps {
  title: string;
  subtitle: string;
  h1: string;
  metaTitle: string;
  metaTitleSuffix?: string;
  metaDesc: string;
  openingText: string;
  conditionsLabel: string;
  conditions: string[];
  whyChooseUs: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaText: string;
}

export default function TopicPage({ 
  title, subtitle, h1, metaTitle, metaDesc, openingText, 
  conditionsLabel, conditions, whyChooseUs, faqs, ctaText 
}: TopicPageProps) {
  const navigate = useNavigate();

  const homeVisitAnchors = [
    "home visit doctor in Manchester",
    "private GP home visit across Manchester",
    "doctor at your door in Manchester",
    "same-day home visit GP Manchester"
  ];

  const sameDayGpAnchors = [
    "same-day GP in Manchester",
    "Manchester same-day doctor consultation",
    "urgent medical appointment in Manchester",
    "private GP clinic Manchester"
  ];

  const anchorIdx = h1.length % homeVisitAnchors.length;
  const homeAnchor = homeVisitAnchors[anchorIdx];
  const gpAnchor = sameDayGpAnchors[anchorIdx];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO title={metaTitle} description={metaDesc} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <button 
            onClick={() => navigate('/services/home-visit')}
            className="text-slate-400 hover:text-teal-700 transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2"
          >
            ← Home Visits Manchester & Lancashire
          </button>
          <div className="flex items-center gap-4">
            <a href="tel:07488879077" className="flex items-center gap-2 text-slate-900 font-bold hover:text-teal-700 transition-colors">
              <Phone size={18} className="text-teal-600" />
              07488 879077
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-medical-50 text-medical-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-medical-200">
            {subtitle} | Private GP North West
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            {h1}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
            {openingText}. Call us on <a href="tel:07488879077" className="text-teal-700 font-bold decoration-2 underline">07488 879077</a> for immediate assistance in Manchester or Lancashire.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl flex items-center gap-2"
            >
              Book Specialist Visit
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:07488879077"
              className="px-10 py-5 bg-medical-500 text-slate-900 rounded-2xl font-black hover:bg-medical-400 transition-all flex items-center gap-2 shadow-xl shadow-medical-900/10"
            >
              <Phone size={20} />
              07488 879077
            </a>
          </div>
        </motion.div>

        {/* Trusts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: "GMC Registered", icon: <ShieldCheck size={18} /> },
            { label: "Same-Day Response", icon: <Clock size={18} /> },
            { label: "NICE Aligned", icon: <Activity size={18} /> },
            { label: "Home Assessment", icon: <MapPin size={18} /> }
          ].map(trust => (
            <div key={trust.label} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-2">
              <div className="text-teal-600">{trust.icon}</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{trust.label}</span>
            </div>
          ))}
        </div>

        {/* Conditions Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight italic">{conditionsLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {conditions.map(condition => (
              <div key={condition} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 transition-all hover:border-teal-200 shadow-sm">
                <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                <span className="font-bold text-slate-900 tracking-tight">{condition}</span>
              </div>
            ))}
          </div>
          
          <div className="p-8 bg-teal-50 rounded-[2rem] border border-teal-100 text-teal-900 font-bold italic text-center">
            Need immediate care? We offer a <button onClick={() => navigate('/services/home-visit')} className="text-teal-700 underline underline-offset-4 decoration-2 decoration-teal-300 hover:text-teal-900 transition-colors">{homeAnchor}</button> for patients who prefer to be seen at home.
          </div>
        </section>

        {/* Action Callout */}
        <div className="p-10 bg-teal-50 rounded-[3rem] border border-teal-100 mb-24 flex items-center gap-10">
          <div className="w-20 h-20 rounded-2xl bg-teal-600 text-white items-center justify-center shrink-0 hidden md:flex">
            <HeartPulse size={40} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-950 mb-2">Our doctors carry diagnostic equipment.</h3>
            <p className="text-teal-800/80 leading-relaxed font-medium">
              We don't just 'check'—we assess. Using portable diagnostic tools, our Manchester doctors can provide immediate clinical reasoning and treatment plans in your home.
            </p>
          </div>
        </div>

        {/* Why Us Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight">Expertise You Can Trust</h2>
          <div className="space-y-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-md">
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-teal-400 flex items-center justify-center text-sm font-black italic">
                    {idx + 1}
                  </div>
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center">Questions & Answers</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-16 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tighter leading-tight italic">
            {ctaText}
          </h2>
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-medical-500 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-medical-400 transition-all shadow-2xl"
            >
              Request Doctor Now
            </button>
            <p className="text-sm text-slate-400">
              Or book a <button onClick={() => navigate('/services/clinic')} className="text-teal-400 font-bold hover:underline">{gpAnchor}</button> for faster clinic access.
            </p>
          </div>
        </div>

        {/* Footer Internal Links */}
        <div className="mt-24 pt-12 border-t border-slate-100 italic">
           <HubLink index={h1.length} />
           <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mt-8 mb-8">Authoritative Resources</h4>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { path: '/our-doctors', label: 'Meet Our GMC Team' },
               { path: '/clinical-governance', label: 'Clinical Standards' },
               { path: '/services/clinic', label: 'Urgent Clinic' },
               { path: '/services/home-visit', label: 'Full Home Visit Guide' }
             ].map(link => (
               <button
                 key={link.path}
                 onClick={() => navigate(link.path)}
                 className="text-[10px] font-bold text-slate-400 hover:text-teal-700 text-left transition-colors uppercase tracking-widest"
               >
                 {link.label}
               </button>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
