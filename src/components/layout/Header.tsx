import Link from 'next/link';
import Logo from '../ui/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/public-documents', label: 'Public Documents' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="bg-plumeriaWhite shadow-lg border-b-2 border-sandBeige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lavaBlack hover:text-oceanBlue font-medium transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link href="/donate" className="bg-oceanBlue text-plumeriaWhite px-6 py-2 rounded-md hover:bg-lightOcean transition-colors duration-300 font-semibold shadow-md">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;