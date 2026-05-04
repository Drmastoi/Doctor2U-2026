import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, HomeIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function GPHomeVisitsLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="GP Home Visit Lancashire | Same-Day Private Doctor Visits" 
        description="Looking for a GP home visit in Lancashire? We provide rapid, expert private doctor visits across Preston, Blackpool, Blackburn, and Burnley. Quality care in your comfort."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">GP Home Visit Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-medical-50 text-medical-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-medical-200">
            Comfort. Convenience. Clinical Excellence.
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP HOME <br />
            <span className="text-teal-700 italic">VISIT LANCASHIRE</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                When illness strikes, the last thing you want is a stressful journey to a busy surgery. Our GP home visit service in Lancashire brings a fully equipped doctor to your bedside, providing expert assessment without you having to leave home.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We believe that healing begins at home. By removing the pressure of travel and waiting rooms, we allow our patients to focus on recovery while our GMC-registered doctors provide the unhurried, thorough clinical care that is the hallmark of private medicine in Lancashire.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-teal-50 p-6 rounded-3xl border border-teal-100 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20">
                <HomeIcon size={24} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest leading-tight">The Mobile Advantage</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">Our doctors carry diagnostic tools enabling a comprehensive check-up in your living room.</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm"
              >
                Book Home Visit
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl flex items-center gap-2"
            >
              Request Doctor Visit
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
        <div className="prose prose-slate prose-lg max-w-none mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic">Why Request a Private GP Home Visit in Lancashire?</h2>
          <p>
            For many Lancashire residents, particularly families with infants, elderly patients with mobility challenges, and busy professionals, the traditional clinic model isn't always the most effective. A private GP home visit offers several distinct clinical and practical advantages.
          </p>
          <ul>
            <li><strong>Reduced Stress:</strong> Stay in your own environment, which is especially beneficial for children and those with anxiety or mobility issues.</li>
            <li><strong>Clinical Observation:</strong> Our doctors can observe a patient's home environment, providing additional context that can be vital for holistic management.</li>
            <li><strong>Zero Waiting:</strong> No crowded waiting rooms or exposure to other illnesses. You are our sole focus during the consultation.</li>
          </ul>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Lancashire Areas We Visit</h3>
          <p>
            Our mobile clinical team is strategically positioned to offer rapid response home visits across the historic county of Lancashire. We aim for a same-day service for all calls received before midday.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-12 text-center">
            {["Preston", "Blackburn", "Blackpool", "Burnley", "Chorley", "Lancaster", "Leyland", "Lytham"].map(area => (
              <div key={area} className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700 tracking-tight">
                {area}
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20">Comprehensive Care in Your Living Room</h2>
          <p>
            A common misconception is that a home visit is 'less thorough' than a clinic consultation. In fact, the opposite is often true. Because our private GP home visits in Lancashire are booked for a minimum of 30 minutes, there is ample time for a full clinical history, a physical examination, and a detailed discussion of the treatment plan.
          </p>
          <p>
            Our doctors carry:
          </p>
          <ul>
            <li>Portable diagnostic kits (Blood pressure, SPO2, Blood sugar)</li>
            <li>ENT examination equipment (Otoscopes / Ophthalmoscopes)</li>
            <li>Urinalysis kits for rapid infection checking</li>
            <li>Supplies for basic wound care and initial treatment</li>
          </ul>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Expert Assessments for the Whole Family</h3>
          <p>
            We take pride in our paediatric and geriatric care. We understand the specific needs of children and the complexities of elderly health, ensuring that every home visit is conducted with patience, empathy, and clinical rigour.
          </p>
        </div>

        {/* Feature List */}
        <section className="mb-24 px-8 py-16 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -mr-48 -mb-48"></div>
          <h2 className="text-3xl font-display font-bold mb-12 tracking-tight italic text-center">What's Included in Your <span className="text-teal-400 font-bold">Lancashire Visit?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: "Physical Clinical Exam", desc: "A head-to-toe assessment using diagnostic equipment to establish a clinical baseline." },
              { title: "Immediate Prescription", desc: "If medication is required, a private prescription is issued during the visit." },
              { title: "Referral Letters", desc: "Fast-track access to private consultants and imaging centres (MRI/CT/X-ray)." },
              { title: "Clinical Reporting", desc: "A summary of the visit and treatment plan sent directly to you for your records." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400 border border-teal-500/30">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center italic">Questions About Home Visits</h2>
          <div className="space-y-4">
            {[
              { 
                q: "What is the average wait for a home visit in Lancashire?", 
                a: "We aim for same-day delivery. Most patients are seen within 2 to 4 hours of their initial call, depending on the urgency and location." 
              },
              { 
                q: "Do I need to be registered with an NHS GP?", 
                a: "No. You don't need to be registered anywhere to use our private service. We complement your existing care, not replace it." 
              },
              { 
                q: "Can you visit hotels or workplaces in Lancashire?", 
                a: "Yes. We frequently attend patients at their places of work or in hotels if they are visiting the Lancashire area." 
              },
              { 
                q: "Are the doctors experienced?", 
                a: "All our doctors are fully qualified, GMC-registered General Practitioners with extensive experience in the UK's primary care system." 
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-teal-200 transition-colors">
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Lancashire Response Team Active
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic">
            Clinical Care Delivered <br />
            <span className="text-teal-700 font-bold">To Your Door Today.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto active:scale-95"
            >
              Request Visit Now
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
