import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { Program, programs } from '@/data/programs';

interface ProgramDetailProps {
  program: Program;
}

const ProgramDetail = ({ program }: ProgramDetailProps) => {
  // Use specific background for veteran program
  const heroBackground = program.slug === 'veteran-empowerment-transition-support'
    ? '/images/perl-harbor.jpg'
    : '/images/BE0FF25C-C55F-4A1E-B9B0-407684FDF524.jpeg';

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      >
        <div className="absolute inset-0 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg" style={{ textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black' }}>{program.title}</h1>
          <p className="mt-4 text-lg text-black max-w-3xl mx-auto drop-shadow-md" style={{ textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>
            {program.description}
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-lavaBlack mb-6">About This Program</h2>
            <div className="w-24 h-1 bg-hibiscusRed mb-8"></div>
            <p className="text-lg text-lavaBlack leading-relaxed">
              {program.detailedDescription}
            </p>
          </div>

          {/* Services & Benefits */}
          <div className="bg-lightSand rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-palmGreen mb-6">What We Offer</h3>
            <ul className="space-y-4">
              {program.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-hibiscusRed rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-lavaBlack">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-palmGreen to-lightPalm rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-plumeriaWhite mb-4">Our Impact</h3>
            <p className="text-sandBeige text-lg">
              {program.impactStatement}
            </p>
          </div>

          {/* Veteran-specific images section */}
          {program.slug === 'veteran-empowerment-transition-support' && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-lavaBlack mb-8 text-center">Honoring All Who Served</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: "url('/images/army-hi.jpg')" }}
                >
                  <div className="h-full bg-black bg-opacity-30 rounded-lg flex items-end">
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-plumeriaWhite drop-shadow-lg">Army Veterans</h4>
                      <p className="text-sm text-sandBeige drop-shadow-md">Supporting our Army ohana</p>
                    </div>
                  </div>
                </div>
                <div
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: "url('/images/marines-hi.jpg')" }}
                >
                  <div className="h-full bg-black bg-opacity-30 rounded-lg flex items-end">
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-plumeriaWhite drop-shadow-lg">Marine Veterans</h4>
                      <p className="text-sm text-sandBeige drop-shadow-md">Semper Fi - always faithful</p>
                    </div>
                  </div>
                </div>
                <div
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: "url('/images/navy-hi.jpg')" }}
                >
                  <div className="h-full bg-black bg-opacity-30 rounded-lg flex items-end">
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-plumeriaWhite drop-shadow-lg">Navy Veterans</h4>
                      <p className="text-sm text-sandBeige drop-shadow-md">Anchors aweigh for our sailors</p>
                    </div>
                  </div>
                </div>
                <div
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: "url('/images/airforce-hi.jpg')" }}
                >
                  <div className="h-full bg-black bg-opacity-30 rounded-lg flex items-end">
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-plumeriaWhite drop-shadow-lg">Air Force Veterans</h4>
                      <p className="text-sm text-sandBeige drop-shadow-md">Aim high for our airmen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-lavaBlack mb-6">Ready to Get Started?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/contact?program=${program.slug}`}
                className="bg-hibiscusRed hover:opacity-90 text-plumeriaWhite px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="bg-oceanBlue hover:bg-lightOcean text-plumeriaWhite px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-sandBeige to-lightSand rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lavaBlack">Guided by Our Values</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-plumeriaWhite p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-palmGreen rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-plumeriaWhite font-bold text-xl">K</span>
            </div>
            <h3 className="text-xl font-bold text-palmGreen mb-2">Kuleana</h3>
            <p className="text-lavaBlack">Taking responsibility for our community and future generations</p>
          </div>
          <div className="text-center bg-plumeriaWhite p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-oceanBlue rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-plumeriaWhite font-bold text-xl">A</span>
            </div>
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Aloha</h3>
            <p className="text-lavaBlack">Love, compassion, and respect in all our interactions</p>
          </div>
          <div className="text-center bg-plumeriaWhite p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-hibiscusRed rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-plumeriaWhite font-bold text-xl">P</span>
            </div>
            <h3 className="text-xl font-bold text-hibiscusRed mb-2">Pono</h3>
            <p className="text-lavaBlack">Righteousness and doing what is morally right</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = programs.map((program) => ({
    params: { slug: program.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const program = programs.find((p) => p.slug === params?.slug);

  if (!program) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      program,
    },
  };
};

export default ProgramDetail;