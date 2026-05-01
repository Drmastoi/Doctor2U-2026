import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Clock, MapPin, Star, CheckCircle2, Phone, Play, 
  Activity, Users, Award, HeartPulse, MessageSquare, ChevronDown, ChevronUp,
  Calendar, Video, Home as HomeIcon, ChevronLeft, ChevronRight,
  ShieldAlert, Brain, Sparkles, ClipboardList, Stethoscope, Check
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Page, SERVICES, FAQ, Testimonial, BlogPost } from '../types';
import Logo from '../components/Logo';
import HubLink from '../components/HubLink';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

import SEO from '../components/SEO';

const FAQS: FAQ[] = [
  {
    question: "Do you see children?",
    answer: "Yes, we provide medical consultations for children of all ages. All practitioners are experienced in paediatric care and we offer a comfortable environment for younger patients."
  },
  {
    question: "Can you see my NHS records?",
    answer: "Private doctors do not have direct access to your NHS GP records. We recommend bringing any relevant medical history, recent test results, or current medication lists to your consultation."
  },
  {
    question: "Do you share information with my NHS GP?",
    answer: "With your consent, we can share a summary of your consultation and any treatment plans with your regular NHS GP to ensure continuity of care. This is entirely optional."
  },
  {
    question: "Do you accept private medical insurance?",
    answer: "At present, we operate on a self-pay basis to keep our pricing transparent and accessible. We can provide detailed invoices if you wish to claim back from your insurer independently."
  },
  {
    question: "How quickly can I get a prescription?",
    answer: "Prescriptions are typically issued during or immediately after your consultation. We can send them electronically to your preferred local pharmacy for same-day collection."
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Raza",
    location: "Manchester - City Centre",
    quote: "I needed a private doctor in Manchester fast. I used the AI tool first which helped me organise my symptoms, and the consultation was seamless. Highly recommend.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    location: "Preston - Home Visit",
    quote: "Finding a home visit doctor in Preston is usually impossible. Doctor2U arrived within 3 hours, and the doctor was thorough and very professional.",
    rating: 5
  },
  {
    name: "Emma Roberts",
    location: "Blackburn - Clinic",
    quote: "Used the AI analysis before my appointment in Blackburn. It felt like the doctor already understood my symptoms. Efficient and modern healthcare.",
    rating: 5
  }
];

