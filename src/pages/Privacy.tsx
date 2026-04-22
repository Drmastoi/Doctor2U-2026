import React from 'react';
import { Shield, ArrowLeft, Brain, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import HubLink from '../components/HubLink';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          to="/"
          className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </Link>

        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
          >
            <Shield size={12} />
            <span>Updated April 2026</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Privacy <span className="text-teal-700">Policy</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Your privacy is our priority. This policy outlines how we handle your personal and medical data at Doctor2U.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
            <div className="flex items-center gap-3 mb-4 text-teal-700">
              <Brain size={24} />
              <h2 className="text-xl font-bold m-0">AI Tool & Data Usage</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our optional AI Health Analysis tool is designed to assist you in preparing for your consultation. 
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <Lock size={16} className="text-teal-600 shrink-0 mt-1" />
                <span><strong>Encryption:</strong> All symptom data is encrypted in transit and at rest using industry-standard protocols.</span>
              </li>
              <li className="flex gap-3">
                <Eye size={16} className="text-teal-600 shrink-0 mt-1" />
                <span><strong>Limited Access:</strong> Your AI-generated analysis is only accessible to you and the GMC-registered doctor you choose to share it with during your consultation.</span>
              </li>
              <li className="flex gap-3">
                <Brain size={16} className="text-teal-600 shrink-0 mt-1" />
                <span><strong>Non-Diagnostic:</strong> We do not use your data for automated diagnosis or treatment decisions. All medical judgments are made by human clinicians.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">1. Data Collection</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We collect personal information (name, contact details) and sensitive medical information required to provide private doctor services. This includes clinical notes, prescription history, and records of consultations.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">2. Information Sharing</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We do not share your medical records with the NHS or third parties without your explicit consent, unless required by law or for your immediate safety. If you opt-in, we can send a summary of your consultation to your regular NHS GP.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">3. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Under GDPR, you have the right to access your medical records, request corrections, or ask for your data to be deleted (subject to clinical record-keeping requirements).
          </p>
        </div>
        <HubLink index={11} />
      </div>
    </div>
  );
}
