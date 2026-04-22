import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck, AlertCircle, CheckCircle2,
  Activity, Users, Scale, Microscope,
  Search, Lock, Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HubLink from '../components/HubLink';
import SEO from '../components/SEO';

export default function ClinicalGovernance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-24">
      <SEO
        title="Clinical Governance and Safety Standards"
        description="Read how Doctor2U manages clinical governance, NICE-aligned care, patient safety, escalation protocols, and data protection across private consultations."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-teal-700 font-bold text-xs uppercase tracking-[0.2em] mb-6"
          >
            <ShieldCheck size={18} />
            Clinical Standards Framework
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-none">
            Clinical <br /> <span className="text-teal-700">Governance.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
            Safety, quality, and evidence-based medicine are the pillars of our practice. Our clinical governance framework ensures that every patient interaction in Manchester meets the highest regulatory and ethical standards.
          </p>
        </div>

        <div className="space-y-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
              <Scale className="text-teal-600" />
              1. Care Delivery & Regulatory Compliance
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-4 font-bold">How care is delivered:</p>
              <p className="mb-6">
                Our care is delivered through structured 30-minute consultation blocks. This allows for rigorous clinical history taking, a physical examination using portable diagnostic tools, and a collaborative treatment plan. Every consultation is documented in a secure, encrypted clinical record.
              </p>
              <p className="mb-4">
                All Doctor2U services are delivered by GMC-registered physicians. We strictly adhere to the General Medical Council's guidelines on 'Good Medical Practice'.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0" />
                  <span>Licensed to practice in the United Kingdom.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0" />
                  <span>Ongoing registration checks and medical indemnity insurance verification.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0" />
                  <span>Strict adherence to data protection (GDPR) and patient confidentiality.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100 shadow-xl shadow-red-200/20">
            <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-4">
              <AlertCircle className="text-red-600" />
              4. Safety & Escalation Protocols
            </h2>
            <div className="prose prose-slate max-w-none text-red-900/80">
              <p className="mb-4">
                Our doctors are trained to identify 'red flag' symptoms that require immediate secondary care intervention.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></div>
                  <span><strong>NHS/Hospital Escalation:</strong> If a patient's clinical state exceeds the safety threshold for home management, our doctors will coordinate immediate escalation to the nearest NHS Accident & Emergency department or arrange emergency ambulance transport.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></div>
                  <span><strong>Continuity of Care:</strong> Following any escalation, we ensure a clinical summary is provided to the treating hospital team and your regular NHS GP.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
              <Activity className="text-teal-600" />
              2. NICE Guideline Alignment
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-4">
                Clinical excellence is maintained by aligning all treatment pathways with the National Institute for Health and Care Excellence (NICE) guidelines.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Evidence-Based Care', 'Validated Pathways', 'Regular Audit', 'Clinical Oversight'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-900 text-xs font-black uppercase tracking-widest rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
              <Microscope className="text-teal-600" />
              3. Innovation Safety (AI Integration)
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-6 leading-relaxed">
                Innovation must never compromise safety. Our AI insight tool is a purely supportive, informatics-based solution designed to help patients structure their history.
              </p>
              <div className="p-8 bg-medical-50 rounded-3xl border border-medical-200">
                <h4 className="font-bold text-medical-900 mb-2 flex items-center gap-2">
                  <AlertCircle size={18} />
                  Clinical Thresholds
                </h4>
                <p className="text-sm text-medical-800">
                  The final diagnostic decision, prescription, and treatment plan are ALWAYS made by a GMC-registered doctor. The AI is a preparatory aid, not a clinical judge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 tracking-tight">Audit & Continuous Improvement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100">
                <Search className="text-teal-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Random Case Review</h4>
                  <p className="text-sm text-slate-500 text-pretty">Clinical notes are peer-reviewed to ensure high diagnostic standards and appropriate prescribing.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100">
                <Users className="text-teal-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Patient Feedback</h4>
                  <p className="text-sm text-slate-500 text-pretty">We actively solicit and review all patient feedback to refine the home visit experience.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100">
                <Lock className="text-teal-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Data Security</h4>
                  <p className="text-sm text-slate-500 text-pretty">End-to-end encryption for all medical records and AI health history inputs.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100">
                <Info className="text-teal-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Incident Management</h4>
                  <p className="text-sm text-slate-500 text-pretty">Robust reporting protocols for any clinical or administrative deviations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="p-12 bg-slate-900 text-white rounded-[4rem] text-center shadow-2xll shadow-teal-900/40">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Committed to Patient Safety</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            If you have any questions regarding our clinical protocols or the qualifications of our medical team, please do not hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-medical-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-medical-400 transition-all font-display"
            >
              Contact Governance Team
            </button>
            <button
              onClick={() => navigate('/our-doctors')}
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              View Doctor Profiles
            </button>
          </div>
        </div>
        <HubLink index={3} />
      </div>
    </div>
  );
}
