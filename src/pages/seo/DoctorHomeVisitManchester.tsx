import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Home as HomeIcon, Clock, ShieldCheck, Star, 
  MapPin, Phone, MessageSquare, BrainCircuit, Users, Stethoscope, 
  ChevronDown, Activity, AlertCircle, HeartPulse, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../types';
import HubLink from '../../components/HubLink';

import SEO from '../../components/SEO';

interface DoctorHomeVisitManchesterProps {}

export default function DoctorHomeVisitManchester({}: DoctorHomeVisitManchesterProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <SEO 
        title="Home Visit Private Doctor Manchester | Same-Day Private GP Lancashire"
        description="Book a same-day home visit doctor in Manchester or Lancashire. Experienced private doctors, rapid response, evening & weekend availability. Call now for urgent care at home."
      />
      {/* Sticky Call Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <a 
            href="tel:07488879077"
            className="flex items-center justify-center gap-3 bg-medical-500 text-slate-900 py-4 px-6 rounded-2xl font-bold shadow-2xl animate-bounce-subtle"
          >
            <Phone size={24} />
            Call Now for Home Visit
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Control */}
        <div className="mb-12 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="text-slate-500 hover:text-teal-700 transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
          >
            ← Home
          </button>
          <div className="flex gap-4">
            <span className="bg-medical-100 text-medical-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-medical-500 animate-pulse"></span>
              Same Day Appointments Available
            </span>
          </div>
        </div>

        {/* H1 Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Home Visit <span className="text-teal-700 font-display italic">Doctor in Manchester & Lancashire</span> – Same Day Private GP at Your Door
          </h1>
          
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-teal-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Need a private GP at home today?</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                If you or a family member are unwell, travelling to a clinic isn’t always practical — especially with pain, fever, mobility issues, or young children in Lancashire or Manchester.
              </p>
              <p className="text-lg text-white font-bold leading-relaxed mb-10">
                At Doctor2U, we provide <span className="text-teal-400 font-display underline italic cursor-pointer" onClick={() => navigate('/book')}>rapid same-day home visit doctor services across the North West</span>, bringing experienced GMC doctors to you. Call <a href="tel:07488879077" className="text-teal-400">07488 879077</a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-medical-500 text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-medical-400 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Book Private Home Visit
                  <ArrowRight size={22} />
                </button>
                <a 
                  href="tel:07488879077"
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <Phone size={20} />
                  </div>
                  <span className="text-sm font-bold">07488 879077</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What we treat section */}
        <section className="mb-24 py-12 border-b border-slate-100">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 tracking-tight italic">What we treat at home</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Our home visiting doctors can assess and manage a wide range of conditions, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { label: "Fever, infections, and flu-like illness", path: '/book' },
              { label: "Chest infections, cough, and breathlessness", path: '/book' },
              { label: "Urinary tract infections (UTIs)", path: '/book' },
              { label: "Acute Back pain & Spasms", path: '/book' },
              { label: "Skin infections and rashes", path: '/services/home-visit' },
              { label: "Minor injuries and acute pain", path: '/services/home-visit' },
              { label: "Elderly care and mobility issues", path: '/services/home-visit' },
              { label: "Children’s illnesses", path: '/services/childrens-health' }
            ].map((item) => (
              <button 
                key={item.label} 
                onClick={() => navigate(item.path)}
                className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-teal-200 hover:bg-white transition-all text-left w-full"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-700 shadow-sm border border-slate-100 group-hover:bg-teal-700 group-hover:text-white transition-all">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-bold text-slate-900 tracking-tight">{item.label}</span>
              </button>
            ))}
          </div>
          <div className="bg-teal-50 p-8 rounded-[2.5rem] border border-teal-100">
            <h3 className="font-bold text-teal-900 mb-4 text-xl">If needed, we can:</h3>
            <ul className="flex flex-wrap gap-4">
              {[
                "Prescribe medications",
                "Arrange referrals",
                "Advise on hospital care if required"
              ].map(item => (
                <li key={item} className="bg-white/50 backdrop-blur px-5 py-3 rounded-xl border border-teal-200 text-teal-800 font-bold text-sm flex items-center gap-2 shadow-sm">
                  <Stethoscope size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why choose section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 tracking-tight">Why choose a home visit doctor in Manchester?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">✔</div>
                Avoid crowded waiting rooms
              </h3>
              <p className="text-slate-500 leading-relaxed">Stay comfortable at home while being assessed properly. No travel, no exposure risks.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">✔</div>
                Ideal for children and elderly patients
              </h3>
              <p className="text-slate-500 leading-relaxed">Reduce stress, especially for vulnerable patients who find clinic environments distressing.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">✔</div>
                Fast response times
              </h3>
              <p className="text-slate-500 leading-relaxed">We aim for <strong>same-day or urgent appointments</strong>, including evenings and weekends.</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">✔</div>
                Continuity and time
              </h3>
              <p className="text-slate-500 leading-relaxed">Private consultations allow <strong>more thorough assessment</strong> than rushed 10-minute NHS slots.</p>
            </div>
          </div>
        </section>

        {/* Areas covered section */}
        <section className="mb-24 py-16 px-8 md:px-16 bg-slate-50 rounded-[3rem] border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">Areas we cover</h2>
            <p className="text-slate-500">We provide home visits across <span className="font-bold text-slate-900">Greater Manchester</span>, including:</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              "City Centre", "Salford", "Trafford", "Stockport",
              "Bolton", "Bury", "Oldham", "Rochdale"
            ].map(area => (
              <div key={area} className="bg-white p-4 rounded-xl border border-slate-200 text-center font-bold text-slate-700 text-sm shadow-sm">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 font-medium">
            M1–M4 and all Greater Manchester postcodes. <br />
            If you’re unsure, contact us — we’ll confirm availability immediately.
          </p>
        </section>

        {/* How it works section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 tracking-tight text-center italic">How it works</h2>
          <div className="space-y-6">
            {[
              { title: "Call or book online", desc: "Start your request in seconds." },
              { title: "Brief consultation", desc: "Speak briefly about your symptoms with our clinical team." },
              { title: "Dispatch", desc: "We dispatch a private doctor to your home immediately." },
              { title: "Home Care", desc: "Professional assessment, treatment, and advice provided in your living room." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 relative overflow-hidden group hover:border-teal-200 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-teal-400 font-black flex items-center justify-center text-2xl shrink-0 relative z-10 group-hover:bg-teal-700 group-hover:text-white transition-all">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-bold text-slate-900">Simple, fast, and focused on your needs.</p>
        </section>

        {/* Urgent section */}
        <section className="mb-24 p-12 bg-medical-500 rounded-[3rem] text-slate-900 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mt-16 blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tighter leading-tight">Same-day private doctor appointments at home</h2>
            <p className="text-xl mb-12 font-medium opacity-80 max-w-2xl mx-auto">
              We specialise in <span className="font-bold">urgent, same-day home doctor visits in Manchester</span>. Whether it’s a sudden illness, infection review, or a child needing immediate care.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12 font-black text-sm uppercase tracking-widest opacity-60">
              <span className="flex items-center gap-2"><Clock size={16} /> Sudden Illness</span>
              <span className="flex items-center gap-2"><Activity size={16} /> Worsening Infection</span>
              <span className="flex items-center gap-2"><HeartPulse size={16} /> Urgent Review</span>
            </div>
            <p className="text-2xl font-bold mb-8">👉 We aim to get a doctor to you <span className="italic">as quickly as possible</span></p>
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl"
            >
              Book Urgent Visit
            </button>
          </div>
        </section>

        {/* Fully qualified section */}
        <section className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 tracking-tight">Trusted, experienced UK doctors</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            All consultations are carried out by <span className="font-bold text-slate-900">fully qualified UK-registered doctors</span> with extensive experience in urgent care, general practice, and acute medical assessment.
          </p>
          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center">
              <ShieldCheck size={48} className="text-teal-700 mb-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">GMC Registered</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={48} className="text-teal-700 mb-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Expert Team</span>
            </div>
            <div className="flex flex-col items-center">
              <Activity size={48} className="text-teal-700 mb-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">NICE Guidelines</span>
            </div>
          </div>
        </section>

        {/* Final CTA section */}
        <section className="mb-24 pt-24 border-t-4 border-slate-900">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-10 tracking-tighter leading-none italic">
            Book your home visit doctor now
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            If you need a <strong>private doctor at home in Manchester</strong>, don’t wait. Get seen today, in the comfort of your home.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] flex-1 w-full shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Immediate Availability</p>
                  <p className="text-2xl font-bold">Call 07488 879077</p>
                </div>
              </div>
              <a 
                href="tel:07488879077"
                className="block w-full text-center bg-teal-600 py-5 rounded-2xl font-black text-xl hover:bg-teal-500 transition-all"
              >
                Call Clinic Reception
              </a>
            </div>
            <div className="p-10 bg-medical-500 text-slate-900 rounded-[2.5rem] flex-1 w-full shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-900/20 text-slate-900 flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-700">Digital Booking</p>
                  <p className="text-2xl font-bold italic font-serif">Secure Slots</p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/book')}
                className="block w-full text-center bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all"
              >
                Book Online Now
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24 py-24 bg-slate-50 rounded-[3rem] px-8 md:px-16" id="faq">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16 tracking-tight text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { 
                q: "How quickly can a doctor come to my home in Manchester?", 
                a: "We aim for same-day appointments, often within a few hours depending on location and demand. Our team handles logistics to ensure the closest available private doctor can reach you promptly." 
              },
              { 
                q: "Can you prescribe medication during a home visit?", 
                a: "Yes — our doctors can issue private prescriptions and advise on treatment immediately. We can also send the prescription directly to your chosen local pharmacy for collection." 
              },
              { 
                q: "Do you cover evenings and weekends?", 
                a: "Yes — we offer extended hours including evenings and weekends for urgent cases. Healthcare doesn't stop, and neither do we." 
              },
              { 
                q: "Is a home visit doctor suitable for children?", 
                a: "Absolutely — home visits are ideal for children, reducing stress and exposure to communal waiting rooms. Our doctors are very experienced with paediatric acute assessments." 
              },
              { 
                q: "What if I need hospital care?", 
                a: "If the examining doctor determines that hospital intervention or advanced diagnostics are required, we will advise accordingly and can arrange appropriate referral letters to hospital services if private, or guide you on NHS options." 
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:border-teal-300 transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group font-bold"
                >
                  <span className="text-slate-900 tracking-tight text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all ${activeFaq === index ? 'rotate-180 bg-teal-700 text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {activeFaq === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-8 pb-8"
                  >
                    <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer Internal Links */}
        <div className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Authority Pages</h4>
             {[
               { path: '/our-doctors', label: 'Meet Our Doctors' },
               { path: '/clinical-governance', label: 'Clinical Governance' },
               { path: '/about-us', label: 'Our Mission & Story' }
             ].map(link => (
               <button key={link.path} onClick={() => navigate(link.path)} className="block text-sm font-bold text-slate-500 hover:text-teal-700 transition-colors uppercase tracking-tight">/ {link.label}</button>
             ))}
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Specialist Visits</h4>
             {[
               { path: '/services/childrens-health', label: 'Children\'s Home Visit' },
               { path: '/services/home-visit', label: 'Elderly Medical Care' },
               { path: '/book', label: 'UTI Rapid Treatment' }
             ].map(link => (
               <button key={link.path} onClick={() => navigate(link.path)} className="block text-sm font-bold text-slate-500 hover:text-teal-700 transition-colors uppercase tracking-tight">/ {link.label}</button>
             ))}
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Urgent Support</h4>
             {[
               { path: '/services/out-of-hours', label: 'Out Of Hours Doctor' },
               { path: '/book', label: 'Chest Infection Visit' },
               { path: '/book', label: 'Acute Back Pain Doctor' }
             ].map(link => (
               <button key={link.path} onClick={() => navigate(link.path)} className="block text-sm font-bold text-slate-500 hover:text-teal-700 transition-colors uppercase tracking-tight">/ {link.label}</button>
             ))}
          </div>
        </div>
        <HubLink index={14} />
      </div>
    </div>
  );
}
