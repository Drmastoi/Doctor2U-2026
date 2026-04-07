import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, Page } from '../types';
import { Video, User, Home as HomeIcon, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface ServicesProps {
  setPage: (page: Page) => void;
}

export default function ServicesPage({ setPage }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return <Video size={32} />;
      case 'User': return <User size={32} />;
      case 'Home': return <HomeIcon size={32} />;
      default: return <CheckCircle2 size={32} />;
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Blobs for Modern Feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-medical-100/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[130px] animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button 
          onClick={() => setPage('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
          >
            <CheckCircle2 size={12} />
            <span>Expert Medical Care</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Our Medical <span className="text-teal-700">Services</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a range of private medical services with transparent pricing and no hidden costs. 
            Serving the Lancashire and Manchester community with unhurried, expert care.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row group hover:shadow-2xl hover:shadow-teal-900/10 transition-all shadow-sm"
            >
              <div className="md:w-1/3 bg-slate-900 p-12 flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-slate-900 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] mb-6 relative z-10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 border border-white/10">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-3xl font-display font-bold mb-2 relative z-10 tracking-tight">{service.title}</h2>
                <div className="text-2xl font-display font-bold text-teal-400 relative z-10">{service.price}</div>
              </div>
              <div className="md:w-2/3 p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What to Expect</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Experienced Private Doctors',
                    '30-Minute Consultations',
                    'Prescriptions Included',
                    'Referral Letters if Needed',
                    'Confidential & Secure',
                    'Same-Day Appointments'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-500 font-medium">
                      <CheckCircle2 size={18} className="text-teal-700 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setPage('booking')}
                  className="bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-800 transition-all self-start flex items-center gap-2 shadow-lg shadow-teal-900/20"
                >
                  Book This Service
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-24 bg-slate-50 p-12 rounded-[2rem] border border-slate-100">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Additional Medical Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Prescriptions', desc: 'Private prescriptions sent to your local pharmacy.' },
              { title: 'Blood Tests', desc: 'Comprehensive diagnostic testing with fast results.' },
              { title: 'Referrals', desc: 'Fast-track referrals to top private specialists.' },
              { title: 'Sick Notes', desc: 'Private medical certification for work or travel.' }
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="bg-teal-50 w-12 h-12 rounded-2xl flex items-center justify-center text-teal-700 mx-auto mb-4 group-hover:scale-110 transition-transform border border-teal-100">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
