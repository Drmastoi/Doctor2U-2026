import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function PrivateGPLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Lancashire | Same-Day Doctor Home Visits" 
        description="Looking for a Private GP in Lancashire? We provide expert, same-day private doctor home visits across Preston, Blackburn, Burnley, and more. Book your clinical assessment today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200">
            Registered General Practitioners | Lancashire Wide
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            EXPERT PRIVATE GP <br />
            <span className="text-teal-700 italic">LANCASHIRE</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                When you need to see a doctor quickly in Lancashire, waiting for a standard appointment isn't always an option. Our private GP service offers a modern, patient-focused alternative, bringing expert clinical care directly to your door or through rapid clinic access.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Serving the entire county—from the historic streets of Lancaster down to the bustling centres of Preston and Blackburn—we specialise in unhurried, comprehensive medical assessments that put your health first. Whether it's an acute illness, a chronic condition review, or a preventative health check, our Lancashire doctors are ready to assist.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                <Clock size={16} className="text-teal-600" />
                Availability
              </h4>
              <ul className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <li className="flex justify-between"><span>Mon-Fri</span> <span className="text-emerald-600">8am - 8pm</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-emerald-600">9am - 5pm</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-emerald-600">Call for Avail.</span></li>
              </ul>
              <hr className="my-6 border-slate-200" />
              <a href="tel:07488879077" className="block text-center bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all">
                07488 879077
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl flex items-center gap-2"
            >
              Book Private GP Appointment
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Patient" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Trusted By</p>
                <p className="text-sm font-bold text-slate-900">500+ Lancashire Patients</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Informational Content Sections */}
        <div className="prose prose-slate prose-lg max-w-none mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic">Why Choose a Private GP in Lancashire?</h2>
          <p>
            The healthcare landscape in the North West is changing. Many residents find themselves waiting weeks for a routine consultation or hours for a response from out-of-hours services. By choosing a private GP in Lancashire, you bypass these hurdles. Our service is designed to offer:
          </p>
          <ul>
            <li><strong>Time:</strong> We offer 30-minute consultations as standard, allowing for a deep dive into your medical history and concerns.</li>
            <li><strong>Convenience:</strong> Our mobile doctor service covers Preston, Blackpool, Blackburn, Burnley, Chorley, and beyond.</li>
            <li><strong>Direct Access:</strong> No gatekeeping. If you need a specialist referral or a diagnostic scan, we can arrange it immediately.</li>
          </ul>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Common Conditions We Treat</h3>
          <p>
            Our doctors are experienced in managing a wide range of clinical presentations. From common seasonal ailments to complex long-term health issues, we provide a consistent point of care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Respiratory infections & persistent coughs",
              "Dermatological concerns & rashes",
              "Mental health support & anxiety",
              "Urinary tract infections (UTIs)",
              "Musculoskeletal pain & sports injuries",
              "Childhood illnesses & paediatric reviews",
              "Chronic disease management (Diabetes/Hypertension)",
              "Ear, nose & throat (ENT) issues"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20">The Home Visit Advantage</h2>
          <p>
            One of the defining features of our Lancashire private GP service is the ability to receive a doctor at your home. For families with young children, elderly patients with mobility issues, or busy professionals, home visits provide a unparalleled level of comfort and privacy.
          </p>
          <p>
            Our clinicians arrive equipped with portable diagnostic tools, including blood pressure monitors, pulse oximeters, and kits for rapid testing. This means that for many patients, a diagnosis and treatment plan can be established without them ever having to leave their living room.
          </p>
        </div>

        {/* Benefits Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight">Clinical Excellence in Lancashire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "GMC Registered Doctors",
                desc: "Every clinician on our team is fully registered with the General Medical Council and undergoes regular appraisal.",
                icon: <ShieldCheck size={24} />
              },
              {
                title: "Private Prescriptions",
                desc: "We can issue medication immediately after your consultation, including delivery options for home visit patients.",
                icon: <Stethoscope size={24} />
              },
              {
                title: "Fast-Track Referrals",
                desc: "Need to see a consultant? We provide direct referrals to private specialists in Lancashire and Manchester.",
                icon: <Activity size={24} />
              },
              {
                title: "Diagnostic Imaging",
                desc: "We can arrange urgent MRI, CT, and X-ray scans at local diagnostic centres with rapid results.",
                icon: <HeartPulse size={24} />
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{benefit.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic">Frequently Asked <span className="text-teal-400">Questions</span></h2>
            <div className="space-y-6">
              {[
                { 
                  q: "How quickly can I see a doctor in Lancashire?", 
                  a: "We offer same-day appointments across most of Lancashire. If you call before midday, we can often arrange a visit or clinic consultation within 2 to 4 hours." 
                },
                { 
                  q: "Do you see children?", 
                  a: "Yes, we provide paediatric consultations for children of all ages. Our doctors are very comfortable assessing infants and young children in a home setting." 
                },
                { 
                  q: "How much does a private GP visit cost?", 
                  a: "A 30-minute home visit in Lancashire starts from £130. This includes the clinical assessment and a private prescription if needed. Diagnostic tests may incur additional fees." 
                },
                { 
                  q: "Can you refer me to an NHS specialist?", 
                  a: "We can provide private referral letters. While these are primarily for private specialists, we can also provide a summary for your NHS GP to assist with an NHS referral if appropriate." 
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6">
                  <h4 className="text-lg font-bold text-teal-400 mb-2">Q: {faq.q}</h4>
                  <p className="text-slate-400 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic">
            Ready to Speak with a <br />
            <span className="text-teal-700">Lancashire Private GP?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto"
            >
              Book Now
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
                <Phone size={24} className="text-teal-600" />
              </div>
              07488 879077
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
            Same-Day Appointments Available | GMC Registered Doctors
          </p>
        </div>
      </div>
    </div>
  );
}
