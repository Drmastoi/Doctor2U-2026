import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { 
  ArrowRight, Phone, MessageSquare, MapPin, Star, ShieldCheck, 
  Clock, Activity, HeartPulse, Award, Stethoscope, CheckCircle2,
  Calendar, Zap, ChevronRight, Home as HomeIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PrestonLandingPage() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms for the hero section
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);
  const heroTextY = useTransform(smoothProgress, [0, 0.3], [0, -50]);
  const heroImageY = useTransform(smoothProgress, [0, 0.3], [0, 30]);
  const blob1Y = useTransform(smoothProgress, [0, 0.5], [0, -100]);
  const blob2Y = useTransform(smoothProgress, [0, 0.5], [0, 100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen pt-20 overflow-hidden">
      <SEO 
        title="Private Doctor Preston | Home Visits & Same-Day Clinic"
        description="Leading private GP service in Preston. Same-day appointments, home visits, and drivers medicals with GMC-registered doctors. Expert care without the wait."
      />
      {/* Dynamic Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-brand-secondary selection:bg-brand-primary selection:text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <motion.div 
            style={{ y: blob1Y }}
            className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            style={{ y: blob2Y }}
            className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-brand-success rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ y: heroTextY, opacity: heroOpacity }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
                <MapPin size={14} />
                <span>Private Medical Care • Preston</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Leading Private <br />
                <span className="text-brand-primary underline decoration-brand-accent/30 underline-offset-8 italic">Doctor in Preston.</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
                Expert GMC-registered healthcare brought to your door. Experience the Doctor2U difference—unhurried, professional, and patient-first medicine in the heart of Preston.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => navigate('/book')}
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
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-secondary bg-slate-800 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-brand-secondary bg-brand-primary flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-lg">
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
              style={{ scale: heroScale, y: heroImageY, opacity: heroOpacity }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-[5rem] overflow-hidden shadow-2xl shadow-brand-primary/20 transform rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[4/5] bg-slate-800 border-8 border-white/5 group">
                {/* User provided dr-awais-iqbal.jpg */}
                <img 
                  src="/dr-awais-iqbal.jpg" 
                  alt="Dr Awais Iqbal - Private Doctor Preston" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-brand-secondary via-brand-secondary/80 to-transparent pt-40">
                   <h3 className="text-3xl font-bold text-white mb-2 font-display">Dr Awais Iqbal</h3>
                   <div className="flex items-center gap-3">
                     <span className="text-brand-primary font-bold uppercase tracking-widest text-[11px] bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">Principal Doctor</span>
                     <span className="text-brand-success font-bold uppercase tracking-widest text-[11px] bg-brand-success/10 px-3 py-1 rounded-full border border-brand-success/20">GMC Verified</span>
                   </div>
                </div>
              </div>

              {/* Float Widget */}
              <motion.div 
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white/20 max-w-[260px] hidden md:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-success/10 flex items-center justify-center text-brand-success">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 leading-tight">Patient Focused</p>
                    <p className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">Preston Hub</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium italic">"Exceptional care that fits around your schedule, not the other way around."</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid with Scroll Animation */}
      <section className="py-32 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-secondary mb-8 tracking-tighter leading-none">
              Modern Care. <br />
              <span className="text-brand-primary">Built for Preston.</span>
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed">
              We've stripped away the bureaucracy of traditional healthcare. 
              Get seen today by expert professionals who actually have time to listen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: HomeIcon, 
                title: "Home Doctor Visits", 
                desc: "Full clinical assessment in the complete privacy of your Preston residence. Ideal for elderly care and busy families.",
                gradient: "from-brand-secondary to-brand-secondary/90"
              },
              { 
                icon: Zap, 
                title: "Same-Day Clinic", 
                desc: "Rapid access GP appointments at our premium Preston facility. Zero waiting times, guaranteed consultation length.",
                gradient: "from-brand-primary to-brand-primary/90"
              },
              { 
                icon: ShieldCheck, 
                title: "Drivers Medicals", 
                desc: "D4, Taxi, and LGV medical assessments completed by GMC doctors. Fast-track paperwork and eye tests included.",
                gradient: "from-brand-success to-brand-success/90"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-primary/10 transition-transform duration-500 group-hover:rotate-6`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-brand-secondary mb-5 tracking-tight group-hover:text-brand-primary transition-colors">{service.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-8 text-lg">{service.desc}</p>
                <div className="inline-flex items-center gap-3 text-brand-primary font-bold text-base group/btn">
                  Explore Service 
                  <div className="w-8 h-8 rounded-full border-2 border-brand-primary/20 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white transition-all">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote with Fixed Background Effect */}
      <section className="py-40 bg-brand-secondary relative overflow-hidden group">
         <motion.div 
           style={{ rotate: smoothProgress }}
           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
         >
            <Activity size={800} className="text-white" />
         </motion.div>
         
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <HeartPulse size={80} className="text-brand-primary mx-auto mb-12 animate-pulse" />
              <blockquote className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-12 tracking-tighter">
                "Healthcare shouldn't be a hurdle. We combine <span className="text-brand-primary">clinical excellence</span> with modern ease."
              </blockquote>
              <div className="h-1 w-24 bg-brand-primary mx-auto rounded-full mb-12"></div>
              <p className="text-brand-primary font-bold uppercase tracking-[0.3em] text-sm">Preston Clinical Leadership</p>
            </motion.div>
         </div>
      </section>

      {/* Final CTA with Reveal */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-success/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-10 border border-white/10">
                <Calendar size={14} />
                <span>Available Today</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tighter leading-none">
                Experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-success">Better Health.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
                Professional medical consultations in Preston from £100. <br className="hidden md:block" />
                No membership. No waiting lists. Just care.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-brand-primary/90 transition-all shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 active:scale-95"
                >
                  Book Preston Now
                  <ArrowRight size={24} />
                </button>
                <a 
                  href="https://wa.me/443333395773"
                  className="bg-emerald-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-900/20 flex items-center justify-center gap-3 active:scale-95"
                >
                  <MessageSquare size={24} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
