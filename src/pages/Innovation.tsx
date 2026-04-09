import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle2, Phone, 
  Activity, Users, HeartPulse, MessageSquare, Send, Mail,
  Brain, FileText, Home as HomeIcon, Stethoscope, ClipboardList, Search
} from 'lucide-react';
import { Page } from '../types';

interface InnovationPageProps {
  setPage: (page: Page) => void;
}

export default function InnovationPage({ setPage }: InnovationPageProps) {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
              Private <br />
              <span className="text-teal-400">Health Care</span>
            </h1>
            <p className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
              Pioneering AI-Driven Healthcare Solutions
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Leading healthtech company providing bespoke AI health applications, comprehensive medical services, and innovative healthcare solutions for organisations and individuals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/20"
              >
                Our Services
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions combining innovative technology with traditional medical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Bespoke AI Health Apps", desc: "Custom AI-powered health applications developed specifically for organisations, leveraging cutting-edge technology to improve healthcare outcomes." },
              { icon: FileText, title: "Medico-Legal Reporting", desc: "Professional medical reports for legal proceedings, insurance claims, and regulatory compliance with expert medical analysis." },
              { icon: HomeIcon, title: "Doctor2u – Home Visits", desc: "Qualified doctors providing medical consultations and treatments in the comfort of your own home for personalised care." },
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
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
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
                Leading Healthcare Innovation
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Prime Private Health Care is a pioneering healthtech company at the forefront of medical innovation. We specialise in developing bespoke AI health applications that transform how organisations deliver healthcare services.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our comprehensive range of services combines cutting-edge technology with traditional medical expertise, ensuring that our clients receive the highest standard of care across all healthcare disciplines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Expert Team", desc: "Qualified medical professionals with extensive experience" },
                  { title: "Innovation Focus", desc: "Cutting-edge AI and healthcare technology solutions" },
                  { title: "Comprehensive Care", desc: "Full spectrum of medical and legal health services" },
                  { title: "Personalised Approach", desc: "Tailored solutions for organisations and individuals" }
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
                      <option value="ai-apps">Bespoke AI Health Apps</option>
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
                  <button 
                    type="submit"
                    className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/20"
                  >
                    Send Message
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
      </section>
    </div>
  );
}
