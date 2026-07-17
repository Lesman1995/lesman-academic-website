/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Publication, ResearchProject, Course, TimelineItem, AwardItem } from './types';

export const PERSONAL_INFO = {
  name: 'Lesman Ghazaryan',
  title: 'Assistant Professor of Marketing',
  specialization: 'Head of the Negotiation and Commercial Development specialization',
  institution: 'EMLV Business School',
  address: 'Courbevoie, France',
  email: 'lesman.ghazaryan@devinci.fr',
  googleScholar: 'https://scholar.google.com/citations?user=cwChSBYAAAAJ&hl=en&oi=ao',
  orcid: 'https://orcid.org/0009-0004-6104-3917',
  linkedin: 'https://www.linkedin.com/in/lesman/',
  intro: 'I study how consumers, firms and markets respond to sustainability policies, regulatory enforcement and corporate misconduct. My research spans sustainability, digital marketing and the marketing–finance interface, using applied econometrics, causal inference and natural language processing.'
};

export const RESEARCH_INTERESTS = [
  'Sustainability',
  'Digital Marketing',
  'Marketing–Finance Interface',
  'Marketing Strategy and Innovation',
  'Corporate Misconduct and Regulatory Enforcement',
  'Applied Econometrics',
  'Causal Inference',
  'Natural Language Processing'
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-1',
    title: 'Transition from a Fixed Fee to a Pay-as-You-Throw Waste Tariff Scheme: Effectiveness of Environmental and Accountability Appeals',
    authors: ['Lesman Ghazaryan', 'Corinne Faure', 'Joachim Schleich', 'Mia M. Birau'],
    journal: 'Journal of Environmental Management',
    volume: '385',
    articleNumber: '125603',
    year: 2025,
    doiUrl: 'https://doi.org/10.1016/j.jenvman.2025.125603',
    publisherUrl: 'https://www.sciencedirect.com/science/article/pii/S0301479725015798',
    abstract: 'Pay-As-You-Throw (PAYT) tariff schemes, in which households pay based on their waste generation, are proposed as solutions to the growing worldwide challenge of municipal solid waste management. However, public acceptance of such schemes remains low. Using a one-factor between-subject experimental survey design with 620 participants, we test the effects of environmental and accountability appeals and of individual characteristics in shaping preferences for a proposed PAYT scheme in Grenoble, France. We find a positive effect of the accountability appeal and no effect of the environmental appeal on preference for the PAYT scheme compared to a fixed-fee scheme. Additional analyses suggest that accountability appeals are particularly effective for individuals with below-median age, above-median income, and at least a master’s degree, indicating that policymakers should target younger and educated citizens with these appeals in PAYT campaigns. Future research could test the applicability of these findings in other settings and for other waste-related interventions.'
  },
  {
    id: 'pub-2',
    title: 'Estimating Systemic Risk Using Composite Quantile Regression',
    authors: ['Meysam Sojoudi', 'Mahdi Sojoudi', 'Lesman Ghazaryan', 'MohammadJavad Tavoosi'],
    journal: 'Computational Economics',
    pages: '1–18',
    year: 2025,
    doiUrl: 'https://doi.org/10.1007/s10614-025-11029-5',
    publisherUrl: 'https://link.springer.com/article/10.1007/s10614-025-11029-5',
    abstract: 'Value at Risk (VaR) and Average Value at Risk (AVaR) are among the most widely used risk measures by market participants to assess the risk of individual financial firms and institutions. Despite their popularity, both measures fail to account for spillover effects between firms. To address this limitation, the CoVaR (Conditional Value at Risk) measure was introduced, which defines the VaR of a financial system conditional on the state of another institution. The traditional approach to estimating CoVaR involves a regression model combined with a quantile method to estimate the model’s parameters. This paper proposes a composite quantile regression method to enhance the accuracy of CoVaR estimation. We apply this methodology to several U.S. companies across various sectors, including finance, consumer goods, energy, industry, and technology. An analysis of the out-of-sample forecast accuracy using two popular backtesting criteria demonstrates that the composite quantile method provides more accurate CoVaR estimates than the standard quantile method. All computation codes are freely available in both R and MATLAB.'
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'proj-1',
    title: 'Innovation Washing: Rebuilding Firm Reputation Through New Product Introductions Following Environmental, Social, and Governance Penalties',
    authors: 'Lesman Ghazaryan, Mariia Koval, Stacey L. Howard-Malek and Koen Pauwels',
    status: 'Award Finalist for Best Dissertation, PDMA Doctoral Consortium, Syracuse University, 2024',
    award: 'Award Finalist for Best Dissertation, PDMA Doctoral Consortium, Syracuse University (2024)'
  },
  {
    id: 'proj-2',
    title: 'Turning the Tide: Marketing Strategies to Address Competitor\'s Corporate Social Irresponsibility and Its Impact on Stock Market Reaction',
    authors: 'Lesman Ghazaryan, Mariia Koval, Stacey L. Howard-Malek and Alina Sorescu',
    status: 'In preparation for submission to the Journal of Marketing Research',
    targetJournal: 'Journal of Marketing Research'
  },
  {
    id: 'proj-3',
    title: 'The Effect of ESG Violations on Insider Trading Behavior: Evidence from Regulatory Actions',
    authors: 'Lesman Ghazaryan, Mahdi Sojoudi and Gareth W. Peters',
    status: 'In preparation for submission to Review of Accounting Studies',
    targetJournal: 'Review of Accounting Studies'
  },
  {
    id: 'proj-4',
    title: 'How Innovation Shapes Alliance Strategies in the Pharmaceutical Industry',
    authors: 'Renuka Devi S. Karthikeyan and Lesman Ghazaryan',
    status: 'Data collection in progress'
  },
  {
    id: 'proj-5',
    title: 'The Effects of Virtual Reality Experiences on Human Creativity: A Field Experiment',
    authors: 'Stacey L. Howard-Malek, Fiona Schweitzer and Lesman Ghazaryan',
    status: 'Data collection in progress'
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Sales and Negotiation',
    level: 'Master',
    semester: 'Fall 2025',
    hours: 15,
    students: 37,
    evaluation: '4.2/5',
    notes: 'Includes LLM-supported experiential learning through AI-based interview and negotiation simulation.'
  },
  {
    id: 'course-2',
    title: 'Advanced Research Methods',
    level: 'Master',
    semester: 'Fall 2025',
    hours: 15,
    students: 28,
    evaluation: '4.6/5',
    notes: 'Includes AI-enabled critical review, AI-simulated CFO/CEO challenges, and synthetic-data-based replication and re-analysis.'
  },
  {
    id: 'course-3',
    title: 'Advanced Research Methods',
    level: 'Master',
    semester: 'Fall 2025',
    hours: 15,
    students: 16,
    evaluation: '4.8/5',
    notes: 'Includes AI-enabled critical review, AI-simulated CFO/CEO challenges, and synthetic-data-based replication and re-analysis.'
  },
  {
    id: 'course-4',
    title: 'Innovation Management',
    level: 'Master',
    semester: 'Fall 2024',
    hours: 15,
    students: 38,
    notes: 'Not evaluated.'
  },
  {
    id: 'course-5',
    title: 'Digital Retail Marketing',
    level: 'Master',
    semester: 'Fall 2024',
    hours: 15,
    students: 35,
    notes: 'Incorporates AI-guided activities to accelerate instrument development, explore consumer segments, and test marketing insights.'
  },
  {
    id: 'course-6',
    title: 'Advanced Research Methods',
    level: 'Master',
    semester: 'Fall 2024',
    hours: 15,
    students: 41,
    evaluation: '4.9/5',
    notes: 'Includes AI-enabled critical review, AI-simulated CFO/CEO challenges, and synthetic-data-based replication and re-analysis.'
  },
  {
    id: 'course-7',
    title: 'Advanced Research Methods',
    level: 'Master',
    semester: 'Fall 2024',
    hours: 15,
    students: 25,
    evaluation: '4.7/5',
    notes: 'Includes AI-enabled critical review, AI-simulated CFO/CEO challenges, and synthetic-data-based replication and re-analysis.'
  },
  {
    id: 'course-8',
    title: 'Advanced Research Methods',
    level: 'Master',
    semester: 'Fall 2023',
    hours: 15,
    students: 32,
    evaluation: '4.8/5',
    notes: 'Includes AI-enabled critical review, AI-simulated CFO/CEO challenges, and synthetic-data-based replication and re-analysis.'
  },
  {
    id: 'course-9',
    title: 'Research Methods',
    level: 'Bachelor',
    semester: 'Spring 2023',
    hours: 15,
    students: 27,
    evaluation: '4.7/5',
    notes: 'Lecturer level'
  },
  {
    id: 'course-10',
    title: 'Research Methods',
    level: 'Bachelor',
    semester: 'Spring 2022',
    hours: 15,
    students: 24,
    evaluation: '4.5/5',
    notes: 'Lecturer level'
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    id: 'edu-1',
    year: 'July 2026',
    title: 'Ph.D., Business Administration, Marketing',
    subtitle: 'Grenoble School of Management',
    location: 'Grenoble, France',
    details: [
      'Dissertation title: "Consumer, Firm, and Market Reactions to Government Sustainability Policies and Enforcement Mechanisms"'
    ]
  },
  {
    id: 'edu-2',
    year: 'May 2021',
    title: 'Master of Arts, Economics',
    subtitle: 'Vanderbilt University',
    location: 'Nashville, TN, USA',
    details: [
      'Academic Excellence Award'
    ]
  },
  {
    id: 'edu-3',
    year: 'May 2017',
    title: 'Bachelor of Science, Economics',
    subtitle: 'Jean Moulin Lyon 3 University',
    location: 'Lyon, France'
  }
];

