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
import AboutUs from './pages/AboutUs';
import OurDoctors from './pages/OurDoctors';
import ClinicalGovernance from './pages/ClinicalGovernance';
import TopicPage from './pages/seo/TopicPage';
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

      case 'about-us':
        return <AboutUs setPage={setPage} />;
      
      case 'our-doctors':
        return <OurDoctors setPage={setPage} />;
      
      case 'clinical-governance':
        return <ClinicalGovernance setPage={setPage} />;

      // SEO Topic Cluster Pages
      case 'urgent-childrens-doctor-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Urgent Children's Doctor"
            subtitle="Paediatric Home Visits"
            h1="Urgent Private Children's Doctor in Manchester"
            metaTitle="Urgent Private Children's Doctor Manchester | Same-Day Home Visit"
            metaDesc="Need a paediatrician or private doctor for your child in Manchester? Same-day home visits for fever, infections, and acute childhood illness. Professional, child-friendly care."
            openingText="Managing a sick child is stressful. We bring expert clinical assessment for children directly to your home in Manchester, avoiding the noise and wait times of crowded emergency departments."
            conditionsLabel="Childhood conditions we assess at home"
            conditions={["Acute Fever & Coughs", "Ear & Throat Infections", "Vomiting & Dehydration", "Rashes & Skin Concerns", "Asthma & Breathing Checks", "Abdominal Pain Management"]}
            whyChooseUs={[
              { title: "Child-Friendly Approach", desc: "Our doctors are experienced in making children feel safe and comfortable during assessments." },
              { title: "Rapid Response", desc: "We prioritise paediatric calls to ensure you have clinical answers as fast as possible." },
              { title: "Clinical Support", desc: "Referrals and prescriptions provided immediately where clinically indicated." }
            ]}
            faqs={[
              { q: "What age of children do you see?", a: "We see children of all ages, from infants to adolescents." },
              { q: "Is a home visit better than a clinic for a sick child?", a: "Yes, it reduces exposure to other illnesses and allows the child to be assessed in a familiar environment." }
            ]}
            ctaText="Expert care for your child today."
          />
        );

      case 'emergency-uti-treatment-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Emergency UTI Doctor"
            subtitle="Rapid UTI Treatment"
            h1="Emergency Private UTI Treatment in Manchester"
            metaTitle="Private UTI Treatment Manchester | Emergency Doctor Home Visit"
            metaDesc="Fast, private emergency UTI treatment in Manchester. Same-day doctor home visits, instant prescriptions, and clinical assessment for urinary infections."
            openingText="UTIs can be intensely painful and require immediate antibiotic intervention. Skip the multi-day GP wait and get a private doctor to your home in Manchester for rapid treatment today."
            conditionsLabel="UTI-Related Services"
            conditions={["Instant Urinalysis Testing", "Rapid Antibiotic Prescribing", "Complex UTI Management", "Pain Management Support", "Kidney Infection Triage", "Specialist Referral Coordination"]}
            whyChooseUs={[
              { title: "Immediate Testing", desc: "Our doctors carry dipstick urinalysis kits for instant results during your home visit." },
              { title: "Same-Day Antibiotics", desc: "Private prescriptions issued immediately to start your recovery without delay." },
              { title: "Expert Clinical Advice", desc: "Guidance on symptom management and lifestyle adjustments to prevent recurrence." }
            ]}
            faqs={[
              { q: "Can you prescribe antibiotics for a UTI at my home?", a: "Yes, once a clinical diagnosis (and urinalysis if needed) is performed, we can issue an electronic prescription." },
              { q: "How fast can you visit for a UTI?", a: "We aim for same-day visits, typically within 2-4 hours of booking." }
            ]}
            ctaText="Get fast relief from UTI pain today."
          />
        );

      case 'elderly-care-home-visit-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Elderly Care Specialist"
            subtitle="Home Visits for Seniors"
            h1="Private Doctor for Elderly Care in Manchester"
            metaTitle="Private Doctor for Elderly Care Manchester | Senior Home Visit Experts"
            metaDesc="Expert private medical care for older adults in Manchester. Comprehensive home visit assessments, chronic disease monitoring, and geriatric support."
            openingText="Our senior family members deserve unhurried, expert medical attention. We provide specialist-led home visits across Manchester focused on the unique needs of older patients."
            conditionsLabel="Elderly care focus areas"
            conditions={["Mobility & Fall Assessment", "Cognitive Health Reviews", "Medication Optimisation", "Chronic Pain Management", "Heart & Respiratory Checks", "Post-Hospital Support"]}
            whyChooseUs={[
              { title: "Unhurried Consultations", desc: "We take the time to listen and perform a thorough clinical review, never rushing our senior patients." },
              { title: "At-Home Convenience", desc: "Avoid the logistical stress of transport and clinic wait rooms for patients with mobility issues." },
              { title: "Care Coordination", desc: "We can liaise with family members and NHS GPs to ensure a unified care plan." }
            ]}
            faqs={[
              { q: "Can you visit someone in a residential home?", a: "Yes, we visit private residences and residential care settings across Greater Manchester." },
              { q: "Do you offer chronic disease monitoring?", a: "Yes, we frequently monitor conditions like diabetes, hypertension, and early-stage dementia." }
            ]}
            ctaText="Support your loved ones with expert care."
          />
        );

      case 'chest-infection-home-visit-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Chest Infection Clinic"
            subtitle="Urgent Respiratory Care"
            h1="Private Doctor for Chest Infections in Manchester"
            metaTitle="Private Chest Infection Doctor Manchester | Same-Day Home Visit"
            metaDesc="Urgent clinical assessment for chest infections, bronchitis, and pneumonia in Manchester. Same-day home visits by private doctors with instant prescriptions."
            openingText="A heavy chest or persistent cough can be debilitating. Our doctors provide urgent respiratory assessments at home, ensuring you get the correct treatment before conditions worsen."
            conditionsLabel="Respiratory symptoms we treat"
            conditions={["Acute Bronchitis", "Pneumonia Assessment", "Asthma Flare-Ups", "COPD Monitoring", "Severe Cough Management", "Oxygen Level Checks (Pulse Oximetry)"]}
            whyChooseUs={[
              { title: "Clinical Assessment", desc: "Our doctors perform thorough chest auscultation (listening to lungs) to accurately diagnose your condition." },
              { title: "Oximetry Monitoring", desc: "We monitor blood oxygen levels instantly to ensure you are safe to remain at home." },
              { title: "Rapid Antibiotics", desc: "Prescribing the right medication immediately to prevent hospital admission." }
            ]}
            faqs={[
              { q: "Can you rule out pneumonia at home?", a: "Our doctors can perform a clinical assessment that strongly indicates pneumonia; we can then arrange imaging if needed." },
              { q: "Can you provide sick notes for work?", a: "Yes, we can provide private Fit Notes if you are unable to work due to respiratory illness." }
            ]}
            ctaText="Breathe easier with a professional review."
          />
        );

      case 'back-pain-home-visit-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Urgent Back Pain Support"
            subtitle="Home Management of Pain"
            h1="Private Doctor for Acute Back Pain in Manchester"
            metaTitle="Acute Back Pain Treatment Manchester | Emergency Doctor Home Visit"
            metaDesc="Sudden, immobilising back pain? Our private doctors in Manchester provide rapid home visit assessments and pain management plans to get you moving again."
            openingText="Acute back pain can make it impossible to even reach your car, let alone a clinic. Our doctors bring the assessment to you, providing expert pain management and diagnostic clarity."
            conditionsLabel="Back pain focus"
            conditions={["Acute Sciatica Relief", "Mechanical Back Pain", "Disc Injury Triage", "Muscle Spasms", "Neurological Checks", "Imaging Referrals (MRI)"]}
            whyChooseUs={[
              { title: "Pain Management", desc: "Initial assessment and prescribing of effective analgesics to manage acute discomfort." },
              { title: "Neurological Screening", desc: "Checking for 'Red Flags' to ensure your pain isn't hiding a more serious underlying issue." },
              { title: "Fast-Track MRI", desc: "Arranging immediate imaging at Manchester's leading private diagnostic centres." }
            ]}
            faqs={[
              { q: "Can you help if I am too painful to move?", a: "Yes, a home visit is the ideal solution for patients who are immobilised by acute pain." },
              { q: "Do you offer steroid injections?", a: "We typically focus on oral medication and diagnostic triage first, but can refer for specialist injections." }
            ]}
            ctaText="Get help for your back pain at home."
          />
        );

      case 'same-day-flu-doctor-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Flu & Cold Clinic"
            subtitle="Rapid Recovery Support"
            h1="Private Same-Day Doctor for Flu in Manchester"
            metaTitle="Same-Day Flu Treatment Manchester | Private Doctor Home Visits"
            metaDesc="Feeling severely unwell with flu or a cold? Our private Manchester doctors provide same-day home visits to assess complications and provide treatment."
            openingText="When flu symptoms become severe, a professional clinical review can provide peace of mind and prevent complications like secondary infections. Get an expert to your home today."
            conditionsLabel="Viral Illness Support"
            conditions={["Severe Flu Assessment", "Secondary Infection Checks", "Hydration Support", "Viral Triage", "Fever Management", "Prescription of Antivirals"]}
            whyChooseUs={[
              { title: "Avoid Public Transport", desc: "Don't risk spreading the virus or exhausting yourself by travelling to a clinic while febrile." },
              { title: "Full Clinical Check", desc: "We check ears, throat, and chest to ensure no underlying bacterial triggers." },
              { title: "Immediate Medication", desc: "Access to private antivirals and effective symptomatic relief." }
            ]}
            faqs={[
              { q: "Is this for COVID too?", a: "Yes, we assess all respiratory viruses including COVID and Influenza." },
              { q: "Can you check my children as well?", a: "Yes, we can perform family-wide viral assessments during a single visit block (additional fees apply)." }
            ]}
            ctaText="Start your recovery with an expert visit."
          />
        );

      case 'doctor-nursing-home-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Nursing Home Doctor"
            subtitle="On-Site Medical Support"
            h1="Private Doctor for Nursing & Care Homes in Manchester"
            metaTitle="Private Doctor for Care Homes Manchester | Specialist Medical Support"
            metaDesc="Enhanced medical support for nursing and care homes in Manchester. Private doctor visits, specialist second opinions, and unhurried clinical reviews."
            openingText="We provide a higher level of medical attendance for residents in care settings. Supporting staff and families, we ensure unhurried medical oversight for complex patients."
            conditionsLabel="Residential support areas"
            conditions={["Complex Multimorbidity", "End-of-Life Medical Care", "Palliative Support", "Urgent Clinical Triage", "Medication Reviews", "Family Liaison & Goal Setting"]}
            whyChooseUs={[
              { title: "Consistent Presence", desc: "We provide continuity for residents, building trust with the patient and care staff alike." },
              { title: "Unhurried Reviews", desc: "Allowing more time than a typical brief NHS care home round to explore complex issues." },
              { title: "Diagnostic Clarity", desc: "Helping keep residents out of hospital by providing high-quality on-site diagnostics." }
            ]}
            faqs={[
              { q: "Can you work with our regular GP?", a: "Absolutely. We complement existing care and ensure all findings are shared with the patient's record." },
              { q: "How often can you visit?", a: "We offer both ad-hoc urgent visits and routine scheduled support for care settings." }
            ]}
            ctaText="Enhance resident care with clinical support."
          />
        );

      case 'out-of-hours-doctor-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Out Of Hours Doctor"
            subtitle="Evenings & Weekends"
            h1="Private Out Of Hours Doctor in Manchester"
            metaTitle="Private Out Of Hours Doctor Manchester | Evening & Weekend Visits"
            metaDesc="Need a doctor after 6pm or at the weekend? Our private Manchester out-of-hours service provides rapid home visits when other surgeries are closed."
            openingText="Medical issues don't follow a 9-to-5 schedule. Our private out-of-hours service ensures you have access to expert medical care in Manchester throughout the evening and weekend."
            conditionsLabel="Out of hours support"
            conditions={["Evening Home Visits", "Weekend Clinical Triage", "Bank Holiday Availability", "Night-Time Panic Support", "Urgent Prescription Redo", "Immediate Specialist Triage"]}
            whyChooseUs={[
              { title: "Always Available", desc: "We offer slots during the evenings, weekends, and holiday periods when routine surgeries are unavailable." },
              { title: "Rapid Attendance", desc: "Designed for urgent issues that cannot wait until the next working day." },
              { title: "Professional Triage", desc: "Getting you the right level of care without the long wait of an A&E department." }
            ]}
            faqs={[
              { q: "Are you open on Sundays?", a: "Yes, our private service operates throughout the weekend for urgent home visit requests." },
              { q: "What is the surcharge for OOH?", a: "Please check our primary pricing page for late evening and weekend rates." }
            ]}
            ctaText="Get a doctor whenever you need one."
          />
        );

      case 'post-op-care-home-visit-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Post-Operative Support"
            subtitle="Recovery at Home"
            h1="Private Doctor for Post-Op Recovery in Manchester"
            metaTitle="Private Post-Op Doctor Manchester | Home Healing Support"
            metaDesc="Recovering from surgery in Manchester? Our private doctors provide at-home post-operative checks, wound monitoring, and pain management support."
            openingText="Transitioning from hospital to home after surgery can be daunting. Our doctors provide clinical oversight to ensure your recovery remains on track and complications are caught early."
            conditionsLabel="Post-operative focus"
            conditions={["Wound Healing Monitoring", "Surgical Site Infection Check", "Pain Management Optimisation", "Thrombosis (DVT) Screening", "Physical Recovery Advice", "Liaison with Surgical Team"]}
            whyChooseUs={[
              { title: "Clinical Reassurance", desc: "Ensuring your recovery is proceeding normally and addressing any concerns before they become issues." },
              { title: "At-Home Convenience", desc: "Eliminate the painful and tiring journey back to a clinic for a simple post-op check." },
              { title: "Expert Oversight", desc: "Managed by doctors who understand the complexities of surgical recovery and wound care." }
            ]}
            faqs={[
              { q: "Can you change surgical dressings?", a: "We can monitor healing and advise; complex dressing changes are usually best handled by a nurse, but we provide medical oversight." },
              { q: "Can you prescribe more pain relief?", a: "Yes, we can optimize your post-op analgesia if your hospital-issued medication is insufficient." }
            ]}
            ctaText="Secure your post-op recovery today."
          />
        );

      case 'ear-infection-home-visit-manchester':
        return (
          <TopicPage 
            setPage={setPage}
            title="Ear Infection Treatment"
            subtitle="Otology at Home"
            h1="Private Doctor for Ear Infections in Manchester"
            metaTitle="Private Ear Infection Doctor Manchester | Home Visit Treatment"
            metaDesc="Intense ear pain or hearing loss? Our private Manchester doctors provide rapid home visit assessments for ear infections and immediate treatment."
            openingText="Ear pain is among the most distressing symptoms, especially for children. Our doctors bring the otoscope to you, providing a clear diagnosis and rapid relief in your own home."
            conditionsLabel="Ear-related focus"
            conditions={["Acute Otitis Media", "Swimmers Ear (Otitis Externa)", "Ear Canal Blockage Check", "Sudden Hearing Loss Triage", "Eardrum Perforation Screening", "Pain Management Support"]}
            whyChooseUs={[
              { title: "Direct Visualisation", desc: "Our doctors use professional diagnostic tools to see beyond the canal and accurately diagnose the cause of pain." },
              { title: "Rapid Pain Relief", desc: "Prescribing effective combined antibiotic and steroid drops for immediate relief." },
              { title: "Follow-Up Coordination", desc: "Arranging microsuction or specialist ENT referral if the infection is persistent." }
            ]}
            faqs={[
              { q: "Can you treat my child's ear infection at home?", a: "Yes, ear infections are a very common reason for our paediatric home visits." },
              { q: "Can you check for glue ear?", a: "Our doctors can perform a visual check; we can then refer for formal audiology if indicated." }
            ]}
            ctaText="Get relief from ear pain today."
          />
        );

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

