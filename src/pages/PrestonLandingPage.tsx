import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Phone, MessageSquare, MapPin, Star, ShieldCheck, 
  Clock, Activity, HeartPulse, Award, Stethoscope, CheckCircle2,
  Calendar, Zap, ChevronRight, Home as HomeIcon
} from 'lucide-react';
import { Page } from '../types';

interface PrestonLandingPageProps {
  setPage: (page: Page) => void;
}

export default function PrestonLandingPage({ setPage }: PrestonLandingPageProps) {
  React.useEffect(() => {
    document.title = "Private Doctor Preston | Home Visits & Same-Day Clinic | Doctor2U";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Dynamic Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-brand-secondary selection:bg-brand-primary selection:text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-brand-success rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
                <MapPin size={14} />
                <span>Private Medical Care • Preston</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Leading Private <br />
                <span className="text-brand-primary underline decoration-brand-accent/30 underline-offset-8">Doctor in Preston.</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
                Expert GMC-registered healthcare brought to your door. Experience the Doctor2U difference—unhurried, professional, and patient-first medicine in the heart of Preston.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setPage('booking')}
                  className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 group"
                >
                  Book Online Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href="tel:07488879077"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} className="text-brand-primary" />
                  Call Dr Awais
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-secondary bg-slate-800 overflow-hidden">
                      <img src={`https://picsum.photos/seed/doctor${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-brand-secondary bg-brand-primary flex items-center justify-center text-[10px] font-bold text-white uppercase">
                    5.0
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />)}
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Trusted by 500+ Patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-brand-primary/10 transform rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5] bg-slate-800 border-8 border-white/5">
                {/* User provided dr-awais-iqbal.jpg */}
                <img 
                  src="/dr-awais-iqbal.jpg" 
                  alt="Dr Awais Iqbal - Private Doctor Preston" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-secondary to-transparent pt-32">
                   <h3 className="text-2xl font-bold text-white mb-1">Dr Awais Iqbal</h3>
                   <p className="text-brand-primary font-bold uppercase tracking-widest text-xs">Principal GMC-Registered Doctor</p>
                </div>
              </div>

              {/* Float Widget */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px] hidden md:block animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">GMC Registered</p>
                    <p className="text-[10px] text-brand-muted font-semibold uppercase tracking-widest">Verified Practice</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">"Providing Preston with a medical service that actually listens."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-secondary mb-6 tracking-tight">Our Preston Services.</h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">Full-spectrum private primary care available same-day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "Home Doctor Visits", desc: "Professional clinical assessment in the comfort of your Preston home." },
              { icon: Zap, title: "Same-Day Clinic", desc: "Private GP appointments with zero wait times and full focus." },
              { icon: ShieldCheck, title: "Drivers Medicals", desc: "D4, Taxi, and LGV medical assessments completed same-day." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4 tracking-tight">{service.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-brand-primary font-bold text-sm cursor-pointer group">
                  Learn More 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-brand-secondary relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <Activity size={400} className="text-brand-primary" />
         </div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <HeartPulse size={48} className="text-brand-primary mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-10 tracking-tight">
               "We believe in healthcare without friction. In Preston, we bring the best private medicine directly to you, combining modern technology with traditional doctor-patient trust."
            </blockquote>
            <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">— Doctor 2 U Clinical Team</p>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
            <Calendar size={14} />
            <span>Open 24/7 for Online Booking</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-secondary mb-8 tracking-tighter">Ready to see a doctor?</h2>
          <p className="text-xl text-brand-muted mb-12 leading-relaxed">
            Same-day appointments available in Preston starting from £100. <br />
            No membership required—just high-quality medical care when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => setPage('booking')}
              className="bg-brand-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3"
            >
              Book Preston Appointment
              <ArrowRight size={20} />
            </button>
            <a 
              href="https://wa.me/443333395773"
              className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3"
            >
              <MessageSquare size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
