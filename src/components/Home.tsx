/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, BookOpen, UserCheck, Linkedin, FileText, ArrowRight, MapPin, Building2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, RESEARCH_INTERESTS, PUBLICATIONS, RESEARCH_PROJECTS, CONFERENCES } from '../data';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Pulling specific publication and research projects for clean home view
  const featuredPub = PUBLICATIONS[0];
  const featuredProj = RESEARCH_PROJECTS[0];

  return (
    <div id="home-page" className="space-y-16 animate-fade-in max-w-4xl mx-auto">
      {/* 1. Main Welcome Split: Portrait on Left, Bio and Info on Right */}
      <section id="hero-section" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-4">
        {/* Left Column: Portrait and Fast Contact Card */}
        <div className="md:col-span-4 flex flex-col items-center md:items-stretch gap-6" id="hero-portrait-col">
          <div className="w-full max-w-[280px] md:max-w-full aspect-[3/4] overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src="/lesman-ghazaryan-photo.jpg"
              alt="Portrait of Lesman Ghazaryan"
              className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
              referrerPolicy="no-referrer"
              id="hero-portrait"
            />
          </div>

          {/* Quick Office Card directly below photo (Standard academic style) */}
          <div className="w-full max-w-[280px] md:max-w-full p-5 bg-white border border-slate-200/70 rounded-md space-y-4" id="quick-office-card">
            <h3 className="text-xs font-bold font-sans tracking-wider text-slate-400 uppercase flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <Building2 className="h-3.5 w-3.5 text-slate-500" />
              <span>OFFICE CONTACT</span>
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600 leading-normal" id="quick-office-lines">
              <div className="space-y-0.5">
                <p className="font-semibold text-slate-900">Lesman Ghazaryan</p>
                <p>EMLV Business School</p>
                <p className="text-slate-400 font-medium">12 Av. Léonard de Vinci</p>
                <p className="text-slate-400">92400 Courbevoie, France</p>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 pt-1 border-t border-slate-100/60">
                <MapPin className="h-3 w-3 shrink-0" />
                <span>La Défense, Paris</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Welcome, Research Interests, and Core Links */}
        <div className="md:col-span-8 space-y-8" id="hero-info-col">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold text-slate-950 tracking-tight" id="welcome-heading">
              Welcome!
            </h2>
            <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-4" id="bio-intro-paragraphs">
              <p>
                I am an <strong>Assistant Professor of Marketing</strong> and the Head of the Negotiation and Commercial Development specialization at <strong>EMLV Business School</strong> in Paris, France.
              </p>
              <p>
                {PERSONAL_INFO.intro}
              </p>
              <p>
                My doctoral studies were completed at Grenoble School of Management, and I hold a Master of Arts in Economics from Vanderbilt University. Prior to joining academia, I worked in consulting and commercial analysis roles with international organizations including the World Bank, the Wilson Center, and The Coca-Cola Company.
              </p>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 pt-2 border-t border-slate-100" id="hero-profiles-row">
            <a
              href={PERSONAL_INFO.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:underline transition-colors"
              id="hero-scholar-btn"
            >
              <BookOpen className="h-3.5 w-3.5 text-slate-400" />
              <span>Google Scholar</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <a
              href={PERSONAL_INFO.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:underline transition-colors"
              id="hero-orcid-btn"
            >
              <UserCheck className="h-3.5 w-3.5 text-slate-400" />
              <span>ORCID</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:underline transition-colors"
              id="hero-linkedin-btn"
            >
              <Linkedin className="h-3.5 w-3.5 text-slate-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:underline transition-colors"
              id="hero-email-btn"
            >
              <Mail className="h-3.5 w-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          {/* Clean, Non-Card Research Interests (Pure Typographic Academic style) */}
          <div className="space-y-4 pt-4 border-t border-slate-100" id="home-interests-section">
            <h3 className="text-sm font-bold font-sans tracking-wider text-slate-400 uppercase">
              RESEARCH INTERESTS
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-700" id="interests-bullets">
              {RESEARCH_INTERESTS.map((interest, idx) => (
                <li key={idx} className="flex items-start gap-2" id={`interest-${idx}`}>
                  <span className="text-slate-400 select-none mt-0.5">&ndash;</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Research Focus & Selected Papers Segment */}
      <section id="research-focus-segment" className="pt-10 border-t border-slate-200/60 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xl font-serif font-semibold text-slate-900">
            Selected Work
          </h2>
          <button
            onClick={() => {
              onNavigate('research');
              window.location.hash = '#research';
            }}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-950 transition-colors uppercase tracking-wider"
            id="home-view-all-research-btn"
          >
            <span>All Research</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="featured-papers-grid">
          {/* Working / Dissertation Feature */}
          <div className="space-y-3" id="home-featured-dissertation">
            <span className="text-[10px] font-bold font-sans tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100/80">
              Featured Dissertation Work
            </span>
            <h3 className="text-base font-medium text-slate-900 leading-snug">
              {featuredProj.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Co-authors: {featuredProj.authors.replace('Lesman Ghazaryan, ', '')}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              {featuredProj.status}
            </p>
          </div>

          {/* Selected Publication Feature */}
          <div className="space-y-3" id="home-featured-publication">
            <span className="text-[10px] font-bold font-sans tracking-widest text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              Recent Publication
            </span>
            <h3 className="text-base font-medium text-slate-900 leading-snug">
              “{featuredPub.title}”
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              <strong>Lesman Ghazaryan</strong>, {featuredPub.authors.filter(a => a !== 'Lesman Ghazaryan').join(', ')}
            </p>
            <p className="text-xs text-slate-600 font-medium italic">
              {featuredPub.journal}, {featuredPub.year}
            </p>
            {featuredPub.publisherUrl && (
              <div className="flex items-center space-x-2 pt-1 text-xs">
                <a
                  href={featuredPub.publisherUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-950 font-medium transition-colors inline-flex items-center space-x-1"
                  id="home-featured-pub-link"
                >
                  <span>[Journal Link]</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Academic Activity Newsfeed */}
      <section id="recent-activity-segment" className="pt-10 border-t border-slate-200/60 space-y-6">
        <h2 className="text-xl font-serif font-semibold text-slate-900 border-b border-slate-100 pb-3">
          Academic Activity
        </h2>
        
        <div className="space-y-4 text-sm text-slate-700" id="newsfeed-list">
          {CONFERENCES.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start" id={`news-item-${idx}`}>
              <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                {idx === 0 ? 'NEW' : 'EVENT'}
              </span>
              <div className="space-y-1">
                <p className="font-medium text-slate-900 leading-snug">{item.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
