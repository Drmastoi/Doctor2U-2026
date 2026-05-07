import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, Scale, Salad
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function WeightManagementLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Medical Weight Management Lancashire | Specialized GP Weight Loss" 
        description="Looking for Medical Weight Management in Lancashire? We provide expert, GMC-led weight loss medical consultations and treatment plans across Preston, Blackburn, and Manchester. Evidence-based care."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12 italic">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <span className="text-slate-900 font-bold tracking-widest uppercase">Weight Management Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200 font-sans italic">
            Medical Weight Loss Specialists | Evidence-Based
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            WEIGHT <br />
            <span className="text-teal-700 italic italic italic">MANAGEMENT</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12 italic italic">
            <div className="flex-1 italic italic italic">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6 italic italic italic italic">
                Achieve sustainable health through medical expertise. Our weights management service in Lancashire provides GMC-doctor-led consultations, specialist treatment plans, and ongoing support to help you reach your goals safely.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 italic italic italic italic italic">
                Sustainable weight loss is a clinical journey, not just a lifestyle change. We provide a space where biological factors—metabolism, hormones, and co-existing health conditions—are properly assessed. Our Lancashire service in Preston and Blackburn focuses on evidence-based medical treatments combined with unhurried doctor oversight.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl italic italic italic italic italic italic font-sans italic">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[60px] -mr-16 -mt-16 italic italic"></div>
              <Scale size={32} className="text-teal-400 mb-6 mx-auto italic italic italic italic" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic italic italic italic italic italic italic font-sans italic">Initial Consultation</h4>
              <p className="text-3xl font-display font-bold text-white mb-2 italic italic italic italic italic italic italic italic italic">£100</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-teal-400 mb-6 italic italic italic italic italic italic italic italic italic font-sans italic">Medical Evaluation</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-500 text-slate-900 py-3.5 rounded-2xl font-black hover:bg-teal-400 transition-all text-sm mb-3 shadow-lg italic italic italic italic italic"
              >
                Inquire Now
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 italic italic italic italic italic italic italic">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-teal-800 transition-all shadow-xl flex items-center gap-2 italic italic italic italic italic italic"
            >
              Start Your Transformation
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200 italic italic italic italic italic italic italic italic font-sans italic">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1 font-sans italic italic italic italic italic">Clinical Status</p>
                 <p className="text-sm font-bold text-slate-900 italic tracking-tight italic italic italic italic italic">GMC Registered Doctors</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Content Body */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal italic italic italic italic italic italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-10 italic italic italic italic italic italic">The Medical Approach to Weight Loss in Lancashire</h2>
          <p>
            Effective weight management is about more than just numbers on a scale; it's about optimizing your overall physiological health. Our service in Lancashire (covering Preston, Blackburn, Burnley, and Lancaster) is led by doctors who understand the complexities of metabolic health.
          </p>
          <p>
            Many patients struggle with weight because underlying medical conditions or side effects of medications haven't been addressed. We perform a thorough medical screening to ensure your weight management plan is safe, effective, and tailored to your specific biology.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic italic italic italic italic italic">What Your Specialist Consultation Includes</h3>
          <p>
            Every weight management journey at Doctor2U begins with a comprehensive medical review. Our unhurried 30-minute sessions provide time for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12 italic italic italic italic italic italic italic">
            {[
              "Complete medical & metabolic history",
              "Biometric screenings (BP, BMI, Waist circumference)",
              "Discussion of hormonal factors",
              "Review of current medications & interactions",
              "Evidence-based lifestyle prescriptive advice",
              "Pharmacological weight loss support (where indicated)",
              "Diagnostic blood testing for underlying health",
              "Regular clinical monitoring & follow-up"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-teal-100 italic italic italic italic italic italic">
                <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-1 italic" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic italic italic italic italic italic leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic italic italic italic italic italic">Medical Weight Loss Treatment Plans</h2>
          <p>
            Working with a private GP allows you access to modern medical weight loss treatments that may not be readily available through initial primary care routes. We provide a rigorous framework for these treatments, ensuring they are used correctly and safely alongside a sustainable health plan.
          </p>
          <p>
            The success of any weight management plan depends on consistent clinical support. In Lancashire, we are seeing an increasing number of patients who have struggled with traditional calorie-counting diets but find success when medical intervention is involved. Our doctors help you understand the relationship between your metabolism, your medications, and your weight goals. We provide a supportive, non-judgemental clinical space where you can explore the biological and psychological factors impacting your health. By choosing our private service, you are opting for a partnership with a clinician who is truly invested in your long-term health outcomes. We don't just focus on the scales; we focus on your blood pressure, your blood sugar levels, and your overall vitality. Our Lancaster and Lancashire patients value the depth of our clinical reviews, ensuring that their weight management journey is as safe as it is effective. From your initial biometric screening until you reach your maintenance phase, we are here to provide the expert oversight you need to succeed.
          </p>
          <p>
            The medical weight management landscape has changed significantly with several breakthroughs in pharmacological support. Our Lancashire GP clinic remains at the forefront of these developments, ensuring that our patients have access to the safest and most effective treatments available. However, we believe that medication should never be a standalone solution. It is an adjunct to a comprehensive lifestyle and metabolic strategy. We work with you to build a foundation of healthy habits that will sustain your results long after the initial treatment phase. Whether you are in the heart of Preston or a smaller community like Whalley or Clitheroe, our private doctors provide the consistent monitoring and clinical pivots necessary to navigate the complexities of weight loss. We understand the biology of weight regain and proactively design strategies to prevent it, ensuring that your investment in your health leads to lasting change. Experience a medical weight management service that respects your biology and empowers your future.
          </p>
          <p>
            The medical weight management landscape has changed significantly with several breakthroughs in pharmacological support. Our Lancashire GP clinic remains at the forefront of these developments, ensuring that our patients have access to the safest and most effective treatments available. However, we believe that medication should never be a standalone solution. It is an adjunct to a comprehensive lifestyle and metabolic strategy. We work with you to build a foundation of healthy habits that will sustain your results long after the initial treatment phase. Whether you are in the heart of Preston or a smaller community like Whalley or Clitheroe, our private doctors provide the consistent monitoring and clinical pivots necessary to navigate the complexities of weight loss. We understand the biology of weight regain and proactively design strategies to prevent it, ensuring that your investment in your health leads to lasting change. Experience a medical weight management service that respects your biology and empowers your future.
          </p>

          <MapEmbed location="lancashire" />
          <ServiceSEOExpansion 
            serviceName="Medical Weight Management" 
            locationName="Lancashire" 
            locationKey="lancashire" 
          />
        </div>

        {/* Pricing/Services Section */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm italic italic italic italic italic italic italic">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 italic tracking-tight mb-4 tracking-tighter italic">Clinical Package <span className="text-teal-700 italic">Details</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] italic font-sans">Transparent Pricing for Medical Weight Loss</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] border border-slate-200 italic italic italic italic italic italic italic">
             <div className="flex justify-between items-center mb-8">
               <div>
                 <h4 className="text-2xl font-display font-bold text-slate-900 italic tracking-tight italic">Initial Medical Review</h4>
                 <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mt-1 italic italic font-sans italic">Lancashire & Manchester</p>
               </div>
               <div className="text-3xl font-display font-bold text-teal-700 italic italic">£100</div>
             </div>
             <p className="text-sm text-slate-500 mb-8 italic italic italic">Includes a full 30-minute GP consultation, comprehensive health screening, and a tailored clinical weight management proposal.</p>
             <button 
               onClick={() => navigate('/book')}
               className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all italic italic italic italic"
             >
               Start My Journey
             </button>
          </div>
        </section>

        {/* FAQ Area */}
        <section className="mb-24 px-12 py-16 bg-slate-900 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden italic italic italic italic italic italic italic italic">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl font-display font-bold mb-10 tracking-tight italic italic italic italic italic italic italic">Weight Management <span className="text-teal-400 italic italic italic italic italic italic">Q&A</span></h2>
          <div className="space-y-6">
            {[
              { 
                q: "Is medical weight loss for everyone?", 
                a: "Medical weight loss is typically indicated for individuals with a BMI over 30, or a BMI over 27 with weight-related health conditions. Our initial consultation determines if our service is clinically appropriate for you." 
              },
              { 
                q: "Do you offer home visits for weight management?", 
                a: "Yes. Many patients in Lancashire prefer the privacy of a home visit for their weight management journey. Our doctors can perform initial biometric screenings and history taking in your home." 
              },
              { 
                q: "What is the success rate of medical weight loss?", 
                a: "Success depends on the individual's commitment to a clinical plan. When lifestyle changes are supported by medical expertise and ongoing monitoring, patients often see more significant and sustainable results than with standard diet plans alone." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 italic italic italic italic italic italic italic italic">
                <h4 className="text-lg font-bold text-teal-400 mb-2 underline decoration-teal-400/30 underline-offset-4 italic italic font-sans italic italic">Question: {faq.q}</h4>
                <p className="text-slate-400 leading-relaxed font-light italic italic italic italic">Answer: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center italic italic italic italic italic italic italic italic italic">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic italic italic italic italic italic italic italic italic">
             Scientifically Proven. <br />
            <span className="text-teal-700 font-bold italic italic italic italic italic italic italic italic italic italic font-sans">GP-Led Weight Loss.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 italic italic italic italic italic italic italic italic italic italic">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-800 transition-all shadow-2xl w-full sm:w-auto italic italic italic italic italic italic italic italic italic italic"
            >
              Consult a Specialist
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group italic italic italic italic italic italic italic italic italic italic italic"
            >
               07488 879077
            </a>
          </div>
           <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.25em] italic italic italic italic italic italic italic italic italic italic italic italic italic">
            Preston • Blackburn • Burnley • Manchester • Chorley
          </p>
        </div>
      </div>
    </div>
  );
}
