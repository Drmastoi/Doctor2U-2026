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

export default function PrivateGPWigan() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Wigan | Same-Day Doctor Appointments & Home Visits" 
        description="Looking for a Private GP in Wigan? We provide expert, same-day private doctor consultations and professional home visits across Wigan, Standish, and Leigh. Book your expert care today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Wigan</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-sky-200">
            Professional Primary Care | Wigan & Standish
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">WIGAN</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Receive the clinical attention you deserve. Our private GP service in Wigan offers rapid, same-day medical access for patients who value professional insight and the convenience of home-based assessments.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Wigan residents often face long waiting lists for routine consultations. We provide a modern alternative—focused on unhurried, evidence-based care delivered directly to you. From the town centre to Standish, Aspull, and Leigh, our GMC-registered doctors provide 30-minute consultations that ensure every medical concern is addressed with the rigour it requires.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-teal-600/20">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Local Focus</p>
                   <p className="text-sm font-bold text-slate-900">Wigan & District</p>
                 </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest leading-tight">Response Time</h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-6 italic italic">We typically attend to Wigan home visit requests within 2 to 4 hours of your initial call.</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm shadow-md"
              >
                Book Wigan GP
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
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8 italic italic">Elevating the Clinical Standard in Wigan</h2>
          <p>
            When symptoms arise, you shouldn't have to wait weeks for a professional opinion. Our private GP service in Wigan is based on a patient-first model, where clinical time is the most valuable commodity. We allocate 30 minutes for every appointment, allowing our doctors to perform a thorough physical assessment and take a detailed clinical history.
          </p>
          <p>
            This level of care is particularly beneficial for those with complex medical histories, persistent symptoms that require investigation, or parents needing reassurance about an unwell child.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic">Clinical Specialisms & Services</h3>
          <p>
            Our General Practitioners bring years of experience and are fully registered with the GMC. We serve the Wigan community with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Urgent diagnosis of acute illness & infections",
              "Dermatological (skin) assessments & reviews",
              "Respiratory & chest infection management",
              "Private prescriptions issued on-site",
              "Fast-track referral to private consultants",
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

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic">Wigan Home Visit Doctor Service</h2>
          <p>
            If you are too unwell to travel or simply prefer the privacy of your own home, our Wigan home visit service is the gold standard. We dispatch experienced doctors directly to your location, whether it's an office in the town centre or a family home in Standish or Aspull.
          </p>
          <p>
            Our doctors carry professional diagnostic equipment, enabling them to check blood pressure, heart rates, lung sounds, and perform point-of-care testing. This allows for a robust clinical diagnosis to be made on-site, followed by the immediate issuance of treatment plans and prescriptions.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic">Diagnostic Imaging & Referrals</h3>
          <p>
            If your symptoms require further investigation such as an MRI, CT scan, or X-ray, our Wigan private GPs can provide immediate referral letters to local diagnostic centres. This bypasses lengthy NHS waiting times and ensures you get the answers you need rapidly. Our medical practice is built on the principle of transparency, ensuring you are fully informed throughout the investigative process.
          </p>
          <p>
            The Wigan community is diverse, and we strive to provide a medical service that reflects the needs of every resident. Whether you're a young professional commuting to Manchester or an elderly resident in a rural ward, our doctors are committed to providing the same high standard of clinical care. We believe that by allocating more time to each patient, we can provide a much deeper level of clinical insight, leading to better diagnostic outcomes and more effective treatment plans. Every consultation is an opportunity for us to partner with you in your health journey, providing expert guidance that is grounded in the latest evidence-based guidelines. We are proud to be a part of the East Lancashire health landscape, offering a private medical alternative that prioritizes clinical quality and patient wellbeing above all else.
          </p>
          <p>
            The historic town of Wigan, famous for its cultural heritage and industrious spirit, requires a healthcare service that mirrors its own resilience and dedication. We understand that many Wigan residents feel frustrated by the increasing difficulties in accessing traditional GP services. Our private medical framework is designed to alleviate that frustration, providing a streamlined, high-quality clinical path. We ensure that our Wigan doctors are not only clinical experts but also compassionate practitioners who understand the local context. Whether you are seeking help for a sudden respiratory issue, a persistent skin concern, or a comprehensive health assessment, we provide the time and expertise needed to reach a definitive clinical answer. Our commitment to Wigan is unwavering; we provide a medical service that is as reliable as it is robust, ensuring that the health of our community is always in safe, expert hands.
          </p>

          <MapEmbed location="wigan" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Wigan" 
            locationKey="wigan" 
          />
        </div>

        {/* Local Area Trust Section */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 italic tracking-tight mb-4 tracking-tighter">Serving the <span className="text-teal-700">Wigan Community</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] font-sans">Professional Healthcare Partner for East Lancs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2 italic italic">
                 <MapPin className="text-teal-600" size={20} /> Wigan Central
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic italic italic">
                 Same-day clinician response for residents and businesses within the Wigan town centre and surrounding wards.
               </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
               <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2 italic italic">
                 <ShieldCheck className="text-teal-600" size={20} /> Standish & Leigh
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic italic italic">
                 Extended private doctor home visit coverage for Standish, Aspull, Leigh, and the surrounding districts.
               </p>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Wigan Patient <span className="text-teal-400 italic italic">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What is the cost of a private GP in Wigan?", 
                a: "A 30-minute clinic assessment is £100, and a professional doctor home visit in the Wigan area starts from £130. This includes any private prescriptions or referral letters required." 
              },
              { 
                q: "Can I get a same-day appointment in Standish?", 
                a: "Yes. We frequently attend patients in Standish and aim for a same-day response whenever possible, often within hours of your contact." 
              },
              { 
                q: "Do you see children in Wigan?", 
                a: "Yes. Paediatric care is a fundamental part of our practice. Our doctors are very comfortable assessing infants and children at home." 
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
            <span className="text-teal-700 font-bold italic italic italic">To Your Wigan Home.</span>
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
          <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.25em] italic italic italic italic">
            Standish • Aspull • Leigh • Ince • Hindley
          </p>
        </div>
      </div>
    </div>
  );
}
