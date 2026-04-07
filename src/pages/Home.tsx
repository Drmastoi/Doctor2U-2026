import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Clock, MapPin, Star, CheckCircle2, Phone, Play, 
  Activity, Users, Award, HeartPulse, MessageSquare, ChevronDown, ChevronUp,
  Calendar, Video, Home as HomeIcon, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Page, SERVICES, FAQ, Testimonial, BlogPost } from '../types';
import Logo from '../components/Logo';

const FAQS: FAQ[] = [
  {
    question: "Do you accept private medical insurance?",
    answer: "At present, we operate on a self-pay basis to keep our pricing transparent and accessible. We can provide detailed invoices if you wish to claim back from your insurer independently."
  },
  {
    question: "How quickly can I get a prescription?",
    answer: "Prescriptions are typically issued during or immediately after your consultation. We can send them electronically to your preferred local pharmacy for same-day collection."
  },
  {
    question: "What areas do you cover for home visits?",
    answer: "We cover the majority of Lancashire and Greater Manchester, including Preston, Blackburn, Bolton, Wigan, and surrounding areas. Contact us if you're unsure if we cover your location."
  },
  {
    question: "Are your doctors GMC registered?",
    answer: "Yes, all our clinicians are fully GMC registered, licensed to practice in the UK, and have extensive experience in both NHS and private practice."
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Thompson",
    location: "Manchester",
    quote: "The most professional and unhurried medical experience I've had. Dr. Iqbal took the time to listen and explain everything clearly. Highly recommended.",
    rating: 5
  },
  {
    name: "James Wilson",
    location: "Preston",
    quote: "Booking was seamless, and the home visit was exactly what I needed. Professional, discrete, and very reassuring. A gold standard service.",
    rating: 5
  },
  {
    name: "Emma Roberts",
    location: "Blackburn",
    quote: "Excellent online consultation. It saved me so much time and the follow-up was fantastic. Truly healthcare redefined for the modern age.",
    rating: 5
  }
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Benefits of Regular Health Screenings",
    excerpt: "Why proactive health checks are the key to long-term wellness and early detection of potential issues.",
    date: "April 12, 2026",
    image: "https://images.unsplash.com/photo-1505751172107-5739a00723a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    title: "Managing Stress in a Fast-Paced World",
    excerpt: "Practical medical advice and lifestyle changes to help manage daily stress and improve mental clarity.",
    date: "April 5, 2026",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    title: "Understanding Private Referrals",
    excerpt: "How our private referral system works and how it can speed up your access to specialist treatments.",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
  }
];

interface HomeProps {
  setPage: (page: Page) => void;
}

