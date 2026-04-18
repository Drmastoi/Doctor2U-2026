import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, Clock, ArrowLeft, Brain, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import HubLink from '../components/HubLink';

interface BookingPageProps {
  setPage: (page: Page) => void;
  sharedAnalysis?: string;
}

export default function BookingPage({ setPage, sharedAnalysis }: BookingPageProps) {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Background Blobs for Modern Feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-medical-100/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[130px] animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button 
          onClick={() => setPage('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
          >
            <Calendar size={12} />
            <span>Instant Access</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Book Your <span className="text-teal-700">Consultation</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Secure your appointment instantly through our private patient portal. 
            Select your preferred service and time below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-4">
            {sharedAnalysis && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-teal-700 text-white p-6 rounded-2xl shadow-xl shadow-teal-900/20 border border-teal-600 mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain size={20} className="text-teal-300" />
                  <h3 className="font-bold tracking-tight">Analysis Attached</h3>
                </div>
                <p className="text-xs text-teal-100 leading-relaxed mb-4 line-clamp-4">
                  {sharedAnalysis}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-300">
                  <CheckCircle2 size={12} />
                  Ready for your Doctor
                </div>
              </motion.div>
            )}
            {[
              { icon: Calendar, title: "Instant Booking", desc: "Real-time availability with immediate confirmation." },
              { icon: ShieldCheck, title: "Secure Portal", desc: "End-to-end encryption for your medical data." },
              { icon: Clock, title: "24/7 Access", desc: "Book at your convenience, anytime, anywhere." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-white/40 p-6 rounded-2xl group hover:shadow-2xl hover:shadow-teal-900/10 transition-all shadow-sm"
              >
                <div className="bg-teal-50 w-10 h-10 rounded-xl flex items-center justify-center text-teal-700 mb-4 group-hover:scale-110 transition-transform border border-teal-100 shadow-sm">
                  <item.icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[2rem] shadow-2xl shadow-medical-900/10 overflow-hidden border border-slate-100 min-h-[800px] relative"
            >
              <div className="absolute inset-0 bg-slate-50 flex items-center justify-center -z-10">
                <div className="flex flex-col items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 border-4 border-teal-700 border-t-transparent rounded-full animate-spin"></div>
                  <p className="font-bold uppercase tracking-widest text-xs">Loading Booking Portal...</p>
                </div>
              </div>
              <div style={{ display: 'grid', width: '100%', height: '100%', minWidth: '320px', minHeight: '800px' }}>
                <iframe 
                  title="Carepatron Online Booking" 
                  width="100%" 
                  height="100%" 
                  src="https://book.carepatron.com/DOCTOR-2-U/Dr?p=j9wuVM76SOWEgZEfX9IMJA&s=atKBw9zD&e=i" 
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer"
                  className="relative z-10"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
        <HubLink setPage={setPage} index={7} />
      </div>
    </div>
  );
}
