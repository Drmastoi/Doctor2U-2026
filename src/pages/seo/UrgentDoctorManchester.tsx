import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Clock, ShieldCheck, Star, 
  MapPin, Phone, Activity, AlertCircle, Calendar, HeartPulse, Stethoscope, ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../types';
import HubLink from '../../components/HubLink';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

interface UrgentDoctorManchesterProps {}

export default function UrgentDoctorManchester({}: UrgentDoctorManchesterProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Is this a 24/7 service?",
      answer: "We offer extended hours including evenings and weekends for urgent medical concerns. While we are not a replace for A&E in life-threatening situations, we provide rapid access for everything else across Manchester and Lancashire."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Urgent Private Doctor Manchester | Emergency GP Lancashire"
        description="Need an urgent private doctor in Manchester or Lancashire? Immediate medical assistance, GMC-registered GPs, and same-day home visits at Doctor2U."
      />
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
              Urgent <span className="text-teal-400 italic font-serif">Private Doctor</span> <br />
              Manchester & Lancashire.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Need immediate medical advice? Speak to a private doctor today without the GP waitlist. Call us on <a href="tel:07488879077" className="text-teal-400 font-bold decoration-2 underline">07488 879077</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              <button 
                onClick={() => navigate('/book')}
                className="bg-medical-500 text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-medical-400 transition-all flex items-center gap-3 shadow-medical-900/20"
              >
                Get Urgent Care
                <ArrowRight size={24} />
              </button>
              <a 
                href="tel:07488879077"
                className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Phone size={20} />
                </div>
                <span className="text-sm font-bold text-white">07488 879077</span>
              </a>
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

            <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Manchester Emergency GP Coverage</h3>
            <p>
              Navigating the health landscape in a major city like Manchester can be challenging, especially during medical crises. Our urgent doctor service provides coverage across the entire city, from the bustling Northern Quarter to the residential areas of Didsbury and Chorlton. We prioritize cases that require immediate clinical oversight, ensuring that patients receive a professional diagnosis without the traditional delays associated with walk-in centres or emergency departments.
            </p>
            <p>
              The clinicians we assign to urgent requests are experienced in managing acute presentations in a non-hospital environment. They carry professional diagnostic tools that allow for a thorough physical examination, including testing for vital signs and biological indicators. This depth of care is what defines our urgent service in Greater Manchester. We are committed to clinical transparency, ensuring that every patient understands their diagnosis and the recommended next steps. Whether you require an immediate private prescription or a formal referral to a specialist consultant, our urgent doctors are equipped to facilitate your recovery pathway.
            </p>
            <p>
              We believe that urgent medical care should be accessible, professional, and compassionate. By eliminating the 'wait-and-see' approach, we provide patients with the clinical clarity they need to move forward. Our service operates as an integrated part of the Manchester healthcare ecosystem, providing a vital clinical bridge for those who require rapid medical intervention. Every interaction is governed by the highest clinical standards, ensuring that your health is managed with the respect and expertise it deserves.
            </p>

            <MapEmbed location="manchester" />
            <ServiceSEOExpansion 
              serviceName="Urgent Doctor" 
              locationName="Manchester" 
              locationKey="manchester" 
            />
          </div>
        </div>
      </section>

      <MedicalReviewFooter />

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
