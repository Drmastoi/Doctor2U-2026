import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Clock, ShieldCheck, Star, 
  MapPin, Phone, Activity, AlertCircle, Calendar, HeartPulse, Stethoscope, ChevronDown
} from 'lucide-react';
import { Page } from '../../types';
import HubLink from '../../components/HubLink';

interface SameDayDoctorManchesterProps {
  setPage: (page: Page) => void;
}

export default function SameDayDoctorManchester({ setPage }: SameDayDoctorManchesterProps) {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Same-Day Private Doctor Manchester | Urgent Medical Appointments | Doctor2U";
    
    // SEO Schema Injections
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I see a private doctor in Manchester on the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we reserved daily slots for immediate same-day consultations. We recommend booking before 11am for highest availability, but we often have evening slots for urgent requests."
          }
        },
        {
          "@type": "Question",
          "name": "How much for a same-day medical appointment in Manchester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our same-day private doctor consultations start from £100 for a 30-minute session. We also offer emergency home visits for those unable to travel."
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
      question: "Is this for emergencies?",
      answer: "Wait! If you are experiencing life-threatening symptoms (chest pain, difficulty breathing, suspected stroke), please call 999 or go to the nearest Accident & Emergency department immediately. Doctor2U is a primary care service for urgent but non-life-threatening medical concerns."
    },
    {
      question: "How long is the wait for a same-day appointment?",
      answer: "In most cases, we can see you within 4-6 hours of your initial booking. Our digital booking system shows real-time availability for both in-clinic and home visit appointments across Manchester."
    },
    {
      question: "Can you provide a sick note for my work today?",
      answer: "Yes, if the doctor deems it clinically appropriate, a private sick note can be issued immediately during your consultation."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Urgency Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-medical-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-500/10 border border-medical-500/20 text-medical-400 text-sm font-bold uppercase tracking-widest mb-10"
            >
              <Clock size={16} className="animate-pulse" />
              Urgent Service: Same-Day availability in Manchester
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
              Same-Day <span className="text-teal-400 italic font-serif">Doctor.</span> <br />
              Manchester Excellence.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Bypass the two-week wait. See a GMC-registered private doctor in Manchester today for diagnosis, prescriptions, and expert treatments.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
              <button 
                onClick={() => setPage('booking')}
                className="bg-medical-500 text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-medical-900/20 hover:bg-medical-400 transition-all flex items-center gap-3 w-full sm:w-auto"
              >
                Book Appointment Now
                <ArrowRight size={24} />
              </button>
              <a 
                href="tel:07488879077"
                className="text-white font-bold flex items-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
              >
                <Phone size={20} className="text-teal-400" />
                Call 07488 879077
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Indicators */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xl">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Rapid Access</h3>
                <p className="text-slate-500 leading-relaxed">Most Manchester patients seen within 4-6 hours of initial contact.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-xl">
                <Calendar size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">7-Day Service</h3>
                <p className="text-slate-500 leading-relaxed">Appointments available weekdays and weekends to suit your needs.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 shadow-xl">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">No Registration</h3>
                <p className="text-slate-500 leading-relaxed">One-off medical care available to everyone immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting SEO Copy */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-slate-100">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tighter">Immediate Access: The Search for a Same-Day Private Doctor in Manchester</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  When you have a pressing health concern, waiting two weeks for a primary care appointment is more than frustrating—it's potentially hazardous. In a bustling city like Manchester, where work and family commitments never pause, your healthcare shouldn't be forced into a queue. Whether it's a persistent high fever, a sudden diagnostic uncertainty, a recurring infection, or a distressed family member needing immediate attention, the need for a <strong>same-day doctor in Manchester</strong> has never been more acute. 
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  The traditional healthcare model often forces patients into 'triage' systems where the goal is to manage volume, rather than provide immediate resolution. At Doctor2U, we have inverted this model. We reserve dedicated clinical slots in our Manchester roster specifically for urgent, same-day requests, ensuring that the 'wait' is measured in hours, not weeks.
                </p>
                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-8 font-bold text-teal-900">
                   We also provide a <button onClick={() => setPage('doctor-home-visit-manchester')} className="text-teal-700 underline underline-offset-4 decoration-2 decoration-teal-300 hover:text-teal-900 transition-colors">home visit GP in Manchester</button> for patients who cannot travel.
                </div>
                <div className="flex items-center gap-4 p-8 bg-teal-50 rounded-3xl border border-teal-100 mb-10">
                  <AlertCircle size={32} className="text-teal-700 shrink-0" />
                  <p className="text-teal-900 font-medium italic leading-relaxed">
                    "Doctor2U reserves same-day clinical slots specifically for those who cannot afford to wait. Our mission is to provide uncompromised primary care on your schedule—delivered with speed, empathy, and clinical precision."
                  </p>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Our private doctor service is engineered for speed without sacrificing the depth of clinical investigation. From our Manchester clinic hub, we manage a highly mobile and responsive team of GMC-registered private doctors available for immediate consultations, prescriptions, and specialist referrals. By leveraging a streamlined booking process and our optional AI pre-assessment tools, we ensure that you move from 'symptom' to 'solution' faster than any other primary care provider in the North West.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Meeting Manchester's Urgent Care Needs</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  The demand for immediate medical access in Manchester is higher than ever. Whether it is a <button onClick={() => setPage('urgent-childrens-doctor-manchester')} className="text-teal-700 font-bold hover:underline">childhood illness</button> that has worsened overnight or a sudden <button onClick={() => setPage('chest-infection-home-visit-manchester')} className="text-teal-700 font-bold hover:underline">respiratory infection</button>, the need for clinical answers cannot always wait for a standard appointment. Our "Same-Day" philosophy is built on the understanding that timely intervention often prevents minor issues from becoming major health crises.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Comprehensive Same-Day Services in Manchester</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Accessing a private doctor on the same day allows for decisive clinical action. We understand that an urgent medical concern often requires more than just a conversation—it requires action. Our Manchester appointments include:
                </p>
                <ul className="space-y-4 mb-10 list-none p-0">
                  <li className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all shadow-sm">
                    <CheckCircle2 size={24} className="text-teal-700 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Acute Illness & Infection Control</h4>
                      <p className="text-xs text-slate-500">Rapid assessment and treatment for respiratory infections, <button onClick={() => setPage('emergency-uti-treatment-manchester')} className="text-teal-700 font-bold hover:underline">Urinary Tract Infections (UTIs)</button>, tonsillitis, ear infections, and sudden-onset pains. We can initiate treatment within minutes of your consultation concluding.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all shadow-sm">
                    <CheckCircle2 size={24} className="text-teal-700 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Diagnostic Urgency (Tests & Imaging)</h4>
                      <p className="text-xs text-slate-500">If your condition requires more than a physical check, we arrange immediate blood tests and fast-track radiology referrals (MRI, CT, Ultrasound) in Manchester, with results often back within 24-48 hours. This is crucial for managing <button onClick={() => setPage('back-pain-home-visit-manchester')} className="text-teal-700 font-bold hover:underline">acute back pain</button> or unexplained symptoms.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all shadow-sm">
                    <CheckCircle2 size={24} className="text-teal-700 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Same-Day Prescriptions & Fit Notes</h4>
                      <p className="text-xs text-slate-500">Private prescriptions are issued immediately. We can also provide private Fit Notes (sick notes) and medical certificates for work or travel during your consultation, ensuring you have the documentation you need today.</p>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Trust & Authority: GMC Registered Excellence</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Any "same-day" service is only as good as the clinicians providing it. At Doctor2U, we pride ourselves on a transparent and authoritative approach to medicine. You can <button onClick={() => setPage('our-doctors')} className="text-teal-700 font-bold hover:underline">meet our team of GMC-registered doctors</button> online before your visit. We believe that seeing the qualifications and experience of your doctor builds the necessary trust for a successful clinical relationship. Furthermore, our commitment to <button onClick={() => setPage('clinical-governance')} className="text-teal-700 font-bold hover:underline">Clinical Governance</button> ensures that we always maintain the highest safety standards, even when working under rapid response conditions.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Clinical Standards: Safe, Professional, and NICE-Aligned</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Speed is a priority, but clinical safety is our absolute mandate. Every doctor at Doctor2U is a GMC-registered practitioner with extensive experience in acute primary care. We strictly adhere to NICE (National Institute for Health and Care Excellence) guidelines. This means your 'urgent' care is also 'best-practice' care—using evidence-based protocols to guide every diagnosis and treatment plan. 
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Unlike 'triage-only' services, we ensure that every same-day appointment in Manchester is an unhurried, 30-minute block. This gives our doctors the time to perform a thorough clinical review, ensuring that 'fast' access doesn't result in a 'fast' or superficial diagnosis. We prioritize your health outcomes above all else.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Innovation: AI Insights for Faster Diagnosis</h3>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  To further accelerate your journey to wellness, we offer an optional AI-driven pre-consultation tool. By inputting your symptoms and medical history securely into our system before your appointment, our AI generates a structured health insight summary. You can review this yourself, and if you choose to share it with your doctor, it serves as a powerful diagnostic 'head start.' This innovation means your actual face-to-face time is spent on the most important aspects of care: physical examination, clinical reasoning, and treatment finalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">Questions About <span className="text-teal-700">Same-Day Care</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-slate-900 tracking-tight text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all ${activeFaq === index ? 'rotate-180 bg-teal-700 text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {activeFaq === index && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-8 pb-8">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Urgent CTA */}
      <section className="py-24 bg-medical-500 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter leading-tight italic">See a Private Doctor <br />in Manchester Today.</h2>
          <p className="text-xl font-medium mb-12 opacity-80 max-w-xl mx-auto">
            GMC-Registered doctors. 30-minute consultations. Zero wait times.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setPage('booking')}
              className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group"
            >
              Book My Appointment
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:07488879077"
              className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 border border-slate-200"
            >
              <Phone size={24} />
              Call 07488 879077
            </a>
          </div>
        </div>
        <HubLink setPage={setPage} index={5} />
      </section>
    </div>
  );
}
