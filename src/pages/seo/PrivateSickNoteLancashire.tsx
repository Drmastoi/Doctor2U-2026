import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function PrivateSickNoteLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private Sick Note Lancashire | Same-Day Doctor Fit Notes" 
        description="Need a private sick note in Lancashire? Our GMC registered doctors provide clinical assessments and instant private medical certificates (Fit Notes) across Manchester, Preston, and beyond."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Private Sick Note Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-slate-200">
            Professional Medical Certifications | North West UK
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE MEDICAL <br />
            <span className="text-teal-700 italic">SICK NOTES</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                When illness prevents you from working, navigating employer requirements shouldn't be another source of stress. Our private sick note service in Lancashire provides valid, GMC-authorised medical certificates following a thorough clinical assessment.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you're in Preston, Blackburn, or Manchester, we offer same-day doctor consultations that allow for an in-depth discussion of your health status. If our doctors determine that you are unfit for work, we can issue a formal private medical certificate (Fit Note) immediately.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-emerald-50 border border-emerald-100 p-8 rounded-[2.5rem] shrink-0 text-center">
              <div className="w-16 h-16 rounded-3xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-emerald-600/20 mx-auto transform -rotate-3">
                <FileText size={32} />
              </div>
              <h4 className="text-lg font-display font-bold text-slate-900 mb-2 italic">Standard Note</h4>
              <p className="text-[10px] uppercase font-black tracking-widest text-emerald-700 mb-6">Valid For UK Employers</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-black hover:bg-slate-800 transition-all text-sm mb-3"
              >
                Book Assessment
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-teal-800 transition-all shadow-xl flex items-center gap-2"
            >
              Get Doctor Consultation
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200">
               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                 <ShieldCheck size={20} className="text-teal-600" />
               </div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">GMC Authorised Clinicians</p>
            </div>
          </div>
        </motion.div>

        {/* Informative Body */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8">Understanding the Private Medical Certificate</h2>
          <p>
            A private sick note in Lancashire (frequently referred to as a Fit Note) is a legal document issued by a registered medical practitioner. It confirms that they have assessed you and found that your health condition affects your ability to work.
          </p>
          <p>
            While self-certification is often allowed for the first 7 days of illness, many employers, universities, or insurers require a doctor's input for longer absences or for specific occupational health reasons. Choosing a private GP in Lancashire for this requirement ensures you are seen quickly and assessed properly.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Our Clinical Assessment Process</h3>
          <p>
            We take clinical integrity seriously. We do not provide 'instant certificates' without a consultation. To receive a private sick note in Lancashire from us, you must undergo:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Review of your current illness/injury",
              "Discussion of your job role & duties",
              "Physical examination (if appropriate)",
              "Discussion of recovery timelines",
              "Advice on 'adjustments' for work",
              "Formal digital/physical documentation"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="text-sm font-bold text-slate-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8">Notes Following Lancashire Home Visits</h2>
          <p>
            For many patients seeking a private sick note in Lancashire, the nature of their illness (such as severe flu, back pain, or post-operative recovery) makes traveling to a clinic difficult. This is where our home visit service excels.
          </p>
          <p>
            Our doctors visit you in the comfort of your home in Preston, Manchester, or across Lancashire. After the assessment, they can issue your sick note directly on-site or send a digital PDF to your email immediately, ensuring you have the documentation required for your employer or insurance provider without delay.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">What if I Need an Extension?</h3>
          <p>
            If your condition persists beyond the initial period on your fit note, we can arrange a follow-up review. Our Lancashire private GPs maintain a continuous record of your health status, making the process of ongoing assessments seamless and clinically sound.
          </p>
        </div>

        {/* Use Cases Section */}
        <section className="mb-24 py-16 px-12 bg-slate-900 rounded-[3rem] text-white">
          <h2 className="text-3xl font-display font-bold mb-12 tracking-tight italic text-center">When is a <span className="text-teal-400">Private Sick Note</span> Needed?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Employment Absences",
                desc: "Formal documentation for HR and occupational health departments following illness or injury."
              },
              {
                title: "University/School",
                desc: "Medical evidence for mitigating circumstances during exams or for mandatory attendance requirements."
              },
              {
                title: "Insurance Claims",
                desc: "Professional doctor reports for holiday cancellations, gym memberships, or health insurance payouts."
              }
            ].map((useCase, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-teal-400 font-black italic text-2xl opacity-20 italic">0{i+1}</div>
                <h4 className="text-xl font-bold tracking-tight">{useCase.title}</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center">Lancashire Medical Certificate Q&A</h2>
          <div className="space-y-4">
            {[
              { 
                q: "Is a private sick note legally valid in the UK?", 
                a: "Yes. As long as it is issued by a registered medical practitioner (GMC), a private sick note is a legally recognised document for the purposes of fit-to-work and insurance matters." 
              },
              { 
                q: "How much does a private sick note cost in Lancashire?", 
                a: "The issuance of a medical certificate is included within our standard consultation fee (£100 for clinic, £130 for home visits). We do not charge an 'admin fee' on top for the note itself during the visit." 
              },
              { 
                q: "Can you backdate a sick note?", 
                a: "Doctors can only backdate a note if there is clear medical evidence that you were unwell during that time (e.g., previous hospital notes or doctor visits). We cannot backdate based on a patient's word alone without clinical context." 
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">Question: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed font-bold">Answer: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-10 tracking-tighter leading-tight italic">
            Clinical Documentation <br />
            <span className="text-teal-700 font-bold">Issued Same-Day.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl w-full sm:w-auto"
            >
              Book Doctor Consultation
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-all shadow-sm">
                <Phone size={24} className="text-teal-600" />
              </div>
              Call 07488 879077
            </a>
          </div>
          <p className="mt-8 text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
            Lancashire & Manchester Coverage | Registered GMC Doctors
          </p>
        </div>
      </div>
    </div>
  );
}
