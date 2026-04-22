import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Target,
  ShieldCheck,
  MapPin,
  Stethoscope,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HubLink from '../components/HubLink';
import SEO from '../components/SEO';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32">
      <SEO
        title="About Doctor2U Private Doctors"
        description="Learn about Doctor2U, our mission, clinical standards, and private doctor service across Manchester and Lancashire."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-teal-700 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Our Story & Ambition</span>
              <h1 className="text-4xl md:text-8xl font-display font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">
                Bringing <br /> <span className="text-teal-700 italic">Clinical</span> <br /> Excellence Home.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mb-8">
                Doctor2U is a UK-based private GP service dedicated to bringing uncompromised primary care directly to your door.
              </p>
              <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100 mb-10">
                <h4 className="font-bold text-teal-950 mb-2">Our Response Time Promise</h4>
                <p className="text-teal-800 leading-relaxed">
                  We understand that medical needs are urgent. We promise a same-day response for all Manchester bookings, with most home visits conducted within 4 hours of initial contact.
                </p>
              </div>
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                Founded in Manchester, our mission is to redefine the patient experience by blending traditional medical values with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                  alt="Doctor preparing for a home visit"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-900 rounded-full p-10 text-white flex flex-col items-center justify-center text-center shadow-2xl">
                <p className="text-3xl font-bold text-teal-400 mb-1">2024</p>
                <p className="text-xs font-black uppercase tracking-widest leading-tight">Founded in Manchester</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Mission</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To bridge the clinical gap between urgent needs and routine GP visits, ensuring no patient in Manchester has to wait for high-quality medical assessment.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Patient-Centricity</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We believe the most effective medical consultations happen where you are most comfortable: at home. We remove the friction of travel and the stress of waiting rooms.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                  <BrainCircuit size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Tech-Enabled Care</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our AI innovation isn't about replacement; it's about empowerment. We use data to help you and your doctor focus on what matters most-your recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-[#fafafa] rounded-[4rem] px-8 md:px-20 mb-32 border border-slate-100">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6 italic">The values that drive us.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our culture is built on clinical integrity, absolute transparency, and a relentless focus on patient safety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Academic Rigour', desc: 'Every pathway is NICE-aligned and rooted in the latest clinical evidence.', icon: <Stethoscope size={24} /> },
              { title: 'Absolute Trust', desc: 'Every doctor is GMC-registered and DBS-cleared for your total peace of mind.', icon: <ShieldCheck size={24} /> },
              { title: 'Local Presence', desc: 'We are born in Manchester and serve the communities we live in.', icon: <MapPin size={24} /> }
            ].map((value, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-teal-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-teal-400 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed tracking-tight">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { label: 'Patient Satisfaction', value: '99%' },
            { label: 'GMC Registered Doctors', value: '100%' },
            { label: 'Average Response Time', value: '< 4hrs' },
            { label: 'Consultation Length', value: '30min' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
              <p className="text-4xl md:text-5xl font-display font-black text-teal-700 mb-2">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-32 text-center">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl shadow-teal-900/40 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-medical-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tighter leading-tight">Led by experienced clinical experts</h2>
             <p className="text-lg text-slate-400 mb-12 leading-relaxed">
               Our leadership team combined has over 40 years of experience in UK primary care, emergency medicine, and health-tech innovation.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button
                 onClick={() => navigate('/our-doctors')}
                 className="bg-medical-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-medical-400 transition-all flex items-center justify-center gap-2"
               >
                 Meet Our Doctors
                 <ArrowRight size={20} />
               </button>
               <button
                 onClick={() => navigate('/clinical-governance')}
                 className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
               >
                 Our Governance
               </button>
             </div>
          </div>
        </div>

        <div className="mb-32">
          <h3 className="text-lg font-black uppercase tracking-widest text-slate-300 mb-10 text-center">Our Greater Manchester Footprint</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Salford', 'Trafford', 'Stockport', 'Bolton', 'Bury', 'Oldham', 'Rochdale', 'Wigan'].map(area => (
              <span key={area} className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-500 italic">
                {area}
              </span>
            ))}
          </div>
        </div>
        <HubLink index={1} />
      </div>
    </div>
  );
}
