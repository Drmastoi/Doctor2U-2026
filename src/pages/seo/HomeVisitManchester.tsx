import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Home as HomeIcon, Clock, ShieldCheck, Star, 
  MapPin, Phone, MessageSquare, BrainCircuit, Users, Stethoscope, 
  ChevronDown, Calendar, Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../types';

interface HomeVisitManchesterProps {}

export default function HomeVisitManchester({}: HomeVisitManchesterProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    document.title = "Home Visit Doctor Manchester – Same-Day Private Doctor Visits | Doctor2U";
    
    // SEO Schema Injections
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can a home visit doctor arrive in Manchester?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We aim for same-day home visits across Greater Manchester. For calls received before 11am, we usually guarantee a consultation on the same day."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be registered with an NHS GP to use Doctor2U?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you do not need to be registered with us or any specific NHS GP. We provide one-off or ongoing private medical care for everyone."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of Manchester do you cover for home visits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We cover the entire Greater Manchester area, including Manchester City Centre, Salford, Stockport, Trafford, Bury, Bolton, Rochdale, and Oldham."
          }
        }
      ]
    };

    const medicalSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Doctor2U Manchester Home Visits",
      "alternateName": "Home Visit Doctor Manchester",
      "url": window.location.href,
      "logo": "https://doctor2u.co.uk/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447488879077",
        "contactType": "customer service",
        "areaServed": "Manchester",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manchester",
        "addressRegion": "Greater Manchester",
        "addressCountry": "GB"
      }
    };

    const scripts = [faqSchema, medicalSchema].map(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach(script => document.head.removeChild(script));
    };
  }, []);

  const faqs = [
    {
      question: "How quickly can a home visit doctor arrive in Manchester?",
      answer: "At Doctor2U, we prioritise speed and convenience. For most requests in the Greater Manchester area received before 11am, we can arrange a same-day home visit. Our goal is to have a doctor with you within 4-6 hours of your initial booking."
    },
    {
      question: "Do I need to be registered with an NHS GP to use this service?",
      answer: "No registration is required. We operate as a private medical provider, offering both one-off consultations and ongoing support. Whether you are a local resident, a busy professional, or visiting Manchester for work or leisure, you can access our doctors immediately."
    },
    {
      question: "What equipment does the doctor bring to my home?",
      answer: "Our doctors arrive fully equipped with a clinical kit suitable for primary care assessments. This includes diagnostic tools for checking blood pressure, oxygen saturation, temperature, blood glucose, and standard physical examinations. We can also perform basic tests like urinalysis on-site."
    },
    {
      question: "Can you issue prescriptions and sick notes at my home?",
      answer: "Yes. Following a clinical assessment, if medication is required, the doctor can issue a private prescription. We can also provide private sick notes (Fit Notes) and specialist referral letters if your condition requires further investigation or hospital-based care."
    },
    {
      question: "Are your doctors GMC registered?",
      answer: "Every doctor at Doctor2U is fully licensed and registered with the General Medical Council (GMC). They have extensive experience in both the NHS and private sectors, ensuring you receive the highest standard of evidence-based medical care."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=2000"
            alt="Doctor providing home consultation"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
              <HomeIcon size={14} />
              Home Visit Doctor Manchester
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter">
              Private Doctor Home Visits in <span className="text-teal-400">Manchester.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Avoid the travel and the waiting room. Get a professional, GMC-registered private doctor to visit you at home in Manchester today. Expert clinical care delivered in the comfort and privacy of your own residence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/book')}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-500 transition-all shadow-xl shadow-teal-900/40 flex items-center gap-2 text-lg"
              >
                Book Same-Day Visit
                <ArrowRight size={20} />
              </button>
              <a 
                href="tel:07488879077"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2 text-lg"
              >
                <Phone size={20} className="text-teal-400" />
                07488 879077
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <ShieldCheck className="text-teal-600" />
              <span>GMC REGISTERED</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Star className="text-teal-600 fill-teal-600" />
              <span>5.0 GOOGLE RATING</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Users className="text-teal-600" />
              <span>OVER 10,000+ PATIENTS</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Activity className="text-teal-600" />
              <span>NICE GUIDELINE ALIGNED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form SEO Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 tracking-tight">Expert Private Doctor Home Visits in Manchester & Greater Manchester</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  In today's fast-paced environment, accessing dependable medical care shouldn't be a logistical hurdle. Whether you are navigating a demanding professional list in Manchester city centre, managing a household with young children in Didsbury, or supporting an elderly relative in the suburbs of Stockport, the traditional clinic model often falls short of modern expectations. Long wait times for NHS GP appointments—frequently exceeding two weeks—and the sheer stress of travelling while unwell have driven a significant shift towards patient-centric, private medical services.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Doctor2U's <strong>home visit doctor Manchester</strong> service is meticulously designed to bridge this clinical gap. We bring the full capabilities of a primary care clinic directly to your doorstep, providing a comprehensive medical assessment in the absolute privacy and comfort of your own home. Our mission is built on the foundation of unhurried, expert care, ensuring that every patient receives the attention and diagnostic depth they deserve, exactly when and where they need it most.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Why a Home Visit is Often the Superior Clinical Choice</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Opting for a private home visit isn't merely a matter of convenience; it frequently leads to better clinical observations and a significantly reduced stress profile for the patient. When you are suffering from acute illness or chronic pain, the physical and mental toll of reaching a clinic can actually exacerbate your symptoms. A home-based consultation allows our GMC-registered doctors to observe you in your natural environment, often uncovering vital lifestyle or environmental factors that might be missed in a sterile clinic setting.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Furthermore, for families with young children, a home visit eliminates the trauma of dragging a distressed child into a cold waiting room. Similarly, for elderly patients with mobility constraints or cognitive challenges like dementia, being assessed in familiar surroundings can lead to a far more accurate clinical picture and a more relaxed, productive interaction.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">The Manchester Communities We Serve</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                   Our network of private doctors covers the entire Greater Manchester footprint. We understand that Manchester is a diverse collection of distinct communities, each with its own needs. We provide rapid-response home visits to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="p-4 border-l-2 border-teal-600 bg-slate-50">
                    <p className="font-bold text-slate-900 mb-1">Manchester City Centre & Salford</p>
                    <p className="text-xs text-slate-500">Perfect for busy professionals in Spinningfields, Ancoats, and MediaCityUK who require efficient, high-end medical care without the office downtime.</p>
                  </div>
                  <div className="p-4 border-l-2 border-teal-600 bg-slate-50">
                    <p className="font-bold text-slate-900 mb-1">South Manchester & Cheshire Borders</p>
                    <p className="text-xs text-slate-500">Extensive coverage in Didsbury, Chorlton, Altrincham, and Wilmslow. We frequently support families and executive professionals in these vibrant residential areas.</p>
                  </div>
                  <div className="p-4 border-l-2 border-teal-600 bg-slate-50">
                    <p className="font-bold text-slate-900 mb-1">Stockport & East Manchester</p>
                    <p className="text-xs text-slate-500">Reliable doctor visits in Stockport town centre, Bramhall, Hazel Grove, and across the Tameside border.</p>
                  </div>
                  <div className="p-4 border-l-2 border-teal-600 bg-slate-50">
                    <p className="font-bold text-slate-900 mb-1">North Manchester & Lancashire Fringes</p>
                    <p className="text-xs text-slate-500">Reaching patients in Bury, Bolton, Rochdale, and Oldham who value the same-day availability that local surgery lists often lack.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Clinical Standards: NICE Alignment and GMC Integrity</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  While we pride ourselves on speed and convenience, clinical safety remains the non-negotiable cornerstone of Doctor2U. Every private doctor on our panel is fully licensed and registered with the General Medical Council (GMC). More importantly, our clinical protocols are strictly aligned with the National Institute for Health and Care Excellence (NICE) guidelines. 
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  This alignment means that whether you are being treated for an acute chest infection, a complex dermatological issue, or a mental health concern, you are receiving evidence-based medicine that matches the highest standards of the UK's healthcare framework. We don't just 'visit'; we provide a comprehensive clinical consultation that integrates seamlessly with your overall health journey, including optional liaison with your regular NHS GP to ensure continuity of care.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Modern Innovation: The AI Health Insight Edge</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  What truly differentiates Doctor2U from traditional private GP services in Manchester is our integration of innovative health technology. We believe that an informed patient is a healthier patient. Our optional AI health insight tool allows you to securely input your symptoms and medical history before the doctor even rings your doorbell. 
                </p>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  By reviewing these AI-generated insights in your own time, you can better articulate your concerns and health goals. You then have the choice to share this structured data directly with our clinician. This process ensures that every second of your face-to-face consultation is high-value; rather than spending time on manual data entry, the doctor can dive straight into advanced clinical reasoning, diagnosis, and the formulation of your treatment and prescription plan.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Prescriptions, Tests, and Referrals: A Self-Contained Service</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A Doctor2U home visit is not a 'referral-only' triage. Our goal is to conclude the consultation with a definitive path to recovery. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Instant Prescriptions</p>
                      <p className="text-xs text-slate-500">Private prescriptions issued on-site and sent electronically to your nearest open pharmacy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 size={24} className="text-teal-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Rapid Diagnostics</p>
                      <p className="text-xs text-slate-500">Home-based blood draws or immediate referrals for private MRI, CT, and Ultrasound scans.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Same-Day Booking Card */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 tracking-tight">Book Same-Day Visit</h3>
                    <div className="text-4xl font-bold mb-2">£130</div>
                    <p className="text-teal-400 font-bold uppercase tracking-widest text-xs mb-8">Flat Fee - Any Area in Manchester</p>
                    
                    <ul className="space-y-4 mb-10">
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                        <span>Professional Home Examination</span>
                      </li>
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                        <span>Private Prescriptions Included</span>
                      </li>
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                        <span>Referral Letters If Required</span>
                      </li>
                      <li className="flex gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                        <span>Available 7 Days a Week</span>
                      </li>
                    </ul>

                    <button 
                      onClick={() => navigate('/book')}
                      className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center gap-2"
                    >
                      Book Now
                      <ArrowRight size={18} />
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-500 mt-4 uppercase tracking-widest font-bold">Verified GMC Registered Doctors</p>
                  </div>
                </div>

                {/* Coverage Map Card */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MapPin className="text-teal-700" size={20} />
                    Greater Manchester Coverage
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-500">
                    {['Manchester City Centre', 'Salford', 'Stockport', 'Trafford', 'Didsbury', 'Altrincham', 'Bury', 'Bolton', 'Wigan', 'Oldham'].map(area => (
                      <div key={area} className="px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">{area}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NICE Alignment Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="p-8 bg-white rounded-[3rem] shadow-xl border border-slate-100">
                <ShieldCheck size={48} className="text-teal-700 mb-6" />
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 tracking-tight">NICE-Aligned Clinical Excellence</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Clinical safety is our paramount concern. All our doctors follow strictly defined protocols aligned with NICE (National Institute for Health and Care Excellence) guidelines. This ensuring you receive evidence-based care that matches the highest standards of the UK healthcare system.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-teal-50/50 rounded-2xl border border-teal-100/50">
                    <CheckCircle2 size={24} className="text-teal-700 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Evidence-Based Treatment</p>
                      <p className="text-sm text-slate-500">Using the latest clinical research to guide diagnosis and prescriptions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-teal-50/50 rounded-2xl border border-teal-100/50">
                    <CheckCircle2 size={24} className="text-teal-700 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Seamless Integration</p>
                      <p className="text-sm text-slate-500">We work alongside the wider NHS, ensuring your care is documented and safe.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                Quality Healthcare, <br />
                <span className="text-teal-700">Delivered Simply.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Step 1: Clinical Triage</h4>
                    <p className="text-slate-500 leading-relaxed">Rapid review of your symptoms by our medical team to ensure home assessment is appropriate.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-700 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <HomeIcon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Step 2: Home Consultation</h4>
                    <p className="text-slate-500 leading-relaxed">A GMC-registered doctor arrives at your home for a comprehensive physical and clinical assessment.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Step 3: Personalised Plan</h4>
                    <p className="text-slate-500 leading-relaxed">Receive your diagnosis, same-day prescriptions, and referral letters immediately to start your recovery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Your Questions <span className="text-teal-700">Answered</span></h2>
            <p className="text-slate-500 font-medium">Clear answers about our private home medical services in Manchester.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors hover:bg-slate-50 group"
                >
                  <span className="font-bold text-slate-900 tracking-tight text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-all ${activeFaq === index ? 'rotate-180 bg-teal-700 text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {activeFaq === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-8 pb-8"
                  >
                    <p className="text-slate-500 leading-relaxed text-base">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-teal-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full -mr-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 tracking-tighter">Ready to see a doctor at home?</h2>
              <p className="text-xl text-teal-100 mb-12 leading-relaxed">
                Book your same-day private doctor visit in Manchester now. Professional, unhurried, and delivered in confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-white text-teal-900 px-10 py-5 rounded-2xl font-bold hover:bg-teal-50 transition-all shadow-xl shadow-black/20 flex items-center gap-2 group"
                >
                  Book My Visit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:07488879077"
                  className="bg-teal-800 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-700 transition-all border border-teal-700 flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call 07488 879077
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
