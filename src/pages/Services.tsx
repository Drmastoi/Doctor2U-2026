import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES } from '../types';
import HubLink from '../components/HubLink';
import SEO from '../components/SEO';
import { Video, User, Home as HomeIcon, CheckCircle2, ArrowRight, ArrowLeft, Brain, Apple, FileText, Stethoscope, ClipboardList, Search } from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return <Video size={32} />;
      case 'User': return <User size={32} />;
      case 'Home': return <HomeIcon size={32} />;
      case 'Brain': return <Brain size={32} />;
      case 'Apple': return <Apple size={32} />;
      default: return <CheckCircle2 size={32} />;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-16 relative overflow-hidden">
      <SEO 
        title="Private Doctor Services Manchester & Lancashire | Doctor2U"
        description="Explore our range of private medical services including same-day GP consultations, home visits, drivers medicals, and blood tests across Manchester and Lancashire."
      />
      {/* Background Blobs for Modern Feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-medical-100/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[130px] animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          to="/"
          className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </Link>

        {/* New Services Grid Section moved from Innovation */}
        <section id="services-grid" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
            >
              <CheckCircle2 size={12} />
              <span>Comprehensive Solutions</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Our Core <span className="text-teal-700">Expertise</span></h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Innovative healthcare solutions combining cutting-edge technology with traditional medical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "AI Health Assessment (Free)", desc: "Interactive symptom-to-suggestion tool that provides instant medical insights and prepares a structured summary for your doctor consultation.", link: "/ai-health-insights" },
              { icon: Brain, title: "ADHD Assessment", desc: "Specialist-led ADHD assessment pathway following NICE guidelines for comprehensive clinical evaluations and diagnostic reports.", link: "/services/adhd-assessment" },
              { icon: Apple, title: "Weight Management", desc: "Doctor-led medical weight management combining metabolic testing with evidence-based treatments and clinical oversight.", link: "/services/weight-management" },
              { icon: Brain, title: "Bespoke AI Health Apps", desc: "Custom clinical AI applications and consultation systems developed for hospitals, PCNs, and GP practices to transform healthcare delivery.", link: "/innovation" },
              { icon: FileText, title: "Medico-Legal Reporting", desc: "Professional medical reports for legal proceedings, insurance claims, and regulatory compliance with expert medical analysis." },
              { icon: HomeIcon, title: "Doctor2u – Home Visits", desc: "Qualified doctors providing medical consultations and treatments in the comfort of your own home for personalised care.", link: "/innovation" },
              { icon: Stethoscope, title: "Occupational Medicine", desc: "Expert advice on workplace health, occupational hazards assessment, and employee wellness programmes tailored to your organisation." },
              { icon: ClipboardList, title: "Drivers' Medicals", desc: "Comprehensive medical examinations for professional drivers, ensuring compliance with DVLA and transport authority requirements." },
              { icon: Search, title: "Health Screening", desc: "Preventive health assessments and comprehensive screenings to detect potential health issues early and maintain optimal wellbeing." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => service.link && navigate(service.link)}
                className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group h-full ${service.link ? 'cursor-pointer hover:border-teal-200' : ''}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                  service.link ? 'bg-teal-700 text-white shadow-lg shadow-teal-900/20' : 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
                }`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase text-xs tracking-[0.2em]">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6">{service.desc}</p>
                {service.link && (
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-[10px] uppercase tracking-widest mt-auto">
                    Learn More <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to action for Our Fees */}
        <section className="mb-24 mt-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">Transparent Pricing & <br className="hidden md:block" /> <span className="text-teal-400">Money-Back Guarantee</span></h2>
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
                  We believe in clear, honest healthcare costs. View our full price list for online consultations, 
                  home visits, and specialist assessments. All with our 100% satisfaction guarantee.
                </p>
                <button 
                  onClick={() => navigate('/fees')}
                  className="bg-teal-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-500 transition-all shadow-lg shadow-teal-900/40 flex items-center gap-3 uppercase tracking-widest text-xs"
                >
                  View Our Fees
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 md:w-56 md:h-56 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-teal-400 mb-1">£100</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Starting price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
           <HubLink index={6} />
        </div>
      </div>
    </div>
  );
}
