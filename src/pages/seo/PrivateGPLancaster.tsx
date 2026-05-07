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

export default function PrivateGPLancaster() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Lancaster | Same-Day Doctor Appointments & Home Visits" 
        description="Looking for a Private GP in Lancaster? We provide expert, same-day private doctor consultations and professional home visits across Lancaster and Morecambe. Book your expert care today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Lancaster</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-200">
            North Lancashire Care | Lancaster & Morecambe
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">LANCASTER</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Clinical excellence in the historic heart of North Lancashire. Our private GP service in Lancaster offers same-day availability for patients who value professional medical insight, unhurried time, and clinical continuity.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Serving the City of Lancaster, Morecambe, and the surrounding Lune Valley communities, we specialise in high-quality primary care. Our doctors are fully GMC-registered and dedicated to providing a standard of medical consultation that puts your needs at the centre of every decision.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-teal-600/20">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Local Focus</p>
                   <p className="text-sm font-bold text-slate-900">Lancaster & Morecambe</p>
                 </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest leading-tight">Response Time</h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-6 italic italic">We aim for same-day delivery for all local patients calling before 11am.</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm shadow-md"
              >
                Book Lancaster GP
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2"
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
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8 italic italic">Elevating Primary Care in North Lancashire</h2>
          <p>
            When symptoms arise, you shouldn't have to wait weeks for a professional opinion. Our private GP service in Lancaster is based on a patient-first model, where clinical time is the most valuable commodity. We allocate 30 minutes for every appointment, allowing our doctors to perform a thorough physical assessment and take a detailed clinical history.
          </p>
          <p>
            This level of care is particularly beneficial for those with complex medical histories, persistent symptoms that require investigation, or parents needing reassurance about an unwell child.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic">Clinical Specialisms & Services</h3>
          <p>
            Our General Practitioners bring years of experience and are fully registered with the GMC. We serve the Lancaster community with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Urgent diagnosis of acute illness & infections",
              "Dermatological (skin) assessments & reviews",
              "Respiratory & chest infection management",
              "Private prescriptions issued on-site",
              "Fast-track referral to private specialists",
              "Ear, nose & throat (ENT) physical exams",
              "Mental health consultations & ADHD support",
              "Full diagnostic blood testing services"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100 italic">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic italic">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic">Lancaster Home Visit Doctor Service</h2>
          <p>
            If you are too unwell to travel or simply prefer the privacy of your own home, our Lancaster home visit service is the gold standard. We dispatch experienced doctors directly to your location, whether it's an office in the city centre or a family home in Morecambe or the Lune Valley. This flexibility is what sets our private GP service in North Lancashire apart, providing a responsive clinical bridge when you need it most.
          </p>
          <p>
            Our doctors carry professional diagnostic equipment, enabling them to check blood pressure, heart rates, lung sounds, and perform point-of-care testing. This allows for a robust clinical diagnosis to be made on-site, followed by the immediate issuance of treatment plans and prescriptions. Lancaster's healthcare landscape is complex, but your clinical journey doesn't have to be. We are here to provide clear, actionable medical advice that respects your time and your health goals, ensuring a high-quality experience from the moment you book until your recovery is complete.
          </p>
          <p>
            The historic city of Lancaster and its coastal neighbour Morecambe present unique healthcare challenges, often involving seasonal pressures and academic terms. Our private clinic and home visit service are designed to be a constant, reliable presence for the North Lancashire community. We provide a space where medical concerns can be explored without the tick of a clock, ensuring that even the most complex symptoms are given the clinical attention they require. Our Lancaster private GP service is built on the principle of transparency—providing you with clear explanations of your health status and the reasoning behind every clinical decision. We invite the residents of Lancaster, Morecambe, and the Lune Valley to experience a new standard of primary care—one where your health is the absolute priority and your time is respected.
          </p>

          <MapEmbed location="lancaster" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Lancaster" 
            locationKey="lancaster" 
          />
        </div>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Lancaster Patient <span className="text-teal-400 italic italic">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What is the cost of a private GP in Lancaster?", 
                a: "A 30-minute clinic assessment is £100, and a professional doctor home visit in the Lancaster area starts from £130. This includes any private prescriptions or referral letters required." 
              },
              { 
                q: "Do you see children in Lancaster?", 
                a: "Yes. Paediatric care is a fundamental part of our practice. Our doctors are very comfortable assessing infants and children at home." 
              },
              { 
                q: "How soon can I book an appointment?", 
                a: "We aim for same-day response whenever possible, often within 2 to 4 hours of your initial call." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 italic italic italic">
                <h4 className="text-lg font-bold text-teal-400 mb-2 underline decoration-teal-400/30 underline-offset-4">Question: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light italic">Answer: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic italic italic">
             Quality Private Care. <br />
            <span className="text-teal-700 font-bold italic italic italic">To Your Lancaster Home.</span>
          </h2>
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
