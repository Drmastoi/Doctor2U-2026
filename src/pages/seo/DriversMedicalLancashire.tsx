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

export default function DriversMedicalLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Drivers Medical Lancashire | D4 HGV, Taxi & Bus Medical Exams" 
        description="Looking for a Drivers Medical in Lancashire? We provide professional D4 HGV, LGV, Bus, and Taxi medical examinations across Preston, Blackburn, and Chorley. Fast, affordable, and expert-led."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <span className="text-slate-900">Drivers Medical Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-200">
            Professional Licensing | D4 & Taxi Specialist
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            DRIVERS MEDICAL <br />
            <span className="text-teal-700 italic">LANCASHIRE</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6 italic">
                Get your career on the road with an expert-led drivers medical. Our Lancashire service provides professional D4 examinations and Taxi medicals that are thorough, efficient, and fully compliant with DVLA and local council standards.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you're a new driver entering the haulage industry or an experienced professional renewing your licence, securing a medical shouldn't be a hurdle. Our GMC-registered doctors offer convenient appointments across Lancashire, ensuring your paperwork is completed accurately and professionally.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] -mr-16 -mt-16"></div>
              <FileText size={32} className="text-blue-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic italic">Medical Fee</h4>
              <p className="text-3xl font-display font-bold text-white mb-2 italic italic">From £70</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-blue-400 mb-6 italic italic">Full D4 / Taxi Form</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-500 text-slate-900 py-3.5 rounded-2xl font-black hover:bg-teal-400 transition-all text-sm mb-3 shadow-lg"
              >
                Book Medical
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl flex items-center gap-2"
            >
              Schedule Appointment
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200 italic">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1 font-sans">DVLA Compliance</p>
                 <p className="text-sm font-bold text-slate-900 italic tracking-tight italic">GMC Specialist-Led</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Content */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-10 italic italic">Comprehensive Driver Health Evaluations in Lancashire</h2>
          <p>
            Maintaining a commercial driving licence in Lancashire requires more than just skill behind the wheel; it requires a clean bill of health evidenced by a professional medical. Our Lancashire drivers medical service covers Preston, Blackburn, Burnley, Chorley, and surrounding districts.
          </p>
          <p>
            We understand the time-sensitive nature of licensing renewals. Our doctors provide a streamlined assessment process that includes all the necessary tests required by the DVLA (for D4 forms) and local authorities (for Taxi licences).
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic italic">What is Included in Your Drivers Medical?</h3>
          <p>
            A standard drivers medical assessment is a multi-point clinical review designed to ensure you are safe to operate heavy or commercial vehicles. Our Lancaster and Lancashire assessments include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Snellen Visual Acuity test (Eyesight)",
              "Blood Pressure measurement & record",
              "Review of cardiovascular history",
              "Neurological screening & history",
              "Psychological health evaluation",
              "Review of chronic medical conditions",
              "Current medication assessment",
              "Completion of official DVLA/Council forms"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-100 italic">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic italic leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic">D4 HGV, LGV & Bus Medical Specialist</h2>
          <p>
            The D4 medical is a mandatory requirement for HGV (Heavy Goods Vehicle), LGV (Large Goods Vehicle), and Bus drivers every 5 years after the age of 45, and then annually after 65. In Lancashire, our professional doctors ensure the form is filled out with total precision, helping you avoid delays in your renewal process.
          </p>
          
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic italic">Taxi & Private Hire Medicals</h2>
          <p>
            Councils across Lancashire—including Preston City Council, Blackburn with Darwen, and Chorley Council—require professional taxi medicals to ensure passenger safety. We provide council-compliant medicals that meet these specific local standards. Our medical professionals are well-versed in the local authority requirements, ensuring that your application is supported by robust, professional documentation.
          </p>
          <p>
            Whether you are a veteran driver of the Lancashire roads or a newcomer starting your first shift, the medical examination is a vital step in maintaining road safety for yourself and the public. We take this responsibility seriously. Our Lancaster and Lancashire assessments are conducted in a clinical environment that prioritizes accuracy and patient comfort. We understand that your livelihood depends on your licence, which is why we offer flexible booking slots to minimize your time off the road. Our commitment to clinical excellence means every assessment is conducted with the highest degree of professionalism, ensuring you leave our clinic with a clear understanding of your health status and a completed medical form ready for submission.
          </p>
          <p>
            The role of a commercial driver in Lancashire is increasingly demanding, involving long hours and high levels of awareness. Our drivers medical service is designed to support you in meeting these demands by providing a comprehensive health review. We don't just check your vision and blood pressure; we engage in a clinical dialogue about your general wellbeing, providing advice on how to maintain your health while on the road. Our Lancashire doctors are well-versed in the specific stresses of the logistics industry, from the arterial motorway networks to the rural B-roads. We ensure that your D4 or Taxi medical is a positive clinical encounter that reinforces your professional status. By choosing our private service, you are ensuring that your medical evidence is robust and defensible, protecting both your licence and the safety of the Lancashire public. We are your local partner in professional driving licensing, providing excellence in every assessment.
          </p>

          <MapEmbed location="lancashire" />
          <ServiceSEOExpansion 
            serviceName="Drivers Medical" 
            locationName="Lancashire" 
            locationKey="lancashire" 
          />
        </div>

        {/* Pricing Grid */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm italic italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 italic tracking-tight mb-12 text-center underline decoration-blue-500/30 underline-offset-8 italic italic italic">Professional Drivers <span className="text-blue-600 italic">Pricing</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center italic italic">
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans italic italic">D4 Medical (HGV/Bus)</h4>
              <p className="text-3xl font-display font-bold text-blue-600 mb-6 italic italic italic">£70</p>
              <ul className="text-xs text-slate-500 space-y-2 mb-8 font-medium italic italic">
                <li>Full DVLA Form Completion</li>
                <li>GMC Doctor Assessment</li>
                <li>Same-Day Availability</li>
              </ul>
              <button 
                onClick={() => navigate('/book')}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-black text-sm hover:bg-slate-800 transition-all italic italic"
              >
                Book Package
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center italic italic">
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans italic italic">Taxi Medical</h4>
              <p className="text-3xl font-display font-bold text-blue-600 mb-6 italic italic italic italic">£80</p>
              <ul className="text-xs text-slate-500 space-y-2 mb-8 font-medium italic italic italic">
                <li>Council-Specific Forms</li>
                <li>Vision & Health Checks</li>
                <li>Professional Records</li>
              </ul>
               <button 
                onClick={() => navigate('/book')}
                className="w-full py-3 bg-slate-900 text-white rounded-xl font-black text-sm hover:bg-slate-800 transition-all italic italic italic"
              >
                Book Package
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden italic italic italic">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic italic italic italic">Driver Medical <span className="text-blue-400 italic italic italic">Insights</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "What do I need to bring to my medical appointment?", 
                a: "You must bring your photographic ID (Driving Licence), your D4 or Council form, details of any medications you take, and your glasses/contact lenses if you wear them for driving." 
              },
              { 
                q: "Does the medical guarantee I will pass?", 
                a: "Our doctors provide an objective clinical assessment. While most drivers meet the DVLA standards, if you have certain medical conditions, we will discuss how these impact your eligibility and what further evidence the DVLA might require." 
              },
              { 
                q: "How long does the drivers medical take?", 
                a: "Usually between 20 and 30 minutes. This allows for a thorough clinical review and accurate completion of all required paperwork." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 italic italic italic italic">
                <h4 className="text-lg font-bold text-blue-400 mb-2 underline decoration-blue-400/30 underline-offset-4 italic italic font-sans italic">Q: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light italic italic">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center italic italic italic italic italic">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic italic italic italic">
             Professional Drivers Medical. <br />
            <span className="text-blue-700 font-bold italic italic italic italic">Across All Of Lancashire.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-2xl w-full sm:w-auto flex items-center justify-center gap-3 italic italic"
            >
              Book My Medical
              <ArrowRight size={24} />
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group italic italic italic"
            >
              07488 879077
            </a>
          </div>
           <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.25em] italic italic italic italic italic italic">
            Preston • Blackburn • Chorley • Burnley • Blackpool
          </p>
        </div>
      </div>
    </div>
  );
}
