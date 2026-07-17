/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  volume?: string;
  articleNumber?: string;
  pages?: string;
  year: number;
  absCategory?: string; // e.g. "ABS 3", "ABS 1"
  doiUrl?: string;
  pdfUrl?: string;
  publisherUrl?: string;
  googleScholarUrl?: string;
  abstract?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  authors: string;
  status: string;
  award?: string;
  targetJournal?: string;
}

export interface Course {
  id: string;
  title: string;
  level: 'Master' | 'Bachelor';
  semester: string;
  hours: number;
  students: number;
  evaluation?: string; // e.g. "4.2/5"
  notes?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  location?: string;
  details?: string[];
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  institution: string;
}
