import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Stethoscope, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const PRESTON_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "Doctor2U Private GP Home Visits Preston",
      "description": "Expert private GP house calls across Preston and Lancashire. Book same-day medical consultations in the privacy of your own home.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Preston",
        "addressRegion": "Lancashire",
        "addressCountry": "UK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.7609",
        "longitude": "-2.7033"
      },
      "url": "https://doctor2u.co.uk/services/private-gp-preston",
      "telephone": "+443301281484",
      "openingHours": "Mo-Su 08:00-22:00",
      "priceRange": "££"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How soon can a private GP visit me in Preston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We aim for same-day visits, often arriving within 2-4 hours of initial booking depending on your location in Preston and surrounding Lancashire."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer private GP home visits on weekends in Lancashire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Doctor2U provides 7-day-a-week service including Saturdays and Sundays across Preston and major Lancashire towns."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide prescriptions during the house call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our GMC-registered doctors can issue private prescriptions which can be fulfilled at any pharmacy in Preston or Lancashire."
          }
        }
      ]
    }
  ]
};

export default function PrestonPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Private GP Home Visits Preston | Lancashire Doctor House Calls" 
        description="Looking for a private GP in Preston? Doctor2U offers specialist home visit consultations across Preston and Lancashire. High-quality clinical care at home."
        schema={PRESTON_SCHEMA}
        canonical="/services/private-gp-preston"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-emerald-50/30 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase">
                <MapPin size={12} />
                <span>Lancashire Coverage</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                Private GP House Calls <br />
                <span className="text-teal-700 italic">In Preston & Lancashire.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl font-light leading-relaxed mb-10">
                Leading private medical provider for home visits across Preston. We bring the clinic to you, providing unhurried and comprehensive GP consultations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20"
                >
                  Book Preston Visit
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                >
                  Contact Clinician
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white aspect-[5/4] relative">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                  alt="Private Medical Care Preston" 
                  className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: "Flexible Scheduling", 
                desc: "Appointments designed to fit around your busy Preston lifestyle, available 7 days a week." 
              },
              { 
                icon: Stethoscope, 
                title: "Expert Diagnosis", 
                desc: "Full physical examinations and clinical history reviews conducted in the safety of your home." 
              },
              { 
                icon: HeartPulse, 
                title: "Personalised Care", 
                desc: "One-to-one medical attention with a GMC doctor who doesn't rush your consultation." 
              }
            ].map((block, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-8">
                  <block.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{block.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lancashire Towns */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Serving All Of <span className="text-teal-700">Lancashire</span></h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">We cover major towns across the county from our base in Preston.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Preston City", "Blackburn", "Lancaster", "Blackpool", 
              "Chorley", "Leyland", "Fulwood", "Bamber Bridge",
              "Garstang", "Longridge", "Lytham St Annes", "Ormskirk"
            ].map(town => (
              <div key={town} className="px-8 py-4 bg-white rounded-full border border-slate-200 shadow-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:-translate-y-1 transition-all cursor-default">
                {town}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tighter">Access Private Medecine in Preston.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">Join waitlist-free healthcare today. Our Preston-based medical team is ready to support you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-600 text-white px-12 py-6 rounded-2xl font-bold hover:bg-teal-500 transition-all shadow-2xl flex items-center justify-center gap-4 text-lg"
            >
              Order Home Visit
              <ArrowRight size={22} />
            </button>
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl">
              <ShieldCheck size={28} className="text-teal-400" />
              <div className="text-left leading-tight">
                <div className="font-bold text-lg">GMC Registered</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Licensed Doctors Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
