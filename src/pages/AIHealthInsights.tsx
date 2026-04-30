import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, Sparkles, Activity, ShieldCheck, CheckCircle2, ShieldAlert, ArrowRight, ClipboardList, Stethoscope, HeartPulse, Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import SEO from '../components/SEO';

const QUICK_SYMPTOMS = [
  "Persistent Fatigue",
  "Skin Rash or Irritation",
  "Lower Back Pain",
  "Breathlessness",
  "Recurring Headaches"
];

export default function AIHealthInsights() {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isEmergencyConfirmed, setIsEmergencyConfirmed] = useState(false);

  const getAnalysis = async () => {
    if (!symptoms.trim()) return;
    
    setIsLoadingAnalysis(true);
    setAiAnalysis('');
    
    const emergencyKeywords = ['chest pain', 'shortness of breath', 'stroke', 'numbness', 'heavy bleeding', 'unconscious', 'seizure'];
    const hasEmergency = emergencyKeywords.some(keyword => symptoms.toLowerCase().includes(keyword));

    if (hasEmergency) {
      setAiAnalysis("⚠️ EMERGENCY ALERT: Your symptoms suggest a potentially serious medical condition that requires immediate attention. \n\nPLEASE CALL 999 OR ATTEND YOUR NEAREST A&E IMMEDIATELY. \n\nDo not wait for an online consultation or AI analysis if you are experiencing severe pain, difficulty breathing, or signs of a stroke.");
      setIsLoadingAnalysis(false);
      return;
    }
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `As a professional medical assistant for "Doctor2U", provide a highly structured, professional pre-consultation analysis based on these symptoms: "${symptoms}". 

Please structure your response into these exact bolded sections:

**1. Summary of Health Concerns**
Briefly summarize the symptoms in a professional, empathetic tone.

**2. Possible Clinical Themes for Discussion**
Outline potential areas, body systems, or health domains that the doctor might explore based on your input. Do NOT provide a diagnosis, but explain why these areas are relevant for clinical exploration.

**3. What to Discuss with Your Doctor during your Appointment**
Provide a structured list of specific questions, observations (e.g., triggers, timing, severity), or lifestyle factors the patient should mention to help the doctor during the consultation.

**4. Consultation Preparation**
List any information or vitals (like heart rate or temperature) the patient should have ready if available.

IMPORTANT GUIDELINES:
- Use bold headers and clear bullet points for structure.
- DO NOT provide a diagnosis or prescribe any medication.
- Ensure the tone is calm, professional, and reassuring.
- MANDATORY: Include a clear disclaimer at the end stating that this AI-generated summary is for preparation only and is not a substitute for professional medical advice or diagnosis.`,
      });
      
      setAiAnalysis(response.text || 'Unable to generate analysis at this time. Please try again.');
    } catch (error) {
      console.error('Error generating analysis:', error);
      setAiAnalysis('An error occurred while generating analysis. Please ensure your internet connection is stable and try again.');
    } finally {
      setIsLoadingAnalysis(false);
    }
  };

  const handleShareWithDoctor = async () => {
    setIsSendingEmail(true);
    setEmailStatus('idle');
    try {
      const response = await fetch('/api/send-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          analysis: aiAnalysis,
          symptoms: symptoms 
        }),
      });

      if (response.ok) {
        setEmailStatus('success');
        setTimeout(() => {
          navigate('/book');
        }, 1500);
      } else {
        const errorData = await response.json();
        console.error('Failed to send email:', errorData);
        setEmailStatus('error');
      }
    } catch (error) {
      console.error('Error sharing analysis:', error);
      setEmailStatus('error');
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="AI Health Symptoms Assessment Manchester & Lancashire | Doctor2U" 
        description="Free clinical-grade AI symptom assessment tool for patients in Manchester and Lancashire. Organise your health concerns before your private doctor consultation."
      />
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] uppercase"
          >
            <Brain size={16} />
            <span>Private GP Lancashire & Manchester</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            AI Health Assessment <br />
            <span className="text-teal-700">Manchester & Lancashire</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            A clinical-grade tool to help you organise your symptoms before you speak with our doctors. Call us on <a href="tel:07488879077" className="text-teal-700 font-bold">07488 879077</a> or book below.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate('/book')}
              className="bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-teal-800 transition-all"
            >
              Book Now
              <ArrowRight size={18} />
            </button>
            <a 
              href="tel:07488879077"
              className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              <Phone size={18} className="text-teal-600" />
              07488 879077
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-1 bg-teal-600 rounded-bl-full z-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 shadow-sm">
                  <Activity size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight">
                    Start Your Analysis
                  </h2>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="mb-12 flex items-center justify-between px-2 relative">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -z-10"></div>
                {[
                  { label: "Describe", active: !aiAnalysis && !isLoadingAnalysis },
                  { label: "Review", active: isLoadingAnalysis },
                  { label: "Consult", active: !!aiAnalysis }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-700 ${
                      step.active ? 'bg-teal-700 border-teal-700 text-white scale-110 shadow-lg shadow-teal-900/20' : 'bg-white border-slate-200 text-slate-300'
                    }`}>
                      {i + 1}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${step.active ? 'text-teal-700' : 'text-slate-400'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest">Stage 01</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Enter symptoms and any specific questions.</p>
                  </div>
                  <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                    <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest">Stage 02</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Review AI-generated health insights privately.</p>
                  </div>
                  <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                    <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest">Stage 03</span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">Share summary with our GMC-registered team.</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 max-w-4xl mx-auto text-left">
                <label className="flex items-start gap-4 p-4 bg-rose-50/30 border border-rose-100/50 rounded-2xl cursor-pointer group mb-6 hover:bg-rose-50/50 transition-colors">
                  <div className="relative flex items-center mt-0.5">
                    <input
                      type="checkbox"
                      checked={isEmergencyConfirmed}
                      onChange={(e) => setIsEmergencyConfirmed(e.target.checked)}
                      className="w-5 h-5 rounded border-rose-200 text-teal-700 focus:ring-teal-700 cursor-pointer transition-all"
                    />
                  </div>
                  <span className="text-xs font-bold text-rose-900/70 leading-relaxed">
                    I confirm this is not a medical emergency and I am not experiencing symptoms of a heart attack, stroke, or severe breathing difficulty.
                  </span>
                </label>

                <div className="relative group mb-4">
                  <textarea
                    id="symptoms"
                    rows={6}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Describe your symptoms or health concerns in detail..."
                    className="w-full p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] focus:ring-2 focus:ring-teal-700/10 focus:border-teal-700 transition-all resize-none text-slate-900 placeholder:text-slate-400 text-lg shadow-inner"
                  />
                </div>
                
                {/* Quick-Select Symptoms */}
                <div className="mb-10 overflow-x-auto no-scrollbar pb-2">
                  <div className="flex gap-2 min-w-max">
                    <span className="text-[10px] font-bold text-teal-800/60 uppercase tracking-widest self-center mr-2">Suggestions:</span>
                    {QUICK_SYMPTOMS.map((symptom) => (
                      <button
                        key={symptom}
                        onClick={() => setSymptoms(symptom)}
                        className="px-4 py-2 rounded-full border border-teal-800/10 bg-white/40 backdrop-blur-sm text-[11px] font-bold text-teal-900 hover:bg-teal-700 hover:text-white transition-all whitespace-nowrap shadow-sm"
                      >
                        {symptom}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-teal-600" />
                      Privacy Guaranteed
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
                      Your data is encrypted and only shared with our clinical team if you choose. We never sell medical datasets.
                    </p>
                  </div>
                  <button
                    onClick={getAnalysis}
                    disabled={isLoadingAnalysis || !symptoms.trim() || !isEmergencyConfirmed}
                    className={`bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-teal-900/20 hover:bg-teal-800 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
                  >
                    {isLoadingAnalysis ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Generate Analysis
                        <Sparkles size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {aiAnalysis && (
                  <motion.div
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-8 border-t border-slate-100 overflow-hidden"
                  >
                    <div className="bg-slate-50 rounded-3xl p-8 border border-teal-50">
                      <div className="flex items-center gap-3 mb-6 text-teal-700">
                        <Brain size={24} />
                        <h4 className="font-bold text-lg">AI Generated Roadmap</h4>
                      </div>
                      <div className="text-slate-600 text-base leading-relaxed mb-10 [&_strong]:text-slate-900 [&_strong]:font-bold [&_h3]:text-slate-900 [&_h3]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-3 [&_p]:mb-6">
                        <Markdown>{aiAnalysis}</Markdown>
                      </div>
                      
                      {!aiAnalysis.includes('EMERGENCY ALERT') && (
                        <div className="pt-8 border-t border-slate-200">
                          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
                            {emailStatus === 'success' && (
                              <motion.div 
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
                              >
                                <CheckCircle2 size={18} />
                                Analysis shared! Booking appointment...
                              </motion.div>
                            )}
                            {emailStatus === 'error' && (
                              <motion.div 
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-rose-100 text-rose-700 px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
                              >
                                <ShieldAlert size={18} />
                                Submission failed. Please try again.
                              </motion.div>
                            )}
                            <div className="flex flex-col md:flex-row items-center gap-4">
                              <p className="text-xs text-slate-400 font-medium max-w-xs">
                                Ready to talk to a professional? Share this analysis and find a convenient time.
                              </p>
                              <button
                                onClick={handleShareWithDoctor}
                                disabled={isSendingEmail}
                                className="bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-teal-800 transition-all flex items-center gap-3 shadow-xl shadow-teal-900/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {isSendingEmail ? (
                                  <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Processing...
                                  </>
                                ) : (
                                  <>
                                    Share & Book Appointment
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ClipboardList size={20} className="text-teal-600" />
                Why use this tool?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Clinical appointments are often limited. This tool ensures you don't forget key details, helping you and your doctor get straight to the facts.
              </p>
              <ul className="space-y-2">
                {[
                  "Organise symptoms chronologically",
                  "Identify potential clinical questions",
                  "Feel more in control of your health",
                  "Better medical outcomes through clarity"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Stethoscope size={20} className="text-teal-600" />
                Wait times?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                After generating your analysis, you can book a consultation. Doctors are often available within 2 hours for home visits or online calls.
              </p>
              <button 
                onClick={() => navigate('/book')}
                className="text-teal-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Go to Booking
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Bar */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Patient Data Standards</span>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {['GDPR Compliant', 'Encrypted Submission', 'GMC Reviewers', 'Zero Data Selling'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-slate-600 font-bold uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
