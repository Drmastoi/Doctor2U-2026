import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function SameDayGP() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Same Day Private GP | Immediate Doctor Appointments" 
        description="Need a same day private GP? We provide urgent, expert medical consultations across Manchester & Lancashire. Don't wait for your health – book a same-day visit now."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/services')} className="hover:text-teal-700 transition-colors">Services</button>
          <span>/</span>
          <span className="text-slate-900">Same Day Private GP</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-rose-50 text-rose-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-rose-200">
            Urgent Clinical Access | No Waiting Lists
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            SAME DAY PRIVATE <br />
            <span className="text-teal-700 italic">GP APPOINTMENTS</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                When health concerns arise, waiting weeks is not an option. Our same day private GP service ensures you can see an expert doctor today, whether you're in Manchester, Preston, or anywhere across Lancashire.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We specialise in the rapid clinical management of acute illnesses, providing comprehensive 30-minute consultations that leave no room for uncertainty. From diagnostic testing to immediate prescriptions and specialist referrals, we provide an all-encompassing medical solution on the same day you call.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[2.5rem] shrink-0 relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-[60px] -mr-16 -mt-16"></div>
              <Clock size={32} className="text-teal-400 mb-6" />
              <h4 className="text-lg font-bold mb-2 tracking-tight">Rapid Response</h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">Call before midday for an guaranteed same-day assessment in your area.</p>
              <hr className="mb-6 border-white/10" />
              <a href="tel:07488879077" className="block text-center text-teal-400 font-black text-xl hover:text-teal-300 transition-colors tabular-nums">
                07488 879077
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-teal-800 transition-all shadow-xl flex items-center gap-2"
            >
              Book Specialist Today
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200 ml-2">
               <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                 <ShieldCheck size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Status</p>
                 <p className="text-sm font-bold text-emerald-600 italic">Doctors Available Now</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="prose prose-slate prose-lg max-w-none mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic">The Reality of Same Day Medical Access</h2>
          <p>
            In the modern healthcare environment, 'same day' often sounds like an impossibility. However, by operating outside the standard NHS framework, our private GP service prioritises immediate access. We reserve specific clinical time slots every day for urgent consultations across Lancashire and Manchester.
          </p>
          <p>
            Whether you are suffering from a high fever, sudden respiratory symptoms, or acute pain, our goal is to provide clinical clarity and relief within hours.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">What to Expect During Your Appointment</h3>
          <p>
            Unlike 'hot-hubs' or triaging services, a same day private GP consultation with us is a deep-dive into your clinical presentation. We don't rush. You have 30 minutes of dedicated time with a GMC-registered GP.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Thorough medical history review",
              "Full physical examination of symptoms",
              "Urgent diagnostic tests if required",
              "Instant issuance of private prescriptions",
              "Referral letters to private consultants",
              "Clinical summary and treatment plan"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1" />
                <span className="text-sm font-bold text-slate-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20">Urgent Home Visit Availability</h2>
          <p>
            For many patients needing a same-day appointment, traveling is difficult. Perhaps you have a sick child who is miserable in the car, or you are too unwell to navigate Manchester city traffic. Our same-day private GP service is primarily delivered via home visits.
          </p>
          <p>
            Our doctors travel to you, bringing the clinic to your doorstep. This not only saves you time but also ensures you are assessed in the comfort and safety of your own environment.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6">Who is this service for?</h3>
          <p>
            Our same-day service is utilised by everyone from visiting business travellers staying in Manchester hotels to parents in Preston needing quick reassurance about an infant's wellness. If it's a non-emergency but you feel it cannot wait until tomorrow, we are here for you. We understand that medical concerns don't always follow a 9-to-5 schedule, which is why we offer flexible booking slots to accommodate your needs.
          </p>
          <p>
            The healthcare system can often feel like a maze, especially when you are worried about your health or the health of a loved one. Our same-day private GP service is designed to be a clear, straightforward alternative. We provide the clinical expertise of experienced General Practitioners without the administrative barriers. Every consultation is an opportunity for you to receive a professional diagnosis and a clear treatment plan on the same day you seek medical advice. Whether you are in a bustling office in central Manchester or a quiet residential street in deep Lancashire, our doctors are committed to providing the same high standard of clinical care. We believe that by providing rapid medical access, we are not only helping individual patients but also contributing to the overall wellbeing of the North West community. Your health is your most valuable asset, and we treated it with the respect and urgency it deserve.
          </p>

          <MapEmbed location="manchester" />
          <ServiceSEOExpansion 
            serviceName="Same Day Private GP" 
            locationName="Manchester & Lancashire" 
            locationKey="manchester" 
          />
        </div>

        <MedicalReviewFooter />

        {/* Urgency Callout */}
        <div className="p-10 bg-rose-50 rounded-[3rem] border border-rose-100 mb-24 flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 rounded-3xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xl shadow-rose-600/20">
            <AlertCircle size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-rose-950 mb-2 italic tracking-tight">Recognising Emergency Symptoms</h3>
            <p className="text-rose-800/80 leading-relaxed font-medium text-sm">
              While we provide urgent same-day private care, we are not an emergency service. If you are experiencing chest pain, difficulty breathing, sudden weakness on one side of the body, or severe head trauma, you must call 999 or attend your nearest A&E immediately.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight">Manchester & Lancashire's Trusted Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Diagnosis",
                desc: "GMC registered doctors with extensive UK experience.",
                icon: <Stethoscope size={24} />
              },
              {
                title: "Rapid Prescriptions",
                desc: "Medicine issued and organised on the same day.",
                icon: <Activity size={24} />
              },
              {
                title: "Clear Communication",
                desc: "Clinical details explained in plain, accessible language.",
                icon: <Mail size={24} />
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-teal-600 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{benefit.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-50 rounded-[3.5rem] border border-slate-100">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center">Your Questions Answered</h2>
          <div className="space-y-6">
            {[
              { 
                q: "Do you have appointments available right now?", 
                a: "Yes, we typically maintain same-day slots for patients across Lancashire. Call us at 07488 879077 to check immediate availability." 
              },
              { 
                q: "Can I book a same-day appointment online?", 
                a: "Our online system shows the next available slots. For the most urgent bookings, we always recommend calling as we can sometimes shuffle our medical team to assist faster." 
              },
              { 
                q: "What areas of Lancashire do you cover same-day?", 
                a: "We cover Greater Manchester, Preston, Blackburn, Blackpool, Burnley, and the surrounding towns and villages." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-50 rounded-full text-xs font-black uppercase tracking-widest text-teal-700 mb-8 border border-teal-100">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            Urgent Response Active
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-10 tracking-tighter italic">
            Don't Guess Your Health. <br />
            <span className="text-teal-700 font-bold">See a Doctor Today.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl w-full sm:w-auto"
            >
              Book Specialist
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group px-8 py-5"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-teal-50 transition-all shadow-sm">
                <Phone size={24} className="text-teal-600" />
              </div>
              Speak to a Clinician
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
