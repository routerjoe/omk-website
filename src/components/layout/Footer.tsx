import Logo from '../ui/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-oceanBlue to-tropicalTeal text-plumeriaWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Mission */}
          <div className="md:col-span-2">
            <Logo variant="tagline" />
            <p className="mt-4 text-sm text-sandBeige">
              Empowering Native Hawaiian families, veterans, and underserved communities through culturally grounded programs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-plumeriaWhite">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sandBeige hover:text-skyBlue transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-sandBeige hover:text-skyBlue transition-colors">Programs</Link></li>
              <li><Link href="/get-involved" className="text-sandBeige hover:text-skyBlue transition-colors">Get Involved</Link></li>
              <li><Link href="/donate" className="text-sandBeige hover:text-skyBlue transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-plumeriaWhite">Contact Us</h3>
            <address className="mt-4 not-italic text-sm text-sandBeige">
              Ohana Mana Koa<br />
              75-6125 Kuakini Hwy, PMB 1105<br />
              Kailua-Kona, HI 96740
            </address>
            <p className="mt-2 text-sm text-sandBeige">
              EIN: 92-3912909
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-lightOcean pt-8 text-center text-sm text-lightSand">
          <p>&copy; {new Date().getFullYear()} Ohana Mana Koa. All Rights Reserved.</p>
          <p className="mt-2">
            Ohana Mana Koa is a 501(c)(3) nonprofit organization. All donations are tax-deductible as allowed by law.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;