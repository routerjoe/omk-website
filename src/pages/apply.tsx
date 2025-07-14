import Layout from '@/components/Layout';
import Link from 'next/link';
import { programs } from '@/data/programs';

const Apply = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/977762A9-1E6A-4E9C-B3AA-55EAEC09DA87.jpeg')" }}
      >
        <div className="absolute inset-0 bg-lavaBlack opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>Apply for Programs</h1>
          <p className="mt-4 text-lg text-plumeriaWhite max-w-3xl mx-auto drop-shadow-md" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>
            Take the first step towards empowerment and growth. Choose a program that aligns with your goals and join our ohana.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">How to Apply</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-palmGreen rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-plumeriaWhite">1</span>
            </div>
            <h3 className="text-xl font-bold text-palmGreen mb-2">Choose Your Program</h3>
            <p className="text-lavaBlack">Browse our programs below and select the one that best fits your needs and goals.</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-oceanBlue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-plumeriaWhite">2</span>
            </div>
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Submit Application</h3>
            <p className="text-lavaBlack">Complete the application form with your information and program preferences.</p>
          </div>
          <div className="text-center bg-lightSand p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-hibiscusRed rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-plumeriaWhite">3</span>
            </div>
            <h3 className="text-xl font-bold text-hibiscusRed mb-2">Get Started</h3>
            <p className="text-lavaBlack">Our team will review your application and contact you to begin your journey.</p>
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-16 bg-gradient-to-b from-sandBeige to-lightSand rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Available Programs</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
          <p className="mt-4 text-lavaBlack max-w-2xl mx-auto">
            Click on any program below to learn more and start your application process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.slug} className="bg-plumeriaWhite p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-lavaBlack mb-3">{program.title}</h3>
              <p className="text-lavaBlack mb-4">{program.description}</p>
              <div className="flex space-x-4">
                <Link 
                  href={`/programs/${program.slug}`}
                  className="bg-oceanBlue text-plumeriaWhite px-4 py-2 rounded-md hover:bg-lightOcean transition-colors"
                >
                  Learn More
                </Link>
                <Link 
                  href={`/contact?program=${program.slug}`}
                  className="bg-hibiscusRed text-plumeriaWhite px-4 py-2 rounded-md hover:opacity-90 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-lavaBlack">Need Help?</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="bg-lightSand p-8 rounded-lg text-center">
          <p className="text-lavaBlack mb-4">
            Have questions about our programs or need assistance with your application?
          </p>
          <p className="text-lavaBlack mb-6">
            Our team is here to help guide you through the process.
          </p>
          <Link 
            href="/contact"
            className="bg-palmGreen text-plumeriaWhite px-8 py-3 rounded-md hover:opacity-90 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;