export const PROFESSIONAL_EXPERIENCE: TimelineItem[] = [
  {
    id: 'exp-1',
    year: 'May 2021 – August 2021',
    title: 'Research Assistant to Professor James Hollifield',
    subtitle: 'The Wilson Center',
    location: 'Washington, DC'
  },
  {
    id: 'exp-2',
    year: 'May 2020 – August 2021',
    title: 'Consultant; Doing Business Unit, Development Impact Evaluation Unit',
    subtitle: 'The World Bank',
    location: 'Washington, DC'
  },
  {
    id: 'exp-3',
    year: 'November 2017 – July 2019',
    title: 'Commercial Analyst, Sales and Operations Coordinator',
    subtitle: 'The Coca-Cola Company',
    location: 'Yerevan, Armenia'
  },
  {
    id: 'exp-4',
    year: 'July 2017 – December 2017',
    title: 'Economic Specialist',
    subtitle: 'Government of Armenia',
    location: 'Yerevan, Armenia'
  },
  {
    id: 'exp-5',
    year: 'May 2015 – May 2016',
    title: 'Intern at Political/Economic section',
    subtitle: 'US Embassy in Armenia',
    location: 'Yerevan, Armenia'
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    year: '2024',
    title: 'Finalist in the best doctoral dissertation competition',
    institution: 'PDMA Association'
  },
  {
    id: 'award-2',
    year: '2021 - 2023',
    title: 'Scholarship for Academic Excellence',
    institution: 'AGBU Foundation'
  },
  {
    id: 'award-3',
    year: '2021',
    title: 'Academic Excellence Award',
    institution: 'Vanderbilt University'
  },
  {
    id: 'award-4',
    year: '2019 - 2021',
    title: 'Fulbright Scholarship',
    institution: 'US State Department'
  },
  {
    id: 'award-5',
    year: '2021',
    title: 'Edmund S. Muskie Internship Grant',
    institution: 'U.S. Department of State'
  },
  {
    id: 'award-6',
    year: '2020',
    title: 'The Ferguson Award for Community Service and Volunteerism',
    institution: 'Vanderbilt University'
  }
];

