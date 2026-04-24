import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import BookingPage from './pages/Booking';
import InnovationPage from './pages/Innovation';
import TreatmentPlan from './pages/TreatmentPlan';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/Privacy';
import LocationLanding from './pages/LocationLanding';
import HomeVisitManchester from './pages/seo/HomeVisitManchester';
import PrivateDoctorManchesterPage from './pages/seo/PrivateDoctorManchesterPage';
import SameDayDoctorManchester from './pages/seo/SameDayDoctorManchester';
import DoctorHomeVisitManchester from './pages/seo/DoctorHomeVisitManchester';
import AboutUs from './pages/AboutUs';
import OurDoctors from './pages/OurDoctors';
import ClinicalGovernance from './pages/ClinicalGovernance';
import TopicPage from './pages/seo/TopicPage';
import UrgentDoctorManchester from './pages/seo/UrgentDoctorManchester';
import PrestonLandingPage from './pages/PrestonLandingPage';
import AIHealthInsights from './pages/AIHealthInsights';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import SEO from './components/SEO';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-medical-100 selection:text-medical-900">
      <Navbar />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={
                <>
                  <SEO 
                    title="Private Doctor Home Visits & Online Doctor" 
                    description="Private GMC-registered doctors providing consultations at home, in-clinic, or online across Lancashire and Manchester. Transparent pricing and expert care."
                  />
                  <Home />
                </>
              } />
              
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/innovation" element={<InnovationPage />} />
              <Route path="/ai-health-insights" element={<AIHealthInsights />} />
              <Route path="/treatment-plan" element={<TreatmentPlan />} />
              
              <Route path="/services/private-gp" element={
                <ServiceDetail 
                  title="Private Doctor Service"
                  subtitle="Lancashire & Manchester"
                  description="Expert private doctor consultations for all non-emergency health concerns. Avoid long waits and get the unhurried, professional medical care you deserve."
                  whoItIsFor={["Busy professionals", "Parents with sick children", "Patients needing second opinions", "Anyone seeking unhurried care"]}
                  whatHappens={["Secure booking", "In-depth 30-min consultation", "Same-day prescriptions", "Specialist referrals if needed"]}
                  pricing="£100 per 30 min"
                  faqs={[
                    { question: "How long is a consultation?", answer: "Our standard consultations are 30 minutes, double the length of a typical NHS appointment, ensuring you have time to discuss all concerns." },
                    { question: "Can you see my NHS records?", answer: "We do not have direct access to your NHS records, but we recommend bringing any relevant summaries or recent results to your appointment." }
                  ]}
                  image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/home-visit" element={
                <ServiceDetail 
                  title="Home Visit Doctor"
                  subtitle="Comfort & Convenience"
                  description="Receive a full clinical assessment in the privacy of your own residence. We cover the majority of Lancashire and Greater Manchester."
                  whoItIsFor={["Patients with mobility issues", "Families with young children", "Busy individuals", "Elderly patients in care homes"]}
                  whatHappens={["Local doctor dispatch", "Home clinical assessment", "Treatment plan & medicine", "Immediate documentation"]}
                  pricing="£130 per visit"
                  faqs={[{ question: "What areas do you cover?", answer: "We cover Manchester, Preston, Blackburn, Bolton, Wigan, Chorley, Burnley, and surrounding areas." }]}
                  image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/drivers-medicals" element={
                <ServiceDetail 
                  title="Driver Medicals"
                  subtitle="HGV / LGV / Taxi"
                  description="Fast and affordable driver medical assessments. Same-day appointments available for essential license renewals."
                  whoItIsFor={["Taxi drivers", "HGV / LGV drivers", "Forklift operators", "Bus & Coach drivers"]}
                  whatHappens={["Eyesight check", "Medical history review", "Blood pressure monitor", "DVLA form completion"]}
                  pricing="£50 per assessment"
                  faqs={[{ question: "What should I bring?", answer: "Please bring your photographic ID, your glasses prescription (if applicable), and any relevant medical forms." }]}
                  image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/health-screening" element={
                <ServiceDetail 
                  title="Health Screening"
                  subtitle="Preventative Wellness"
                  description="Comprehensive health checks for peace of mind. Identify potential risks before they become problems."
                  whoItIsFor={["Proactive individuals", "Corporate wellness", "Over 40s", "Patients with family history"]}
                  whatHappens={["Full blood profile", "Cardiovascular risk check", "Metabolic screening", "Physician review"]}
                  pricing="From £150"
                  faqs={[{ question: "Will I need to fast?", answer: "Yes, for many of our screenings, a 10-hour fast is required for accurate blood results." }]}
                  image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/childrens-health" element={
                <ServiceDetail 
                  title="Children's Health"
                  subtitle="Urgent Paediatric Care"
                  description="Gentle, expert paediatric consultations at home or in-clinic. Our doctors are experienced with infants and children of all ages."
                  whoItIsFor={["Worried parents", "Infants with fevers", "Children with rashes", "Acute illness management"]}
                  whatHappens={["Rapid home assessment", "Gentle physical exam", "Parental reassurance", "Paediatric treatment plan"]}
                  pricing="£100 per 30 min"
                  faqs={[{ question: "Do you see infants?", answer: "Yes, we provide medical care and assessments for children from birth upwards." }]}
                  image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/accident-injury" element={
                <ServiceDetail 
                  title="Accident & Injury"
                  subtitle="Minor Trauma"
                  description="Rapid medical reports and assessments for personal injury or occupational accidents. Expert clinical evidence."
                  whoItIsFor={["Workplace injuries", "Road traffic accidents", "Personal injury claimants", "Solicitors needing reports"]}
                  whatHappens={["Detailed injury history", "Functional assessment", "Formal medical report", "Expert clinical witness"]}
                  pricing="Custom quote"
                  faqs={[{ question: "Do you provide solicitors' reports?", answer: "Yes, we specialize in provide detailed medico-legal reports following clinical assessment." }]}
                  image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/life-insurance" element={
                <ServiceDetail 
                  title="Life Insurance Medicals"
                  subtitle="Insurance Assessments"
                  description="Professional medical examinations for life insurance or income protection policies. Accurate and timely."
                  whoItIsFor={["Insurance applicants", "Brokers", "Underwriters", "High-value policy seekers"]}
                  whatHappens={["Biometrics (Height/Weight)", "Blood pressure", "Urinalysis", "ECG if required"]}
                  pricing="Paid by insurer"
                  faqs={[{ question: "How long does it take?", answer: "A typical insurance medical takes between 30 to 45 minutes depending on complexity." }]}
                  image="https://images.unsplash.com/photo-1454165833965-ad2962a993a8?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/chronic-care" element={
                <ServiceDetail 
                  title="Chronic Care Management"
                  subtitle="Long-term Support"
                  description="Continuous support for long-term conditions like diabetes, hypertension, and asthma. Personalised management plans."
                  whoItIsFor={["Diabetes patients", "Hypertension management", "Asthma oversight", "Elderly care"]}
                  whatHappens={["Home monitoring review", "Medication optimization", "Lifestyle coaching", "Regular follow-ups"]}
                  pricing="£100 per 30 min"
                  faqs={[{ question: "Can you manage insulin?", answer: "We can provide oversight and optimization for diabetes management including insulin regimes." }]}
                  image="https://images.unsplash.com/photo-1576765608596-619d3a74ee58?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/referrals" element={
                <ServiceDetail 
                  title="Specialist Referrals"
                  subtitle="Fast-Track Access"
                  description="Immediate private referrals to the UK's leading specialists and diagnostic centers. No NHS gatekeeping."
                  whoItIsFor={["Seeking second opinions", "Needing MRI/CT scans", "Urgent surgery needs", "Consultant access"]}
                  whatHappens={["Clinical review", "Selection of specialist", "Direct referral letter", "Fast-track imaging"]}
                  pricing="£50 for referral"
                  faqs={[{ question: "Which specialists do you refer to?", answer: "We can refer to any private consultant or hospital in the UK, including BMI, Spire, and Nuffield Health." }]}
                  image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/services/out-of-hours" element={
                <ServiceDetail 
                  title="Out of Hours Doctor"
                  subtitle="Evening & Weekend Care"
                  description="Urgent private doctor visits when the NHS 111 wait is too long. Rapid response at night and over the weekend."
                  whoItIsFor={["Late night illnesses", "Bank holiday emergencies", "Sunday morning medical needs", "Traveling families"]}
                  whatHappens={["Direct clinician contact", "Emergency dispatch", "On-site treatment", "Night pharmacy prescriptions"]}
                  pricing="From £150"
                  faqs={[{ question: "Are you open 24/7?", answer: "We operate extended hours including late evenings and weekends. Please call for current availability." }]}
                  image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1200"
                />
              } />

              <Route path="/locations/preston" element={<PrestonLandingPage />} />
              <Route path="/private-doctor/manchester" element={<PrivateDoctorManchesterPage />} />
              <Route path="/home-visit-doctor/manchester" element={<HomeVisitManchester />} />
              <Route path="/doctor-home-visit-manchester" element={<DoctorHomeVisitManchester />} />
              <Route path="/same-day-doctor-manchester" element={<SameDayDoctorManchester />} />
              <Route path="/urgent-doctor-manchester" element={<UrgentDoctorManchester />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-doctors" element={<OurDoctors />} />
              <Route path="/clinical-governance" element={<ClinicalGovernance />} />
              
              {/* Catch-all */}
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ChatBot />

      <div className="md:hidden fixed bottom-6 left-4 right-4 z-[90]">
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-full p-2 flex items-center justify-between shadow-2xl shadow-slate-900/40 border border-white/10">
          <button 
            onClick={() => navigate('/book')}
            className="flex-1 flex items-center justify-center gap-3 text-white py-4 px-6 rounded-full font-bold text-sm bg-teal-700"
          >
            <Calendar size={18} />
            <span>Book Visit</span>
          </button>
          <div className="w-px h-8 bg-white/10 mx-2"></div>
          <a 
            href="tel:07488879077"
            className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-slate-800 hover:bg-slate-700 transition-all border border-white/5"
          >
            <Phone size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

