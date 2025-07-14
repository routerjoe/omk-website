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
            Ohana Mana Koa is a Native Hawaiian–owned and veteran-led 501(c)(3) nonprofit organization dedicated to empowering Native Hawaiian families, veterans, and underserved communities through culturally grounded programs that foster education, economic mobility, and resilience.
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
                Founded on the principles of Aloha and Kuleana, our organization bridges traditional Hawaiian values with modern community needs. We believe in the power of cultural identity to heal, strengthen, and unite our people.
              </p>
              <p className="text-lavaBlack">
                Through our veteran leadership and deep community roots, we create programs that honor our ancestors while building pathways to prosperity for future generations.
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