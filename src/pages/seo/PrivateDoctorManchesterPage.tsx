import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, User as DoctorIcon, Clock, ShieldCheck, Star, 
  MapPin, Phone, MessageSquare, BrainCircuit, Users, Stethoscope, 
  ChevronDown, Calendar, Activity, ClipboardList
} from 'lucide-react';
import { Page } from '../../types';
import HubLink from '../../components/HubLink';

interface PrivateDoctorManchesterProps {
  setPage: (page: Page) => void;
}

export default function PrivateDoctorManchesterPage({ setPage }: PrivateDoctorManchesterProps) {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Private Doctor Manchester – Same-Day Private Appointments | Doctor2U";
    
    // SEO Schema Injections
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book a same-day private doctor appointment in Manchester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book directly via our website using the 'Book Online' button or by calling our Manchester reception team. we offer same-day slots for urgent and non-urgent medical concerns."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of a private doctor consultation in Manchester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Out standard 30-minute private doctor consultation in Manchester is priced at £100. This includes your time with a GMC-registered doctor and any private prescriptions or referral letters issued during the session."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "Why should I choose a private doctor instead of waiting for the NHS?",
      answer: "The primary advantages are speed and unhurried clinical time. While the NHS is an excellent service, current pressures mean waits for non-emergency appointments can take weeks. At Doctor2U Manchester, we offer 30-minute appointments (double the average NHS duration) and same-day access, allowing for thorough medical investigation."
    },
    {
      question: "Are your Manchester doctors fully licensed?",
      answer: "Yes, all our practitioners are fully GMC-registered and licensed to practice in the UK. They bring years of experience from both general practice and specialist backgrounds."
    },
    {
      question: "Can I get a specialist referral on the same day?",
      answer: "Absolutely. If the doctor determines that you need specialist care or diagnostic imaging (like MRI or CT scans), we can issue a private referral letter immediately, often allowing you to be seen by a specialist within 48-72 hours."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/5 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6 border border-teal-200">
                <DoctorIcon size={14} />
                Private Doctor Manchester
              </div>
              <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Private Doctor Manchester: <span className="text-teal-700">Priority Medical Care.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Experience healthcare as it should be. Unhurried, 30-minute consultations with GMC-registered private doctors in Manchester centre. Same-day appointments, prescriptions, and expert diagnostics.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => setPage('booking')}
                  className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20 flex items-center gap-2"
                >
                  Book Online Today
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="tel:07488879077"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <Phone size={20} className="text-teal-700" />
                  07488 879077
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-amber-400 fill-amber-400" />
                  <span>5.0 Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck size={18} className="text-teal-600" />
                  <span>GMC Registered Doctors</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern private clinic in Manchester" 
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Long-form Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter">Your Guide to Accessing a Private Doctor in Manchester</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed italic border-l-4 border-teal-600 pl-6">
              "Finding a doctor you trust when you need them most shouldn't be governed by a two-week wait list. At Doctor2U, we prioritise immediate access to clinical excellence."
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Manchester is home to some of the world's leading medical facilities, yet accessing primary care can still be Frustratingly slow. Our <strong>Private Doctor Manchester</strong> service was established to provide a convenient, reliable, and high-quality alternative for those who value their time and their health.
            </p>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-8 font-bold text-teal-900">
               We also provide a <button onClick={() => setPage('doctor-home-visit-manchester')} className="text-teal-700 underline underline-offset-4 decoration-2 decoration-teal-300 hover:text-teal-900 transition-colors">home visit GP in Manchester</button> for patients who cannot travel.
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Benefits of Private Healthcare in Manchester</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Why do thousands of Manchester residents choose private doctors each year? The answer lies in the quality of the interaction and the speed of the follow-up. While the NHS provides a vital service, the current strain on primary care means that "same-day" access is often a luxury. We have consciously designed our Manchester private clinic to remove the friction of modern healthcare.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">30-Minute Consultations</h4>
                <p className="text-sm text-slate-500">No rushing. You have a full half-hour to discuss clinical history, lifestyle factors, and treatment goals with your doctor. This is more than double the average time allowed in a standard surgery, allowing for true clinical depth.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Same-Day Prescriptions</h4>
                <p className="text-sm text-slate-500">Medication is issued during your appointment. We can send prescriptions electronically to the pharmacy of your choice in Manchester center or near your home, ensuring treatment begins immediately.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Expert Referrals</h4>
                <p className="text-sm text-slate-500">Need a specialist? We have a network of private consultants across Manchester and Lancashire for fast-track referrals. Whether you need a cardiologist, dermatologist, or orthopedic surgeon, we can bridge that gap.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Diagnostic Precision</h4>
                <p className="text-sm text-slate-500">We arrange blood tests, ECGs, and advanced imaging (MRI/CT) with results typically returned within 48 hours. Our clinic is positioned to leverage Manchester's world-class diagnostic infrastructure.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Meeting E-E-A-T Standards: Our Clinical Integrity</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Trust is the foundation of any medical relationship. At Doctor2U, we ensure that every patient interaction meets the highest standards of General Medical Council (GMC) regulations. Our doctors are not just clinicians; they are health advocates who practice under a rigorous <button onClick={() => setPage('clinical-governance')} className="text-teal-700 font-bold hover:underline">Clinical Governance</button> framework. We believe that by providing direct access to <button onClick={() => setPage('our-doctors')} className="text-teal-700 font-bold hover:underline">GMC-registered doctors</button>, we provide more than just an appointment—we provide peace of mind.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Specialised Care Across Manchester</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We recognize that medical needs are diverse. That is why we have established specialist care pathways within our Manchester practice. If you are a parent seeking an <button onClick={() => setPage('urgent-childrens-doctor-manchester')} className="text-teal-700 font-bold hover:underline">urgent children's doctor in Manchester</button>, or you require immediate assistance for infections such as <button onClick={() => setPage('emergency-uti-treatment-manchester')} className="text-teal-700 font-bold hover:underline">Emergency UTI treatment</button>, we have the clinical expertise ready to assist. For our more vulnerable community members, we offer dedicated <button onClick={() => setPage('elderly-care-home-visit-manchester')} className="text-teal-700 font-bold hover:underline">elderly care home visits</button> to ensure continuity of care in a comfortable setting.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">NICE-Aligned Clinical Standards</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Every clinical decision made by our private doctors is backed by the latest evidence. We align our practice with the National Institute for Health and Care Excellence (NICE) guidelines. Whether we are managing minor infections, respiratory issues like <button onClick={() => setPage('chest-infection-home-visit-manchester')} className="text-teal-700 font-bold hover:underline">chest infections</button>, or complex chronic conditions, you can be rest assured that your care follows the Gold standard of UK medical practice.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">A Patient-First Philosophy in the North West</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our Manchester practice is built on a simple "Patient-First" philosophy. This means zero registration requirements, transparent pricing, and a commitment to seeing you on the same day you call. We don't believe in barriers; we believe in health. From our central Manchester clinical hub, we serve the entire Greater Manchester footprint including Salford, Trafford, and Stockport. If you are experiencing <button onClick={() => setPage('out-of-hours-doctor-manchester')} className="text-teal-700 font-bold hover:underline">out-of-hours health concerns</button>, our extended availability ensures you are never left without a professional medical opinion.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Innovative AI Pre-Consultation Insights</h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              At Doctor2U, we blend traditional medicine with modern innovation. Our optional AI health insights tool allows you to structure your symptoms and clinical questions before your appointment. This preparation empowers you as a patient and ensures that your actual time with the doctor is focused purely on analysis, diagnosis, and treatment planning.
            </p>

            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl mb-12">
              <h4 className="text-2xl font-bold mb-6">Expert Service for All Ages</h4>
              <p className="text-slate-300 mb-8 leading-relaxed">Our Manchester doctors are experienced in all aspects of general practice, including:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Paediatric (Children\'s) Health', 'Women\'s & Men\'s Health', 'Mental Health Support', 'Sexual Health Screenings', 'Travel Vaccinations', 'Chronic Disease Care'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-teal-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">Private Doctor Manchester: FAQ</h2>
            <p className="text-slate-500">Frequently asked questions about our private clinic services.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                >
                  <span className="font-bold text-slate-900 tracking-tight">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-slate-400" />
                  </div>
                </button>
                {activeFaq === index && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-8 pb-8">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">Expert Doctors. Same-Day Results. <br />Expertise in Manchester.</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Book your consultation now and experience healthcare with zero compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => setPage('booking')}
              className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center justify-center gap-2"
            >
              Book My Appointment
              <ArrowRight size={22} />
            </button>
            <a 
              href="tel:07488879077"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={22} />
              Call Reception
            </a>
          </div>
        </div>
        <HubLink setPage={setPage} index={4} />
      </section>
    </div>
  );
}
