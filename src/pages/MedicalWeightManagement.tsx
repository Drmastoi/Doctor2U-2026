import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Activity, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function MedicalWeightManagement() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Medical Weight Management & Specialist Support" 
        description="Doctor-led weight management programmes using evidence-based medical treatments and personalised metabolic support."
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
                <Apple size={16} />
                <span>Doctor-Led Weight Care</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                Professional <br />
                <span className="text-teal-700">Weight Management.</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
                Transform your health with our expert-led weight management programmes. We combine the latest medical advances with metabolic testing and ongoing clinical support.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center gap-2"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                  alt="Metabolic Health" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Metabolic Assessment",
                desc: "In-depth blood testing and metabolic profiling to understand your body's unique chemistry."
              },
              {
                icon: HeartPulse,
                title: "Medical Oversight",
                desc: "Ongoing monitoring by GMC-registered doctors to ensure safety and optimal progress."
              },
              {
                icon: ShieldCheck,
                title: "Modern Treatments",
                desc: "Access to evidence-based medical weight loss treatments where clinically appropriate."
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">A Sustainable Approach to Health.</h2>
              <div className="space-y-6">
                {[
                  { title: "Clinical Safety First", text: "Regular reviews and safety monitoring are at the core of our programmes." },
                  { title: "Personalised Nutrition", text: "Doctor-approved guidance tailored to your metabolic profile and metabolic age." },
                  { title: "Lifestyle Integration", text: "Practical strategies to sustain weight loss and improve long-term cardiovascular health." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-teal-400 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center">
                <h3 className="text-2xl font-bold mb-4">Initial Consultation</h3>
                <p className="text-slate-400 mb-8 font-light">Comprehensive 45-minute assessment including baseline vitals and clinical history.</p>
                <div className="text-4xl font-display font-bold mb-10 text-teal-400">£150</div>
                <button 
                  onClick={() => navigate('/book')}
                  className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-500 transition-all flex items-center justify-center gap-2"
                >
                  Book Assessment
                  <Calendar size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Clinical Oversight</h2>
          <p className="text-slate-500 font-light leading-relaxed mb-8">
            Weight management is a complex medical journey. Our GMC-registered doctors provide the necessary clinical oversight to ensure that any pharmacological treatments or significant lifestyle changes are managed safely and effectively.
          </p>
          <div className="inline-flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full text-xs font-bold text-slate-700 tracking-widest uppercase">
            <ShieldCheck size={16} className="text-teal-600" />
            Standards Registered Practice
          </div>
        </div>
      </section>
    </div>
  );
}