export default function Home({ setPage }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const nextTestimonial = () => setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="flex flex-col relative overflow-hidden bg-white">
      {/* Background Blobs for Modern Feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-medical-100/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[130px] animate-blob [animation-delay:4s]"></div>
      </div>

      {/* Hero Section - Clean Modern Light Theme */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span className="uppercase tracking-widest">your Home , Your time , Your Doctor</span>
              </motion.div>
              
              <h1 className="text-[60px] md:text-[72px] xl:text-[84px] font-display font-bold leading-[1.05] mb-8 text-slate-900 tracking-tighter">
                Private Doctor Care <br />
                <span className="text-teal-700">At Your Convenience.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 tracking-tight">
                Premium medical consultations in Lancashire & Manchester. Whether online, in-clinic, or a home visit, we bring expert healthcare to you on your terms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPage('booking')}
                  className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Book Appointment
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 text-slate-900 font-bold text-lg group"
                >
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all">
                    <Play size={20} fill="currentColor" className="text-teal-600" />
                  </div>
                  Watch how it works
                </motion.button>
              </div>

              <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-slate-900">100%</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Transparent Fees</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-slate-900">24/7</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Care Available</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-slate-900">4.9/5</span>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Patient Rating</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="relative z-10 rounded-tl-[120px] rounded-br-[120px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border-[1px] border-slate-100 shadow-2xl shadow-teal-900/10">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000" 
                  alt="Doctor providing home care to a patient" 
                  className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              {/* Floating elements with Glassmorphism */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-12 bg-white/80 backdrop-blur-xl p-6 rounded-3xl z-20 border border-white/40 shadow-2xl shadow-teal-900/10"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-teal-700 p-3 rounded-2xl text-white shadow-lg shadow-teal-700/20">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Professional Care</p>
                    <p className="text-lg font-display font-bold text-slate-900">Certified Excellence</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 -right-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl z-20 border border-white/40 shadow-2xl shadow-teal-900/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">500+ Happy Patients</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">NHS PARTNER</span>
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">GMC REGISTERED</span>
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">BMA MEMBER</span>
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">ICO CERTIFIED</span>
          </div>
        </div>
      </section>

      {/* Innovation / Why Choose Us Section - Inspired by the split layout */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                  Innovation in <br />
                  <span className="text-teal-700">Personalised Care.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We combine traditional medical values with modern convenience. No more waiting weeks for an appointment. Doctor2U brings the clinic to you, or connects you instantly online.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: <Clock className="text-teal-600" />, title: 'Same Day Appointments', desc: 'Book and be seen within hours, not weeks.' },
                    { icon: <Users className="text-teal-600" />, title: 'Expert Clinicians', desc: 'Consult with highly experienced private doctors.' },
                    { icon: <ShieldCheck className="text-teal-600" />, title: 'Absolute Privacy', desc: 'Discrete, confidential, and professional service.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="innovation-card aspect-square flex flex-col justify-end p-8 group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-medical-900 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                  alt="Technology" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative z-20">
                  <Activity className="text-medical-400 mb-4" />
                  <h3 className="text-xl font-bold text-white">Modern Tech</h3>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="innovation-card aspect-square flex flex-col justify-end p-8 group mt-12"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-medical-900 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1505751172107-5739a00723a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Care" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative z-20">
                  <HeartPulse className="text-medical-400 mb-4" />
                  <h3 className="text-xl font-bold text-white">Patient First</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Refined Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setPage('services')}
                className={`group relative rounded-[2.5rem] p-10 transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 ${
                  idx === 0 ? 'md:col-span-2 bg-teal-700 text-white border-teal-600' : 'bg-slate-50 hover:bg-white text-slate-900'
                }`}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 ${
                    idx === 0 ? 'bg-white/10 text-white group-hover:bg-white group-hover:text-teal-700' : 'bg-white text-teal-700 group-hover:bg-teal-700 group-hover:text-white'
                  }`}>
                    {service.id === 'online' && <Activity size={32} />}
                    {service.id === 'face-to-face' && <Users size={32} />}
                    {service.id === 'home-visit' && <MapPin size={32} />}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                  <p className={`mb-10 leading-relaxed ${idx === 0 ? 'text-teal-50' : 'text-slate-500'}`}>{service.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className={`text-2xl font-bold ${idx === 0 ? 'text-white' : 'text-teal-700'}`}>{service.price}</span>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      idx === 0 ? 'bg-white text-teal-700 group-hover:scale-110' : 'bg-white text-slate-900 group-hover:bg-teal-700 group-hover:text-white group-hover:scale-110'
                    }`}>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
                {idx !== 0 && <div className="absolute top-0 right-0 w-32 h-32 bg-teal-700/5 rounded-bl-[100px] -z-0 group-hover:bg-teal-700/10 transition-all"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Services - Clean & Professional */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Specialist Medical Services</h2>
              <p className="text-lg text-slate-400">Comprehensive assessments and expert consultations for every stage of life.</p>
            </div>
            <button 
              onClick={() => setPage('booking')}
              className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-all shadow-lg shadow-teal-900/20"
            >
              View All Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Accident & Injury Claims', 'Drivers Medicals', 'Health Screening (MOT)', 
              'Life Insurance Medicals', 'Medical Assessments', 'Chronic Disease Management', 
              'Care Home Visits', 'Children\'s Health Checks', 'Private Referrals', 
              'Private Scan Booking', 'Specialist Consultations', 'Home Visits'
            ].map((title, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
                onClick={() => setPage('booking')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-medical-500 group-hover:scale-150 transition-transform"></div>
                  <span className="font-medium group-hover:text-medical-400 transition-colors">{title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-medical-100/40 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
            >
              <Activity size={12} />
              <span>Simple Process</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-slate-900">
              How It <span className="text-teal-700">Works</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your journey to better health is simple, secure, and completely tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0"></div>

            {[
              { icon: Calendar, title: "1. Book", desc: "Select your service and preferred time through our secure portal." },
              { icon: Video, title: "2. Consult", desc: "Speak with Dr. Iqbal via video link, in-clinic, or at your home." },
              { icon: HeartPulse, title: "3. Recover", desc: "Receive your treatment plan, prescriptions, or referrals instantly." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center text-teal-600 mb-8 group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-500 shadow-xl shadow-teal-900/5">
                  <step.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                  What Our <br />
                  <span className="text-teal-700">Patients Say.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We pride ourselves on providing a level of care that exceeds expectations. Read about the experiences of those who trust us with their health.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-700 hover:text-white hover:border-teal-700 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-700 hover:text-white hover:border-teal-700 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 relative overflow-hidden min-h-[400px] flex flex-col justify-center shadow-sm border border-slate-100">
                <div className="absolute top-10 right-10 opacity-10">
                  <MessageSquare size={120} className="text-teal-100" />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-1 text-yellow-400 mb-8">
                      {[...Array(TESTIMONIALS[testimonialIdx].rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-2xl font-display font-medium text-slate-900 mb-8 leading-relaxed italic">
                      "{TESTIMONIALS[testimonialIdx].quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{TESTIMONIALS[testimonialIdx].name}</h4>
                      <p className="text-teal-700 font-medium">{TESTIMONIALS[testimonialIdx].location}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Health Insights Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Health <span className="text-teal-700">Insights</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">Expert medical advice and the latest news from the world of private healthcare.</p>
            </div>
            <button className="text-teal-700 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              View All Articles
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-teal-700">
                    {post.date}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Common <span className="text-teal-700">Questions</span></h2>
            <p className="text-lg text-slate-600">Everything you need to know about our private medical services.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-slate-100 rounded-3xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between p-8 text-left transition-all ${activeFaq === i ? 'bg-teal-50' : 'bg-white hover:bg-slate-50'}`}
                >
                  <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-teal-700 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 bg-medical-50 text-slate-600 leading-relaxed text-lg border-t border-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000" 
                    alt="Community Care" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-medium text-slate-700 italic">"The gold standard for private healthcare in the North West."</p>
                  <p className="mt-4 font-bold text-slate-900">Michael T., Lancashire</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Serving Lancashire & Manchester</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We provide expert medical care across the entire North West region. Whether you're in the heart of Manchester or the quiet corners of Lancashire, our doctors are ready to help.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {['Manchester', 'Preston', 'Blackburn', 'Bolton', 'Lancaster', 'Chorley', 'Wigan', 'Burnley'].map(area => (
                  <div key={area} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <CheckCircle2 size={18} className="text-teal-700" />
                    {area}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setPage('contact')}
                className="text-teal-700 font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all"
              >
                Check your area <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - High Impact */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-medical-900 p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
                alt="Medical Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-medical-900/80"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
                Your Health, <br />
                <span className="text-medical-400">Our Priority.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Join the hundreds of patients who trust Doctor2U for their private medical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('booking')}
                  className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto"
                >
                  Book Appointment
                </motion.button>
                <a 
                  href="tel:07488879077"
                  className="flex items-center gap-4 text-2xl font-bold text-white hover:text-teal-400 transition-colors"
                >
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md">
                    <Phone size={28} />
                  </div>
                  07488 879077
                </a>
              </div>
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://wa.me/443333395773" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-white transition-colors font-bold"
                >
                  <MessageSquare size={20} />
                  WhatsApp: 03333395773
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

