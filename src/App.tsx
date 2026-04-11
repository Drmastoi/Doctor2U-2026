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
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [sharedInsights, setSharedInsights] = useState<string>('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home setPage={setPage} setSharedInsights={setSharedInsights} />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'contact': return <ContactPage setPage={setPage} />;
      case 'booking': return <BookingPage setPage={setPage} sharedInsights={sharedInsights} />;
      case 'innovation': return <InnovationPage setPage={setPage} />;
      case 'treatment-plan': return <TreatmentPlan setPage={setPage} />;
      default: return <Home setPage={setPage} setSharedInsights={setSharedInsights} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-medical-100 selection:text-medical-900">
      {/* SEO Meta Tags (Simulated for SPA) */}
      <header className="sr-only">
        <h1>Doctor2U - Private Medical Service Lancashire & Manchester</h1>
        <p>Expert private doctor consultations by Doctor2U. Online, face-to-face, and home visits in Lancashire and Manchester. Transparent pricing: £100 for 30 min online/clinic, £130 for home visits.</p>
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

