import Layout from '@/components/Layout';

const GetInvolved = () => {
  return (
    <Layout>
      {/* Hero Section with Hawaiian Scenic Background */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/AE2497A5-D6B9-4DBF-8794-8E148BD740F6.jpeg')" }}
      >
        <div className="absolute inset-0 bg-lavaBlack opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg">Get Involved</h1>
          <p className="mt-4 text-lg text-sandBeige max-w-3xl mx-auto drop-shadow-md">
            There are many ways to support our mission and become part of the Ohana Mana Koa community. Join us in making a difference today.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Ways to Support Our Mission</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-t-4 border-palmGreen">
            <h3 className="text-xl font-bold text-palmGreen mb-2">Volunteer</h3>
            <p className="text-lavaBlack">Share your skills and time to directly impact our community programs</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-t-4 border-oceanBlue">
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Partner</h3>
            <p className="text-lavaBlack">Collaborate with us to amplify our reach and effectiveness</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md border-t-4 border-tropicalTeal">
            <h3 className="text-xl font-bold text-tropicalTeal mb-2">Stay Connected</h3>
            <p className="text-lavaBlack">Join our newsletter to stay updated on programs and events</p>
          </div>
        </div>
      </section>

      {/* Hawaiian Cultural Image Section */}
      <section
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden my-12"
        style={{ backgroundImage: "url('/images/952CDC89-DBFB-48AF-B820-975842411C21.jpeg')" }}
      >
        <div className="absolute inset-0 bg-palmGreen opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-plumeriaWhite">
            <h3 className="text-3xl font-bold drop-shadow-lg">Join Our Ohana</h3>
            <p className="mt-2 text-lg drop-shadow-md">Together we strengthen our community</p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-gradient-to-r from-sandBeige to-lightSand rounded-lg">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Volunteer Interest Form */}
          <div className="bg-plumeriaWhite p-8 rounded-lg shadow-lg border-l-4 border-palmGreen">
            <h2 className="text-3xl font-bold text-palmGreen mb-6">Volunteer With Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lavaBlack font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-palmGreen focus:border-palmGreen" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lavaBlack font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-palmGreen focus:border-palmGreen" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lavaBlack font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-palmGreen focus:border-palmGreen"></textarea>
              </div>
              <button type="submit" className="w-full bg-palmGreen text-plumeriaWhite px-6 py-3 rounded-md font-semibold hover:bg-lightPalm transition-colors shadow-md">
                Submit Interest
              </button>
            </form>
          </div>

          {/* Newsletter and Community Partner Section */}
          <div className="space-y-8">
            <div className="bg-plumeriaWhite p-8 rounded-lg shadow-lg border-l-4 border-oceanBlue">
              <h2 className="text-3xl font-bold text-oceanBlue mb-6">Stay Connected</h2>
              <p className="text-lavaBlack mb-4">Sign up for our newsletter to receive updates on our programs, events, and impact.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-sandBeige rounded-l-md focus:outline-none focus:ring-2 focus:ring-oceanBlue focus:border-oceanBlue" />
                <button type="submit" className="bg-oceanBlue text-plumeriaWhite px-6 py-2 rounded-r-md font-semibold hover:bg-lightOcean transition-colors">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="bg-plumeriaWhite p-8 rounded-lg shadow-lg border-l-4 border-tropicalTeal">
              <h2 className="text-3xl font-bold text-tropicalTeal mb-6">Become a Partner</h2>
              <p className="text-lavaBlack mb-4">
                We collaborate with community organizations and businesses to amplify our impact. If you're interested in partnership opportunities, please reach out.
              </p>
              <a href="mailto:contact@ohanamakoa.org" className="inline-block bg-tropicalTeal text-plumeriaWhite px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-colors shadow-md">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Head Scene */}
      <section
        className="h-48 bg-cover bg-center my-12 rounded-lg"
        style={{ backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.2), rgba(14, 165, 233, 0.2)), url('/images/37279F44-E9BF-4F5A-882E-6F2FE4931407.jpeg')" }}
      ></section>
    </Layout>
  );
};

export default GetInvolved;