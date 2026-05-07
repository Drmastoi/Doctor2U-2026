import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function PrivatePrescriptionsLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private Prescription Lancashire | Instant Private GP Scripts" 
        description="Need a private prescription in Lancashire? Our GMC registered doctors provide clinical assessments and instant private prescriptions across Manchester, Preston, and Blackburn. Book today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private Prescriptions Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-sky-200">
            Clinical Assessment Required | GMC Doctors
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE MEDICAL <br />
            <span className="text-teal-700 italic">PRESCRIPTIONS</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Receive the medication you need without the wait. Our private prescription service in Lancashire is integrated into our comprehensive clinical consultations, ensuring you get safe, expert treatment plans delivered promptly.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                As GMC-registered General Practitioners, we provide robust clinical reviews before issuing any medication. Whether you need a repeat of a standard prescription, medication for an acute infection, or treatment following a specialist review, we can assist across our coverage areas in Manchester and Lancashire.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20">
                <FileText size={24} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest leading-tight">Instant Issuance</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">Scripts are issued during your consultation and can be sent directly to your chosen pharmacy.</p>
              <a href="tel:07488879077" className="block text-center bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm">
                Call for Assessment
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl flex items-center gap-2"
            >
              Book Clinical Review
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-3 px-6 text-slate-400 font-black text-[10px] uppercase tracking-widest">
              <Clock size={16} />
              <span>Available Lancashire Wide</span>
            </div>
          </div>
        </motion.div>

        {/* Extensive SEO Content */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-light">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8">Clinical Integrity in Private Prescribing</h2>
          <p>
            Obtaining a private prescription in Lancashire should always be preceded by a professional clinical assessment. At our service, we do not operate a 'request only' system. Instead, our doctors take the time to understand your symptoms, history, and any contraindications before recommending a course of medication.
          </p>
          <p>
            This approach ensures patient safety and clinical efficacy. Whether you're in Preston, Manchester, or any surrounding area, you can rest assured that your prescription is grounded in evidence-based medicine.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Medications We Often Prescribe</h3>
          <p>
            Our General Practitioners are qualified to prescribe a wide range of medications following a consultation. Please note that we strictly follow UK clinical guidelines regarding controlled substances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Antibiotics for acute infections",
              "Anti-viral treatments",
              "Dermatological (skin) medications",
              "Respiratory & asthma treatments",
              "Hypertension & cardiac management",
              "Allergy & antihistamine medications",
              "Gastrointestinal treatments",
              "Travel medications & prophylaxis"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8">Prescriptions During Lancashire Home Visits</h2>
          <p>
            For many, the most convenient way to receive a private prescription in Lancashire is during a home visit. Our doctor arrives at your residence, conducts a full 30-minute assessment, and issues the necessary script there and then.
          </p>
          <p>
            We can provide traditional paper scripts or utilise electronic prescribing where applicable, sending the prescription directly to a local pharmacy in Lancashire or Manchester city centre for your collection, or in some cases, arranging for medication delivery.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Specialist Oversight & Support</h3>
          <p>
            Our doctors have deep knowledge of the British National Formulary (BNF) and ensure that any private prescription issued in Lancashire is correctly cross-referenced with your existing medications to prevent any adverse interactions.
          </p>
          <p>
            Understanding your medication is just as important as receiving it. During your consultation, we provide comprehensive guidance on how to take your prescribed treatment, potential side effects to watch for, and the expected outcomes. We believe that an informed patient is better equipped to manage their health safely. Our private prescription service in Lancashire is not just about the paperwork; it's about the clinical conversation that surrounds it. We take the time to discuss alternative treatment options and address any anxieties you may have regarding new medications. Whether you are in the heart of Preston or a residential area of Blackburn, our goal is to provide a prescription service that is defined by its clinical rigour and patient-centric approach. We are committed to maintaining the highest standards of clinical governance, ensuring that every prescription is issued with the utmost care and in accordance with the latest evidence-based guidelines. Your safety is our primary concern, and we work diligently to ensure that your clinical journey is supported by expert medical advice and appropriate treatment plans. From the initial physical assessment until you have your medication in hand, we are here to provide the clinical clarity and professional oversight you deserve.
          </p>

          <MapEmbed location="lancashire" />
          <ServiceSEOExpansion 
            serviceName="Private Prescriptions" 
            locationName="Lancashire" 
            locationKey="lancashire" 
          />
        </div>

        <MedicalReviewFooter />

        {/* Comparison Section */}
        <section className="mb-24 px-10 py-16 bg-slate-50 rounded-[3rem] border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 italic tracking-tight">The Private Prescription <span className="text-teal-700">Experience</span></h2>
            <p className="text-slate-500 font-medium">How our service compares to traditional routes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-red-50 shadow-sm opacity-60">
              <h4 className="text-lg font-bold text-slate-400 mb-4 flex items-center gap-2">Traditional Route</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-medium">
                <li>• Potential week-long wait for appointment</li>
                <li>• 10-minute rushed consultation</li>
                <li>• Limited discussion on side-effects</li>
                <li>• General gatekeeping on certain brands</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-teal-100 shadow-xl scale-[1.02]">
              <h4 className="text-lg font-bold text-teal-700 mb-4 flex items-center gap-2">Our Private GP Service</h4>
              <ul className="space-y-4 text-sm text-slate-700 font-bold">
                <li>• Same-day clinical assessment</li>
                <li>• Unhurried, 30-minute doctor time</li>
                <li>• Comprehensive side-effect discussion</li>
                <li>• Tailored clinical management plans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Info Card */}
        <div className="p-10 bg-sky-50 rounded-[3rem] border border-sky-100 mb-24 flex items-center gap-10">
          <div className="w-20 h-20 rounded-3xl bg-sky-600 text-white items-center justify-center shrink-0 hidden md:flex shadow-xl shadow-sky-600/20">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-sky-950 mb-2 italic">Safe Clinical Governance</h3>
            <p className="text-sky-800/80 leading-relaxed font-bold text-sm">
              Please note: We do NOT prescribe controlled drugs, such as strong opioids, or certain sedative medications that have potential for abuse. As responsible GMC doctors, we reserve the right to decline any prescription request that we do not find clinically appropriate following our assessment.
            </p>
          </div>
        </div>

        {/* FAQ Area */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center">Lancashire Prescription Q&A</h2>
          <div className="space-y-4">
            {[
              { 
                q: "How much does the medication itself cost?", 
                a: "A private prescription allows you to pay the wholesale cost of the drug plus a pharmacy dispensing fee. Sometimes this is cheaper than the standard NHS levy, while for newer or high-dose medications, it may be more expensive." 
              },
              { 
                q: "Do I have to pay for the prescription separately?", 
                a: "The issuance of a private prescription is included in your standard consultation fee (£100 for clinic, £130 for home visit in Lancashire). There is no extra charge for the script itself from us." 
              },
              { 
                q: "Can you provide repeat prescriptions?", 
                a: "We can provide repeat prescriptions for stable conditions after an initial clinical consultation. We always require a periodic review to ensure the medication is still appropriate for you." 
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-16 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tighter leading-[1.1] italic">
            Need a Doctor's <br />
            <span className="text-teal-400 font-bold">Assessment & Prescription?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-500 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-400 transition-all shadow-2xl w-full sm:w-auto"
            >
              Book Assessment
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-3 text-white font-bold text-lg group"
            >
               07488 879077
               <ArrowRight size={20} className="text-teal-400 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
