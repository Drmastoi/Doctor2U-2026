import React from 'react';
import { motion } from 'motion/react';
import { Brain, CheckCircle2, Calendar, ShieldCheck, ArrowRight, ClipboardList, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ADHDAssessment() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Private ADHD Assessment & Support" 
        description="Comprehensive private ADHD assessments for adults. Professional clinical evaluations with GMC-registered psychiatrists and specialist GPs."
      />
      
      {/* Hero */}
      <section className="pt-24 pb-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
              >
                <Brain size={16} />
                <span>Specialist Neurodiversity Service</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                Private ADHD <span className="text-teal-700">Assessments.</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
                Providing clarity and support through comprehensive clinical evaluations. Our specialist-led pathway focuses on early diagnosis and personalised management plans.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center gap-2"
                >
                  Book Assessment
                  <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800" 
                  alt="Clinical Consultation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pathway */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Clinical Pathway</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">A structured, gold-standard approach to ADHD assessment based on NICE guidelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Pre-Screening", 
                desc: "Completion of evidence-based questionnaires (DIVA-5) and clinical history gathering.",
                icon: ClipboardList
              },
              { 
                step: "02", 
                title: "Clinical Interview", 
                desc: "In-depth consultation with a specialist to review your history, symptoms, and impact on life.",
                icon: Stethoscope
              },
              { 
                step: "03", 
                title: "Outcome & Plan", 
                desc: "A detailed diagnostic report and a personalised management or treatment plan.",
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold mb-6 shadow-lg shadow-teal-900/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-teal-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-[100px] opacity-50"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">Why Choose Private ADHD Assessment?</h2>
              <div className="space-y-4">
                {[
                  "No long NHS waiting lists - start within weeks",
                  "GMC-registered specialist psychiatrists",
                  "Comprehensive, NICE-compliant diagnostic reports",
                  "Ongoing medication management and titration support",
                  "Flexible appointment times (Evening & Weekends)"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle2 size={20} className="text-teal-400 shrink-0" />
                    <span className="text-lg font-light text-teal-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Adult Assessment Package</h3>
              <div className="text-5xl font-display font-bold mb-8">£695 <span className="text-lg font-sans font-normal opacity-60">Complete</span></div>
              <ul className="space-y-4 mb-10 text-sm text-teal-50 opacity-90">
                <li>• All clinical questionnaires & scoring</li>
                <li>• 90-minute specialist consultation</li>
                <li>• Full written diagnostic report</li>
                <li>• GP communication & referral coordination</li>
              </ul>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-white text-teal-700 py-4 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center gap-2"
              >
                Book Now
                <Calendar size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">How long is the waiting list?</h4>
              <p className="text-sm text-slate-500 font-light">We typically offer initial assessments within 10-14 working days of receiving your pre-screening questionnaires.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Is the diagnosis recognised by my GP?</h4>
              <p className="text-sm text-slate-500 font-light">Our assessments are conducted by GMC-registered specialists following NICE guidelines, which is the standard required for "Shared Care" agreements with most NHS GP practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
