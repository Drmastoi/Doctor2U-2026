import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES } from '../types';
import SEO from '../components/SEO';
import { 
  Video, User, Home as HomeIcon, CheckCircle2, ArrowRight, ArrowLeft, 
  Brain, Apple, ShieldCheck, Zap, HeartPulse, Sparkles, Phone 
} from 'lucide-react';

export default function OurFeesPage() {
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
        title="Private GP Fees Manchester & Lancashire | Transparent Pricing"
        description="View transparent pricing for private GP consultations in Manchester and Lancashire. Same-day appointments, home visits, and expert clinical care with no hidden costs."
      />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <Link 
            to="/"
            className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors group inline-flex"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <a 
              href="tel:07488879077"
              className="flex items-center gap-3 text-slate-900 font-bold text-lg hover:text-teal-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                <Phone size={18} />
              </div>
              07488 879077
            </a>
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-teal-800 transition-all shadow-lg"
            >
              Book Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
          >
            <ShieldCheck size={12} />
            <span>Private GP Lancashire & Manchester</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight">
            Our <span className="text-teal-700">Fees.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Transparent pricing for your health. Call us on <a href="tel:07488879077" className="text-teal-700 font-bold">07488 879077</a> for inquiries or book online today.
          </p>
        </div>

        {/* Transparency Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Zap,
              title: "Transparent Pricing",
              desc: "All our fees are listed clearly upfront. You'll never receive an unexpected bill after your consultation."
            },
            {
              icon: HeartPulse,
              title: "Money-Back Guarantee",
              desc: "We are so confident in our service that we offer a 100% satisfaction guarantee. If we can't help, you don't pay."
            },
            {
              icon: Sparkles,
              title: "No Hidden Costs",
              desc: "Private prescriptions, referral letters, and sick notes are included within your consultation fee."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-8">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Moving Section: Our Medical Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Standard <span className="text-teal-700">Medical Rates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col group hover:shadow-2xl hover:shadow-teal-900/10 transition-all shadow-sm h-full"
              >
                <div className="bg-slate-900 p-10 flex flex-col items-center justify-center text-white text-center relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-slate-900 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl mb-4 relative z-10 group-hover:scale-110 transition-transform border border-white/10">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-1 relative z-10">{service.title}</h3>
                  <div className="text-3xl font-display font-bold text-teal-400 relative z-10">{service.price}</div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <p className="text-slate-600 mb-8 leading-relaxed italic">
                    "{service.description}"
                  </p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {[
                      'Prescription included',
                      'Referral letters included',
                      'Sick notes included',
                      '30-minute consultation'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                        <CheckCircle2 size={16} className="text-teal-700 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate('/book')}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-teal-700 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Select This Service
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee Seal Section */}
        <section className="mt-32 relative">
          <div className="bg-teal-900 rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-teal-400/30 rounded-full flex items-center justify-center relative">
                  <div className="w-24 h-24 md:w-36 md:h-36 bg-teal-400/20 rounded-full flex items-center justify-center animate-pulse">
                    <ShieldCheck size={64} className="text-teal-400" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Money-Back Guarantee</h2>
                <div className="h-1 w-24 bg-teal-400 mb-8 mx-auto md:mx-0"></div>
                <p className="text-xl text-teal-100 leading-relaxed mb-8">
                  We are committed to providing the highest quality of care. If, after your consultation, 
                  you feel that our medical advice did not meet professional standards or if we were 
                  unable to provide the specific medical assistance required for your case, 
                  we offer a <span className="text-white font-bold underline decoration-teal-400/50">100% no-quibble refund</span>.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-teal-400" />
                    <span className="text-sm font-bold">Risk-Free Booking</span>
                  </div>
                  <div className="bg-white/10 px-6 py-3 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-teal-400" />
                    <span className="text-sm font-bold">Professional Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs about Fees */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Fee Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Are there any hidden costs?", a: "No. Our fees cover the consultation, any private prescriptions issued, referral letters, and sick notes. The only additional costs would be for diagnostic tests like bloods or imaging, which we will always discuss with you beforehand." },
              { q: "Do you accept health insurance?", a: "Many of our patients can claim back the cost of their consultation from providers like Bupa, AXA, or Vitality. We recommend checking with your insurer first. We provide a full receipt for your claim." },
              { q: "What happens if I need a follow-up?", a: "Simple follow-up queries via our secure portal are often free. If a formal follow-up consultation is required, these are typically charged at the same rate as a standard appointment." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
