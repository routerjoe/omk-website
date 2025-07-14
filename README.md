# Ohana Mana Koa (OMK) Website

A Next.js website for Ohana Mana Koa, a Native Hawaiian nonprofit organization dedicated to supporting Hawaiian families and preserving Hawaiian culture.

## 🌺 About Ohana Mana Koa

Ohana Mana Koa is committed to empowering Native Hawaiian communities through cultural preservation, educational programs, and family support services. Our mission is to strengthen the bonds of ohana (family) while honoring traditional Hawaiian values and practices.

## 🚀 Features

### Core Pages
- **Home Page** - Welcome message, mission statement, and call-to-action sections
- **Programs** - Comprehensive listing of all available programs with detailed descriptions
- **Individual Program Pages** - Detailed information for each program with application links
- **Apply** - Program application workflow and process information
- **Contact** - Contact form and organizational email addresses
- **Donate** - Donation page with Hawaiian volcano-themed naming (Kohala, Mauna Kea, Haleakalā)

### Key Functionality
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Hawaiian Cultural Elements** - Authentic Hawaiian naming and imagery throughout
- **Program Applications** - Streamlined application process for all programs
- **Corporate Sponsorship** - Dedicated sponsorship inquiry system
- **Contact Management** - Multiple contact channels for different purposes

### Programs Offered
1. **Keiki Care Program** - Childcare and early education support
2. **Kupuna Support** - Elder care and assistance services  
3. **Cultural Education** - Traditional Hawaiian cultural learning
4. **Family Counseling** - Mental health and family support services
5. **Job Training** - Employment skills and career development
6. **Housing Assistance** - Support for housing needs and stability

## 🛠 Technology Stack

- **Framework**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS with custom Hawaiian-themed color palette
- **Routing**: File-based routing with dynamic pages
- **Static Generation**: getStaticPaths and getStaticProps for optimal performance
- **Components**: Reusable React components with TypeScript interfaces

### Custom Color Palette
```css
palmGreen: '#228B22'
oceanBlue: '#006994'
hibiscusRed: '#DC143C'
sunsetOrange: '#FF8C00'
coralPink: '#FF7F7F'
```

## 📁 Project Structure

```
omk-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx          # Main navigation
│   │   └── ui/
│   │       └── ProgramCard.tsx     # Program display component
│   ├── data/
│   │   ├── board.ts               # Board member information
│   │   └── programs.ts            # Program data and descriptions
│   ├── pages/
│   │   ├── programs/
│   │   │   └── [slug].tsx         # Dynamic program pages
│   │   ├── apply.tsx              # Application page
│   │   ├── contact.tsx            # Contact form and information
│   │   ├── donate.tsx             # Donation page with Hawaiian themes
│   │   ├── index.tsx              # Home page
│   │   └── programs.tsx           # Programs listing page
│   └── styles/
│       └── globals.css            # Global styles and Tailwind config
├── public/
│   └── images/                    # Static images and assets
├── tailwind.config.js             # Tailwind CSS configuration
├── next.config.js                 # Next.js configuration
└── package.json                   # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/routerjoe/omk-website.git
cd omk-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📧 Contact Information

- **General Information**: info@ohanamanakoa.org
- **Donations**: donations@ohanamanakoa.org
- **Events**: events@ohanamanakoa.org
- **Grants**: grants@ohanamanakoa.org

## 🤝 Contributing

We welcome contributions to improve the OMK website. Please feel free to submit issues and pull requests.

## 📄 License

This project is created for Ohana Mana Koa nonprofit organization.

## 🌺 Acknowledgments

- Built with respect for Hawaiian culture and traditions
- Designed to serve the Native Hawaiian community
- Created with aloha for all ohana members

---

*E komo mai* - Welcome to our digital home where ohana comes together.