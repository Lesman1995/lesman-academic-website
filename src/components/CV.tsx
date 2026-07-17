/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, ExternalLink, FileText, AlertCircle } from 'lucide-react';
import { EDUCATION, PROFESSIONAL_EXPERIENCE, AWARDS, FURTHER_TRAINING, SKILLS } from '../data';

export default function CV() {
  const handleOpenPdf = () => {
    window.open('/lesman-ghazaryan-cv.pdf', '_blank');
  };

  return (
    <div id="cv-page" className="space-y-12 animate-fade-in">
      {/* Header and Control Buttons */}
      <section id="cv-header" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-slate-200/60">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" id="cv-title">
            Curriculum Vitae
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated: July 2026
          </p>
        </div>

        {/* CV Actions */}
        <div className="flex flex-wrap gap-3" id="cv-actions">
          <a
            href="/lesman-ghazaryan-cv.pdf"
            download="lesman-ghazaryan-cv.pdf"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors cursor-pointer"
            id="cv-download-btn"
          >
            <Download className="h-4 w-4" />
            <span>Download CV (PDF)</span>
          </a>
          <button
            onClick={handleOpenPdf}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-sm font-medium rounded-md border border-slate-200 shadow-sm transition-colors cursor-pointer"
            id="cv-open-btn"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open CV in New Tab</span>
          </button>
        </div>
      </section>

      {/* Main View Split: Left is Embedded PDF, Right is Quick Links or Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10" id="cv-layout">
        {/* PDF Viewer column (Span 8 on large screens) */}
        <div className="lg:col-span-8 space-y-4" id="cv-viewer-col">
          <h2 className="text-lg font-medium text-slate-900 flex items-center space-x-2">
            <FileText className="h-5 w-5 text-slate-500" />
            <span>Official Document Viewer</span>
          </h2>
          
          <div className="relative w-full aspect-[1/1.4] bg-slate-100 border border-slate-200 rounded-lg overflow-hidden shadow-sm" id="cv-iframe-container">
            {/* Embedded PDF Iframe */}
            <iframe
              src="/lesman-ghazaryan-cv.pdf"
              title="Lesman Ghazaryan's Academic Curriculum Vitae"
              className="w-full h-full border-none"
              id="cv-pdf-iframe"
            />
            
            {/* Native fallback for environments where PDF iframe fails to load or isn't supported */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/95 p-6 text-center space-y-4 lg:hidden pointer-events-none" id="cv-mobile-fallback">
              <AlertCircle className="h-10 w-10 text-slate-400" />
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">Document Viewer Preview</h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  Interactive PDF viewing is optimized for desktop. On mobile, please download the PDF or view the summary below.
                </p>
              </div>
              <a
                href="/lesman-ghazaryan-cv.pdf"
                download="lesman-ghazaryan-cv.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded pointer-events-auto"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Summary Navigation column (Span 4) */}
        <div className="lg:col-span-4 space-y-6" id="cv-summary-col">
          <h2 className="text-lg font-medium text-slate-900 border-b border-slate-200 pb-2">
            Curriculum Vitae Overview
          </h2>
          
          {/* Quick Stats list */}
          <div className="space-y-4 text-sm text-slate-600" id="cv-overview-stats">
            <div className="space-y-1">
              <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">Current Rank</span>
              <p className="font-semibold text-slate-900">Assistant Professor of Marketing</p>
              <p className="text-xs text-slate-500">EMLV Business School, Courbevoie, France</p>
            </div>
            
            <div className="space-y-1 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">Education</span>
              <p className="font-medium text-slate-900">Ph.D. in Business Admin &amp; Marketing</p>
              <p className="text-xs text-slate-500">Grenoble School of Management, 2026</p>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">Key Research Areas</span>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
                <li>Sustainability Policies</li>
                <li>Digital Marketing</li>
                <li>Marketing–Finance Interface</li>
                <li>Corporate Misconduct</li>
              </ul>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">Scholarships &amp; Fellowships</span>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
                <li>Fulbright Scholarship</li>
                <li>Edmund S. Muskie Fellowship</li>
                <li>AGBU Academic Scholarship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
