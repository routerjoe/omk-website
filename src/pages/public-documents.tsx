import Layout from '@/components/Layout';
import DocumentCard from '@/components/ui/DocumentCard';
import { documents } from '@/data/documents';

const PublicDocuments = () => {
  return (
    <Layout>
      {/* Hero Section with Scenic Background */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
      >
        <div className="absolute inset-0 bg-palmGreen opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg">Public Documents</h1>
          <p className="mt-4 text-lg text-sandBeige max-w-3xl mx-auto drop-shadow-md">
            In the spirit of transparency and accountability, we make our key organizational documents available to the public.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lavaBlack">Available Documents</h2>
            <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <DocumentCard key={doc.title} document={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* Punchbowl Crater Scenic Divider */}
      <section
        className="h-32 bg-cover bg-center my-12 rounded-lg"
        style={{ backgroundImage: "linear-gradient(rgba(13, 148, 136, 0.3), rgba(13, 148, 136, 0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
      ></section>

      {/* Organizational Information */}
      <section className="py-16 bg-gradient-to-r from-sandBeige to-lightSand rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-lavaBlack mb-4">Organizational Information</h2>
          <div className="w-24 h-1 bg-tropicalTeal mx-auto mb-8"></div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-plumeriaWhite p-8 rounded-lg shadow-lg border-t-4 border-oceanBlue">
              <h3 className="text-xl font-semibold text-oceanBlue">Mailing Address</h3>
              <address className="mt-2 not-italic text-lavaBlack">
                Ohana Mana Koa<br />
                75-6125 Kuakini Hwy, PMB 1105<br />
                Kailua-Kona, HI 96740
              </address>
              <h3 className="text-xl font-semibold text-palmGreen mt-6">Employer Identification Number (EIN)</h3>
              <p className="mt-2 text-lavaBlack font-mono">92-3912909</p>
              <h3 className="text-xl font-semibold text-hibiscusRed mt-6">501(c)(3) Status</h3>
              <p className="mt-2 text-lavaBlack">
                Ohana Mana Koa is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PublicDocuments;