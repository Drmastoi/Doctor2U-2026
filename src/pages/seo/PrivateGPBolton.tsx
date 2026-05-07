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

export default function PrivateGPBolton() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Bolton | Same-Day Doctor Appointments & Home Visits" 
        description="Looking for a Private GP in Bolton? We provide expert, same-day private doctor consultations and professional home visits across Bolton, Horwich, and Westhoughton. Book your expert care today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Bolton</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200">
            Professional Primary Care | Bolton & Horwich
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">BOLTON</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Avoid the wait and see a doctor who listens. Our private GP service in Bolton provides rapid clinical access, unhurried 30-minute consultations, and expert home-based assessments when you need them most.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                In a busy town like Bolton, the demand for primary care can often outweigh availability. We bridge the gap, offering an alternative medical experience that focuses on quality, depth, and patient comfort. From the town centre to the leafy streets of Lostock and the communities of Horwich and Westhoughton, our GMC-registered doctors are ready to help.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[60px] -mr-16 -mt-16"></div>
              <Stethoscope size={32} className="text-teal-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic">Same-Day</h4>
              <p className="text-[11px] uppercase font-black tracking-widest text-teal-400 mb-6">Bolton & Districts</p>
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
              See a Bolton Doctor
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
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8 italic">The Bolton Private GP Experience</h2>
          <p>
            When you're unwell, the last thing you want is the stress of navigating a complex booking system or waiting weeks for a 10-minute slot. Our private GP service in Bolton is built around your individual clinical needs. We offer a space where your symptoms are thoroughly investigated, your history is respected, and your treatment plan is clearly explained.
          </p>
          <p>
            Whether you are a busy professional, a parent with a sick child, or an elderly resident needing reassurances, we provide a consistent, expert point of care across the Bolton area.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic">Our Clinical Specialisms</h3>
          <p>
            Our doctors have years of experience in the UK primary care landscape and are qualified to manage a full range of medical presentations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Urgent diagnosis of acute illness & fever",
              "Comprehensive respiratory & ENT reviews",
              "Dermatological assessments & skin surgery",
              "Private prescriptions issued on-site",
              "Fast-track referral to private specialists",
              "Paediatric reviews for infants & children",
              "Mental health consultations & ADHD triage",
              "Chronic condition management & reviews"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100 italic">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic">Home Visit Doctors in Bolton</h2>
          <p>
            For many of our Bolton patients, the most convenient way to see a doctor is at home. We provide a full mobile clinician service across Bolton, Horwich, Westhoughton, Blackrod, and Bromley Cross.
          </p>
          <p>
            Our doctors travel with a complete suite of diagnostic equipment, enabling them to establish a clinical baseline in your living room. From blood pressure and oxygen saturation to physical examination of ears, chest, and abdomen, our home visits are as thorough and clinically robust as any consultation in a traditional medical practice.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic">Rapid Specialist Referrals</h3>
          <p>
            If your condition requires further investigation or the oversight of a consultant, we can provide immediate private referral letters. We have strong links with the region's leading private hospitals, ensuring you can access MRI, CT scans, and specialist expertise without the need for NHS gatekeeping. Our service is designed to be a rapid, efficient clinical partner for the Bolton community.
          </p>
          <p>
            The healthcare needs of Bolton residents are diverse, ranging from young families in the newer developments to elderly citizens in more established wards. We believe that everyone deserves medical care that doesn't feel like a transaction. By allocating 30-minute timeslots, we ensure that every Bolton patient has the opportunity to fully explore their medical concerns with a clinician who is truly focused on their wellbeing. From the moment you contact us until your follow-up advice is delivered, we are committed to providing a standard of medical service that is evidence-based, compassionate, and clinically robust. Whether you are seeking a one-off diagnosis or long-term health management, our Bolton private doctors are here to provide the clinical clarity you deserve.
          </p>
          <p>
            Bolton's geographical position as a major hub between the West Pennine Moors and the Greater Manchester conurbation requires a medical service that is both mobile and highly skilled. Our doctors are accustomed to navigating the local terrain, from the hills of Horwich to the business centres of the town. We provide a medical bridge for those who find it difficult to leave their home or office, ensuring that quality healthcare is always within reach. Our Bolton private GP service is underpinned by a commitment to clinical governance and patient safety. We ensure that every treatment plan is aligned with national guidelines, providing you with the assurance that your health is being managed according to the highest professional standards. We invite you to experience a more personal, unhurried, and effective way to manage your health in Bolton.
          </p>

          <MapEmbed location="bolton" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Bolton" 
            locationKey="bolton" 
          />
        </div>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Bolton Patient <span className="text-teal-400 italic">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What is the cost of a private GP in Bolton?", 
                a: "A professional 30-minute consultation starts from £100 (clinic) or £130 (home visit). This includes a full assessment, treatment plan, and any necessary private prescriptions." 
              },
              { 
                q: "How soon can I see a doctor in Horwich or Lostock?", 
                a: "If you call us before midday, we aim to provide a same-day clinician visit across Bolton, often within 2 to 4 hours of your initial contact." 
              },
              { 
                q: "Do you see children in Bolton?", 
                a: "Yes. Paediatric care is a cornerstone of our service. Our doctors are very comfortable assessing infants and children at home." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0">
                <h4 className="text-lg font-bold text-teal-400 mb-2 font-sans">Question: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light italic">Answer: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 font-sans tracking-tight leading-tight italic">
             Quality Private Care. <br />
            <span className="text-teal-700 font-bold">To Your Bolton Home.</span>
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
