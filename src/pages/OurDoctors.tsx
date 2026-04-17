import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Award, GraduationCap, Heart, Stethoscope, 
  Linkedin, CheckCircle2, Star, Clock, Globe, Activity
} from 'lucide-react';
import { Page } from '../types';
import HubLink from '../components/HubLink';

interface OurDoctorsProps {
  setPage: (page: Page) => void;
}

const doctors = [
  {
    name: "Dr. Alexander Thorne",
    title: "Lead Clinical Physician",
    gmc: "GMC Number: 7248192",
    credentials: "MBBS, MRCGP, DipGM",
    specialties: ["Acute Medicine", "Minor Surgery", "Emergency Care"],
    bio: "Dr. Thorne is a highly experienced physician with over 15 years in both the NHS and private healthcare. He specialises in rapid-response home visits and complex clinical assessments in Manchester.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Dr. Sarah Jenkins",
    title: "Senior Private Doctor",
    gmc: "GMC Number: 6982245",
    credentials: "MBChB, MRCP (UK), DCH",
    specialties: ["Paediatrics", "Women's Health", "Internal Medicine"],
    bio: "Dr. Jenkins has a deep interest in family medicine and paediatric emergency reviews. She has over 12 years of post-graduate experience, primarily in acute hospital paediatrics and community GP roles.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Dr. Michael Chen",
    title: "Primary Care Consultant",
    gmc: "GMC Number: 7451109",
    credentials: "MBBS, MRCGP, AFOM",
    specialties: ["Occupational Health", "Chronic Pain", "Geriatrics"],
    bio: "Dr. Chen focuses on long-term wellness and geriatric support. With over 8 years as a GP Partner in local Manchester practices, he brings a wealth of local clinical knowledge to Every home visit.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=500"
  }
];

export default function OurDoctors({ setPage }: OurDoctorsProps) {
  React.useEffect(() => {
    document.title = "Our Doctors | Meet the GMC-Registered Team | Doctor2U";
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-medical-50 text-medical-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-medical-200">
              GMC-Registered & Licensed
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter">
            Our <span className="text-teal-700">Doctors.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Every physician at Doctor2U is a fully licensed, UK-registered doctor with extensive experience in the NHS and private sectors. We adhere to the highest standards of General Medical Council (GMC) regulations.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {doctors.map((doctor, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] bg-slate-100">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-teal-400 font-black text-xs uppercase tracking-widest mb-1">{doctor.title}</p>
                  <h3 className="text-white text-2xl font-bold tracking-tight">{doctor.name}</h3>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-4 bg-slate-50 px-4 py-2 rounded-xl inline-flex w-full">
                  <ShieldCheck size={16} className="text-teal-600" />
                  {doctor.gmc}
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
                  <GraduationCap size={20} className="text-teal-600" />
                  {doctor.credentials}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{doctor.bio}"
                </p>
                
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">Clinical Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map(spec => (
                      <span key={spec} className="px-3 py-1 bg-medical-50 text-medical-800 rounded-lg text-xs font-bold border border-medical-100">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Framework */}
        <section className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="lg:flex gap-20 items-center relative z-10">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">Our Commitment to <span className="text-teal-400">Excellence.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                At Doctor2U, we don't just provide appointments; we provide continuity, safety, and clinical leadership. Every consultation is conducted under strict clinical governance.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">GMC Good Medical Practice</h4>
                    <p className="text-sm text-slate-500">All doctors adhere strictly to GMC 'Good Medical Practice' guidelines.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Enhanced DBS Clearance</h4>
                    <p className="text-sm text-slate-500">Every member of our clinical team undergoes enhanced background checks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Peer Review & CPD</h4>
                    <p className="text-sm text-slate-500">Continuous Professional Development and regular peer clinical audits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-square bg-white/5 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center border border-white/10">
                <div className="w-24 h-24 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8">
                  <Award size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">NICE Aligned Protocols</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our clinical algorithms and care pathways are derived directly from NICE guidelines, ensuring you receive evidence-based care identical to the best NHS standards, delivered with private efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mb-32">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-10 tracking-tight italic">Ready to meet your doctor?</h2>
          <button 
            onClick={() => setPage('booking')}
            className="bg-medical-500 text-slate-900 px-12 py-6 rounded-2xl font-black text-xl hover:bg-medical-400 transition-all shadow-2xl"
          >
            Book My Private Consultation
          </button>
        </div>
        <HubLink setPage={setPage} index={2} />
      </div>
    </div>
  );
}
