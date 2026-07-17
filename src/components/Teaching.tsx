/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, BookOpen, Brain, Users, CheckCircle2 } from 'lucide-react';
import { COURSES, RESEARCH_INTERESTS } from '../data';

export default function Teaching() {
  const masterCourses = COURSES.filter(c => c.level === 'Master');
  const bachelorCourses = COURSES.filter(c => c.level === 'Bachelor');

  const teachingInterests = [
    'Marketing Research',
    'Marketing Strategy',
    'Sales Management',
    'Innovation Management',
    'Digital Marketing',
    'Research Methods'
  ];

  return (
    <div id="teaching-page" className="space-y-16 animate-fade-in">
      {/* Page Title & Intro */}
      <section id="teaching-header" className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" id="teaching-title">
          Teaching
        </h1>
        <p className="text-slate-700 leading-relaxed text-base md:text-lg max-w-3xl" id="teaching-philosophy-intro">
          My teaching philosophy is centered on blending scientific rigor with experiential learning. I aim to equip students with the analytical skills necessary for data-driven marketing decisions while fostering critical thinking through active simulations and the structured, responsible application of AI tools.
        </p>
      </section>

      <hr className="border-slate-200" />

      {/* AI-Supported Teaching Methods */}
      <section id="ai-teaching" className="space-y-6">
        <div className="flex items-center space-x-2.5">
          <Brain className="h-6 w-6 text-slate-700" />
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            AI-Supported Teaching Methods
          </h2>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-3xl">
          I leverage advanced Large Language Models (LLMs) and artificial intelligence frameworks to create high-engagement, modern learning environments. These methodologies are integrated directly into my courses to prepare students for the future of marketing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="ai-methods-grid">
          <div className="p-5 bg-white border border-slate-200/80 rounded-lg space-y-3" id="ai-method-1">
            <h3 className="font-medium text-slate-900">LLM-Supported Interview &amp; Negotiation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Using customized AI personas to simulate real-world B2B sales negotiations, allowing students to test tactics, handle objections, and receive immediate, structured feedback on their commercial communication.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200/80 rounded-lg space-y-3" id="ai-method-2">
            <h3 className="font-medium text-slate-900">AI-Enabled Critical Review Exercises</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Teaching students how to evaluate AI-generated marketing copy, strategies, and research summaries critically, identifying hallucinations, bias, and areas where human oversight is essential.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200/80 rounded-lg space-y-3" id="ai-method-3">
            <h3 className="font-medium text-slate-900">AI-Simulated CFO &amp; CEO Challenges</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Immersive business cases where students must pitch marketing initiatives or defend budgets against tough, AI-driven corporate board members representing financial and operational roles.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200/80 rounded-lg space-y-3" id="ai-method-4">
            <h3 className="font-medium text-slate-900">Synthetic-Data Replication &amp; Re-analysis</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Training advanced research students to generate, clean, and run econometrics models on synthetic datasets to replicate empirical findings, validating robustness of strategic theories safely.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200/80 rounded-lg space-y-3 md:col-span-2" id="ai-method-5">
            <h3 className="font-medium text-slate-900">AI-Guided Instrument Development &amp; Consumer Exploration</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Accelerating marketing research project designs by using generative tools to guide focus group protocols, draft initial survey instruments, and run qualitative consumer segment exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Taught Section */}
      <section id="courses-taught" className="space-y-8 pt-6 border-t border-slate-200/60">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Courses Taught</h2>
          <p className="text-slate-500 text-sm">
            Grenoble Ecole de Management, Lecturer
          </p>
        </div>

        <div className="space-y-8" id="courses-list-container">
          {/* Master's level */}
          <div className="space-y-4" id="masters-courses-section">
            <h3 className="text-lg font-medium text-slate-900 border-b border-slate-200 pb-2">
              Master's Level
            </h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white" id="masters-table-wrapper">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3.5 font-medium">Course Title</th>
                    <th scope="col" className="px-6 py-3.5 font-medium">Semester</th>
                    <th scope="col" className="px-6 py-3.5 font-medium text-right">Hours</th>
                    <th scope="col" className="px-6 py-3.5 font-medium text-right">Students</th>
                    <th scope="col" className="px-6 py-3.5 font-medium text-right">Evaluation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {masterCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div>
                          {course.title}
                          {course.notes && (
                            <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                              {course.notes}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{course.semester}</td>
                      <td className="px-6 py-4 text-right font-mono">{course.hours}h</td>
                      <td className="px-6 py-4 text-right font-mono">{course.students}</td>
                      <td className="px-6 py-4 text-right font-mono font-medium text-slate-800">
                        {course.evaluation ? (
                          <span className="inline-flex items-center space-x-1">
                            <span className="text-amber-500 font-semibold">★</span>
                            <span>{course.evaluation}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs italic">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bachelor's level */}
          <div className="space-y-4" id="bachelors-courses-section">
            <h3 className="text-lg font-medium text-slate-900 border-b border-slate-200 pb-2">
              Bachelor's Level
            </h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white" id="bachelors-table-wrapper">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3.5 font-medium">Course Title</th>
                    <th scope="col" className="px-6 py-3.5 font-medium">Semester</th>
                    <th scope="col" className="px-6 py-3.5 font-medium text-right">Hours</th>
                    <th scope="col" className="px-6 py-3.5 font-medium text-right">Students</th>
                    <th scope="col" className="px-6 py-3.5 font-medium text-right">Evaluation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  {bachelorCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div>
                          {course.title}
                          {course.notes && (
                            <p className="text-xs text-slate-500 font-normal mt-1">
                              {course.notes}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{course.semester}</td>
                      <td className="px-6 py-4 text-right font-mono">{course.hours}h</td>
                      <td className="px-6 py-4 text-right font-mono">{course.students}</td>
                      <td className="px-6 py-4 text-right font-mono font-medium text-slate-800">
                        {course.evaluation ? (
                          <span className="inline-flex items-center space-x-1">
                            <span className="text-amber-500 font-semibold">★</span>
                            <span>{course.evaluation}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs italic">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Interests Grid */}
      <section id="teaching-interests" className="space-y-6 pt-6 border-t border-slate-200/60">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Teaching Interests
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="teaching-interests-grid">
          {teachingInterests.map((interest, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 p-4 bg-white border border-slate-200/60 rounded-md"
              id={`teaching-interest-item-${idx}`}
            >
              <CheckCircle2 className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-800">{interest}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
