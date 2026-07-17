/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PUBLICATIONS, PERSONAL_INFO } from '../data';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function Publications() {
  const [expandedPubs, setExpandedPubs] = useState<Record<string, boolean>>({});

  const toggleAbstract = (id: string) => {
    setExpandedPubs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Helper to render author lists with "Lesman Ghazaryan" bolded
  const renderAuthors = (authors: string[]) => {
    return authors.map((author, idx) => {
      const isLesman = author === 'Lesman Ghazaryan';
      return (
        <span key={idx}>
          {isLesman ? <strong className="text-slate-950 font-semibold">{author}</strong> : author}
          {idx < authors.length - 1 ? ', ' : ''}
        </span>
      );
    });
  };

  return (
    <div id="publications-page" className="space-y-12 animate-fade-in max-w-4xl mx-auto">
      {/* Page Header */}
      <section id="publications-header" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-3">
          <h1 className="text-3xl font-serif font-semibold tracking-tight text-slate-950" id="publications-title">
            Publications
          </h1>
          <a
            href={PERSONAL_INFO.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-500 hover:text-slate-950 hover:underline tracking-wider uppercase"
            id="pubs-scholar-profile-link"
          >
            Google Scholar Profile &rarr;
          </a>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Publications List */}
      <section id="peer-reviewed-pubs" className="space-y-8">
        <h2 className="text-lg font-bold font-sans tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-2">
          JOURNAL ARTICLES
        </h2>

        <div className="space-y-8" id="publications-list">
          {PUBLICATIONS.map((pub, idx) => (
            <div key={pub.id} className="space-y-2 text-sm sm:text-base border-b border-slate-100/50 pb-6 last:border-b-0" id={`pub-item-${idx}`}>
              {/* Publication Title */}
              <h3 className="font-semibold text-slate-950 text-base leading-snug">
                “{pub.title}”
              </h3>

              {/* Author Line */}
              <p className="text-slate-500 leading-relaxed font-normal">
                {renderAuthors(pub.authors)}
              </p>

              {/* Journal Details & Metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                <span className="italic font-medium text-slate-800">{pub.journal}</span>
                {pub.volume && <span>vol. {pub.volume}</span>}
                {pub.articleNumber && <span>article {pub.articleNumber}</span>}
                {pub.pages && <span>pp. {pub.pages}</span>}
                <span className="text-slate-400">({pub.year})</span>
                
                <span className="text-slate-300 hidden sm:inline">|</span>

                {/* Resource Links in bracketed format */}
                <div className="flex items-center space-x-3 text-slate-400" id={`pub-links-${pub.id}`}>
                  {pub.publisherUrl && (
                    <a
                      href={pub.publisherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 hover:text-slate-950 font-medium transition-colors"
                      id={`pub-publisher-link-${pub.id}`}
                    >
                      <span>[Journal Link]</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                  {pub.doiUrl && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 hover:text-slate-950 font-medium transition-colors"
                      id={`pub-doi-link-${pub.id}`}
                    >
                      <span>[DOI]</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                  {pub.abstract && (
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center space-x-1 hover:text-slate-950 font-medium transition-colors text-slate-500 focus:outline-none"
                      id={`pub-abstract-btn-${pub.id}`}
                    >
                      <span>[{expandedPubs[pub.id] ? 'Hide Abstract' : 'Abstract'}]</span>
                      {expandedPubs[pub.id] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Abstract Container */}
              {expandedPubs[pub.id] && pub.abstract && (
                <div
                  className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-700 leading-relaxed space-y-2 animate-fade-in"
                  id={`pub-abstract-container-${pub.id}`}
                >
                  <div className="font-semibold text-xs text-slate-500 uppercase tracking-wider flex items-center space-x-1.5" id={`pub-abstract-hdr-${pub.id}`}>
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>Abstract</span>
                  </div>
                  <p className="text-slate-800 leading-relaxed" id={`pub-abstract-txt-${pub.id}`}>
                    {pub.abstract}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
