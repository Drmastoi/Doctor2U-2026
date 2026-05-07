import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, 
  Phone, Activity, HeartPulse, Stethoscope, Mail, Calendar, Baby
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceSEOExpansion from '../../components/ServiceSEOExpansion';
import MedicalReviewFooter from '../../components/MedicalReviewFooter';
import MapEmbed from '../../components/MapEmbed';

export default function PrivateGPChildrenLancashire() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-slate-900">
      <SEO 
        title="Private GP for Children Lancashire | Expert Paediatric Home Visits" 
        description="Looking for a Private Children's GP in Lancashire? We provide expert, same-day private doctor home visits for infants and children across Preston, Blackburn, and Chorley. Fast, unhurried care."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-teal-700 transition-colors">Home</button>
          <span>/</span>
          <span className="text-slate-900 font-bold uppercase tracking-widest">Private GP Children Lancashire</span>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-pink-200 font-sans italic">
            Specialist Paediatric Care | Lancashire Wide
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            PRIVATE GP <br />
            <span className="text-pink-600 italic italic">FOR CHILDREN</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12 italic">
            <div className="flex-1 italic">
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6 italic italic italic">
                When your child is unwell, waiting isn't an option. Our private children's GP service in Lancashire brings expert medical care directly to your home, providing the rapid reassurance and unhurried clinical environment your family deserves.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 italic italic italic italic">
                As parents, we understand the stress of navigating public health services during a child's illness. Our GMC-registered doctors specialise in home-based paediatric assessments across Preston, Blackburn, Chorley, and Blackpool, ensuring children are seen in a space where they feel most comfortable and secure.
              </p>
            </div>
            <div className="w-full lg:w-72 bg-slate-900 text-white p-8 rounded-[3rem] shrink-0 text-center relative overflow-hidden group shadow-2xl italic italic italic italic italic italic text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[60px] -mr-16 -mt-16 italic italic"></div>
              <Baby size={32} className="text-pink-400 mb-6 mx-auto italic italic italic italic" />
              <h4 className="text-lg font-bold mb-4 tracking-tight italic italic italic italic italic italic italic font-sans italic">Home Visit</h4>
              <p className="text-3xl font-display font-bold text-white mb-2 italic italic italic italic italic italic italic italic">£130</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-pink-400 mb-6 italic italic italic italic italic italic italic italic font-sans italic">Total Clinical Fee</p>
              <button 
                onClick={() => navigate('/book')}
                className="w-full bg-teal-500 text-slate-900 py-3.5 rounded-2xl font-black hover:bg-teal-400 transition-all text-sm mb-3 shadow-lg italic italic italic italic italic"
              >
                Book Children's GP
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 italic italic italic italic italic italic">
            <button 
              onClick={() => navigate('/book')}
              className="bg-black text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2 italic italic italic italic italic italic"
            >
              See a Doctor Today
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200 italic italic italic italic italic italic italic font-sans italic">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1 font-sans italic italic italic italic">Availability</p>
                 <p className="text-sm font-bold text-slate-900 italic tracking-tight italic italic italic italic">Same-Day Guaranteed</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Content Body */}
        <div className="prose prose-slate prose-lg max-w-none mb-24 font-normal italic italic italic italic italic">
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic not-prose mb-10 italic italic italic italic italic">Exceptional Paediatric Care in Your Lancashire Home</h2>
          <p>
            Children's health requires a specific, gentle approach combined with deep clinical expertise. Our Lancashire private GP service for children is designed around the needs of modern families who value thoroughness and rapid access. By choosing a home visit, you eliminate the stress of travel, car seats, and busy waiting rooms for your unwell child.
          </p>
          <p>
            Our consultations are 30 minutes as standard—triple the length of typical appointments. This allows our doctors to bond with your child, perform a thorough physical assessment, and listen to all your parental concerns without the pressure of a ticking clock.
          </p>

          <h3 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-6 not-prose tracking-tight italic italic italic italic italic italic">Common Childhood Presentations We Manage</h3>
          <p>
            Our GMC-registered General Practitioners have extensive experience in paediatric care throughout the UK. Our Lancashire service frequently addresses:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-12 italic italic italic italic italic italic">
            {[
              "Acute fevers & unexplained temperatures",
              "Childhood respiratory & chest infections",
              "Inner ear & throat infections (ENT)",
              "Digestive issues, vomiting & dehydration",
              "Paediatric dermatological (skin) flares",
              "Allergies & allergic reaction reviews",
              "Growth & development concerns",
              "Rapid referral for specialist paediatricians"
            ].map(item => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-pink-100 italic italic italic italic italic">
                <CheckCircle2 size={18} className="text-pink-600 shrink-0 mt-1 italic" />
                <span className="font-bold text-slate-800 tracking-tight text-sm italic italic italic italic italic leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic mt-20 not-prose mb-8 italic italic italic italic italic italic">Service Areas: Preston, Blackburn & Beyond</h2>
          <p>
            We cover the major Lancashire hubs, from the suburbs of Preston and the valleys of Blackburn to the coastal communities of Blackpool and Lytham St Annes. Our doctors travel with a full paediatric kit, including specialist blood pressure cuffs for small arms, paediatric pulse oximeters, and kits for checking biological indicators in children.
          </p>
          <p>
            Parenting in Lancashire comes with its own set of challenges, and navigating the healthcare system shouldn't be one of them. We believe that every child deserves prompt, professional medical attention in a setting that minimizes their stress and anxiety. Our private GP service for children is built on the foundation of clinical excellence and compassionate care. We prioritize cases where rapid reassurance is needed, ensuring that parents have access to expert advice when they are most concerned. Every interaction is governed by the highest clinical standards, ensuring that your child's health is managed with the respect and expertise it deserves. Our doctors take the time to explain their findings and treatment plans in plain, accessible language, ensuring you leave the consultation with a clear understanding of your child's health and the next steps for their recovery. Whether you are in a quiet residential street in Leyland or a bustling family home in central Preston, our mobile paediatric service is just a phone call away. We are proud to be a trusted medical partner for Lancashire families, providing the clinical quality and rapid access that modern parents require.
          </p>
          <p>
            The clinical environment of a child's home is often the most revealing place for a medical assessment. Away from the sterile and often intimidating atmosphere of a hospital or central clinic, children are more likely to exhibit their true clinical state—whether that is their playfulness, their activity levels, or the specific way they are reacting to illness. Our Lancashire doctors are highly skilled in 'observational paediatrics,' picking up on the subtle cues that indicate a child's underlying health status. This level of attentive, unhurried care is what defines our private GP service. We are parents ourselves, and we bring that same level of concern and meticulousness to every home visit we perform in Lancashire. From checking a persistent cough in Morecambe to evaluating a fever in Ormskirk, we ensure that your child is given the absolute best clinical oversight, grounded in evidence-based pathways and a genuine care for the next generation of Lancashire residents.
          </p>

          <MapEmbed location="lancashire" />
          <ServiceSEOExpansion 
            serviceName="Private GP for Children" 
            locationName="Lancashire" 
            locationKey="lancashire" 
          />
        </div>

        <MedicalReviewFooter />

        {/* CTA */}
        <div className="text-center italic italic italic italic italic italic italic italic">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight italic italic italic italic italic italic italic italic">
             Gentle, Expert Care. <br />
            <span className="text-pink-600 font-bold italic italic italic italic italic italic italic italic">In Your Family Home.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 italic italic italic italic italic italic italic italic italic">
            <button 
              onClick={() => navigate('/book')}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl w-full sm:w-auto italic italic italic italic italic italic italic italic italic"
            >
              Book Children's GP
            </button>
            <a 
              href="tel:07488879077"
              className="flex items-center gap-4 text-slate-900 font-bold text-xl group italic italic italic italic italic italic italic italic italic italic italic"
            >
              07488 879077
            </a>
          </div>
           <p className="mt-8 text-[11px] text-slate-400 font-black uppercase tracking-[0.25em] italic italic italic italic italic italic italic italic italic italic italic italic">
            Preston • Blackburn • Chorley • Blackpool • Lytham
          </p>
        </div>
      </div>
    </div>
  );
}
