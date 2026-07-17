/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, BookOpen, UserCheck, Linkedin, MapPin, Building, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <div id="contact-page" className="space-y-12 animate-fade-in">
      <section id="contact-header" className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" id="contact-title">
          Contact
        </h1>
        <p className="text-slate-700 leading-relaxed text-base md:text-lg max-w-2xl" id="contact-desc">
          Please feel free to reach out for research collaboration opportunities, editorial invitations, media inquiries, or teaching and student advising requests.
        </p>
      </section>

      <hr className="border-slate-200" />

      {/* Main Two-Column split for details and contact card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12" id="contact-content">
        {/* Left Column: Office Address & Academic Profiles */}
        <div className="space-y-8" id="contact-details-col">
          {/* Office Address Card */}
          <div className="p-6 bg-white border border-slate-200/80 rounded-lg space-y-4" id="office-address-card">
            <h2 className="text-lg font-medium text-slate-900 flex items-center space-x-2">
              <Building className="h-5 w-5 text-slate-500" />
              <span>Office Address</span>
            </h2>
            <div className="space-y-1.5 text-slate-700 text-sm leading-relaxed" id="address-details">
              <p className="font-semibold text-slate-950">Lesman Ghazaryan</p>
              <p>Assistant Professor of Marketing</p>
              <p>EMLV Business School</p>
              <p>12 Av. Léonard de Vinci</p>
              <p>Courbevoie, France</p>
              <div className="flex items-center space-x-1.5 text-slate-500 text-xs mt-2" id="location-subtext">
                <MapPin className="h-3.5 w-3.5" />
                <span>La Défense business district, Paris</span>
              </div>
            </div>
          </div>

          {/* Electronic Contact & Social Profiles */}
          <div className="space-y-4" id="academic-profiles-card">
            <h2 className="text-lg font-medium text-slate-900">Direct &amp; Academic Channels</h2>
            <div className="space-y-3" id="channels-list">
              {/* Clickable Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3 p-4 bg-white border border-slate-200/60 rounded-md hover:border-slate-300 transition-colors"
                id="contact-email-link"
              >
                <div className="p-2 bg-slate-50 rounded text-slate-600" aria-hidden="true">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <span className="text-sm font-medium text-slate-900 hover:underline">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              {/* Google Scholar Link */}
              <a
                href={PERSONAL_INFO.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white border border-slate-200/60 rounded-md hover:border-slate-300 transition-colors"
                id="contact-scholar-link"
              >
                <div className="p-2 bg-slate-50 rounded text-slate-600" aria-hidden="true">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">Google Scholar</span>
                  <span className="text-sm font-medium text-slate-900">Citations &amp; Indices</span>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-300 mr-2" />
              </a>

              {/* ORCID Link */}
              <a
                href={PERSONAL_INFO.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white border border-slate-200/60 rounded-md hover:border-slate-300 transition-colors"
                id="contact-orcid-link"
              >
                <div className="p-2 bg-slate-50 rounded text-slate-600" aria-hidden="true">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">ORCID</span>
                  <span className="text-sm font-medium text-slate-900">0009-0004-6104-3917</span>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-300 mr-2" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white border border-slate-200/60 rounded-md hover:border-slate-300 transition-colors"
                id="contact-linkedin-link"
              >
                <div className="p-2 bg-slate-50 rounded text-slate-600" aria-hidden="true">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">LinkedIn</span>
                  <span className="text-sm font-medium text-slate-900">lesman</span>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-300 mr-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Non-Functional Form Placeholder */}
        <div className="p-6 bg-white border border-slate-200/80 rounded-lg flex flex-col justify-between" id="contact-form-col">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-slate-900">Send an Inquiry</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Use the form below to draft a quick inquiry. For immediate communication, please write directly to the official university email address on the left.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()} id="contact-form">
              <div className="space-y-1" id="form-name-group">
                <label htmlFor="name-input" className="text-xs font-semibold text-slate-600">Your Name</label>
                <input
                  type="text"
                  id="name-input"
                  disabled
                  placeholder="Academic Colleague"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded bg-slate-50 text-slate-400 cursor-not-allowed"
                />
              </div>

              <div className="space-y-1" id="form-email-group">
                <label htmlFor="email-input" className="text-xs font-semibold text-slate-600">Your Email Address</label>
                <input
                  type="email"
                  id="email-input"
                  disabled
                  placeholder="colleague@university.edu"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded bg-slate-50 text-slate-400 cursor-not-allowed"
                />
              </div>

              <div className="space-y-1" id="form-message-group">
                <label htmlFor="message-input" className="text-xs font-semibold text-slate-600">Message</label>
                <textarea
                  id="message-input"
                  rows={4}
                  disabled
                  placeholder="Please use the direct university email link on the left to send messages. Thank you!"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded bg-slate-50 text-slate-400 resize-none cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full py-2 bg-slate-200 text-slate-400 text-xs font-bold rounded cursor-not-allowed"
                id="form-submit-btn"
              >
                Direct Email Preferred
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
