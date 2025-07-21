import Layout from '@/components/Layout';

const Donate = () => {
  return (
    <Layout>
      {/* Hero Section with Hawaiian Scenic Background */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/977762A9-1E6A-4E9C-B3AA-55EAEC09DA87.jpeg')" }}
      >
        <div className="absolute inset-0 bg-palmGreen opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg">Support Our Mission</h1>
          <p className="mt-4 text-lg text-sandBeige max-w-3xl mx-auto drop-shadow-md">
            Your generous donation empowers us to continue our work and make a meaningful impact in the lives of Native Hawaiian families, veterans, and underserved communities.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Your Impact</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-t-4 border-palmGreen">
            <div className="text-3xl font-bold text-palmGreen mb-2">$25</div>
            <h3 className="text-lg font-semibold text-lavaBlack mb-2">Kohala</h3>
            <p className="text-lavaBlack">Provides learning resources for cultural education programs</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-t-4 border-oceanBlue">
            <div className="text-3xl font-bold text-oceanBlue mb-2">$100</div>
            <h3 className="text-lg font-semibold text-lavaBlack mb-2">Mauna Kea</h3>
            <p className="text-lavaBlack">Supports comprehensive veteran support services</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-t-4 border-hibiscusRed">
            <div className="text-3xl font-bold text-hibiscusRed mb-2">$250</div>
            <h3 className="text-lg font-semibold text-lavaBlack mb-2">Haleakalā</h3>
            <p className="text-lavaBlack">Funds entire cultural preservation initiatives</p>
          </div>
        </div>
      </section>

      {/* Hawaiian Volcano Scene */}
      <section
        className="h-48 bg-cover bg-center my-12 rounded-lg"
        style={{ backgroundImage: "url('/images/valcano-lava.jpg')" }}
      ></section>

      {/* Volcano Images Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">The Power of Pele</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
          <p className="mt-4 text-lavaBlack max-w-2xl mx-auto">
            Like the volcanic forces that shaped our islands, your donations create lasting change in our community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/valcano-1.jpeg')" }}
          >
            <div className="h-full flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-plumeriaWhite drop-shadow-lg">Creating New Ground</h3>
                <p className="text-sandBeige drop-shadow-md">Every donation builds foundation for our community's future</p>
              </div>
            </div>
          </div>
          <div
            className="h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/valcano-flow.jpeg')" }}
          >
            <div className="h-full flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-plumeriaWhite drop-shadow-lg">Flowing Forward</h3>
                <p className="text-sandBeige drop-shadow-md">Your support flows through our programs, reaching those who need it most</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-gradient-to-r from-sandBeige to-lightSand rounded-lg">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-plumeriaWhite p-8 rounded-lg shadow-lg border-t-4 border-oceanBlue">
            <h2 className="text-3xl font-bold text-center text-oceanBlue mb-8">Make a Donation</h2>
            
            {/* Placeholder for Stripe Donation Form */}
            <div className="bg-lightSand p-8 rounded-md text-center border-2 border-sandBeige">
              <p className="text-lavaBlack font-semibold">[Stripe Donation Form Placeholder]</p>
              <p className="mt-2 text-sm text-lavaBlack">Secure donation processing by Stripe.</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lavaBlack mb-4">
                Every donation, no matter the size, helps us continue our vital work in the community.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-palmGreen text-plumeriaWhite px-6 py-2 rounded-md font-semibold hover:bg-lightPalm transition-colors">
                  $25
                </button>
                <button className="bg-oceanBlue text-plumeriaWhite px-6 py-2 rounded-md font-semibold hover:bg-lightOcean transition-colors">
                  $100
                </button>
                <button className="bg-hibiscusRed text-plumeriaWhite px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-colors">
                  $250
                </button>
                <button className="bg-tropicalTeal text-plumeriaWhite px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-colors">
                  Other
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="text-center py-8">
        <p className="text-sm text-lavaBlack">
          Ohana Mana Koa is a 501(c)(3) nonprofit. EIN 92-3912909. All donations are tax-deductible as allowed by law.
        </p>
      </section>
    </Layout>
  );
};

export default Donate;