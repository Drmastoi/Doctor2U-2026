import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function PrivateGPBlackburn() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Blackburn | Same-Day Appointments & Doctor Home Visits" 
        description="Looking for a Private GP in Blackburn? We offer expert private doctor consultations and professional home visits across Blackburn, Darwen, and surrounding areas. See a doctor today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Blackburn</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-sky-200">
            Professional Primary Care | East Lancashire
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">BLACKBURN</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Clinical excellence delivered where and when you need it. Our private GP service in Blackburn provides unhurried, expert medical consultations and same-day home visits across the BB postcode area.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We understand that when it comes to your health, time and depth of care are paramount. In Blackburn and Darwen, we offer an alternative to the traditional medical experience—one that prioritises 30-minute consultation times, direct access to GMC-registered GPs, and a patient-first ethos that ensures no concern is left unaddressed.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-[60px] -mr-16 -mt-16"></div>
              <Stethoscope size={32} className="text-teal-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic">Quality Care</h4>
              <p className="text-[10px] uppercase font-black tracking-widest text-teal-400 mb-6">Blackburn & Darwen</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-white text-slate-900 py-3.5 rounded-2xl font-black hover:bg-slate-100 transition-all text-sm mb-3 shadow-lg"
              >
                Book Appointment
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-teal-800 transition-all shadow-xl flex items-center gap-2"
            >
              See a Blackburn Doctor
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:07488879077"
              className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone size={20} className="text-teal-600" />
              07488 879077
            </a>
          </div>
        </motion.div>

        {/* SEO Rich Content */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8">Expert Private Doctor Care in Blackburn</h2>
          <p>
            Residents of Blackburn and East Lancashire are increasingly seeking more flexible ways to access primary medical care. Our private GP service in Blackburn was designed to meet this demand, offering a standard of clinical interaction that is becoming harder to find in traditional settings.
          </p>
          <p>
            When you book an appointment with our Blackburn doctor, you are booking a commitment to your health. We don't perform 'drive-by' medicine; we perform thorough clinical assessments that include detailed history taking and physical examination.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Clinical Services We Provide</h3>
          <p>
            Our General Practitioners are experienced across all areas of primary care. We serve the Blackburn community with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Urgent acute illness management",
              "Chronic condition oversight & reviews",
              "Private prescriptions (issued during visit)",
              "Fast-track referral to private specialists",
              "Second medical opinions",
              "Paediatric reviews for infants and children",
              "Mental health consultations & support",
              "Work & insurance medical certificates"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8">Blackburn Home Visit Doctor Service</h2>
          <p>
            For many, the most effective way to see a private GP in Blackburn is through a home visit. This service is highly valued by families in Darwen, Mellor, and the Ribble Valley who prefer the comfort and discretion of their own residence.
          </p>
          <p>
            Our doctors arrive equipped with appropriate diagnostic tools, including stethoscopes, blood pressure monitors, and kits for checking biological indicators. This level of preparation ensures that our Blackburn home visits are as robust and clinically sound as any consultation in a fixed clinic setting.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Rapid Response for East Lancashire</h3>
          <p>
            If you need an appointment today, we aim to deliver. By calling before midday, most Blackburn residents can be seen by a private doctor on the same afternoon, providing rapid reassurance and starting your journey to recovery immediately.
          </p>
        </div>

        {/* Local Area Trust Section */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 italic tracking-tight mb-4">Serving the <span className="text-teal-700">Blackburn Community</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Your Local Private Healthcare Partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2 italic">
                 <MapPin className="text-teal-600" size={20} /> Blackburn Central
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                 Same-day clinical response for residents and businesses within the Blackburn town centre and surrounding wards.
               </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2 italic">
                 <ShieldCheck className="text-teal-600" size={20} /> Darwen & Rural
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                 Extended home visit coverage for Darwen, Mellor, Langho, and the Ribble Valley districts.
               </p>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Blackburn Patient <span className="text-teal-400">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What are your consultation times in Blackburn?", 
                a: "A standard private GP consultation with our service is 30 minutes. This provides double the time of a traditional session, allowing for thorough clinical reasoning." 
              },
              { 
                q: "Do you see children in the BB postcode area?", 
                a: "Yes. Paediatric consultations are a key part of our service. We visit families with children from birth upwards across Blackburn and East Lancashire." 
              },
              { 
                q: "How much is a private GP home visit in Blackburn?", 
                a: "A home visit in the Blackburn/Darwen area starts from £130. This includes the full assessment, a treatment plan, and a private prescription if needed." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 italic">
                <h4 className="text-lg font-bold text-teal-400 mb-2 underline decoration-teal-400/30 underline-offset-4">Question: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light italic">Answer: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic">
            Quality Clinical Care. <br />
            <span className="text-teal-700 font-bold">See a Blackburn Doctor Today.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto active:scale-95"
            >
              Book Specialist Visit
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
                <Phone size={24} className="text-teal-600" />
              </div>
              Speak to a Clinician
            </a>
          </div>
          <p className="mt-8 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] italic">
            Blackburn • Darwen • Mellor • Ribble Valley • Accrington
          </p>
        </div>
      </div>
    </div>
  );
}
