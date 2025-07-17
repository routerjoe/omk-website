import Layout from '@/components/Layout';
import ProgramCard from '@/components/ui/ProgramCard';
import { programs, programPillars } from '@/data/programs';
import Link from 'next/link';

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section with Scenic Background */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/BE0FF25C-C55F-4A1E-B9B0-407684FDF524.jpeg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>Our Programs</h1>
          <p className="mt-4 text-lg text-plumeriaWhite max-w-3xl mx-auto drop-shadow-md" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>
            We offer a range of culturally grounded programs designed to empower our community and create lasting positive change. Each program is tailored to meet the unique needs of those we serve.
          </p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Program Categories</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-l-4 border-palmGreen">
            <h3 className="text-xl font-bold text-palmGreen mb-2">Empowerment Through Education & Opportunity</h3>
            <p className="text-lavaBlack">Delivers workforce development, tech training, financial literacy, and scholarship access to build long-term self-sufficiency and economic mobility.</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-l-4 border-oceanBlue">
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Cultural Resilience & Veteran Support</h3>
            <p className="text-lavaBlack">Preserves Native Hawaiian heritage through language and arts, while supporting veterans and their families through transition, healing, and community reintegration.</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-l-4 border-hibiscusRed">
            <h3 className="text-xl font-bold text-hibiscusRed mb-2">Community Reinvestment & Technology Equity</h3>
            <p className="text-lavaBlack">Invests in digital inclusion, infrastructure, and direct aid to uplift underserved communities and expand access to essential resources.</p>
          </div>
        </div>
      </section>

      {/* Hawaiian Cultural Image */}
      <section
        className="h-40 bg-cover bg-center my-12 rounded-lg relative"
        style={{ backgroundImage: "url('/images/37279F44-E9BF-4F5A-882E-6F2FE4931407.jpeg')" }}
      >
        <div className="absolute inset-0 bg-tropicalTeal opacity-30 rounded-lg"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-plumeriaWhite">
            <h3 className="text-2xl font-bold drop-shadow-lg">Empowering Through Culture</h3>
            <p className="mt-2 drop-shadow-md">Programs rooted in Hawaiian values and traditions</p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gradient-to-b from-sandBeige to-lightSand rounded-lg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lavaBlack">All Programs</h2>
            <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-palmGreen to-lightPalm rounded-lg text-plumeriaWhite text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
        <p className="text-lg text-sandBeige mb-8">Join us in making a difference in our community</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/apply" className="bg-hibiscusRed hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors">
            Apply for Programs
          </Link>
          <Link href="/get-involved" className="bg-oceanBlue hover:bg-lightOcean px-8 py-3 rounded-md font-semibold transition-colors">
            Volunteer with Us
          </Link>
          <Link href="/contact" className="bg-tropicalTeal hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors">
            Corporate Sponsorship
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;