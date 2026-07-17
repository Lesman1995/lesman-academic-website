/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import CV from './components/CV';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle Hash Sync and Scroll-to-Top
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validSections = ['home', 'research', 'publications', 'teaching', 'cv', 'contact'];
      if (hash && validSections.includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection('home');
      }
      window.scrollTo(0, 0);
    };

    handleHashChange(); // Run on mount

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamically update document title for SEO
  useEffect(() => {
    const sectionTitles: Record<string, string> = {
      home: 'Lesman Ghazaryan | Assistant Professor of Marketing',
      research: 'Research - Lesman Ghazaryan',
      publications: 'Publications - Lesman Ghazaryan',
      teaching: 'Teaching & Pedagogy - Lesman Ghazaryan',
      cv: 'Curriculum Vitae - Lesman Ghazaryan',
      contact: 'Contact & Inquiry - Lesman Ghazaryan',
    };

    document.title = sectionTitles[activeSection] || 'Lesman Ghazaryan | Assistant Professor of Marketing';
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'teaching':
        return <Teaching />;
      case 'cv':
        return <CV />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbf9]" id="app-root">
      {/* Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12 md:py-16" id="main-content">
        <div className="transition-opacity duration-200">
          {renderSection()}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
