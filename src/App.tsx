/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [sharedAnalysis, setSharedAnalysis] = useState<string>('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home setPage={setPage} setSharedAnalysis={setSharedAnalysis} />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'contact': return <ContactPage setPage={setPage} />;
      case 'booking': return <BookingPage setPage={setPage} sharedAnalysis={sharedAnalysis} />;
      case 'innovation': return <InnovationPage setPage={setPage} />;
      case 'treatment-plan': return <TreatmentPlan setPage={setPage} />;
      
      case 'service-private-gp': 
        return (
          <ServiceDetail 
            setPage={setPage}
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
        );

      case 'service-home-visit':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Home Visit Doctor"
            subtitle="Comfort & Convenience"
            description="Receive a full clinical assessment in the privacy of your own residence. We cover the majority of Lancashire and Greater Manchester."
            whoItIsFor={["Patients with mobility issues", "Families with young children", "Busy individuals", "Elderly patients in care homes"]}
            whatHappens={["Local doctor dispatch", "Home clinical assessment", "Treatment plan & medicine", "Immediate documentation"]}
            pricing="£130 per visit"
            faqs={[
              { question: "What areas do you cover?", answer: "We cover Manchester, Preston, Blackburn, Bolton, Wigan, Chorley, Burnley, and surrounding areas." }
            ]}
            image="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-drivers-medicals':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Drivers Medicals"
            subtitle="HGV, Taxi & Professional"
            description="Professional medical assessments for HGV, LGV, Taxi, and PCV driver licenses. Fast, reliable, and thorough."
            whoItIsFor={["HGV/LGV Drivers", "Taxi Drivers", "PCV/Bus Drivers", "Courier Professionals"]}
            whatHappens={["D4 form review", "Eye test & physical check", "Form completion", "Health advice"]}
            pricing="£100 per assessment"
            faqs={[
              { question: "What do I need to bring?", answer: "Please bring your D4 medical form, driving license, glasses (if worn), and a list of current medications." }
            ]}
            image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-health-screening':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Health Screening"
            subtitle="Proactive Wellness MOT"
            description="Comprehensive health assessments designed to detect early warning signs and optimise your long-term wellness."
            whoItIsFor={["Health-conscious individuals", "Patients with family history of disease", "Over 40s seeking a yearly check", "Executive health programs"]}
            whatHappens={["Full blood profile", "Cardiovascular assessment", "Lifestyle review", "Detailed reporting"]}
            pricing="From £150"
            faqs={[
              { question: "What's included in an MOT?", answer: "Our standard MOT includes blood pressure, cholesterol, glucose, kidney/liver function, and a lifestyle consultation." }
            ]}
            image="https://images.unsplash.com/photo-1505751172107-5739a00723a5?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-childrens-health':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Children's Health"
            subtitle="Compassionate Paediatric Care"
            description="Sensitive and professional medical consultations for children of all ages, from infants to teenagers."
            whoItIsFor={["Concerned parents", "Children with acute illness", "Developmental queries", "Non-emergency paediatrics"]}
            whatHappens={["Gentle assessment", "Parental consultation", "Treatment & prescriptions", "Follow-up support"]}
            pricing="£100 per consultation"
            faqs={[
              { question: "What ages do you see?", answer: "We see children of all ages, from newborns upwards." },
              { question: "Are your doctors paediatricians?", answer: "Our GPs are highly experienced in children's health, which forms a core part of general practice training and experience." }
            ]}
            image="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-accident-injury':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Accident & Injury Claims"
            subtitle="Expert Medico-Legal Reports"
            description="Professional medical assessments and reports for insurance claims and legal proceedings following an accident or injury."
            whoItIsFor={["Personal injury claimants", "Legal professionals", "Insurance providers", "Accident victims"]}
            whatHappens={["Detailed assessment", "Injury documentation", "Formal report generation", "Legal coordination"]}
            pricing="Quote on request"
            faqs={[
              { question: "How long until I receive my report?", answer: "Standard reports are typically completed within 5-7 working days following the assessment." }
            ]}
            image="https://images.unsplash.com/photo-1589210339045-e42670391ee5?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-life-insurance':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Life Insurance Medicals"
            subtitle="Professional Underwriting Support"
            description="Comprehensive medical examinations required for life insurance, income protection, and critical illness cover applications."
            whoItIsFor={["Insurance applicants", "Policy brokers", "Financial advisors", "High-value policy seekers"]}
            whatHappens={["Medical history review", "Physical examination", "Blood/Urine tests", "Electronic form submission"]}
            pricing="Usually covered by insurer"
            faqs={[
              { question: "Do I have to pay for this?", answer: "In most cases, the insurance company will cover the cost of the medical examination directly." }
            ]}
            image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-chronic-care':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Chronic Disease Management"
            subtitle="Long-term Health Support"
            description="Ongoing management and monitoring for conditions such as diabetes, hypertension, asthma, and heart disease."
            whoItIsFor={["Diabetes patients", "Hypertension sufferers", "Asthma/COPD patients", "Heart disease patients"]}
            whatHappens={["Regular reviews", "Medication titration", "Lifestyle counseling", "Diagnostic monitoring"]}
            pricing="£100 per 30 min"
            faqs={[
              { question: "Do you supply medication?", answer: "Yes, we can issue private prescriptions for all manageble chronic conditions." }
            ]}
            image="https://images.unsplash.com/photo-1511174511562-5f7f18b854f2?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'service-referrals':
        return (
          <ServiceDetail 
            setPage={setPage}
            title="Private Referrals & Scans"
            subtitle="Fast-Track to Expertise"
            description="Immediate specialist referrals and private scan bookings (MRI, CT, Ultrasound) to avoid long diagnostic wait times."
            whoItIsFor={["Patients needing fast diagnosis", "Specialist seeking individuals", "Diagnostic ultrasound/MRI needs", "Complex condition patients"]}
            whatHappens={["GP assessment", "Clinical justification", "Referral letter issuance", "Direct booking assistance"]}
            pricing="£60 per referral"
            faqs={[
              { question: "How quickly can I get a scan?", answer: "We can often arrange private scans within 24-48 hours of your consultation." }
            ]}
            image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'privacy':
        return <PrivacyPolicy setPage={setPage} />;

      case 'pgp-manchester':
        return <PrivateDoctorManchesterPage setPage={setPage} />;

      case 'pgp-preston':
        return (
          <LocationLanding 
            setPage={setPage}
            locationName="Preston"
            serviceType="Private Doctor"
            h1="Private Doctor in Preston – Expert Care Without the Wait"
            openingParagraph="Providing residents of Preston and surrounding Lancashire areas with premium private medical care. Our GMC-registered doctors are available for face-to-face clinic appointments or convenient home visits, ensuring you get a diagnosis and treatment plan faster than ever."
            price="£100"
            inclusions={["Full 30-minute appointment", "Immediate private prescriptions", "Rapid referrals to local specialists", "Diagnostic test orders (Blood/Scans)"]}
            whyChooseUs={[
              "Lancashire Focus: We understand the local healthcare landscape and work with top specialists.",
              "No Membership Required: Access our services whenever you need, pay-as-you-go.",
              "Advanced Technology: Integrating AI insights to optimize your face-to-face time.",
              "Home Visit Priority: We offer dedicated morning and evening slots for home visits in Preston."
            ]}
            faqs={[
              { question: "Where is your Preston clinic located?", answer: "Our clinic is situated in a quiet, accessible professional park with free on-site parking." },
              { question: "Do you offer weekend appointments?", answer: "Yes, we provide weekend availability for both clinic and home visits in the Preston area." },
              { question: "How soon do I get my results?", answer: "Most basic blood test results are returned within 24-48 hours." }
            ]}
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'pgp-blackburn':
        return (
          <LocationLanding 
            setPage={setPage}
            locationName="Blackburn"
            serviceType="Private Doctor"
            h1="Private Doctor in Blackburn – Professional, Private & Prompt"
            openingParagraph="Skip the queues and see a private doctor in Blackburn today. Doctor2U brings top-tier primary care to East Lancashire, offering flexible appointment times and the option of home visits for those who prefer to be seen in their own environment."
            price="£100"
            inclusions={["Personalised 30-minute consultation", "Same-day prescription service", "Fast-track specialist referrals", "Comprehensive health screening options"]}
            whyChooseUs={[
              "Flexible Consultations: Choice of in-clinic, video, or home visits across Blackburn.",
              "Expertise You Can Trust: All our doctors are fully GMC-registered and UK-trained.",
              "AI Enhanced: Better prepare for your visit with our unique health insight tools.",
              "Direct Communication: Direct access to our clinical team for follow-up questions."
            ]}
            faqs={[
              { question: "Is the Blackburn clinic wheelchair accessible?", answer: "Yes, our facility is fully accessible with step-free entry and wide doorways." },
              { question: "Can I get a sick note for work?", answer: "Yes, if clinically indicated, we can provide private sick notes during your consultation." },
              { question: "Do you offer flu vaccinations?", answer: "Seasonally, we offer various vaccinations; please call ahead to check current stock." }
            ]}
            image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'hvd-manchester':
        return <HomeVisitManchester setPage={setPage} />;

      case 'hvd-lancashire':
        return (
          <LocationLanding 
            setPage={setPage}
            locationName="Lancashire"
            serviceType="Home Visit Doctor"
            h1="Home Visit Doctor in Lancashire – Quality Care Anywhere"
            openingParagraph="Doctor2U provides professional home visit services across the width and breadth of Lancashire. From rural communities to busy towns, our doctors bring the clinic to you, providing expert diagnosis and treatment in your own home."
            price="£130"
            inclusions={["Full home-based consultation", "On-the-spot prescriptions", "Referral coordination", "Follow-up support included"]}
            whyChooseUs={[
              "Wide Regional Coverage: Serving Preston, Blackburn, Burnley, Blackpool, and beyond.",
              "Patient-Centric: Tailored care that fits your lifestyle and physical needs.",
              "AI Pre-Assessment: Start with our AI tool to give the doctor a head start before they arrive.",
              "Reliable Service: Scheduled arrival windows so you aren't waiting all day."
            ]}
            faqs={[
              { question: "Do you visit rural Lancashire addresses?", answer: "Yes, we take pride in reaching patients in more isolated parts of the county." },
              { question: "Can the doctor perform blood tests at home?", answer: "Yes, we can arrange for phlebotomy services at your home if required." },
              { question: "What are your home visit hours?", answer: "Home visits are typically conducted between 8am and 8pm, Monday to Friday." }
            ]}
            image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200"
          />
        );

      case 'same-day-doctor-manchester':
        return <SameDayDoctorManchester setPage={setPage} />;

      case 'doctor-home-visit-manchester':
        return <DoctorHomeVisitManchester setPage={setPage} />;

      default: return <Home setPage={setPage} setSharedAnalysis={setSharedAnalysis} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-medical-100 selection:text-medical-900">
      {/* SEO Meta Tags (Simulated for SPA) */}
      <header className="sr-only">
        <h1>Doctor2U – Private Doctor Home Visits & Online Doctor in Lancashire & Manchester</h1>
        <p>Private GMC-registered doctors providing consultations at home, in-clinic, or online across Lancashire and Manchester. Transparent pricing, same-day prescriptions, and expert care. Book online today.</p>
      </header>

      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
      
      <ChatBot />
    </div>
  );
}

