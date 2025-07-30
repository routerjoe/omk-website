import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { trackFormSubmission } from '@/utils/analytics';

const Contact = () => {
  const router = useRouter();
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (router.query.program) {
      setSelectedProgram(router.query.program as string);
      setFormData(prev => ({ ...prev, subject: router.query.program as string }));
    }
  }, [router.query.program]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'subject') {
      setSelectedProgram(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For now, we'll simulate form submission
      // In production, this would send to your backend API or email service
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedProgram('');
      
      // Track successful form submission
      trackFormSubmission('contact', true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Track failed form submission
      trackFormSubmission('contact', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact Ohana Mana Koa for program applications, volunteer opportunities, partnerships, or general inquiries. We're here to help and respond within 24-48 hours."
        keywords="contact Ohana Mana Koa, program applications, volunteer opportunities, partnerships, sponsorship, Hawaii nonprofit contact"
        canonicalUrl="/contact"
      />
      {/* Hero Section */}
      <section
        className="relative text-center py-20 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('/images/AE2497A5-D6B9-4DBF-8794-8E148BD740F6.jpeg')" }}
      >
        <div className="absolute inset-0 bg-lavaBlack opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-plumeriaWhite drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>Contact Us</h1>
          <p className="mt-4 text-lg text-plumeriaWhite max-w-3xl mx-auto drop-shadow-md" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>
            We're here to help. Reach out to us for any questions, program applications, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lavaBlack">Get in Touch</h2>
          <div className="w-24 h-1 bg-hibiscusRed mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-lightSand p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-lavaBlack mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-palmGreen text-plumeriaWhite p-4 rounded-md">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you within 24-48 hours.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-hibiscusRed text-plumeriaWhite p-4 rounded-md">
                  <p className="font-semibold">Error sending message</p>
                  <p className="text-sm">Please try again or contact us directly at info@ohanamanakoa.org</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-lavaBlack font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-oceanBlue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lavaBlack font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-oceanBlue"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lavaBlack font-semibold mb-2">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-oceanBlue"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="program-application">Program Application</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership/Sponsorship</option>
                  <option value="donation">Donations</option>
                  <option value="events">Events</option>
                  <option value="grants">Grants</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-lavaBlack font-semibold mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-sandBeige rounded-md focus:outline-none focus:ring-2 focus:ring-oceanBlue"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-oceanBlue text-plumeriaWhite py-3 rounded-md font-semibold hover:bg-lightOcean transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-plumeriaWhite p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-lavaBlack mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-palmGreen rounded-full flex items-center justify-center mt-1">
                    <span className="text-plumeriaWhite text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lavaBlack">General Information</p>
                    <p className="text-lavaBlack">info@ohanamanakoa.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-oceanBlue rounded-full flex items-center justify-center mt-1">
                    <span className="text-plumeriaWhite text-sm">💰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lavaBlack">Donations</p>
                    <p className="text-lavaBlack">donations@ohanamanakoa.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-hibiscusRed rounded-full flex items-center justify-center mt-1">
                    <span className="text-plumeriaWhite text-sm">🎉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lavaBlack">Events</p>
                    <p className="text-lavaBlack">events@ohanamanakoa.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tropicalTeal rounded-full flex items-center justify-center mt-1">
                    <span className="text-plumeriaWhite text-sm">📋</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lavaBlack">Grants</p>
                    <p className="text-lavaBlack">grants@ohanamanakoa.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-plumeriaWhite p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-lavaBlack mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-lavaBlack">Monday - Friday:</span>
                  <span className="text-lavaBlack">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lavaBlack">Saturday:</span>
                  <span className="text-lavaBlack">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lavaBlack">Sunday:</span>
                  <span className="text-lavaBlack">Closed</span>
                </div>
              </div>
              <p className="text-sm text-lavaBlack mt-4">
                * Hours may vary during holidays and special events
              </p>
            </div>

            <div className="bg-plumeriaWhite p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-lavaBlack mb-4">Response Time</h3>
              <p className="text-lavaBlack">
                We strive to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-palmGreen to-lightPalm rounded-lg text-plumeriaWhite text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg text-sandBeige mb-8">Join our ohana and help strengthen our community</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/apply"
            className="bg-hibiscusRed hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Apply for Programs
          </a>
          <a
            href="/get-involved"
            className="bg-oceanBlue hover:bg-lightOcean px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Volunteer with Us
          </a>
          <a
            href="/donate"
            className="bg-tropicalTeal hover:opacity-90 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Support Our Mission
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;