const BLOG_POSTS = [
  {
    id: '1',
    title: "Accessing a Private Doctor in Manchester",
    excerpt: "Why residents are choosing Private Doctor services in Manchester for same-day prescriptions and unhurried clinical time.",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1505751172107-5739a00723a5?auto=format&fit=crop&q=80&w=800",
    link: '/private-doctor/manchester'
  },
  {
    id: '2',
    title: "Home Visit Doctors: The Best Choice for Lancashire",
    excerpt: "The rise of home-based medical care across Preston and Blackburn. Find out why a Home Visit Doctor in Lancashire might be right for you.",
    date: "April 8, 2026",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    link: '/home-visit-doctor/manchester'
  },
  {
    id: '3',
    title: "Booking a Private Doctor in Preston",
    excerpt: "Fast-track your health with a Private Doctor in Preston. Avoiding the 2-week wait for an appointment and getting results in 48 hours.",
    date: "April 2, 2026",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
    link: '/pgp-preston'
  },
  {
    id: '4',
    title: "Drivers Medicals in Manchester: What to Bring",
    excerpt: "Preparing for your HGV or Taxi medical in Manchester. A complete list of forms, vision tests, and requirements.",
    date: "March 25, 2026",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
    link: '/services/drivers-medicals'
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const getPath = (id: string) => {
    const paths: Record<string, string> = {
      'home': '/',
      'services': '/services',
      'contact': '/contact',
      'booking': '/book',
      'innovation': '/innovation',
      'privacy': '/privacy',
      'about-us': '/about-us',
      'our-doctors': '/our-doctors',
      'clinical-governance': '/clinical-governance',
      'urgent-childrens-doctor-manchester': '/urgent-childrens-doctor-manchester',
      'emergency-uti-treatment-manchester': '/emergency-uti-treatment-manchester',
      'elderly-care-home-visit-manchester': '/elderly-care-home-visit-manchester',
      'chest-infection-home-visit-manchester': '/chest-infection-home-visit-manchester',
      'back-pain-home-visit-manchester': '/back-pain-home-visit-manchester',
      'doctor-home-visit-manchester': '/doctor-home-visit-manchester',
      'same-day-doctor-manchester': '/same-day-doctor-manchester',
      'urgent-doctor-manchester': '/urgent-doctor-manchester',
      'pgp-manchester': '/private-doctor/manchester',
      'pgp-preston': '/pgp-preston',
      'pgp-blackburn': '/pgp-blackburn',
      'hvd-manchester': '/home-visit-doctor/manchester',
      'hvd-lancashire': '/home-visit-doctor/lancashire',
      'out-of-hours-doctor-manchester': '/out-of-hours-doctor-manchester',
      'doctor-nursing-home-manchester': '/doctor-nursing-home-manchester',
      'service-private-gp': '/services/private-gp',
      'service-home-visit': '/services/home-visit',
      'service-drivers-medicals': '/services/drivers-medicals',
      'service-health-screening': '/services/health-screening',
      'service-childrens-health': '/services/childrens-health',
      'service-accident-injury': '/services/accident-injury',
      'service-life-insurance': '/services/life-insurance',
      'service-chronic-care': '/services/chronic-care',
      'service-referrals': '/services/referrals',
      'treatment-plan': '/treatment-plan'
    };
    return paths[id] || '/';
  };
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
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 1.1]);
  const heroTextY = useTransform(smoothProgress, [0, 0.25], [0, -60]);
  const heroImageY = useTransform(smoothProgress, [0, 0.25], [0, 40]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const blob1Y = useTransform(smoothProgress, [0, 0.4], [0, -120]);
  const blob2Y = useTransform(smoothProgress, [0, 0.4], [0, 120]);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const nextTestimonial = () => setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div ref={containerRef} className="flex flex-col relative overflow-hidden bg-white">
      <SEO 
        title="Private GP Lancashire & Manchester | Same-Day Doctor Home Visits" 
        description="Book a GMC-registered private doctor for a same-day home visit in Manchester and across Lancashire. Expert clinical care and private GP services in the comfort of your own home."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-100 py-2 px-4 relative z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-center gap-3 text-amber-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-center text-wrap lg:text-nowrap">
          <ShieldAlert size={12} className="shrink-0" />
          <span>Important: AI analysis does not diagnose, treat, or replace professional medical advice. Call 07488 879077 for bookings.</span>
        </div>
      </div>

      {/* Background Blobs for Modern Feel with Parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[130px] animate-blob"
        ></motion.div>
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute top-[25%] left-[-15%] w-[500px] h-[500px] bg-medical-100/20 rounded-full blur-[110px] animate-blob [animation-delay:2s]"
        ></motion.div>
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute bottom-[20%] right-[15%] w-[700px] h-[700px] bg-teal-50/40 rounded-full blur-[140px] animate-blob [animation-delay:4s]"
        ></motion.div>
      </div>

      {/* Hero Section - Clean Modern Light Theme with Parallax */}
      <section className="relative min-h-[75vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
            <motion.div 
              style={{ y: heroTextY, opacity: heroOpacity }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest">Manchester, Preston & Lancashire Docs: Available within 2 hours</span>
                </div>
              </div>

              <h1 className="text-[45px] md:text-[72px] font-display font-bold leading-[1.1] mb-5 text-slate-900 tracking-tighter uppercase">
                PRIVATE GP <br />
                <span className="text-teal-700 italic">PRESTON, LANCASHIRE & MANCHESTER</span>
              </h1>

              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[12px] font-bold mb-8 tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span>Home Visit Doctors • Same-Day Appointments</span>
              </div>
              
              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-teal-500 pl-6 py-2">
                  <p className="text-[20px] md:text-[28px] text-slate-800 leading-tight max-w-2xl mx-auto lg:mx-0 font-bold tracking-tight mb-3">
                    Expert clinical care delivered to your door.
                  </p>
                  <p className="text-lg md:text-xl text-slate-600 font-medium">
                    Call <a href="tel:07488879077" className="text-teal-700 font-bold hover:underline tabular-nums underline-offset-4 decoration-2">07488 879077</a> for same-day private GP bookings.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span className="text-[13px] font-bold text-slate-700 uppercase tracking-[0.1em]">Private GP Lancashire</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span className="text-[13px] font-bold text-slate-700 uppercase tracking-[0.1em]">Private GP Manchester</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/book')}
                  className="bg-teal-700 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center justify-center gap-4 w-full sm:w-auto active:scale-95"
                >
                  Book Appointment Now
                  <ArrowRight size={24} />
                </motion.button>
                
                <a 
                  href="tel:07488879077"
                  className="flex items-center gap-4 text-slate-900 font-bold text-xl group px-6 py-4"
                >
                  <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
                    <Phone size={24} className="text-teal-600" />
                  </div>
                  Call 07488 879077
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={{ scale: heroScale, y: heroImageY, opacity: heroOpacity }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[5rem] overflow-hidden border border-white/50 shadow-[0_50px_100px_-20px_rgba(13,71,161,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000" 
                  alt="Doctor providing home care" 
                  className="w-full h-[700px] object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pt-40">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold opacity-80 uppercase tracking-widest leading-none mb-1">Clinic & Home</p>
                      <h4 className="text-2xl font-bold tracking-tight">Personalised Assessment</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements with Parallax-Aware Motion */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-12 bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] z-20 border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-5">
                  <div className="bg-teal-700 w-16 h-16 rounded-[1.25rem] text-white shadow-xl shadow-teal-700/30 flex items-center justify-center">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] mb-1">GMC Registered</p>
                    <p className="text-xl font-display font-bold text-slate-900 tracking-tight leading-none">Quality Certified</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 -right-12 bg-white/90 backdrop-blur-2xl p-6 rounded-[2rem] z-20 border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+15}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block leading-tight">Trusted Care</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">500+ Patients</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Home Visit Benefits CTA */}
      <section className="py-12 bg-teal-50/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-teal-100 shadow-2xl shadow-teal-900/10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[100px] -z-0 opacity-50"></div>
            
            <div className="flex-1 relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1 rounded-full text-[10px] font-bold mb-4 tracking-[0.2em] uppercase">
                <HomeIcon size={14} />
                <span>The Home Visit Advantage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 tracking-tight text-slate-900 leading-tight">
                Private Doctor Home Visits: <br />
                <span className="text-teal-700">Medical Care in Comfort.</span>
              </h2>
              <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Experience the gold standard of private medical care in Manchester and Lancashire. Our home visits eliminate the stress of travel, providing unhurried clinical time in the privacy of your own home.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
                {[
                  "No travel or waiting rooms required",
                  "Comprehensive physical examination",
                  "Same-day visits often available",
                  "GMC-registered expert doctors",
                  "Prescriptions delivered to your door",
                  "Manchester & Lancashire coverage"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-teal-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/book')}
                className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Book a Home Visit Now
                <ArrowRight size={20} />
              </motion.button>
            </div>
            
            <div className="flex-1 w-full lg:w-auto relative group">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
                  alt="Doctor at home visit"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px] hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-amber-400 fill-amber-400" size={16} />
                  <span className="text-sm font-bold text-slate-900">Rated Excellent</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">"The most convenient doctor visit I've ever had. Truly exceptional care." - Sarah, Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience Statistics */}
      <section className="py-10 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              { label: 'Avg. Response Time', value: '2 Hours' },
              { label: 'Patient Satisfaction', value: '99%' },
              { label: 'GMC Clinicians', value: '100%' },
              { label: 'North West Coverage', value: 'Local' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-display font-bold text-teal-400 mb-1">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-teal-100/50 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens After I Book Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">What Happens <span className="text-teal-700">After I Book?</span></h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">Providing reassurance and clarity from the moment you schedule your appointment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Immediate Confirmation", desc: "You'll receive an instant confirmation email and SMS with all the details of your booking." },
              { title: "Secure Video Link", desc: "For online consultations, a secure, encrypted video link is sent 10 minutes before your start time." },
              { title: "Clinical Discussion", desc: "Spend a full 30 minutes with our GMC doctor discussing your concerns in depth." },
              { title: "Follow-Up Support", desc: "Receive your treatment plan, prescription, and any necessary specialist referrals immediately after." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-700 group-hover:text-white transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-center">
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">NHS-EXPERIENCED DOCTORS</span>
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">GMC REGISTERED</span>
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">BMA MEMBER</span>
            <span className="text-xl font-display font-bold text-slate-900 tracking-tighter">ICO CERTIFIED</span>
          </div>
        </div>
      </section>

      {/* New Interactive AI Assessment Feature - HIGH PROMINENCE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-1.5 rounded-full text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
                  <Brain size={14} />
                  <span>AI Symptoms to Suggestions</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.95]">
                  AI-Powered <br />
                  <span className="text-teal-400">Health Analysis (Free)</span>
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                  Input your symptoms to receive instant medical insights. Our AI prepares a detailed summary for your doctor, ensuring a more focused and effective consultation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: MessageSquare, title: "Natural Language", desc: "Describe concerns in your own words" },
                    { icon: Brain, title: "Clinical Insights", desc: "Structured summaries for your GP" },
                    { icon: Clock, title: "Instant Analysis", desc: "Results ready in under 30 seconds" },
                    { icon: ShieldCheck, title: "Secure & Private", desc: "Your medical data stays encrypted" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/ai-health-insights')}
                    className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-500 transition-all shadow-xl shadow-teal-900/40 flex items-center justify-center gap-3 group"
                  >
                    Launch AI Assessment
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/innovation')}
                    className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                  >
                    Learn our Tech
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm p-12 flex flex-col items-center justify-center text-center min-h-[450px]">
                  <div className="w-24 h-24 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 mx-auto mb-8 animate-pulse shadow-[0_0_50px_rgba(20,184,166,0.2)]">
                    <Brain size={48} />
                  </div>
                  <div className="space-y-4 max-w-sm">
                    <div className="h-2 w-32 bg-teal-500/20 rounded-full mx-auto"></div>
                    <div className="h-2 w-48 bg-white/10 rounded-full mx-auto"></div>
                    <div className="h-2 w-40 bg-white/5 rounded-full mx-auto"></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mt-12 mb-4 tracking-tight">Experience Smarter Care</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Used by hundreds of patients to streamline their diagnosis and get faster treatments.
                  </p>
                  <div className="flex -space-x-4 mb-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-800 overflow-hidden shadow-lg">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Highly Rated by Patients</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Journey Section: How It Works */}
      <section id="how-it-works" className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-medical-100/40 rounded-full blur-[120px]"></div>
        </div>
 
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-700 px-4 py-1 rounded-full text-[10px] font-bold mb-4 tracking-[0.2em] uppercase"
            >
              <Activity size={12} />
              <span>The Journey</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-slate-900">
              How It <span className="text-teal-700">Works</span>
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              We've refined private healthcare to be as efficient and empathetic as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 hidden md:block"></div>
            
            {[
              { 
                icon: ClipboardList, 
                title: "1. AI health insights", 
                desc: "Prepare for your appointment with our standalone AI Health Tool for structured insights.",
                link: "/ai-health-insights",
                linkText: "Launch Tool"
              },
              { 
                icon: Stethoscope, 
                title: "2. Personalised Consultation", 
                desc: "Book a private consultation at your home, in-clinic, or online with a GMC-registered doctor.",
                link: "/book",
                linkText: "Book Now"
              },
              { 
                icon: HeartPulse, 
                title: "3. Treatment & Plan", 
                desc: "Receive your expert treatment plan, prescriptions, and specialist referrals immediately.",
                link: "/treatment-plan",
                linkText: "View Example"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft group hover:translate-y-[-8px] transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{step.desc}</p>
                <Link 
                  to={step.link}
                  className="mt-auto inline-flex items-center gap-2 text-teal-700 font-bold text-sm hover:gap-3 transition-all"
                >
                  {step.linkText}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-slate-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Patient Benefits & Standards</span>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4">
                {['GMC Registered Doctors', 'Same-day Prescriptions', 'Private Referrals'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-slate-600 font-bold uppercase tracking-widest group">
                    <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-125 transition-transform"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Your Doctor Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Meet Your <span className="text-teal-700">Doctors</span></h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:shadow-xl transition-all">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-md">
                    <img src="https://i.pravatar.cc/150?u=doc1" alt="Dr. Ahmed Iqbal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Ahmed Iqbal</h3>
                    <p className="text-teal-700 font-bold text-xs mb-3 uppercase tracking-widest">GMC Number: 7041470</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">Expert General Practitioner with extensive experience in both NHS and private practice. Specialising in preventative medicine and health screenings.</p>
                    <div className="flex flex-wrap gap-2">
                      {['MBBS', 'MRCGP', 'MRCS'].map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-white border border-slate-200 rounded-full text-[9px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-teal-700 p-6 rounded-[2rem] text-white shadow-xl shadow-teal-900/20">
                <ShieldCheck size={36} className="mb-4 text-teal-400" />
                <h4 className="text-lg font-bold mb-3">GMC Registered</h4>
                <p className="text-teal-100/70 text-xs leading-relaxed">All our clinicians are fully licensed to practice in the UK and adhere to the highest clinical standards set by the General Medical Council.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-[2rem] text-white shadow-xl">
                <Award size={36} className="mb-4 text-teal-400" />
                <h4 className="text-lg font-bold mb-3">500+ Reviews</h4>
                <p className="text-teal-100/70 text-xs leading-relaxed">Our patients consistently rate us 4.9/5 for professional care, convenience, and thoroughness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                  What Our <br />
                  <span className="text-teal-700">Patients Say.</span>
                </h2>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  We pride ourselves on providing a level of care that exceeds expectations. Read about the experiences of those who trust us with their health.
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-700 hover:text-white hover:border-teal-700 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-700 hover:text-white hover:border-teal-700 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[350px] flex flex-col justify-center shadow-sm border border-slate-100">
                <div className="absolute top-8 right-8 opacity-5">
                  <MessageSquare size={100} className="text-teal-100" />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIdx}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-1 text-yellow-400 mb-6">
                      {[...Array(TESTIMONIALS[testimonialIdx].rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl font-display font-medium text-slate-900 mb-6 leading-relaxed italic">
                      "{TESTIMONIALS[testimonialIdx].quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{TESTIMONIALS[testimonialIdx].name}</h4>
                      <p className="text-teal-700 text-sm font-medium">{TESTIMONIALS[testimonialIdx].location}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Medical Insights Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2 tracking-tight">Medical <span className="text-teal-700">Insights</span></h2>
              <p className="text-sm text-slate-600 leading-relaxed">Expert medical advice and the latest news from the world of private healthcare.</p>
            </div>
            <button className="text-teal-700 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all group">
              View All Articles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <motion.div 
                key={post.id}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(getPath(post.link))}
                className={`bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-lg transition-all duration-500 ${post.link ? 'hover:border-teal-200' : ''}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-teal-700">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-xs">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 tracking-tighter">Who Doctor2U Is For</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 tracking-tight">Unexplained Symptoms</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">People with ongoing or unexplained symptoms looking for root-cause analysis. Our doctors provide unhurried clinical time to thoroughly investigate your concerns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight">Busy Professionals</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">People seeking fast access to medical care while juggling a hectic schedule. Get expert medical support and same-day prescriptions at a time that works for you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight">Worried Parents</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Parents needing reassurance and professional advice for their child's health. Our GMC-registered doctors provide comprehensive paediatric reviews in the comfort of your home.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight">Ongoing Conditions</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Those managing long-term health issues. Receive dedicated chronic disease management and personalised treatment plans from a consistent medical team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem]">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Comprehensive Medical Care</h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Whether you need a one-off consultation or ongoing management, our doctors provide full medical support including:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Private Prescriptions",
                  "Specialist Referral Letters",
                  "Blood Test & Scan Bookings",
                  "Chronic Disease Management",
                  "Personalised Treatment Plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/treatment-plan')}
                  className="flex-1 bg-white text-slate-900 border border-slate-200 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm text-sm"
                >
                  Sample Health Plan
                </button>
                <button 
                  onClick={() => navigate('/book')}
                  className="flex-1 bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg text-sm transition-all"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Strip Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {[
              { name: 'General Medical Council', desc: 'Fully Licensed Practicioners' },
              { name: 'British Medical Association', desc: 'Professional Representation' },
              { name: 'Information Commissioner\'s Office', desc: 'Secure Data Handling (ICO)' },
              { name: 'General Practice Excellence', desc: 'UK Medical Standards' }
            ].map((acc, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-[10px] border border-slate-200">
                  {acc.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs tracking-tight">{acc.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{acc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories Section - Trust & Reputation */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Patient <span className="text-teal-700">Stories</span></h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Why patients choose Doctor2U for their private doctor and home visit needs across the North West.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div className="flex gap-1 text-teal-600 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"The home visit in <span className="font-bold">Preston</span> was a lifesaver. My daughter was unwell and we couldn't get an NHS slot. The doctor was here within 2 hours."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="font-bold text-slate-900">Sarah J.</p>
                  <p className="text-xs text-slate-400">Preston - Home Visit</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div className="flex gap-1 text-teal-600 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"Excellent private doctor in <span className="font-bold">Manchester</span>. Used the AI tool to list my symptoms, and the consultation focused exactly on what mattered."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="font-bold text-slate-900">Ahmed R.</p>
                  <p className="text-xs text-slate-400">Manchester - Clinic</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div className="flex gap-1 text-teal-600 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"Professional and fast. Had my drivers medical in <span className="font-bold">Blackburn</span> and the form was completed same-day. Highly efficient."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="font-bold text-slate-900">Mark T.</p>
                  <p className="text-xs text-slate-400">Blackburn - Drivers Medical</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium">Trusted by over 500+ patients across <span className="text-teal-700">Manchester & Lancashire</span></p>
          </div>
        </div>
      </section>

      {/* Areas We Cover Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <div className="text-left mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Private Doctor <span className="text-teal-700">Manchester & Lancashire</span></h2>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Providing private doctor and home visit services across all major boroughs. Our clinicians are local to your community, ensuring fast and reliable care.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'Manchester', text: 'Comprehensive private doctor services across Central and Greater Manchester.', page: 'pgp-manchester' as Page },
                  { name: 'Preston', text: 'Fast access to private doctor consultations and home visits in the Preston area.', page: 'pgp-preston' as Page },
                  { name: 'Blackburn', text: 'Expert clinical care delivered at your home or in-clinic for Blackburn residents.', page: 'pgp-blackburn' as Page },
                  { name: 'Home Visits Manchester', text: 'Our doctors visit you at home across the entire city and surrounding areas.', page: 'hvd-manchester' as Page },
                  { name: 'Home Visits Lancashire', text: 'Dedicated home-based medical care for patients throughout Lancashire.', page: 'hvd-lancashire' as Page },
                  { name: 'Bolton', text: 'Flexible medical support and professional assessments for the Bolton community.' },
                  { name: 'Lancaster', text: 'Dedicated private medical consultations available throughout Lancaster.' },
                  { name: 'Chorley', text: 'Quality private healthcare and same-day home visits in Chorley.' },
                  { name: 'Wigan', text: 'Reliable private doctor services and drivers medicals available in Wigan.' },
                  { name: 'Burnley', text: 'Unhurried medical consultations for individuals and families in Burnley.' }
                ].map((area, i) => (
                  <div 
                    key={i} 
                    onClick={() => navigate(getPath(area.page as string))}
                    className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${area.page ? 'cursor-pointer hover:border-teal-200' : ''}`}
                  >
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-teal-600" />
                        {area.name}
                      </div>
                      {area.page && <ArrowRight size={14} className="text-teal-200 group-hover:text-teal-600" />}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{area.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl sticky top-32">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Leave a Review</h3>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                  Your feedback helps us maintain the highest standards of care. If you've used our service, please share your experience.
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Suggested Template</p>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      "Professional and unhurried consultation with Dr [Name]. The booking process was seamless and the [Home Visit/Clinic] appointment provided exactly the care I was looking for. Highly recommended for private healthcare in [Your Area]."
                    </p>
                  </div>
                  
                  <button className="w-full bg-teal-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center justify-center gap-2">
                    Review on Google
                    <ArrowRight size={18} />
                  </button>
                  
                  <p className="text-[10px] text-center text-slate-400 font-medium">Verified patient reviews only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Standards & GMC Trust Section */}
      <section className="py-16 bg-white relative z-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-50 rounded-full blur-[100px] opacity-60"></div>
            
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-3 bg-white text-teal-700 px-5 py-1.5 rounded-full text-[10px] font-bold mb-6 shadow-sm border border-teal-50 tracking-widest uppercase">
                <ShieldCheck size={16} />
                Regulated Excellence
              </div>
              <h2 className="text-3xl md:text-[44px] font-display font-bold text-slate-900 mb-6 tracking-tighter leading-none">
                Clinically Governed. <br />
                <span className="text-teal-700 italic">Patient Focused.</span>
              </h2>
              <div className="space-y-4 text-left">
                {[
                  { title: "GMC Registered Practitioners", desc: "Every doctor at Doctor2U is fully licensed by the General Medical Council and completes annual appraisals." },
                  { title: "Data Protection Certified", desc: "We are registered with the Information Commissioner's Office (ICO) and use clinical-grade encryption." },
                  { title: "Standard of Care (GMC)", desc: "Our consultations and treatment plans strictly adhere to the GMC's Good Medical Practice guidelines." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-teal-600 shadow-sm border border-slate-100 group-hover:bg-teal-700 group-hover:text-white transition-all shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg md:max-w-none">
              <div className="bg-white p-10 rounded-[3rem] shadow-soft-xl border border-slate-100 text-center relative group">
                <div className="w-24 h-24 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Award size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality Medical Practice</h3>
                <p className="text-slate-500 mb-10 leading-relaxed max-w-sm mx-auto">We maintain the highest standards of private medical practice in the UK, ensuring every patient receives safe, evidence-based care.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/clinical-governance" className="inline-flex items-center gap-3 text-teal-700 font-bold hover:gap-5 transition-all text-sm uppercase tracking-widest">
                    Governance Standards
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Common <span className="text-teal-700">Questions</span></h2>
            <p className="text-base text-slate-600">Everything you need to know about our private medical services.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div 
                key={i}
                className="border border-slate-100 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-all ${activeFaq === i ? 'bg-teal-50' : 'bg-white hover:bg-slate-50'}`}
                >
                  <span className="text-base font-bold text-slate-900">{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-teal-700 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 bg-medical-50 text-slate-600 leading-relaxed text-base border-t border-white/50">
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

      {/* CTA Section - High Impact */}
      <section className="py-16 px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-medical-900 p-10 md:p-16 text-center">
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Your Health, <br />
                <span className="text-medical-400">Our Priority.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                Join the hundreds of patients who trust Doctor2U for their private medical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/book')}
                  className="bg-teal-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto"
                >
                  Book Appointment
                </motion.button>
                <a 
                  href="tel:07488879077"
                  className="flex items-center gap-3 text-xl font-bold text-white hover:text-teal-400 transition-colors"
                >
                  <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-md">
                    <Phone size={24} />
                  </div>
                  07488 879077
                </a>
              </div>
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://wa.me/443333395773" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-white transition-colors font-bold text-sm"
                >
                  <MessageSquare size={18} />
                  WhatsApp: 03333395773
                </a>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="text-slate-400 text-[9px] uppercase tracking-[0.3em] font-bold max-w-2xl mx-auto leading-relaxed">
                  Doctor2U is a registered private medical service providing expert clinical care. All medical decisions, prescriptions, and referrals are made solely by GMC-registered clinicians during your consultation.
                </p>
              </div>
            </div>
          </div>
        <HubLink index={0} />
          
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <button onClick={() => navigate('/services/private-gp-manchester')} className="hover:text-teal-600 transition-colors">Manchester Private GP</button>
            <button onClick={() => navigate('/services/private-gp-preston')} className="hover:text-teal-600 transition-colors">Preston Doctor House Calls</button>
            <button onClick={() => navigate('/services/adhd-assessment')} className="hover:text-teal-600 transition-colors">Private ADHD Assessments</button>
            <button onClick={() => navigate('/services/weight-management')} className="hover:text-teal-600 transition-colors">Medical Weight Loss</button>
          </div>
        </div>
      </section>
    </div>
  );
}

