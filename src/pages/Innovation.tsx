import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle2, Phone, 
  Activity, Users, HeartPulse, MessageSquare, Send, Mail,
  Brain, FileText, Home as HomeIcon, Stethoscope, ClipboardList, Search, ShieldAlert, Zap, Beaker
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import HubLink from '../components/HubLink';

export default function InnovationPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, source: 'Innovation Page' })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579154234431-3014629c5827?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Innovation Lab" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-400 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase">
              AI Healthcare Innovation
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter leading-[0.95]">
              <span className="inline-block w-20 h-4 bg-teal-500 mr-4 mb-2"></span>
              AI Healthcare <br />
              <span className="text-teal-400">Innovation Hub</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
              Specialists in Clinical AI & HealthTech Systems
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
              A leading healthtech company providing bespoke AI health applications, AI-driven consultation systems, and innovative clinical solutions for hospitals, PCNs, and GP practices worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/ai-health-insights')}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/20"
              >
                Try AI Assessment (Free)
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Interactive AI Assessment Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-1.5 rounded-full text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
                  <Brain size={14} />
                  <span>Interactive Diagnostics</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter leading-tight">
                  Your AI-Powered <br />
                  <span className="text-teal-400">Health Companion (Free)</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Experience our intelligent symptom checker that leverages sophisticated AI to provide instant medical insights and actionable health suggestions.
                </p>
                <div className="space-y-6 mb-10">
                  {[
                    "Input your symptoms in natural language",
                    "Receive evidence-based clinical suggestions",
                    "Share detailed insights directly with your GP",
                    "Accelerate your diagnosis and treatment"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-teal-400" />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => navigate('/ai-health-insights')}
                  className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-500 hover:scale-105 transition-all shadow-xl shadow-teal-900/40 flex items-center gap-3 group"
                >
                  Start Your Assessment
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                  <div className="bg-slate-800 p-8 flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-teal-50/10 rounded-full flex items-center justify-center text-teal-400 mx-auto mb-6">
                        <Brain size={48} className="animate-pulse" />
                      </div>
                      <p className="text-teal-400 font-mono text-[10px] mb-2 uppercase tracking-[0.3em] font-bold">System Status: Active</p>
                      <h4 className="text-2xl font-display font-bold text-white mb-4">Neural Health Engine</h4>
                      <div className="flex items-center justify-center gap-2 mb-6 text-slate-400 font-mono text-[10px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        LIVE DATA STREAMING
                      </div>
                      <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                        Processing clinical input patterns to provide real-time suggestions and structured summaries.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-10 -right-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl animate-pulse text-teal-500 flex items-center justify-center">
                  <Zap size={40} />
                </div>
                <div className="absolute -bottom-6 -left-4 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl animate-pulse delay-700 text-emerald-500 flex items-center justify-center">
                   <Activity size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Advantage: Traditional vs Hybrid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
                <Zap size={14} className="text-teal-600" />
                <span>The AI Advantage</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                Why AI-Powered <br />
                <span className="text-teal-600 italic">Medical Precision?</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                Traditional home visits often start with 20 minutes of repetitive history-taking. With Doctor2U, our AI observes, organises, and briefs your doctor <span className="text-teal-700 font-bold italic">before</span> they arrive.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="text-slate-400 text-[10px] font-bold uppercase mb-6 tracking-widest">Traditional Visit</div>
                  <div className="space-y-4">
                    {[
                      "Wait hours for a callback",
                      "Explain history from scratch",
                      "Time wasted on administration",
                      "Standard verbal reports only"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center text-slate-400">
                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-teal-700 p-8 rounded-[2rem] text-white shadow-xl shadow-teal-900/20">
                  <div className="text-teal-400 text-[10px] font-bold uppercase mb-6 tracking-widest">Doctor2U AI Hybrid</div>
                  <div className="space-y-4">
                    {[
                      "Instant AI triage 24/7",
                      "Deep context already briefed",
                      "100% time on clinical care",
                      "Detailed AI-enhanced reports"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                        <span className="text-sm font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: Clock, 
                  title: "Instant Triage", 
                  desc: "Structure your health concerns the moment they arise, day or night." 
                },
                { 
                  icon: Beaker, 
                  title: "Clinical Synthesis", 
                  desc: "Symptoms are synthesized into a professional summary for the clinician." 
                },
                { 
                  icon: Activity, 
                  title: "Data Integrity", 
                  desc: "Organized data leads to fewer errors and more accurate treatment plans." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Patient Focused", 
                  desc: "More time for touch, empathy, and thorough physical examination." 
                }
              ].map((feature, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-xs">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Planning Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Private Health Consultation & Planning</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-16">
              Personalised healthcare consultations and strategic health planning services designed to optimise your wellbeing. Our expert medical professionals provide comprehensive assessments and create tailored health management plans that align with your lifestyle and health objectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Users, title: "Personalised Care", desc: "Individual health assessments tailored to your specific needs" },
                { icon: Activity, title: "Strategic Planning", desc: "Long-term health strategies for optimal wellbeing" },
                { icon: ShieldCheck, title: "Expert Guidance", desc: "Professional medical advice from qualified specialists" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                Driving the Future of Clinical Care
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Prime Private Health Care is a pioneering healthtech company at the forefront of medical innovation. We specialise in developing bespoke AI health applications and <span className="text-teal-700 font-bold">AI consultation systems</span> specifically designed for clinical settings.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                From high-capacity <span className="text-teal-700 font-bold">hospitals</span> to local <span className="text-teal-700 font-bold">PCNs and GP practices</span>, we provide comprehensive medical services and tech-driven solutions that bridge the gap between innovation and traditional practice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Clinical AI Systems", desc: "Advanced AI-powered consultation tools for clinical settings" },
                  { title: "Bespoke Development", desc: "Custom apps for Hospitals, PCNs, and GP practices" },
                  { title: "Organisation Support", desc: "Comprehensive solutions for healthcare organisations" },
                  { title: "Hybrid Innovation", desc: "Combining digital intelligence with physical clinical expertise" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="text-teal-600 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Medical Team Innovation" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-teal-600 text-white p-10 rounded-[2rem] shadow-xl">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest font-bold">Years' Experience</div>
              </div>
              <div className="absolute top-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="text-4xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">Get In Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to transform your healthcare services? Contact us today to discuss your requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Telephone</h4>
                      <p className="text-slate-600">07488 879077</p>
                      <p className="text-xs text-slate-400 mt-1">Monday – Friday, 9:00am – 6:00pm</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">hello@doctor2u.co.uk</p>
                      <p className="text-xs text-slate-400 mt-1">We will respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Response Time</h4>
                      <p className="text-slate-600">Same-day response for urgent enquiries</p>
                      <p className="text-xs text-slate-400 mt-1">Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Why Choose Prime Private Health Care?</h4>
                  <ul className="space-y-3">
                    {[
                      "Expert medical professionals with a proven track record",
                      "Cutting-edge AI health technology solutions",
                      "Comprehensive range of medical services",
                      "Personalised care tailored to your needs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-teal-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Send us a message</h3>
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for your enquiry. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="Enter your full name"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      placeholder="Enter your email address"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service of Interest</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                      value={formState.service}
                      onChange={e => setFormState({...formState, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="clinical-ai">AI Consultation Systems</option>
                      <option value="bespoke-apps">Bespoke Health Apps (PCN/GP/Hospitals)</option>
                      <option value="medico-legal">Medico-Legal Reporting</option>
                      <option value="home-visits">Home Visits</option>
                      <option value="occupational">Occupational Medicine</option>
                      <option value="medicals">Drivers' Medicals</option>
                      <option value="screening">Health Screening</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message *</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  {error && (
                    <div className="bg-rose-50 border border-rose-100 text-rose-700 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
                      <ShieldAlert size={14} />
                      {error}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-12 tracking-tight">Trusted by Leading Healthcare Organisations</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-display font-bold tracking-tighter">NHS</span>
            <span className="text-2xl font-display font-bold tracking-tighter">Google Health</span>
            <span className="text-2xl font-display font-bold tracking-tighter">IBM Watson</span>
            <span className="text-2xl font-display font-bold tracking-tighter">Philips</span>
            <span className="text-2xl font-display font-bold tracking-tighter">Azure Health</span>
          </div>
          <p className="mt-12 text-slate-500 text-sm max-w-3xl mx-auto">
            These partnerships demonstrate our commitment to excellence and innovation in healthcare technology, ensuring our clients receive world-class solutions backed by industry-leading expertise.
          </p>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
           <HubLink index={9} />
        </div>
      </section>
    </div>
  );
}
