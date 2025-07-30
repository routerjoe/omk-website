import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Layout>
      <SEO 
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to Ohana Mana Koa's homepage or explore our programs and services."
        canonicalUrl="/404"
      />
      
      {/* Hero Section with Hawaiian Background */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/AE2497A5-D6B9-4DBF-8794-8E148BD740F6.jpeg')" }}
      >
        <div className="absolute inset-0 bg-lavaBlack opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-plumeriaWhite drop-shadow-lg mb-4">404</h1>
          <h2 className="text-3xl font-bold text-sandBeige drop-shadow-md mb-4">Page Not Found</h2>
          <p className="text-lg text-plumeriaWhite max-w-2xl mx-auto drop-shadow-md">
            The page you're looking for seems to have wandered off like a gentle trade wind. Let's help you find your way back to our ohana.
          </p>
        </div>
      </section>

      {/* Navigation Options */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-lavaBlack">Where Would You Like to Go?</h3>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/" className="group">
            <div className="bg-lightSand p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-palmGreen group-hover:border-lightPalm">
              <div className="w-12 h-12 bg-palmGreen rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lightPalm transition-colors">
                <span className="text-plumeriaWhite font-bold text-xl">🏠</span>
              </div>
              <h4 className="text-xl font-bold text-palmGreen mb-2 group-hover:text-lightPalm">Home</h4>
              <p className="text-lavaBlack">Return to our homepage and learn about our mission</p>
            </div>
          </Link>

          <Link href="/programs" className="group">
            <div className="bg-lightSand p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-oceanBlue group-hover:border-lightOcean">
              <div className="w-12 h-12 bg-oceanBlue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lightOcean transition-colors">
                <span className="text-plumeriaWhite font-bold text-xl">📚</span>
              </div>
              <h4 className="text-xl font-bold text-oceanBlue mb-2 group-hover:text-lightOcean">Programs</h4>
              <p className="text-lavaBlack">Explore our culturally grounded community programs</p>
            </div>
          </Link>

          <Link href="/about" className="group">
            <div className="bg-lightSand p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-hibiscusRed group-hover:border-coralPink">
              <div className="w-12 h-12 bg-hibiscusRed rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-coralPink transition-colors">
                <span className="text-plumeriaWhite font-bold text-xl">ℹ️</span>
              </div>
              <h4 className="text-xl font-bold text-hibiscusRed mb-2 group-hover:text-coralPink">About Us</h4>
              <p className="text-lavaBlack">Learn about our story, mission, and leadership</p>
            </div>
          </Link>

          <Link href="/contact" className="group">
            <div className="bg-lightSand p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-tropicalTeal">
              <div className="w-12 h-12 bg-tropicalTeal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:opacity-90 transition-opacity">
                <span className="text-plumeriaWhite font-bold text-xl">📞</span>
              </div>
              <h4 className="text-xl font-bold text-tropicalTeal mb-2">Contact</h4>
              <p className="text-lavaBlack">Get in touch with our team</p>
            </div>
          </Link>

          <Link href="/get-involved" className="group">
            <div className="bg-lightSand p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-sunsetOrange">
              <div className="w-12 h-12 bg-sunsetOrange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:opacity-90 transition-opacity">
                <span className="text-plumeriaWhite font-bold text-xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-sunsetOrange mb-2">Get Involved</h4>
              <p className="text-lavaBlack">Volunteer and partner with us</p>
            </div>
          </Link>

          <Link href="/donate" className="group">
            <div className="bg-lightSand p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-coralPink">
              <div className="w-12 h-12 bg-coralPink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:opacity-90 transition-opacity">
                <span className="text-plumeriaWhite font-bold text-xl">💝</span>
              </div>
              <h4 className="text-xl font-bold text-coralPink mb-2">Donate</h4>
              <p className="text-lavaBlack">Support our mission with a donation</p>
            </div>
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="text-center bg-gradient-to-r from-sandBeige to-lightSand rounded-lg p-8">
          <h4 className="text-2xl font-bold text-lavaBlack mb-4">Still Can't Find What You're Looking For?</h4>
          <p className="text-lavaBlack mb-6">
            Our team is here to help. Contact us and we'll make sure you find exactly what you need.
          </p>
          <Link 
            href="/contact"
            className="bg-oceanBlue text-plumeriaWhite px-8 py-3 rounded-md font-semibold hover:bg-lightOcean transition-colors shadow-md"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      {/* Hawaiian Cultural Element */}
      <section
        className="h-32 bg-cover bg-center my-12 rounded-lg relative"
        style={{ backgroundImage: "url('/images/37279F44-E9BF-4F5A-882E-6F2FE4931407.jpeg')" }}
      >
        <div className="absolute inset-0 bg-tropicalTeal opacity-20 rounded-lg"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-plumeriaWhite">
            <p className="text-lg font-semibold drop-shadow-lg">E komo mai - Welcome back to our digital home</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Custom404;