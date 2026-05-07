import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function PrivateGPBurnley() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Burnley | Same-Day Doctor Appointments & Home Visits" 
        description="Looking for a Private GP in Burnley? We provide expert private doctor consultations and professional home visits across Burnley, Padiham, and the Ribble Valley. Book today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Burnley</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200">
            Dedicated Primary Care | Burnley & Padiham
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">BURNLEY</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Receive the medical attention you deserve, without the long wait. Our private GP service in Burnley provides residents with same-day access to expert clinicians, unhurried 30-minute appointments, and the option of professional care in the comfort of their own home.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Serving the town of Burnley, Padiham, and the surrounding East Lancashire communities, we are committed to clinical integrity and patient-centred care. Whether you have an urgent acute illness or require a long-term health review, our GMC-registered doctors are ready to provide a deep, professional assessment that puts your health first.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 shrink-0 text-center shadow-lg relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
               <div className="w-16 h-16 rounded-3xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xl shadow-teal-600/20 mx-auto mb-6 transform -rotate-3">
                 <ShieldCheck size={32} />
               </div>
               <h4 className="text-lg font-display font-bold text-slate-900 mb-2 italic">GMC Doctors</h4>
               <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-6 leading-none">Registered & Insured</p>
               <button 
                 onClick={() => navigate('/book')}
                 className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-black hover:bg-slate-800 transition-all text-sm mb-3 shadow-md active:scale-95"
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
              See a Burnley Doctor
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
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8">Personalised Primary Medicine in Burnley</h2>
          <p>
            The healthcare requirements of the Burnley community are expanding. Many individuals find that standard clinical pathways are increasingly constrained, leading to shorter appointment times and longer waiting periods for both routine and urgent concerns. Our private GP service in Burnley offers a robust alternative.
          </p>
          <p>
            When you consult with our Burnley GP, you are guaranteed 30 minutes of dedicated clinical focus. This allows for a comprehensive medical history to be taken, a physical examination of your symptoms, and a collaborative discussion about your diagnosis and treatment plan.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Clinical Services We Provide in Burnley</h3>
          <p>
            Our General Practitioners are experienced across a wide range of primary care disciplines. We support Burnley patients with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Urgent diagnosis for acute illnesses",
              "Comprehensive health & wellness screenings",
              "Private prescriptions (issued during visit)",
              "Fast-track private specialist referral letters",
              "Paediatric reviews for infants and children",
              "Mental health consultations & ongoing support",
              "Medical fit notes & sick certifications",
              "Chronic disease reviews (e.g., Asthma/Diabetes)"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100 italic">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8">Rapid Home Visit Doctors Across BB10-BB12</h2>
          <p>
            A cornerstone of our Burnley private GP service is the ability to receive a doctor at your home. For families with sick children, elderly patients with mobility difficulties, or busy professionals, home visits provide a unparalleled level of clinical convenience and privacy.
          </p>
          <p>
            Our doctors arrive at your location in Burnley or Padiham equipped with appropriate diagnostic tools. This allows for clinical assessments to be performed with total rigour and depth within your living room, ensuring a professional diagnosis is established without the need for you to travel while unwell.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Access Specialist Referrals Fast</h3>
          <p>
            If your condition requires further investigation or specialist oversight, our Burnley GPs can provide immediate private referral letters. We have strong links with local private hospitals and imaging centres, ensuring you can access MRI, CT, or consultant expertise without the need for NHS gatekeeping. Our goal is to streamline your clinical journey, providing a direct path to the answers you need regarding your health.
          </p>
          <p>
            The Burnley community deserves a healthcare option that is both high-quality and highly accessible. We pride ourselves on the clinical rigour of our assessments and the transparency of our treatment planning. Every Burnley patient is treated as an individual, with a unique set of medical needs and personal preferences. Our clinicians take the time to listen, to examine, and to explain—ensuring that by the end of your 30-minute consultation, you have a clear understanding of your diagnosis and a solid plan for the future. Whether you are visiting us for a routine check-up or an urgent medical concern, we are committed to providing the best possible care in Burnley.
          </p>
          <p>
            The geographical layout of Burnley, with its various residential pockets and surrounding villages, means that a mobile clinical service is not just a luxury, but a necessity for many. We ensure that our home visit doctors are strategically deployed so that we can maintain our promise of same-day medical access. This level of responsiveness is vital during the cold winter months or when local viral outbreaks are putting pressure on standard surgeries. Our Burnley private GP service is an anchor for many families who require the peace of mind that comes from knowing a qualified doctor can be at their side within hours. We are dedicated to upholding the highest standards of the General Medical Council, ensuring that your clinical experience in Burnley is governed by expertise, safety, and a genuine commitment to your long-term health journey.
          </p>

          <MapEmbed location="burnley" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Burnley" 
            locationKey="burnley" 
          />
        </div>

        {/* Localized Grid */}
        <section className="mb-24 py-16 px-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-12 tracking-tight italic text-center">Serving the <span className="text-teal-400">Burnley Area</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 italic">
               <h4 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
                 <MapPin size={20} /> Town & Suburbs
               </h4>
               <p className="text-sm text-slate-400 font-light leading-relaxed">
                 Same-day clinical response for residents within Burnley town centre, Reedley, and the surrounding wards.
               </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 italic">
               <h4 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
                 <Clock size={20} /> Padiham & Districts
               </h4>
               <p className="text-sm text-slate-400 font-light leading-relaxed">
                 Extended private doctor home visit coverage for Padiham, Hapton, and the outskirts of the Ribble Valley.
               </p>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center">Burnley Patient Q&A</h2>
          <div className="space-y-4">
            {[
              { 
                q: "How soon can a doctor see me in Burnley?", 
                a: "We aim for same-day delivery for all local patients. If you contact us before midday, we can often arrange a home visit or clinic consultation within 2 to 4 hours." 
              },
              { 
                q: "Do your doctors have access to my NHS records?", 
                a: "We operate independently of the NHS. However, any findings or prescriptions from our session can be shared with your NHS GP to maintain continuity of care if you wish." 
              },
              { 
                q: "How much does a private GP consultation in Burnley cost?", 
                a: "A standard 30-minute consultation is £100 (clinic) or starts from £130 (home visit). This includes the full assessment and medical documentation." 
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-teal-200 transition-colors">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed font-bold">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic">
            Clinical Care. <br />
            <span className="text-teal-700 font-bold">Delivered to Your Burnley Home.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto"
            >
              Book Doctor Appointment
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
                <Phone size={24} className="text-teal-600" />
              </div>
              Speak to a Doctor
            </a>
          </div>
          <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] italic">
            Burnley • Padiham • Hapton • Reedley • Briercliffe
          </p>
        </div>
      </div>
    </div>
  );
}
