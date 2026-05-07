import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function UrgentDoctorLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Urgent Doctor Lancashire | Same-Day Private Emergency GP" 
        description="Need an Urgent Doctor in Lancashire? We provide rapid, same-day private emergency GP home visits across Preston, Blackburn, Blackpool, and Chorley. Expert care when you need it most."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <span className="text-slate-900">Urgent Doctor Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-red-200">
            Emergency Home Care | Lancashire Wide
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            URGENT DOCTOR <br />
            <span className="text-teal-700 italic">LANCASHIRE</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                When health emergencies occur, every minute counts. Our urgent private doctor service in Lancashire provides rapid, same-day home visits for acute illnesses, infections, and concerning symptoms that cannot wait.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                With A&E departments and local surgeries under immense pressure, securing an urgent appointment can be difficult. We offer a fast-track clinical alternative, bringing a GMC-registered doctor with a full emergency kit directly to your home in Preston, Blackburn, Chorley, or Blackpool. We provide immediate diagnosis, prescriptions, and if necessary, direct hospital referrals.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-red-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[60px] -mr-16 -mt-16"></div>
              <AlertCircle size={32} className="text-white mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic">Urgent Response</h4>
              <p className="text-[10px] uppercase font-black tracking-widest text-red-200 mb-6 italic">2-4 Hour Aim</p>
              <a 
                href="tel:07488879077"
                className="block w-full bg-white text-red-900 py-3.5 rounded-2xl font-black hover:bg-slate-100 transition-all text-sm mb-3 shadow-lg"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2"
            >
              Book Urgent Visit
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200">
               <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-red-600">
                 <Clock size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1 font-sans">Availability</p>
                 <p className="text-sm font-bold text-slate-900 italic tracking-tight italic">Same-Day Guaranteed</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-10 italic">Rapid Clinical Intervention in Lancashire</h2>
          <p>
            An urgent medical situation—whether it's a child with a spiking fever, an elderly relative with sudden confusion, or an acute respiratory infection—requires a professional assessment without delay. Our urgent private doctors cover the entire Lancashire region, providing a bridge between routine primary care and high-pressure emergency departments.
          </p>
          <p>
            We don't just 'check in'; we provide a comprehensive clinical examination in the comfort of your home. This alleviates the stress of travel and long waiting room times, which can exacerbate illness and anxiety.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic">Symptoms & Conditions We Treat Urgently</h3>
          <p>
            Our clinicians are equipped to handle a wide variety of acute presentations. If your situation is life-threatening (e.g., chest pain, stroke symptoms, difficulty breathing), please always call 999 first. For urgent but non-life-threatening needs, we provide:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Severe infections (Urinary/Chest/Skin)",
              "Sudden onset high fever in children & adults",
              "Acute pain management (Back/Joint/Abdominal)",
              "Allergic reactions & dermatological flares",
              "Inner ear infections & vertigo assessments",
              "Vomiting & dehydration support",
              "Follow-up care after hospital discharge",
              "Urgent second medical opinions"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-red-100 italic">
                <CheckCircle2 size={18} className="text-red-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic italic leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic">Home Visit Doctor Across Preston & Blackburn</h2>
          <p>
            The core of our urgent service is our mobile capability. We cover major Lancashire hubs including Preston, Blackburn, Blackpool, Burnley, and Lancaster. By bringing the doctor to you, we ensure that the focus remains entirely on the patient's recovery.
          </p>
          <p>
            In an urgent clinical scenario, the environment matters just as much as the expertise. By receiving care in your own home, you are in a familiar setting which can significantly reduce the physiological stress associated with illness. Our doctors are not just clinicians; they are compassionate medical professionals trained to manage acute situations with calmness and clarity. We ensure that every aspect of your urgent care is handled with the highest degree of medical integrity. From the moment you place your urgent call until the final treatment plan is agreed upon, our focus is on rapid diagnostic accuracy and patient comfort. We understand that Lancashire's health services are stretched, which is why we provide this vital clinical bridge, ensuring that urgent medical needs are met without the need for long waits in crowded emergency departments or urgent care centres. Whether you are in a residential home in Lytham St Annes or a family residence in the heart of Preston, our urgent doctor service is a phone call away.
          </p>

          <MapEmbed location="lancashire" />
          <ServiceSEOExpansion 
            serviceName="Urgent Doctor" 
            locationName="Lancashire" 
            locationKey="lancashire" 
          />
        </div>

        {/* Emergency FAQ */}
        <section className="mb-24 px-12 py-16 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm italic italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight italic text-center">Urgent Care <span className="text-red-600">Expectations</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What is your target response time?", 
                a: "For urgent calls, we aim to have a doctor at your Lancashire home within 2 to 4 hours of your initial request, depending on volume and location." 
              },
              { 
                q: "Do you provide hospital referrals?", 
                a: "Yes. If our doctor determines that you require hospital-based care or specialist imaging, we can provide direct private or NHS referral letters to ensure a smooth transition of care." 
              },
              { 
                q: "What happens if I call out of hours?", 
                a: "We operate an extended hours service. If we are unable to attend immediately, we will provide advice and schedule the earliest possible clinical visit, typically for the following morning." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 italic italic">
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-sans italic">Q: {faq.q}</h4>
                <p className="text-slate-500 font-medium font-sans">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center p-16 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden italic italic">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tighter leading-tight italic">
            Don't Wait in A&E. <br />
            <span className="text-red-400">See a Doctor at Home.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="tel:07488879077"
              className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-red-500 transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              07488 879077
            </a>
            <button 
              onClick={() => navigate('/book')}
              className="text-white font-bold text-lg group flex items-center gap-2"
            >
               Book Urgent Assessment
               <ArrowRight size={20} className="text-red-400 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
