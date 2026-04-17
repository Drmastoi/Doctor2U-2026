import React from 'react';
import { Page, FAQ } from '../types';
import HubLink from '../components/HubLink';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Phone, MapPin, ShieldCheck, Clock, Star, MessageSquare, ChevronDown, BrainCircuit, Users, Stethoscope } from 'lucide-react';

interface LocationLandingProps {
  setPage: (page: Page) => void;
  locationName: string;
  serviceType: string;
  h1: string;
  openingParagraph: string;
  price: string;
  inclusions: string[];
  whyChooseUs: string[];
  faqs: FAQ[];
  image: string;
}

export default function LocationLanding({
  setPage,
  locationName,
  serviceType,
  h1,
  openingParagraph,
  price,
  inclusions,
  whyChooseUs,
  faqs,
  image
}: LocationLandingProps) {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Set document title for SEO
    const serviceTitle = serviceType === 'Private Doctor' ? 'Private Doctor' : 'Home Visit Doctor';
    document.title = `${serviceTitle} ${locationName} – Same-Day Appointments & Home Visits | Doctor2U`;

    // Inject Local Business Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": `Doctor2U - ${serviceType} ${locationName}`,
      "description": openingParagraph,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationName,
        "addressRegion": "Lancashire/Manchester",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": locationName === 'Manchester' ? 53.4808 : 53.7632,
          "longitude": locationName === 'Manchester' ? -2.2426 : -2.7031
        },
        "geoRadius": "50"
      },
      "telephone": "07488879077",
      "url": window.location.href,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": serviceType,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": serviceType
            },
            "price": price.replace('£', ''),
            "priceCurrency": "GBP"
          }
        ]
      }
    };
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [locationName, serviceType, openingParagraph, price]);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* SEO Hero Section */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/5 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin size={14} />
                Serving {locationName}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                {h1}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                {openingParagraph}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => setPage('booking')}
                  className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-all shadow-lg flex items-center gap-2"
                >
                  Book Online
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
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span>5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck size={16} className="text-teal-600" />
                  <span>Verified Medical Provider</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={image} 
                  alt={`${serviceType} in ${locationName}`} 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Inclusions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 tracking-tight">Pricing & What's Included</h2>
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-2">{price}</div>
                  <p className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-8">Transparent Flat Fee</p>
                  <ul className="space-y-4">
                    {inclusions.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <CheckCircle2 size={20} className="text-teal-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setPage('booking')}
                    className="w-full mt-10 bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center gap-2"
                  >
                    Check Availability in {locationName}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                Why Choose Doctor2U in {locationName}?
              </h2>
              <div className="space-y-8">
                {whyChooseUs.map((reason, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Subsection - SEO & Unique Angle */}
      <section className="py-20 bg-teal-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-teal-100 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BrainCircuit size={120} className="text-teal-700" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                Optional AI health insights before your appointment
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As an <span className="font-bold text-teal-700">AI-supported private doctor in {locationName}</span>, we give you the tools to better understand your health. Use our optional AI assistant to structure your symptoms and questions before you meet the doctor. 
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Review your generated health insights in your own time, then choose to share them with our GMC-registered doctors. This ensures your clinic or home visit time is focused purely on your diagnosis and treatment plan.
              </p>
              <button 
                onClick={() => setPage('booking')}
                className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-all flex items-center gap-2 group"
              >
                Try AI Insights First
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Clinical Standards - Intent Based Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Expert Local Healthcare</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Answering the questions that matter most to our {locationName} patients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">How quickly can I see a doctor in {locationName}?</h3>
              <p className="text-slate-600 leading-relaxed">We prioritise same-day access. Most clinic appointments and home visits in {locationName} are available within 4-6 hours of booking, bypassing the usual 2-week delays.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Can you see my children?</h3>
              <p className="text-slate-600 leading-relaxed">Yes, our clinicians are experienced in paediatric care. We often visit families in {locationName} for childhood illnesses, providing unhurried, gentle clinical reviews in a comfortable setting.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Can you prescribe and arrange tests?</h3>
              <p className="text-slate-600 leading-relaxed">Absolutely. During your consultation in {locationName}, our doctors can issue private prescriptions and arrange rapid blood tests or scans at local diagnostic centres with results often back in 48 hours.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Do you liaise with my NHS GP?</h3>
              <p className="text-slate-600 leading-relaxed">With your consent, we can share a summary of our consultation and findings with your regular NHS GP to ensure your long-term medical records remain integrated and complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about our {locationName} service.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors hover:bg-slate-50"
                >
                  <span className="font-bold text-slate-900 tracking-tight">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tighter">Ready for a Better Medical Experience?</h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            Fast, reliable, and professional medical care in {locationName}. Book your same-day consultation now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setPage('booking')}
              className="bg-white text-teal-900 px-10 py-5 rounded-2xl font-bold hover:bg-teal-50 transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2"
            >
              Book Your Appointment
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:07488879077"
              className="bg-teal-800 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-700 transition-all border border-teal-700 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call 07488 879077
            </a>
          </div>
        </div>
        <HubLink setPage={setPage} index={10} />
      </section>
    </div>
  );
}
