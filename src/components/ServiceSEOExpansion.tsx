import React from 'react';
import { Info, Stethoscope, Users, ClipboardCheck, HeartPulse, Activity } from 'lucide-react';

interface ServiceSEOExpansionProps {
  serviceName: string;
  locationName: string;
  locationKey: 'manchester' | 'lancashire' | 'preston' | 'blackburn' | 'burnley' | 'chorley' | 'bolton' | 'wigan' | 'lancaster';
}

export default function ServiceSEOExpansion({ serviceName, locationName, locationKey }: ServiceSEOExpansionProps) {
  return (
    <div className="mt-16 space-y-16">
      <section className="prose prose-slate prose-lg max-w-none">
        <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic flex items-center gap-3">
          <Users className="text-teal-600" />
          Who is this {serviceName} for?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 tracking-tight">Busy Professionals & Parents</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              If your schedule doesn't allow for long waiting room times or multiple phone calls to secure an appointment, our service is designed for you. We provide rapid access to healthcare that fits around your life, whether at home, in the office, or via a priority clinical setting in {locationName}.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 tracking-tight">Acute Illness & Urgent Concerns</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              For those suffering from sudden infections, respiratory issues, or unexplained pain, waiting days for a consultation is often not an option. Our GMS-registered doctors specialize in acute primary care, providing immediate assessment and treatment plans to get you back on your feet quickly.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 tracking-tight">Chronic Condition Management</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Managing long-term health issues requires time and consistency. We offer extended consultation times (minimum 30 minutes) allowing for a deep dive into your medical history and current management strategy, ensuring you feel heard and supported in your health journey.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 tracking-tight">Health conscious Individuals</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you need regular blood monitoring, health screenings, or just peace of mind regarding your wellness, our {serviceName} in {locationName} provides a comprehensive clinical environment to proactively manage your long-term health outcomes.
            </p>
          </div>
        </div>

        <p className="mt-8">
          Our private GP service in {locationKey} is specifically tailored to bridge the gap between traditional primary care and the modern need for rapid, high-quality medical intervention. We understand that medical concerns don't always happen between 9-to-5, which is why we've built a system that prioritizes availability and clinical excellence above all else.
        </p>

        <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight italic flex items-center gap-3 mt-20">
          <ClipboardCheck className="text-teal-600" />
          What happens during your {serviceName} appointment?
        </h2>
        
        <p className="mb-8">
          A consultation with our private doctors is a comprehensive clinical encounter. Unlike standard appointments, we do not place a timer on your health; our mission is to ensure every concern is addressed with professional rigour.
        </p>

        <div className="space-y-8 not-prose">
          <div className="flex gap-6 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-all">
              <span className="text-teal-700 font-black group-hover:text-white">01</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Detailed Clinical Intake</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your doctor will begin by listening to your history, symptoms, and concerns. We take the time to understand the nuances of your health, including past medical history, lifestyle factors, and any medications currently being taken.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-all">
              <span className="text-teal-700 font-black group-hover:text-white">02</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Physical Examination</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                A thorough physical examination is the cornerstone of a safe diagnosis. Our doctors carry advanced diagnostic equipment to check vital signs, perform cardiovascular assessments, respiratory checks, and targeted examinations based on your presenting symptoms.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-all">
              <span className="text-teal-700 font-black group-hover:text-white">03</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Diagnosis & Treatment Planning</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Following the examination, we will discuss our findings in plain English. You'll receive a clear diagnosis or a pathway for further investigation if required. Together, we'll agree on a treatment plan that aligns with the latest clinical guidelines.
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-all">
              <span className="text-teal-700 font-black group-hover:text-white">04</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Prescriptions & Referrals</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                If medication is needed, we can issue private prescriptions immediately. Should you require specialist input or imaging (MRI, CT, Ultrasound), we provide fast-track referral letters to the UK's leading private hospitals and consultants.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-slate-900 mt-20 mb-6">Local Commitment to {locationName}</h3>
        <p>
          We aren't just a national service; we are deeply embedded in the {locationName} medical community. Our clinicians understand the local healthcare landscape, ensuring that when we refer you or coordinate care, we are doing so with local knowledge and clinical relevance.
        </p>

        <div className="bg-teal-50 p-10 rounded-[3rem] border border-teal-100 mt-12 not-prose">
          <div className="flex gap-6 items-center flex-col md:flex-row text-center md:text-left">
            <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center shadow-sm">
              <HeartPulse size={32} className="text-teal-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight italic">Clinical Excellence Guaranteed</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every doctor in our network is fully GMC registered with an active license to practice. We adhere to the highest standards of clinical governance to ensure your safety and quality of care.
              </p>
            </div>
            <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-black hover:bg-teal-700 transition-all shadow-lg shrink-0">
              Check Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
