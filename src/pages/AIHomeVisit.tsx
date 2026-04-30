import React from 'react';
import { motion } from 'motion/react';
import { Brain, ShieldCheck, Zap, MessageSquare, Clock, ArrowRight, Activity, Beaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const AI_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI-Powered Private GP Home Visits",
  "description": "How Doctor2U uses advanced AI to prepare clinicians for deeper, more effective medical home visits.",
  "publisher": {
    "@type": "MedicalOrganization",
    "name": "Doctor2U"
  }
};

export default function AIHomeVisit() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="AI-Powered Private GP Home Visits" 
        description="Discover how our advanced AI intake tool ensures your doctor arrives better prepared for your home visit consultation."
        schema={AI_SCHEMA}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-1.5 rounded-full text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
                <Brain size={14} />
                <span>Next-Gen Healthcare</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
                AI-Powered <br />
                <span className="text-teal-400 italic">Medical Precision.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-10">
                Wait times are over. Experience the first private GP service that uses AI to organise your health data <span className="text-teal-400 font-medium">before</span> the doctor even steps through your door.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-500 transition-all shadow-2xl shadow-teal-900/40"
                >
                  Book AI-Supported Visit
                </button>
                <button 
                  onClick={() => navigate('/innovation')}
                  className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  How it Works
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square bg-gradient-to-tr from-teal-950 to-slate-900 rounded-[3rem] border border-white/10 p-12 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {[Brain, Zap, ShieldCheck, MessageSquare].map((Icon, i) => (
                    <div key={i} className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 text-slate-900">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Traditional vs AI-Powered</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">Why AI-enhanced intake results in superior clinical outcomes during home visits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <div className="text-slate-400 text-[10px] font-bold uppercase mb-8 tracking-widest">Traditional Visit</div>
              <div className="space-y-6">
                {[
                  "Travel to clinic or wait hours at home",
                  "Explain history from scratch each time",
                  "Time wasted on administration",
                  "Limited documentation provided"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start text-slate-400">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2"></div>
                    <span className="text-lg font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-teal-700 p-10 rounded-[3rem] text-white shadow-2xl shadow-teal-900/20">
              <div className="text-teal-400 text-[10px] font-bold uppercase mb-8 tracking-widest">Doctor2U AI Hybrid</div>
              <div className="space-y-6">
                {[
                  "AI organises symptoms 24/7 instantly",
                  "Doctor arrives with deep context already briefed",
                  "100% of time spent on clinical care",
                  "Detailed AI-enhanced treatment reports"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Zap size={18} className="text-teal-400 mt-1 shrink-0" />
                    <span className="text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: "Instant Triage", 
                desc: "Don't wait for business hours. Use our AI tool to structure your health concerns the moment they arise." 
              },
              { 
                icon: Beaker, 
                title: "Clinical Synthesis", 
                desc: "Our AI synthesizes your symptoms into a professional clinical summary, saving you 20 minutes of repetitive explaining." 
              },
              { 
                icon: Activity, 
                title: "Data Integrity", 
                desc: "Organized data leads to fewer errors and more accurate treatment plans during your house call." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-8">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter">Ready for Smarter Care?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">Join the patients in Manchester and Preston who are experiencing the modern future of private medicine.</p>
          <button 
            onClick={() => navigate('/book')}
            className="group bg-teal-700 text-white px-12 py-6 rounded-2xl font-bold hover:bg-teal-800 transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            Start Your AI Intake Now
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
