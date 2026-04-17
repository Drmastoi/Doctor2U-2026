import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Download, Printer, Calendar, Pill, 
  FileText, ArrowLeft, HeartPulse, Activity, ShieldCheck 
} from 'lucide-react';
import { Page } from '../types';
import HubLink from '../components/HubLink';

interface TreatmentPlanProps {
  setPage: (page: Page) => void;
}

export default function TreatmentPlan({ setPage }: TreatmentPlanProps) {
  // Mock data for a treatment plan
  const planData = {
    patientName: "John Doe",
    date: "April 11, 2026",
    doctor: "Dr. Iqbal",
    summary: "Patient presented with fatigue and mild headaches. Initial assessment suggests metabolic health optimization and stress management as key focus areas.",
    prescriptions: [
      { name: "Vitamin D3 5000IU", dosage: "1 capsule daily", duration: "3 months" },
      { name: "Magnesium Glycinate", dosage: "400mg before bed", duration: "Ongoing" }
    ],
    referrals: [
      { specialist: "Private Cardiology", reason: "Routine screening based on family history", status: "Booked" }
    ],
    nextSteps: [
      "Fasting blood panel (Metabolic markers)",
      "Daily 20-minute morning sunlight exposure",
      "Follow-up consultation in 4 weeks"
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setPage('home')}
          className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-xl shadow-teal-900/5 border border-slate-100 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-slate-900 p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-teal-400 mb-4">
                <HeartPulse size={24} />
                <span className="font-bold uppercase tracking-[0.2em] text-xs">Digital Health Plan</span>
              </div>
              <h1 className="text-4xl font-display font-bold mb-2 tracking-tight">Your Personalised Recovery Plan</h1>
              <p className="text-slate-400">Prepared by {planData.doctor} on {planData.date}</p>
            </div>
          </div>

          <div className="p-12">
            {/* Summary */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText size={20} className="text-teal-600" />
                Clinical Summary
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-600 leading-relaxed">
                {planData.summary}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Prescriptions */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Pill size={20} className="text-teal-600" />
                  Prescriptions & Supplements
                </h2>
                <div className="space-y-4">
                  {planData.prescriptions.map((p, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                      <h4 className="font-bold text-slate-900">{p.name}</h4>
                      <p className="text-sm text-slate-500">{p.dosage} • {p.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referrals */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Activity size={20} className="text-teal-600" />
                  Specialist Referrals
                </h2>
                <div className="space-y-4">
                  {planData.referrals.map((r, i) => (
                    <div key={i} className="p-4 rounded-xl border border-teal-50 bg-teal-50/30">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-slate-900">{r.specialist}</h4>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                          {r.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{r.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-12 pt-12 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-teal-600" />
                Your Next Steps
              </h2>
              <div className="space-y-4">
                {planData.nextSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-16 flex flex-wrap gap-4">
              <button className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-all flex items-center gap-2 shadow-lg shadow-teal-900/20">
                <Download size={18} />
                Download PDF
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                <Printer size={18} />
                Print Plan
              </button>
              <button 
                onClick={() => setPage('booking')}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all ml-auto"
              >
                Book Follow-up
              </button>
            </div>

            <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
              <ShieldCheck size={24} className="text-amber-600 shrink-0" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Medical Notice:</strong> This plan is based on your recent consultation. If your symptoms worsen or you experience new severe symptoms, please contact us immediately or call emergency services if urgent.
              </p>
            </div>
          </div>
        </motion.div>
        <HubLink setPage={setPage} index={13} />
      </div>
    </div>
  );
}
