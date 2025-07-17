export interface Program {
  title: string;
  description: string;
  slug: string;
  detailedDescription: string;
  services: string[];
  impactStatement: string;
  pillar: string;
}

export interface ProgramPillar {
  title: string;
  description: string;
  slug: string;
  programs: Program[];
}

export const programs: Program[] = [
  {
    title: 'Workforce Development & Tech Training',
    description: 'Empowering individuals with the skills needed to thrive in the modern economy through comprehensive tech training and workforce development programs.',
    slug: 'workforce-development-tech-training',
    detailedDescription: 'Ohana Mana Koa\'s Workforce Development & Tech Training program equips individuals—especially Native Hawaiians and veterans—with the skills and certifications needed to succeed in today\'s economy. Whether transitioning from military service or seeking career advancement, participants gain access to comprehensive training and support.',
    services: [
      'Hands-on technical training in IT, cybersecurity, and cloud systems',
      'Industry-recognized certifications (e.g., CompTIA, AWS, Cisco)',
      'Resume-building, interview prep, and job placement assistance',
      'Internships and apprenticeship partnerships with local employers',
      'Wraparound support services to ensure long-term success'
    ],
    impactStatement: 'This program bridges the gap between potential and opportunity, unlocking pathways to sustainable, high-wage careers.',
    pillar: 'Empowerment Through Education & Opportunity'
  },
  {
    title: 'Veteran Empowerment & Transition Support',
    description: 'Providing dedicated support and resources to help veterans successfully transition to civilian life, including career services and wellness programs.',
    slug: 'veteran-empowerment-transition-support',
    detailedDescription: 'Rooted in lived experience and deep respect for service, this program supports veterans as they transition into civilian life. We offer culturally competent and personalized services that address the unique challenges faced by veterans, especially those from underrepresented communities.',
    services: [
      'Career coaching and mentorship by fellow veterans',
      'Mental health and wellness resources',
      'VA benefits navigation and legal clinic access',
      'Entrepreneurship and small business launch support',
      'Community-building events to combat isolation'
    ],
    impactStatement: 'Our goal is to ensure every veteran transitions with dignity, purpose, and a strong support network.',
    pillar: 'Cultural Resilience & Veteran Support'
  },
  {
    title: 'Educational & Cultural Advancement',
    description: 'Fostering a deeper connection to Native Hawaiian culture and promoting lifelong learning through a variety of educational and cultural initiatives.',
    slug: 'educational-cultural-advancement',
    detailedDescription: 'Our Educational & Cultural Advancement program fosters lifelong learning and a deep connection to Native Hawaiian identity and values. Education is viewed not just as academic growth, but as cultural empowerment.',
    services: [
      'Cultural workshops in language, history, and traditional practices',
      'Educational mentoring and tutoring for K–12 and college students',
      'Cultural exchange programs and heritage travel opportunities',
      'College prep and admissions guidance',
      'Hawaiian-focused STEM and STEAM enrichment'
    ],
    impactStatement: 'By weaving culture into education, we strengthen identity and resilience across generations.',
    pillar: 'Cultural Resilience & Veteran Support'
  },
  {
    title: 'Financial Literacy & Economic Mobility',
    description: 'Building a foundation for financial independence and economic mobility through targeted financial literacy education and resources.',
    slug: 'financial-literacy-economic-mobility',
    detailedDescription: 'This program builds the foundation for generational wealth, financial independence, and long-term stability. We deliver accessible, practical, and culturally aware financial education.',
    services: [
      'Budgeting, credit, and debt management skills',
      'Homeownership readiness programs',
      'Investment and retirement planning guidance',
      'Workshops on small business financing and grant access',
      'Coaching to navigate major financial decisions'
    ],
    impactStatement: 'Financial empowerment is central to our mission of self-determination for families and communities.',
    pillar: 'Empowerment Through Education & Opportunity'
  },
  {
    title: 'Community Reinvestment & Technology Equity',
    description: 'Investing in underserved communities by improving access to technology and promoting digital equity for all.',
    slug: 'community-reinvestment-technology-equity',
    detailedDescription: 'Ohana Mana Koa is committed to closing the digital divide and reinvesting in underserved communities through both physical and digital infrastructure.',
    services: [
      'Free or low-cost broadband access in rural communities',
      'Digital literacy bootcamps for kupuna (elders) and youth',
      'Device donation and refurbishment programs',
      'Partnerships with tech companies to bring tools and training to schools',
      'Community labs and learning hubs powered by local volunteers'
    ],
    impactStatement: 'By promoting technology equity, we ensure no one is left behind in an increasingly digital world.',
    pillar: 'Community Reinvestment & Technology Equity'
  },
  {
    title: 'Scholarships, Grants & Direct Aid',
    description: 'Providing direct financial support to students, families, and community members through a range of scholarships, grants, and aid programs.',
    slug: 'scholarships-grants-direct-aid',
    detailedDescription: 'This program delivers direct, need-based support to those who need it most—without unnecessary bureaucracy. Whether it\'s funding education, covering basic needs, or bridging a crisis, we stand by our community.',
    services: [
      'Academic scholarships for high school and college students',
      'Emergency aid grants for families in transition',
      'Assistance with certifications, licensing, or exam fees',
      'Microgrants for cultural projects or community improvement',
      'Back-to-school kits, holiday relief, and disaster response funds'
    ],
    impactStatement: 'Every dollar goes toward dignity, access, and opportunity.',
    pillar: 'Empowerment Through Education & Opportunity'
  },
];

export const programPillars: ProgramPillar[] = [
  {
    title: 'Empowerment Through Education & Opportunity',
    description: 'Delivers workforce development, tech training, financial literacy, and scholarship access to build long-term self-sufficiency and economic mobility.',
    slug: 'empowerment-education-opportunity',
    programs: programs.filter(p => p.pillar === 'Empowerment Through Education & Opportunity')
  },
  {
    title: 'Cultural Resilience & Veteran Support',
    description: 'Preserves Native Hawaiian heritage through language and arts, while supporting veterans and their families through transition, healing, and community reintegration.',
    slug: 'cultural-resilience-veteran-support',
    programs: programs.filter(p => p.pillar === 'Cultural Resilience & Veteran Support')
  },
  {
    title: 'Community Reinvestment & Technology Equity',
    description: 'Invests in digital inclusion, infrastructure, and direct aid to uplift underserved communities and expand access to essential resources.',
    slug: 'community-reinvestment-technology-equity',
    programs: programs.filter(p => p.pillar === 'Community Reinvestment & Technology Equity')
  }
];