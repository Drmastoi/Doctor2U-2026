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

export default function PrivateGPChorley() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Chorley | Same-Day Doctor Home Visits" 
        description="Looking for a Private GP in Chorley? We provide expert, same-day private doctor home visits and consultations across Chorley, Leyland, and Buckshaw Village. Quality care in your comfort."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Chorley</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200">
            Local Clinical Support | Buckshaw & Leyland
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">CHORLEY</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Expert medical care, right where you live. Our private GP service in Chorley offers same-day availability for patients who value unhurried clinical time, professional insight, and the convenience of home-based assessments.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Chorley residents deserve a healthcare partner that can act fast when illness strikes. Whether you're in the historic town centre, the modern community of Buckshaw Village, or the surrounding areas of Leyland and Euxton, our GMC-registered doctors bring a full clinical setup directly to your door, providing the rapid reassurance and diagnosis you need.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-teal-600/20">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Local Focus</p>
                   <p className="text-sm font-bold text-slate-900">Chorley & District</p>
                 </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest leading-tight">Same-Day Promise</h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-6 italic">Call before 11am for a guaranteed same-day doctor visit in the Chorley area.</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm shadow-md"
              >
                Book Chorley GP
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
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-light">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8 italic">The New Standard of Primary Care in Chorley</h2>
          <p>
            Chorley is a rapidly growing area, but health services often lag behind residential development. Residents in newer communities like Buckshaw Village often find it difficult to secure even a phone triage, let alone a face-to-face appointment with a doctor. Our private GP service in Chorley fills this gap, providing clinical depth on your terms.
          </p>
          <p>
            By choosing our service, you are opting for a consultation that lasts 30 minutes as standard. This is triple the length of a typical session, allowing our clinicians to listen, examine, and explain in detail—ensuring your health is managed with the respect and thoroughness it deserves.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic">Why Families in Chorley Choose Us</h3>
          <p>
            We take pride in our paediatric and geriatric care. We understand that taking a sick child or an elderly relative to a clinic can be an ordeal in itself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Urgent diagnosis for acute fever & infections",
              "Thorough respiratory & chest assessments",
              "Dermatological (skin) reviews for all ages",
              "Private prescriptions issued on-site",
              "Rapid referral to private consultants",
              "Second medical opinions for peace of mind",
              "Full diagnostic blood testing",
              "Comprehensive health & wellness screenings"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100 italic">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic">Doctor Home Visits in Chorley & Leyland</h2>
          <p>
            A cornerstone of our Chorley private GP service is the ability to receive a doctor at your home. Whether it's a family home in Euxton, a modern residence in Buckshaw, or a cottage in the outlying villages near the West Pennine Moors, our doctors bring the clinic to you.
          </p>
          <p>
            Our mobile clinicians travel with portable diagnostic equipment, including blood pressure monitors, pulse oximeters, and kits for checking biological indicators. This ensures that a clinical diagnosis can be established with total rigour and depth in your living room, without you having to travel while unwell.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic">Your Health, On Your Timeline</h3>
          <p>
            We operate beyond standard office hours. If you need a private GP in Chorley on a Saturday or late on a weekday evening, we strive to accommodate your schedule. Our service is built on the foundation of accessibility, ensuring that when medical concerns arise, the answer isn't a long wait, but a clinical consultation.
          </p>
          <p>
            Chorley is more than just a location for us; it's a community we are proud to serve. From the bustling market days to the quiet residential streets, our doctors are integrated into the fabric of the town. We believe that by providing a private medical alternative, we are contributing to the wider health ecosystem of Lancashire, giving patients more choice and faster access to the care they need. Every 30-minute consultation is conducted with the highest degree of professionalism, transparency, and clinical rigour. We don't just provide a service; we provide peace of mind in a complex clinical world, ensuring that every Chorley resident has access to expert medical advice when it matters most.
          </p>
          <p>
            The growing residential landscape of Chorley, including the thriving hubs of Leyland and Buckshaw Village, necessitates a healthcare model that is as dynamic as its population. We have observed that many families relocate to these areas only to find that securing local primary care is unexpectedly challenging. Our private GP service acts as an immediate clinical resource, providing a reliable point of contact for routine concerns, acute illnesses, and preventative health checks. We place a significant emphasis on the doctor-patient relationship, understanding that clinical excellence is enhanced when a patient feels truly understood and respected. Our Chorley private doctors are not just clinicians; they are listeners and educators, dedicated to providing a healthcare experience that is as informative as it is effective. Whether you are seeking a rapid diagnosis for an infant or a detailed health screening for a senior family member, our service in Chorley is designed to deliver excellence at every touchpoint.
          </p>

          <MapEmbed location="chorley" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Chorley" 
            locationKey="chorley" 
          />
        </div>

        {/* Local Features Grid */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 tracking-tight italic text-center">Comprehensive <span className="text-teal-700">Chorley Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200">
               <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3 italic">
                 <Stethoscope className="text-teal-600" /> General Health
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic italic">
                 Full clinical examinations for any new or concerning symptoms, from acute infections to unexplained fatigue.
               </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200">
               <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3 italic">
                 <Activity className="text-teal-600" /> Specialist Referrals
               </h4>
               <p className="text-sm text-slate-500 font-medium leading-relaxed italic italic">
                 Fast-track access to private consultants and imaging (MRI/CT/X-ray) without NHS gatekeeping.
               </p>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Chorley Patient <span className="text-teal-400">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What is the cost of a private GP visit in Chorley?", 
                a: "A standard 30-minute clinic-based assessment is £100, while a professional doctor home visit in the Chorley area starts from £130. This includes any necessary private prescriptions." 
              },
              { 
                q: "Can I get a same-day appointment in Buckshaw Village?", 
                a: "Yes. We frequently attend patients in Buckshaw Village and aim for a same-day response whenever possible, often within 2 to 4 hours of your initial call." 
              },
              { 
                q: "Are your doctors experienced?", 
                a: "All our clinicians are fully qualified, GMC-registered General Practitioners with years of experience within the UK primary care landscape." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 italic italic">
                <h4 className="text-lg font-bold text-teal-400 mb-2">Q: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light font-sans">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tighter leading-tight italic italic">
             Quality Private Care. <br />
            <span className="text-teal-700 font-bold italic">To Your Chorley Home.</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-10 leading-relaxed">
            Buckshaw Village • Leyland • Euxton • Coppull • Whittle-le-Woods
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
