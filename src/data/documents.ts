export interface Document {
  title: string;
  summary: string;
  url: string;
}

export const documents: Document[] = [
  {
    title: 'Bylaws',
    summary: 'Our bylaws outline the governance structure, roles, and responsibilities of our board, and our commitment to transparency.',
    url: '/documents/bylaws.pdf',
  },
  {
    title: 'Conflict of Interest Policy',
    summary: 'This policy details our procedures for managing potential conflicts of interest, including recusal and annual disclosure requirements.',
    url: '/documents/conflict-of-interest.pdf',
  },
  {
    title: 'Narrative Description of Activities',
    summary: 'This document provides a detailed narrative of our activities, as submitted to the IRS in our Form 1023 application.',
    url: '/documents/narrative-description.pdf',
  },
  {
    title: 'Budget Projection',
    summary: 'Our three-year budget projection outlines our financial plan, including anticipated revenue and expenses.',
    url: '/documents/budget-projection.pdf',
  },
];