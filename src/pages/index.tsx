import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Ohana Mana Koa - Empowering Native Hawaiian Communities"
        description="Ohana Mana Koa is a Native Hawaiian-owned and veteran-led 501(c)(3) nonprofit organization that empowers Native Hawaiian families, veterans, and underserved communities through culturally grounded programs."
        keywords="Native Hawaiian nonprofit, veteran support, community empowerment, cultural preservation, Hawaii, ohana, mana koa, education programs, economic mobility"
        canonicalUrl="/"
      />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] sm:h-[70vh] flex items-center text-white rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/hawaiian-girl.jpg')" }}
      >
        <div className="absolute inset-0 bg-lavaBlack opacity-40"></div>
        <div className="relative z-10 text-center mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-plumeriaWhite drop-shadow-lg leading-tight">Ohana Mana Koa</h1>
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-sandBeige drop-shadow-md max-w-3xl mx-auto">
            Empowering Communities, Honoring Heritage.
          </p>
          <Link href="/about" className="mt-6 sm:mt-8 inline-block bg-oceanBlue text-plumeriaWhite px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-lightOcean transition-colors shadow-lg">
            Learn More About Us
          </Link>
        </div>
      </section>


      {/* Mission, Vision, and Values Section */}
      <section className="py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-lavaBlack">Our Guiding Principles</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
          <div className="bg-lightSand p-6 sm:p-8 rounded-lg shadow-lg border-t-4 border-palmGreen">
            <h3 className="text-xl sm:text-2xl font-bold text-palmGreen mb-3 sm:mb-4">Mission</h3>
            <p className="text-lavaBlack text-sm sm:text-base leading-relaxed">
              Ohana Mana Koa is a Native Hawaiian–owned and veteran-led 501(c)(3) nonprofit organization that empowers Native Hawaiian families, veterans, and underserved communities through culturally grounded programs focused on education, economic mobility, and self-determination.
            </p>
          </div>
          <div className="bg-lightSand p-6 sm:p-8 rounded-lg shadow-lg border-t-4 border-oceanBlue">
            <h3 className="text-xl sm:text-2xl font-bold text-oceanBlue mb-3 sm:mb-4">Vision</h3>
            <p className="text-lavaBlack text-sm sm:text-base leading-relaxed">
              Thriving, connected communities where Native Hawaiian values guide education, economy, and care.
            </p>
          </div>
          <div className="bg-lightSand p-6 sm:p-8 rounded-lg shadow-lg border-t-4 border-hibiscusRed">
            <h3 className="text-xl sm:text-2xl font-bold text-hibiscusRed mb-3 sm:mb-4">Values</h3>
            <p className="text-lavaBlack text-sm sm:text-base leading-relaxed">
              Kuleana, Aloha, Pono, Cultural Stewardship, Veteran Empowerment, Resilience, Community Before Self.
            </p>
          </div>
        </div>
      </section>

      {/* Diamond Head Section */}
      <section
        className="relative h-48 sm:h-64 bg-cover bg-center rounded-lg overflow-hidden my-8 sm:my-12 mx-4"
        style={{ backgroundImage: "url('/images/37279F44-E9BF-4F5A-882E-6F2FE4931407.jpeg')" }}
      >
        <div className="absolute inset-0 bg-tropicalTeal opacity-20"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-plumeriaWhite">
            <h3 className="text-2xl sm:text-3xl font-bold drop-shadow-lg">Rooted in Hawaiian Culture</h3>
            <p className="mt-2 text-base sm:text-lg drop-shadow-md">Preserving traditions for future generations</p>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-sandBeige to-lightSand rounded-lg mx-4">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-lavaBlack">Our Impact</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center px-4">
          <div className="bg-plumeriaWhite p-4 sm:p-6 rounded-lg shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-oceanBlue mb-2">500+</div>
            <p className="text-lavaBlack text-sm sm:text-base">Families Served</p>
          </div>
          <div className="bg-plumeriaWhite p-4 sm:p-6 rounded-lg shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-palmGreen mb-2">50+</div>
            <p className="text-lavaBlack text-sm sm:text-base">Veterans Supported</p>
          </div>
          <div className="bg-plumeriaWhite p-4 sm:p-6 rounded-lg shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-hibiscusRed mb-2">25</div>
            <p className="text-lavaBlack text-sm sm:text-base">Programs Active</p>
          </div>
          <div className="bg-plumeriaWhite p-4 sm:p-6 rounded-lg shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-tropicalTeal mb-2">10</div>
            <p className="text-lavaBlack text-sm sm:text-base">Years of Service</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-palmGreen to-lightPalm rounded-lg text-plumeriaWhite text-center mx-4">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-base sm:text-lg text-sandBeige mb-6 sm:mb-8">Join us in making a difference in our community</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/apply" className="bg-hibiscusRed hover:opacity-90 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold transition-colors text-sm sm:text-base">
              Apply for Programs
            </Link>
            <Link href="/get-involved" className="bg-oceanBlue hover:bg-lightOcean px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold transition-colors text-sm sm:text-base">
              Volunteer with Us
            </Link>
            <Link href="/contact" className="bg-tropicalTeal hover:opacity-90 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold transition-colors text-sm sm:text-base">
              Corporate Sponsorship
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;