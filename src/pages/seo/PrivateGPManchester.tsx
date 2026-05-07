import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function PrivateGPManchester() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP Manchester | Same-Day Appointments & Home Visits" 
        description="Need a Private GP in Manchester? We offer same-day private doctor appointments and home visits across Manchester City Centre, Didsbury, Salford, and beyond. Book now."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private GP Manchester</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200">
            Manchester's Premier Mobile GP Service
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-teal-700 italic">MANCHESTER</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Avoid long waits and experience a higher standard of medical care. Our private GP service in Manchester provides professional clinical consultations at your home, office, or hotel, often within just two hours of booking.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                From the bustling streets of Deansgate to the quiet suburbs of Didsbury and Hale, we serve the entire Greater Manchester area. Our mission is to restore the traditional value of the doctor-patient relationship—providing unhurried, evidence-based care when you need it most.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-100 shrink-0">
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={16} className="text-teal-600" />
                Areas Covered
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-[10px] font-black uppercase tracking-wider text-slate-500">
                <li>Didsbury</li>
                <li>Salford</li>
                <li>Hale</li>
                <li>Cheetham</li>
                <li>Bolton</li>
                <li>Stockport</li>
              </ul>
              <hr className="my-6 border-slate-200" />
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-black hover:bg-teal-800 transition-all text-sm mb-3"
              >
                Book Manchester GP
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2"
            >
              Same-Day Appointment
              <ArrowRight size={18} />
            </button>
            <a 
              href="tel:07488879077"
              className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-black hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone size={18} className="text-teal-600" />
              Call Doctor
            </a>
          </div>
        </motion.div>

        {/* Extensive SEO Content */}
        <div className="prose prose-slate prose-lg max-w-none mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic">Why Manchester Chooses Private GP Care</h2>
          <p>
            Manchester is one of the UK's fastest-growing cities, and with growth comes increased pressure on public health infrastructure. Busy professionals, parents, and elderly residents are increasingly turning to private GP services in Manchester for their reliability and clinical depth.
          </p>
          <p>
            When you book a private GP in Manchester with us, you aren't just getting an appointment; you're getting a partnership in your health. We operate without the constraints of 10-minute time slots, allowing our clinicians to listen, examine, and explain in detail.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Comprehensive Clinical Services</h3>
          <p>
            Our Manchester-based doctors provide a full spectrum of primary care services. Unlike some 'app-based' providers, we believe in the importance of physical examination and the value of face-to-face clinical time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "General Medical Consultations (30 Minutes)",
              "Urgent Home Visit Assessments",
              "Private Prescriptions Issued Instantly",
              "Fast-Track Referral Letters",
              "Health Screening & Wellness Checks",
              "Medical Reports for Work or Insurance",
              "Diagnostic Blood Testing",
              "Paediatric (Child Health) Consultations"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20">Manchester Home Visit Doctors</h2>
          <p>
            If you are too unwell to travel or simply prefer the privacy of your own home, our Manchester home visit service is the gold standard. We dispatch experienced GMC-registered doctors directly to your location, whether it's a apartment in the Northern Quarter or a family home in Bowdon.
          </p>
          <p>
            Our doctors carry comprehensive equipment, enabling them to check blood pressure, heart rates, oxygen levels, and perform basic point-of-care testing. This allows for a robust clinical diagnosis to be made on-site, followed by the immediate issuance of treatment plans.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Serving the Professional Community</h3>
          <p>
            For Manchester's professional community, time is the most valuable commodity. We can visit you at your place of work, providing a discreet consultation during your break, ensuring your health doesn't have to wait for your schedule. Our doctors are familiar with the major business hubs including Spinningfields, MediaCityUK, and the Central Business District.
          </p>
          <p>
            Whether you are a local resident, a visitor staying in a city centre hotel, or a student at one of the city's prestigious universities, our private GP services are accessible to all. We provide a bridge between traditional medical care and the modern requirement for flexibility. Our clinicians are not just medical providers; they are members of the Manchester community who are dedicated to improving the health outcomes of their neighbours through evidence-based, compassionate care.
          </p>
          <p>
            The clinical environment in Manchester is fast-paced, but your health shouldn't be a casualty of that speed. We believe that by providing extended consultation times, we are offering a much-needed alternative for those who feel their health concerns haven't been fully explored. Our Manchester private GP service is defined by its commitment to clinical depth. We take the time to explain not just what is happening with your health, but why. This educational component is a vital part of our medical philosophy, empowering patients to take an active role in their own wellbeing. From the Northern Quarter to Didsbury, our doctors are respected for their thoroughness and clinical integrity. We ensure that every patient leaves their consultation with a clear treatment path and the confidence that their health is in expert hands.
          </p>
          <p>
            We also offer specialized services such as wellness blood profiles, sexual health screenings, and corporate health packages. By choosing a private GP, you are investing in a system that allows for thorough clinical investigation without the pressure of a crowded waiting room. We believe that every patient deserves the luxury of time with their doctor—the time to explain symptoms, the time for a thorough examination, and the time to discuss a cohesive management plan.
          </p>

          <MapEmbed location="manchester" />
          <ServiceSEOExpansion 
            serviceName="Private GP" 
            locationName="Manchester" 
            locationKey="manchester" 
          />
        </div>

        {/* Stats Section */}
        <section className="mb-24 py-12 bg-slate-50 rounded-[3rem] border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-teal-700 mb-1">2h</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Avg Call-Out Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-teal-700 mb-1">100%</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">GMC Registered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-teal-700 mb-1">5★</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Patient Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-teal-700 mb-1">60+</div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Local Postcodes</p>
            </div>
          </div>
        </section>

        {/* Benefits Cards */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-teal-600" /> Security
              </h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                We use top-tier encryption for all medical records and adhere to strict clinical governance standards.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="text-teal-600" /> Speed
              </h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Same-day access is our core promise. We aim to see most Manchester patients within hours.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ArrowRight className="text-teal-600" /> Access
              </h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Direct access to specialist referrals and imaging without the need for NHS gatekeeping.
              </p>
            </div>
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center p-16 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -ml-40 -mt-40"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tighter leading-tight italic">
            Get a Private Manchester Doctor <br />
            <span className="text-teal-400 italic">To Your Door Today.</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-500 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-400 transition-all shadow-2xl"
            >
              Book Now
            </button>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Call <a href="tel:07488879077" className="text-teal-400 hover:underline">07488 879077</a> for rapid dispatch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
