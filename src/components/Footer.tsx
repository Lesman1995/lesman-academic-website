/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, BookOpen, UserCheck, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="w-full bg-[#fcfbf9] border-t border-slate-200/60 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-sm text-slate-500" id="footer-copyright">
          © {currentYear} Lesman Ghazaryan. All rights reserved.
        </div>

        {/* Social / Academic Links */}
        <div className="flex items-center space-x-6" id="footer-links">
          <a
            href={PERSONAL_INFO.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors duration-150 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            aria-label="Google Scholar"
            id="footer-scholar-link"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={PERSONAL_INFO.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors duration-150 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            aria-label="ORCID Profile"
            id="footer-orcid-link"
          >
            <UserCheck className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors duration-150 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            aria-label="LinkedIn Profile"
            id="footer-linkedin-link"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-slate-400 hover:text-slate-900 transition-colors duration-150 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            aria-label="Email"
            id="footer-email-link"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
