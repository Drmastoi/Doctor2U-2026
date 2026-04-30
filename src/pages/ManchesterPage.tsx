import React from 'react';
import { MapPin, Clock, Stethoscope, CheckCircle2, ArrowRight, ShieldCheck, Star, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const MANCHESTER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How soon can a private GP visit me in Manchester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We aim for same-day visits, often arriving within 2-4 hours of initial booking depending on your location in Manchester."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer private GP home visits on weekends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Doctor2U provides 7-day-a-week service including Saturdays and Sundays across Manchester."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide prescriptions during the visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our GMC-registered doctors can issue private prescriptions which can be fulfilled at any local pharmacy in Manchester."
      }
    }
  ]
};

export default function ManchesterPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Private GP Manchester | Same-Day Doctor Home Visits" 
        description="Book a GMC-registered private doctor for a same-day home visit in Manchester. Expert clinical care and private GP Manchester services in the comfort of your own home."
        schema={MANCHESTER_SCHEMA}
        canonical="/services/private-gp-manchester"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase">
                <MapPin size={12} />
                <span>Greater Manchester Coverage</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                Private GP <span className="text-teal-700 italic">Manchester.</span> <br />
                Same-Day Home Visits.
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl font-light leading-relaxed mb-10">
                Experience the gold standard of private healthcare. Our doctors provide same-day house calls across Manchester. Call us on <a href="tel:07488879077" className="text-teal-700 font-bold">07488 879077</a> for urgent care.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/book')}
                  className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-800 transition-all shadow-xl shadow-teal-900/20"
                >
                  Book Now
                </button>
                <a 
                  href="tel:07488879077"
                  className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <Phone size={20} className="text-teal-600" />
                  07488 879077
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1515588342416-247c6a690201?auto=format&fit=crop&q=80&w=800" 
                  alt="Manchester City Healthcare" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">4.9/5 Rating</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">In Manchester</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Areas We Serve In <span className="text-teal-700">Manchester</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">Comprehensive coverage across the entire Manchester metropolitan area.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "City Centre", "Salford", "Didsbury", "Chorlton", 
              "Altrincham", "Sale", "Stockport", "Bury",
              "Oldham", "Rochdale", "Bolton", "Wigan"
            ].map(area => (
              <div key={area} className="flex items-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform"></div>
                <span className="font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tight leading-tight">Private Medical Support <br />On Your Terms.</h2>
              <div className="space-y-8">
                {[
                  { title: "No Travel Required", desc: "Our doctors visit you at home, office, or hotel - eliminating wait times and travel stress." },
                  { title: "GMC Registered", desc: "Every clinician is fully licensed, insured, and experienced in UK private practice." },
                  { title: "Same-Day Response", desc: "Often visiting within 2 hours of your booking, ensuring you get care when you need it most." },
                  { title: "Full Clinical Scope", desc: "From prescriptions and blood tests to referrals and specialist care plans." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] relative z-10">
                <ShieldCheck size={48} className="text-teal-400 mb-8" />
                <h3 className="text-3xl font-display font-bold mb-6">Manchester Clinical Governance</h3>
                <p className="text-slate-400 mb-10 font-light leading-relaxed">
                  We maintain the highest clinical standards in Manchester. Our doctors are local practitioners who understand the community and the private healthcare landscape in the North West.
                </p>
                <div className="flex items-center gap-4 pt-10 border-t border-white/10">
                  <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center font-bold text-2xl">A</div>
                  <div>
                    <div className="font-bold">Dr. Ahmed Iqbal</div>
                    <div className="text-sm text-teal-400 uppercase tracking-widest font-bold">Medical Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How soon can a private GP visit me in Manchester?", a: "We aim for same-day visits, often arriving within 2-4 hours of initial booking depending on your location in Manchester." },
              { q: "Do you offer private GP home visits on weekends?", a: "Yes, Doctor2U provides 7-day-a-week service including Saturdays and Sundays across Manchester." },
              { q: "Can you provide prescriptions during the visit?", a: "Yes, our GMC-registered doctors can issue private prescriptions which can be fulfilled at any local pharmacy in Manchester." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-600 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
