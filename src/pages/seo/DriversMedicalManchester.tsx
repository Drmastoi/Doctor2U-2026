import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function DriversMedicalManchester() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Drivers Medical Manchester | D4 HGV, Taxi & Professional Driver Exams" 
        description="Looking for a Drivers Medical in Manchester? We provide professional D4 HGV, Taxi, and Private Hire medical examinations across Central Manchester, Salford, and Stockport. Fast and expert-led."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <span className="text-slate-900">Drivers Medical Manchester</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-200">
            Greater Manchester Licensing | Professional Specialist
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            DRIVERS MEDICAL <br />
            <span className="text-teal-700 italic italic">MANCHESTER</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6 italic italic italic">
                Get your professional driving career on track with an expert-led Manchester medical. We provide thorough, efficient D4 examinations and Taxi medicals that meet all DVLA and Greater Manchester local authority criteria.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 italic italic italic italic">
                Manchester is a hub for logistics and transport. Whether you are operating out of the Trafford Park logistics zone or providing private hire services in the city centre, your medical is a critical part of your professional compliance. Our GMC-registered doctors ensure your assessment is robust and completed correctly the first time.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl italic italic italic italic italic">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] -mr-16 -mt-16 italic italic"></div>
              <FileText size={32} className="text-blue-400 mb-6 mx-auto italic italic" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic italic italic font-sans italic">Manchester Fee</h4>
              <p className="text-3xl font-display font-bold text-white mb-2 italic italic italic italic">From £70</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-blue-400 mb-6 italic italic italic italic font-sans">Full D4 / Taxi Form</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-500 text-slate-900 py-3.5 rounded-2xl font-black hover:bg-teal-400 transition-all text-sm mb-3 shadow-lg italic italic italic"
              >
                Book Medical
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 italic italic italic italic">
            <button 
              onClick={() => navigate('/book')}
              className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl flex items-center gap-2 italic italic italic"
            >
              Schedule Appointment
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200 italic italic italic font-sans italic">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1 font-sans italic italic">DVLA Compliance</p>
                 <p className="text-sm font-bold text-slate-900 italic tracking-tight italic italic">GMC Specialist-Led</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* In-depth content section */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal italic italic italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-10 italic italic italic">The Premier Drivers Medical Service in Manchester</h2>
          <p>
            With the constant evolution of transport in Greater Manchester, having a reliable healthcare partner for your licensing needs is essential. Our private doctors provide high-quality medical examinations for all tiers of professional driving, from LGV and HGV to bus and taxi licensing.
          </p>
          <p>
            A drivers medical is not a 'tick-box' exercise. It is a critical evaluation of your fitness to contribute safely to Manchester's roads. We ensure that your vision, cardiovascular health, and physical mobility meet the rigorous standards expected by the DVLA and the city's licensing authorities.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic italic italic">Our Professional Driver Services</h3>
          <p>
            We pride ourselves on efficiency and clinical depth. Our Manchester-based drivers medical appointments include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12 italic italic italic italic">
            {[
              "Formal Snellen Eyesight evaluation",
              "Cardiovascular & heart health review",
              "Neurological physical examination",
              "Sleep apnoea screening & discussion",
              "Diabetes & insulin management review",
              "Mental health & wellbeing assessment",
              "GMC doctor sign-off on D4 forms",
              "Taxi-specific medical records & forms"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-100 italic italic italic">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic italic italic leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic italic italic">D4 Manchester: HGV, LGV & Bus Specialists</h2>
          <p>
            The Group 2 (D4) medical is required for all HGV and bus drivers. In Manchester, where haulage and public transport are the lifeblood of the city, we provide a streamline service for drivers to ensure their licence renewals are handled without stress or delay.
          </p>
          
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic italic italic italic">Manchester & Salford Taxi Medicals</h2>
          <p>
            Taxi and private hire licensing in Greater Manchester—including Manchester City Council, Salford City Council, and Stockport—requires a specific medical. We provide council-ready medicals that are compliant with the unique requirements of these local licensing authorities.
          </p>
          <p>
            Driving a taxi in a city as busy as Manchester requires high levels of concentration and physical fitness. Our medical examinations are designed to ensure that you are up to the task, providing peace of mind for both the driver and the public. We understand the specific council standards for Manchester and its boroughs, ensuring your medical form is completed accurately and efficiently. Whether you are renewing your private hire licence or applying for the first time, our doctors provide a supportive clinical environment that respects your time and your licensing requirements. By choosing a private GP for your taxi medical, you are ensuring a rapid, professional service that keeps you on the road and minimizes administrative delays in your renewal process.
          </p>
          <p>
            Greater Manchester's role as a northern powerhouse in the UK economy means that our roads are amongst the busiest and most challenging. For the professional drivers navigating the M60 or the congested inner-city routes, health is a primary safety factor. Our drivers medical service in Manchester is tailored to the specific needs of this professional community. We provide a thoroughness of clinical assessment that goes beyond the basic requirements, ensuring that every driver we certify is fit for the unique demands of urban and long-haul driving. Our Manchester clinicians take a proactive approach, discussing long-term health management and fatigue prevention—critical factors in professional driver safety. We are committed to supporting Manchester's transport industry by ensuring that the medical licensing process is an asset to professional standards, not an obstacle. Experience a higher level of clinical care that recognizes the vital role you play in the city's infrastructure.
          </p>

          <MapEmbed location="manchester" />
          <ServiceSEOExpansion 
            serviceName="Drivers Medical" 
            locationName="Manchester" 
            locationKey="manchester" 
          />
        </div>

        {/* Pricing Grid */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm italic italic italic italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 italic tracking-tight mb-12 text-center underline decoration-blue-500/30 underline-offset-8 italic italic italic italic italic">Manchester Drivers <span className="text-blue-600 italic italic italic italic">Pricing</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto italic italic italic italic italic">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center italic italic italic italic italic italic">
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans italic italic italic italic italic italic">D4 Medical (HGV)</h4>
              <p className="text-3xl font-display font-bold text-blue-600 mb-6 italic italic italic italic italic italic italic italic">£70</p>
              <ul className="text-xs text-slate-500 space-y-2 mb-8 font-medium italic italic italic italic italic italic italic italic">
                <li>Full DVLA Compliance</li>
                <li>Vision & Health Checks</li>
                <li>Expert GMC Sign-off</li>
              </ul>
              <button 
                onClick={() => navigate('/book')}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-black text-sm hover:bg-slate-800 transition-all italic italic italic italic italic italic italic"
              >
                Book D4 Manchester
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center italic italic italic italic italic italic italic">
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans italic italic italic italic italic italic italic italic">Taxi Medical</h4>
              <p className="text-3xl font-display font-bold text-blue-600 mb-6 italic italic italic italic italic italic italic italic italic italic italic">£80</p>
              <ul className="text-xs text-slate-500 space-y-2 mb-8 font-medium italic italic italic italic italic italic italic italic italic">
                <li>Council-Specific Compliance</li>
                <li>History & Physical Exams</li>
                <li>Professional Certification</li>
              </ul>
               <button 
                onClick={() => navigate('/book')}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-black text-sm hover:bg-slate-800 transition-all italic italic italic italic italic italic italic italic italic"
              >
                Book Taxi Medical
              </button>
            </div>
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center italic italic italic italic italic italic italic italic">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic italic italic italic italic italic italic italic">
             Professional Drivers Medical. <br />
            <span className="text-blue-700 font-bold italic italic italic italic italic italic italic italic">Serving Greater Manchester.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 italic italic italic italic italic italic italic italic italic">
            <button 
              onClick={() => navigate('/book')}
              className="bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3 italic italic italic italic italic italic italic italic italic"
            >
              Book My Medical
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group italic italic italic italic italic italic italic italic italic italic"
            >
              07488 879077
            </a>
          </div>
           <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.25em] italic italic italic italic italic italic italic italic italic italic italic">
            Central Manchester • Salford • Stockport • Trafford • Bury
          </p>
        </div>
      </div>
    </div>
  );
}
