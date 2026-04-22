import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, ArrowLeft, ShieldAlert } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import HubLink from '../components/HubLink';
import SEO from '../components/SEO';

export default function ContactPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
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
        body: JSON.stringify({ ...formState, source: 'Contact Page' })
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
    <div className="bg-white min-h-screen pt-32 pb-16 relative overflow-hidden">
      <SEO
        title="Contact Doctor2U Manchester & Lancashire"
        description="Contact Doctor2U for private GP appointments, home visits, and same-day medical enquiries across Manchester and Lancashire."
      />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-medical-100/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[130px] animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back</span>
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
          >
            <MessageSquare size={12} />
            <span>Get in Touch</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Contact <span className="text-teal-700">Us</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Book your appointment or ask us a question. Our team is here to help you across Lancashire and Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Direct Contact</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Call Us', value: '07488 879077', sub: 'Mon-Fri: 8am - 8pm | Sat: 9am - 5pm', color: 'text-teal-600' },
                  { icon: MessageSquare, title: 'WhatsApp', value: '03333395773', sub: 'Instant Messaging Support', color: 'text-green-600' },
                  { icon: Mail, title: 'Email Us', value: 'hello@doctor2u.co.uk', sub: 'General Enquiries', color: 'text-teal-600' },
                  { icon: MapPin, title: 'Service Area', value: 'Lancashire & Manchester', sub: 'Home Visits & Clinics', color: 'text-teal-600' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="bg-white p-4 rounded-2xl text-slate-900 border border-slate-100 group-hover:bg-teal-700 group-hover:text-white group-hover:border-teal-700 transition-all shadow-sm">
                      <item.icon size={24} className={item.color + ' group-hover:text-white transition-colors'} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 mb-1">{item.value}</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl border border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 relative z-10">
                <Clock size={24} className="text-teal-400" />
                Fast Response Times
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                We aim to respond to all enquiries within 2 hours during business hours. For urgent medical needs, please call us directly.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold relative z-10">
                <CheckCircle2 size={18} className="text-teal-400" />
                Professional Medical Care
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl shadow-teal-900/10 border border-white/40"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 border border-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 leading-relaxed">Thank you for contacting Doctor2U. A member of our team will be in touch shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-teal-700 font-bold hover:text-teal-800 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 outline-none transition-all placeholder:text-slate-300"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 outline-none transition-all placeholder:text-slate-300"
                      placeholder="07123 456789"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 outline-none transition-all placeholder:text-slate-300"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message / Enquiry</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 text-slate-900 focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 outline-none transition-all resize-none placeholder:text-slate-300"
                    placeholder="How can we help you today?"
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
                  className="w-full bg-teal-700 text-white py-5 rounded-2xl font-bold text-lg hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Your data is secure and confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
        <HubLink index={8} />
      </div>
    </div>
  );
}
