import Link from 'next/link';
import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-plumeriaWhite shadow-lg border-b-2 border-sandBeige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lavaBlack hover:text-oceanBlue font-medium transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate" className="bg-oceanBlue text-plumeriaWhite px-6 py-2 rounded-md hover:bg-lightOcean transition-colors duration-300 font-semibold shadow-md">
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-lavaBlack hover:text-oceanBlue focus:outline-none focus:text-oceanBlue transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-lightSand rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-lavaBlack hover:text-oceanBlue hover:bg-sandBeige rounded-md font-medium transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/donate"
                  className="block w-full text-center bg-oceanBlue text-plumeriaWhite px-6 py-2 rounded-md hover:bg-lightOcean transition-colors duration-300 font-semibold shadow-md"
                  onClick={closeMenu}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;