export const SKILLS = {
  software: [
    { category: 'Data Analysis', items: 'Stata, Python, R, Wolfram Mathematica' },
    { category: 'Survey Research Platforms', items: 'Qualtrics' },
    { category: 'Typesetting Document', items: 'LaTeX, Atom, Lyx' },
    { category: 'Microsoft Office', items: 'Word, Excel, PowerPoint, Access' },
    { category: 'Geographic Information System', items: 'QGIS' }
  ],
  languages: 'Fluent in English, French, Russian, and Armenian; working knowledge of Spanish.'
};

export const FURTHER_TRAINING = [
  { year: '2019', title: 'Pre-Graduate Studies', institution: 'Michigan State University' },
  { year: '2017', title: 'Trainings on Econometric Models and Operations Management', institution: 'ICARE foundation' },
  { year: '2017', title: 'Audit, Tax and Advisory', institution: 'KPMG' }
];

export const CONFERENCES = [
  {
    title: 'How Innovation Shapes Alliance Strategies in the Pharmaceutical Industry',
    details: 'Accepted to R&D Management Conference and Product Development Management Conference, 2026'
  },
  {
    title: 'Innovation Washing: Rebuilding Firm Reputation Through New Product Introductions Following Environmental, Social, and Governance Penalties',
    details: 'EMAC Annual Conference, 2026*, EMAC Annual Conference, 2024*, PDMA Doctoral Consortium (Award Finalist), 2024*, Auvergne-Rhône-Alpes Conference, Emlyon Business School, 2024*'
  },
  {
    title: 'Transition from a Fixed Fee to a Pay-as-You-Throw Waste Tariff Scheme: Effectiveness of Environmental and Accountability Appeals',
    details: 'EMAC Doctoral Colloquium, 2023*'
  }
];
