/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RESEARCH_PROJECTS } from '../data';

export default function Research() {
  return (
    <div id="research-page" className="space-y-12 animate-fade-in max-w-4xl mx-auto">
      {/* Page Header */}
      <section id="research-intro" className="space-y-4">
        <h1 className="text-3xl font-serif font-semibold tracking-tight text-slate-950" id="research-title">
          Research in Progress
        </h1>
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base max-w-3xl" id="research-desc">
          My primary research examines consumer, firm and market responses to government sustainability policies and regulatory enforcement. Spanning sustainability, digital marketing, and the marketing–finance interface, my projects leverage applied econometrics, causal inference, and natural language processing to generate rigorous insights for scholars, managers, and policymakers.
        </p>
      </section>

      <hr className="border-slate-200" />

      {/* Main Works & Dissertation Projects */}
      <section id="research-dissertation-projects" className="space-y-8">
        <h2 className="text-lg font-bold font-sans tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-2">
          FEATURED RESEARCH &amp; DISSERTATION
        </h2>

        <div className="space-y-8" id="featured-projects-list">
          {RESEARCH_PROJECTS.slice(0, 3).map((project, idx) => (
            <div key={project.id} className="space-y-2 text-sm sm:text-base" id={`featured-project-${idx}`}>
              {/* Title as bold link block */}
              <h3 className="font-semibold text-slate-950 hover:text-slate-800 transition-colors text-base leading-snug">
                {project.title}
              </h3>
              
              {/* Authors Line */}
              <p className="text-slate-500 font-normal">
                {project.authors}
              </p>

              {/* Status and Bracketed Resource Links */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 pt-0.5">
                <span className="font-bold text-slate-400 font-mono uppercase">Status:</span>
                <span className="font-medium text-slate-800">{project.status}</span>
                {project.id === 'proj-1' && (
                  <>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <span className="text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded text-[10px]">PDMA Finalist</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Research / Works in Progress */}
      <section id="research-other-projects" className="space-y-8 pt-4">
        <h2 className="text-lg font-bold font-sans tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-2">
          OTHER ACTIVE PAPERS &amp; FIELD INITIATIVES
        </h2>

        <div className="space-y-8" id="other-projects-list">
          {RESEARCH_PROJECTS.slice(3).map((project, idx) => (
            <div key={project.id} className="space-y-2 text-sm sm:text-base" id={`other-project-${idx}`}>
              <h3 className="font-semibold text-slate-950 text-base leading-snug">
                {project.title}
              </h3>
              
              <p className="text-slate-500 font-normal">
                {project.authors}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 pt-0.5">
                <span className="font-bold text-slate-400 font-mono uppercase">Status:</span>
                <span className="font-medium text-slate-800">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
