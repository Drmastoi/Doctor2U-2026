import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, Building
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function PrivateGPPreston() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Preston | Same-Day Doctor Appointments & Home Visits" 
        description="Looking for a Private GP in Preston? We offer same-day private doctor consultations and professional home visits across Preston, Fulwood, and Bamber Bridge. Book your expert care today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Preston</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200">
            Preston's Local Private Doctor Service
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">PRESTON</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Expert clinical care in the heart of Lancashire. Our private GP service in Preston offers same-day availability for patients who value professional medical insight, unhurried time, and clinical continuity.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Serving the City of Preston and its surrounding communities—from Fulwood and Cottam to Bamber Bridge and Penwortham—we specialise in high-quality primary care. Our doctors are fully GMC-registered and dedicated to providing a standard of medical consultation that puts your needs at the centre of every decision.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-teal-600/20">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Location</p>
                   <p className="text-sm font-bold text-slate-900">Preston & District</p>
                 </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">Our Promise</h4>
              <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <li className="flex items-center gap-2 italic"><CheckCircle2 size={14} className="text-teal-600" /> 30-Min Appointments</li>
                <li className="flex items-center gap-2 italic"><CheckCircle2 size={14} className="text-teal-600" /> Same-Day Availability</li>
                <li className="flex items-center gap-2 italic"><CheckCircle2 size={14} className="text-teal-600" /> Expert GMC Doctors</li>
              </ul>
              <hr className="my-6 border-slate-200" />
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm"
              >
                Book Preston GP
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl flex items-center gap-2"
            >
              See a Doctor Today
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

        {/* Content Section */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-light">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8">Elevating Primary Care in Preston</h2>
          <p>
            Preston's medical needs are diverse and increasing. Many residents find that traditional GP routes involve long waiting times on phones and difficultly securing face-to-face time with a clinician. Our private GP service in Preston was established to solve these specific frustrations.
          </p>
          <p>
            When you choose our service, you are booking a consultation where you are the only priority. There are no distractions, no rushed outcomes, and no gatekeeping. Simply professional, evidence-led medical care delivered when you need it.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic">Why Preston Chooses Private Medical Care</h3>
          <p>
            Our Preston patients come from all walks of life—from the busy lecturers at UCLan to families in the outlying rural villages. They share a common goal: clinical peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Immediate access to expert clinical opinion",
              "Unrivalled 30-minute consultation times",
              "Private prescriptions issued on-site",
              "Rapid private specialist referrals",
              "In-home assessments for total privacy",
              "Full diagnostic reviews & testing"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8">Personalised Home Visits Across Preston</h2>
          <p>
            A cornerstone of our Preston private GP service is our doctor home visit capability. We understand that for many, traveling to a clinic is the primary barrier to healthcare. Whether it is an elderly relative who needs a check-up in Walton-le-Dale or a sick infant in Fulwood, our doctors bring the clinic to you.
          </p>
          <p>
            Our mobile clinical team arrives with comprehensive diagnostic equipment. This allows for clinical indicators such as blood pressure, lung sounds, oxygen saturation, and temperature to be assessed within the comfort of your own living room, leading to a much more relaxed and thorough experience.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Your Health, Your Timeline</h3>
          <p>
            We operate outside the 'standard' hours often found in primary care. If you need a private GP in Preston on a Saturday afternoon or late on a Wednesday evening, we strive to accommodate you. Our commitment to the Preston community means we are always looking for ways to improve accessibility and clinical quality.
          </p>
          <p>
            From our baseline of thorough 30-minute consultations to our complex diagnostic capabilities, every aspect of our service in Preston is designed to provide you with a clearer understanding of your health. We don't just treat symptoms; we treat patients. This means taking into account your lifestyle, your concerns, and your long-term health goals. By choosing a private provider, you are ensuring that your medical care is delivered without compromise, in a timeframe that respects your busy life in Lancashire.
          </p>
          <p>
            The clinical integrity of our Preston doctor service is maintained through continuous appraisal and adherence to the latest medical research. We believe that by providing a more attentive and unhurried clinical environment, we are able to reach more accurate diagnoses and develop more effective treatment plans. Our Preston patients value the professional distance we remove—fostering a relationship based on trust, clinical expertise, and real human connection. Whether you are navigating a new diagnosis or managing a long-term condition, our private GPs are here to provide the consistent, high-quality oversight you deserve.
          </p>

          <MapEmbed location="preston" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Preston" 
            locationKey="preston" 
          />
        </div>

        {/* Local Features Grid */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 tracking-tight italic text-center">Comprehensive <span className="text-teal-700">Preston Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
               <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                 <Stethoscope className="text-teal-600" /> Acute Illness
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                 Rapid diagnosis and treatment of infections, earaches, rashes, and minor injuries for all age groups in Preston.
               </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
               <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                 <Activity className="text-teal-600" /> Chronic Health
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                 Management and review of long-term conditions like diabetes, hypertension, and asthma with personalised care plans.
               </p>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Preston Patient <span className="text-teal-400">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "Do you see children in Preston?", 
                a: "Absolutely. We provide paediatric consultations for children from birth upwards. Our Preston doctors are experienced in assessing infants and children effectively." 
              },
              { 
                q: "What is the cost of a private GP in Preston?", 
                a: "A 30-minute clinic assessment is £100, and a home visit starts from £130. This includes any private prescriptions or referral letters required." 
              },
              { 
                q: "Can I book a same-day appointment today?", 
                a: "Yes, we aim to provide same-day doctor visits across Preston. Call us at 07488 879077 to confirm our next available slot in your postcode." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 italic">
                <h4 className="text-lg font-bold text-teal-400 mb-2">Q: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tighter leading-tight italic">
             Professional Private GP <br />
            <span className="text-teal-700 font-bold">To Your Preston Home.</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-10 leading-relaxed">
            Fulwood • Penwortham • Bamber Bridge • Cottam • City Centre
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto"
            >
              Book Specialist
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
                <Phone size={24} className="text-teal-600" />
              </div>
              Call 07488 879077
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
