import Layout from '@/components/Layout';
import BoardCard from '@/components/ui/BoardCard';
import { boardMembers } from '@/data/board';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/images/977762A9-1E6A-4E9C-B3AA-55EAEC09DA87.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg">About Ohana Mana Koa</h1>
          <p className="mt-4 text-lg text-plumeriaWhite max-w-3xl mx-auto drop-shadow-md">
            Ohana Mana Koa is a Native Hawaiian–owned and veteran-led 501(c)(3) nonprofit organization based in Kailua-Kona, Hawai'i. As a Native Hawaiian Organization, we honor our heritage by advancing opportunities in technology, supporting veterans, and investing in the well-being of Native Hawaiian families and underserved communities.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-lavaBlack mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lavaBlack mb-4">
                Led by a woman of Hawaiian heritage and proud U.S. military veteran, our dual-entity structure includes Ohana Mana Koa, a nonprofit foundation, and Mana Koa Systems, a for-profit, 8(a)-eligible subsidiary. This structure allows us to maximize our impact while maintaining our commitment to community reinvestment.
              </p>
              <p className="text-lavaBlack mb-4">
                Mana Koa Systems supports our mission through three strategic service areas: Digital Transformation & Mission Technology, Operational Support & Logistics, and Agile Acquisition & Resilience. At least 10% of net profits are reinvested into community programs.
              </p>
              <p className="text-lavaBlack">
                Guided by the Native Hawaiian value of kuleana, we share our impact transparently through the annual Hoʻokupu Impact Report, ensuring accountability to the communities we serve.
              </p>
            </div>
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('/images/AA83F234-2060-4483-8435-B0DD466EB5F7.jpeg')" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-sandBeige to-lightSand rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Our Core Values</h2>
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

      {/* Organizational Structure Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Our Structure</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-lightSand p-8 rounded-lg shadow-lg border-l-4 border-palmGreen">
            <h3 className="text-2xl font-bold text-palmGreen mb-4">Ohana Mana Koa</h3>
            <p className="text-lavaBlack mb-4">
              Our 501(c)(3) nonprofit foundation serves as the heart of our mission, delivering culturally grounded programs that empower Native Hawaiian families, veterans, and underserved communities.
            </p>
            <ul className="text-lavaBlack text-sm space-y-2">
              <li>• Native Hawaiian Organization (NHO) status</li>
              <li>• Community-focused program delivery</li>
              <li>• Transparent impact reporting</li>
              <li>• Cultural preservation and advancement</li>
            </ul>
          </div>
          <div className="bg-lightSand p-8 rounded-lg shadow-lg border-l-4 border-oceanBlue">
            <h3 className="text-2xl font-bold text-oceanBlue mb-4">Mana Koa Systems</h3>
            <p className="text-lavaBlack mb-4">
              Our wholly-owned, 8(a)-eligible subsidiary executes mission-aligned federal contracts, with a minimum of 10% of net profits reinvested into nonprofit programs.
            </p>
            <ul className="text-lavaBlack text-sm space-y-2">
              <li>• Digital Transformation & Mission Technology</li>
              <li>• Operational Support & Logistics Solutions</li>
              <li>• Agile Acquisition & Mission Resilience</li>
              <li>• SBA 8(a) program eligibility</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lavaBlack max-w-3xl mx-auto">
            This dual-entity structure allows us to maximize our impact while maintaining our commitment to transparency through our annual Hoʻokupu Impact Report, which details how funds are spent, who they impact, and how our values are upheld.
          </p>
        </div>
      </section>

      {/* Scenic Divider */}
      <section
        className="h-32 bg-cover bg-center my-12 rounded-lg"
        style={{ backgroundImage: "url('/images/AE2497A5-D6B9-4DBF-8794-8E148BD740F6.jpeg')" }}
      ></section>

      {/* Leadership Section */}
      <section className="py-16 bg-lightSand rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-lavaBlack mb-4">Our Leadership</h2>
          <div className="w-24 h-1 bg-tropicalTeal mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <BoardCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;