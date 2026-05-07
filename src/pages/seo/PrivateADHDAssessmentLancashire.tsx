import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, BrainCircuit
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function PrivateADHDAssessmentLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private ADHD Assessment Lancashire | Adult & Child ADHD Diagnosis" 
        description="Looking for a Private ADHD Assessment in Lancashire? We provide expert, GMC-led ADHD diagnostic assessments for adults and children with no waiting lists. Book your consultation today."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <span className="text-slate-900">Private ADHD Assessment Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-200">
            Neurodiversity Specialists | Lancashire & Manchester
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE ADHD <br />
            <span className="text-teal-700 italic">ASSESSMENT LANCASHIRE</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
            <div className="flex-1">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                Waiting years for an ADHD diagnosis can be life-altering. Our private ADHD assessment service in Lancashire eliminates waiting lists, providing expert clinical evaluation for adults and children within days.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Attention Deficit Hyperactivity Disorder (ADHD) often goes unrecognised into adulthood, leading to challenges with work, relationships, and self-esteem. For children, early diagnosis is critical for social and educational support. Our GMC-registered doctors provide a comprehensive, multi-stage assessment process that follows international clinical standards.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[2.5rem] shrink-0 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] -mr-16 -mt-16"></div>
              <BrainCircuit size={32} className="text-indigo-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic">Our Fee</h4>
              <p className="text-3xl font-display font-bold text-white mb-2">£695</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-indigo-400 mb-6">Full Diagnostic Report</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-500 text-slate-900 py-3.5 rounded-2xl font-black hover:bg-teal-400 transition-all text-sm mb-3 shadow-lg"
              >
                Book Assessment
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-indigo-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-indigo-800 transition-all shadow-xl flex items-center gap-2"
            >
              Start Your Journey Today
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6">
               <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-teal-600">
                 <ShieldCheck size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Clinic Status</p>
                 <p className="text-sm font-bold text-slate-900 italic tracking-tight">Accepting New Patients</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Deep Dive Content - SEO Focused */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-8 italic">The Path to Clinical Clarity</h2>
          <p>
            An ADHD assessment is more than just a questionnaire; it is a clinical investigation into the functional impact of neurodivergence on your life. In Lancashire, many people suffer in silence because of the 'referral gap'—the time between noticing symptoms and receiving professional oversight.
          </p>
          <p>
            Our private ADHD assessment service covers Preston, Blackburn, Burnley, and Manchester. We provide a space where you are heard, understood, and assessed without the pressure of a 10-minute timer.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight">Our Assessment Methodology</h3>
          <p>
            We adhere to the NICE guidelines (National Institute for Health and Care Excellence) to ensure that every diagnosis is robust and defensible. This is critical if you intend to seek support from employers or educational institutions after your assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12">
            {[
              "Clinical interview (Adult/Child focus)",
              "Validated symptom rating scales (DIVA-5)",
              "Review of developmental history",
              "Evaluation of current functional impact",
              "Co-morbidity screening (Anxiety/Depression)",
              "Comprehensive diagnostic reporting",
              "Evidence-based recommendations",
              "Specialist referral (where indicated)"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-1" />
                <span className="font-bold text-slate-800 tracking-tight text-sm leading-tight italic">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic">Adult ADHD Assessment in Lancashire</h2>
          <p>
            ADHD in adults often presents as 'chronic overwhelm,' difficulty with time management, or high levels of internalised restlessness. Many adults in Lancashire have spent decades developing 'masking' techniques to hide these difficulties.
          </p>
          <p>
            A private adult ADHD assessment allows for a retrospective look at your childhood while focusing on the specific challenges of your current life—whether that's navigating a career in Manchester or managing family life in Preston.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic">Paediatric ADHD Assessment (Children)</h2>
          <p>
            For children, an ADHD diagnosis can be the key to unlocking educational support and EHCP (Education, Health and Care) plans. We work sensitively with families to understand a child's behaviour in both home and school settings, ensuring a 360-degree view of their neurodiversity.
          </p>
          <p>
            The impact of ADHD on a child's academic and social life in Lancashire can be profound. Without the correct support, many children feel misunderstood or 'left behind.' Our assessment process is designed to be as stress-free as possible for both the child and their parents. We provide a thorough, evidence-based evaluation that can be used to inform school interventions and specialist educational support. By choosing a private assessment, you are taking a proactive step in your child's developmental journey, ensuring they have the tools and recognition they need to succeed. Our diagnostic reports are highly detailed and designed to be accessible to teachers and SENCOs (Special Educational Needs Coordinators), bridging the gap between clinical diagnosis and practical support in the classroom. We are committed to neuro-affirming care that celebrates a child's strengths while identifying the support they need to navigate a world that isn't always built for their brain.
          </p>
          <p>
            The journey toward an ADHD diagnosis in adulthood is often one of profound self-discovery. For many of our Lancashire patients, a diagnosis provides the 'missing piece' of a puzzle they have been trying to solve for decades. Our clinical approach is grounded in the understanding that neurodivergence is not a deficit to be cured, but a different way of processing the world that requires specific strategies and support. We provide a space where your experiences are validated and your challenges are viewed through a clinical lens that prioritizes functional improvement and personal growth. Our diagnostic reports don't just list symptoms; they provide a roadmap for the future, including recommendations for workplace adjustments and personal management techniques. By choosing a private ADHD assessment in Lancashire, you are investing in a clearer understanding of yourself, enabling you to navigate your career, relationships, and personal life with newfound confidence and clarity.
          </p>

          <MapEmbed location="lancashire" />
          <ServiceSEOExpansion 
            serviceName="Private ADHD Assessment" 
            locationName="Lancashire" 
            locationKey="lancashire" 
          />
        </div>

        {/* Pricing/Value Section */}
        <section className="mb-24 py-16 px-10 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -ml-32 -mt-32"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 italic tracking-tight mb-4 tracking-tighter">Diagnostic Assessment Package</h2>
            <p className="text-slate-500 font-medium">Clear, transparent pricing with no hidden clinical fees.</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] border border-indigo-100 shadow-xl">
             <div className="flex justify-between items-center mb-8">
               <div>
                 <h4 className="text-2xl font-display font-bold text-slate-900 tracking-tight italic">Full ADHD Evaluation</h4>
                 <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">Adults & Children 7+ </p>
               </div>
               <div className="text-3xl font-display font-bold text-teal-700">£695</div>
             </div>
             <ul className="space-y-4 mb-10">
               {[
                 "Initial clinical screening interview",
                 "Full specialist diagnostic assessment",
                 "Detailed PDF report & formal diagnosis",
                 "Follow-up results discussion",
                 "Recommendations for work/education"
               ].map(benefit => (
                 <li key={benefit} className="flex items-center gap-3 text-sm font-bold text-slate-600 italic">
                   <CheckCircle2 size={16} className="text-emerald-500" /> {benefit}
                 </li>
               ))}
             </ul>
             <button 
               onClick={() => navigate('/book')}
               className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl"
             >
               Book My Assessment
             </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight text-center italic">ADHD Assessment <span className="text-teal-700">Insights</span></h2>
          <div className="space-y-4">
            {[
              { 
                q: "What is the waiting time for a private assessment?", 
                a: "Currently, we can offer ADHD assessments within 7-14 days. This is a significant reduction from the multi-year waits often seen in public pathways." 
              },
              { 
                q: "Is your diagnosis recognised by the NHS?", 
                a: "We follow NICE guidelines to ensure maximum compatibility. While most NHS trusts and employers recognise a private diagnosis from a GMC-registered specialist, we always recommend checking 'shared care' arrangements if you intend to seek NHS medication eventually." 
              },
              { 
                q: "Do you provide ADHD medication?", 
                a: "We specialise in the diagnostic journey and reporting. If a diagnosis is confirmed, we can provide a treatment plan and referral to a psychiatrist for medication titration if that is the path you wish to take." 
              },
              { 
                q: "Can I use insurance for my ADHD assessment?", 
                a: "Many private health insurance providers cover ADHD assessments. We recommend contacting your provider with our clinician's details to confirm coverage before booking." 
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-indigo-100 transition-colors italic">
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Question: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">Answer: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <MedicalReviewFooter />

        {/* Final CTA */}
        <div className="text-center p-16 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tighter leading-tight italic">
            Unlock Your <span className="text-teal-400">Potential.</span> <br />
            Get Tested This Week.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-500 text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-teal-400 transition-all shadow-2xl w-full sm:w-auto"
            >
              Start Assessment
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-white font-bold text-lg group"
            >
               07488 879077
               <ArrowRight size={20} className="text-teal-400 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <p className="mt-8 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] font-sans">
            Lancashire • Manchester • Preston • Blackburn • Burnley
          </p>
        </div>
      </div>
    </div>
  );
}
