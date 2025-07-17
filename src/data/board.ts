export interface BoardMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: 'Wendy Nolan',
    title: 'President & CEO',
    bio: 'Native Hawaiian and military veteran, Wendy serves as Mission Leader, overseeing vision, strategy, and cultural alignment for Ohana Mana Koa.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Daniel M. Nolan',
    title: 'Director of Operations & Finance',
    bio: 'Daniel manages day-to-day operations, financial oversight, and long-term sustainability for Ohana Mana Koa.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Eric Jefferson',
    title: 'Director of Strategy and Compliance',
    bio: 'Eric provides strategic guidance and ensures regulatory and operational compliance for Ohana Mana Koa.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Jonathan Thompson',
    title: 'Board Director, Community Stewardship',
    bio: 'Jonathan leads community outreach grounded in cultural values, fostering local partnerships and strengthening connection with the communities we serve.',
    image: '/images/placeholder.svg',
  },
];