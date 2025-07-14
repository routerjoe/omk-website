export interface BoardMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: 'Wendy Nolan',
    title: 'Founder CEO & Mission Leader',
    bio: 'Native Hawaiian and military veteran, Wendy leads Ohana Mana Koa with a mission to empower her community through culture, service, and opportunity.',
    image: '/images/placeholder.png',
  },
  {
    name: 'Moses Nolan',
    title: 'Director of Ops & Finance',
    bio: 'Moses, of Native Hawaiian heritage, oversees operations and finance to support Ohana Mana Koa\'s long-term sustainability.',
    image: '/images/placeholder.png',
  },
  {
    name: 'Eric Jefferson',
    title: 'Director of Strategic Development',
    bio: 'Eric guides strategy and governance to help Ohana Mana Koa grow with purpose and integrity.',
    image: '/images/placeholder.png',
  },
  {
    name: 'Jonathan Thompson',
    title: 'Director of Cultural Stewardship',
    bio: 'Jonathan, of Native Hawaiian heritage, supports the preservation of cultural integrity across Ohana Mana Koa\'s mission and programs.',
    image: '/images/placeholder.png',
  },
];