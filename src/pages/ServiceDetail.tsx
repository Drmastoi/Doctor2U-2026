import React from 'react';
import { FAQ } from '../types';
import HubLink from '../components/HubLink';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  whoItIsFor: string[];
  whatHappens: string[];
  pricing: string;
  faqs: FAQ[];
  image: string;
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  whoItIsFor,
  whatHappens,
  pricing,
  faqs,
  image,
}: ServiceDetailProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <SEO
        title={`${title} ${subtitle}`}
        description={typeof description === 'string' ? description : `${title} with Doctor2U across Manchester and Lancashire.`}
      />
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/5 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                {title}
              </h1>
              <p className="text-xl text-teal-700 font-bold mb-8 uppercase tracking-widest">{subtitle}</p>
              <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                {description}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/book')}
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Who It Is For</h3>
              <ul className="space-y-4">
                {whoItIsFor.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Process</h3>
              <ul className="space-y-4">
                {whatHappens.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-700 text-xs font-bold flex items-center justify-center shrink-0 border border-teal-100">
                      {i + 1}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Investment</h3>
              <div className="text-4xl font-bold text-teal-400 mb-6">{pricing}</div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We provide transparent, fixed-price consultations with no hidden fees. All prescriptions and referrals are included in the price.
              </p>
              <button
                onClick={() => navigate('/book')}
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg mb-4"
              >
                Book Online Now
              </button>
              <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <ShieldCircle className="text-teal-500" size={16} />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown className={`text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HubLink index={12} />
      </div>
    </div>
  );
}

function ShieldCircle({ className, size }: { className?: string, size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
