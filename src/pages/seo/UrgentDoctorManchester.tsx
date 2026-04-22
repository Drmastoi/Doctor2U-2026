import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Clock, ShieldCheck, Star, 
  MapPin, Phone, Activity, AlertCircle, Calendar, HeartPulse, Stethoscope, ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../types';
import HubLink from '../../components/HubLink';

interface UrgentDoctorManchesterProps {}

export default function UrgentDoctorManchester({}: UrgentDoctorManchesterProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Urgent Doctor Manchester – Immediate Medical Assistance | Doctor2U";
    
    // SEO Schema Injections
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "I need an urgent doctor in Manchester, how fast can you help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialise in rapid response medical care. Most urgent cases are seen within 4 hours by a GMC-registered private doctor."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "Is this a 24/7 service?",
      answer: "We offer extended hours including evenings and weekends for urgent medical concerns. While we are not a replace for A&E in life-threatening situations, we provide rapid access for everything else."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
              Urgent <span className="text-teal-400 italic font-serif">Doctor</span> <br />
              Manchester.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Need immediate medical advice? Speak to a private doctor today without the GP waitlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              <button 
                onClick={() => navigate('/book')}
                className="bg-medical-500 text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-medical-400 transition-all flex items-center gap-3"
              >
                Get Urgent Care
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Rapid Response Private Doctors in Manchester</h2>
            <p className="text-lg text-slate-600 mb-6">
              When an urgent medical issue arises, you need more than just a phone call. You need a thorough clinical assessment by a qualified GMC-registered doctor. Our **Urgent Doctor Manchester** service is designed to bridge the gap between non-emergency calls and formal A&E visits.
            </p>
            
            <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 mb-12">
               <p className="text-teal-900 font-bold text-lg mb-4">
                 We also provide a <button onClick={() => navigate('/services/home-visit')} className="text-teal-700 underline underline-offset-4 decoration-2 decoration-teal-300 hover:text-teal-900 transition-colors">home visit GP in Manchester</button> for patients who cannot travel.
               </p>
            </div>

            <p className="text-slate-600 mb-8">
               Our doctors can assist with sudden infections, acute pain, and worsening chronic conditions. We align with NICE guidelines to ensure every urgent review is evidence-based and safe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-medical-500">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <button 
             onClick={() => navigate('/book')}
             className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-bold text-xl"
          >
            Book Urgent Review
          </button>
        </div>
        <HubLink index={15} />
      </section>
    </div>
  );
}
