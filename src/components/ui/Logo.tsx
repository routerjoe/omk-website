import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'tagline';
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const logoSrc = variant === 'tagline' ? '/images/OMK-Logo-with-tag-line.png' : '/images/Logo.png';
  const altText = 'Ohana Mana Koa Logo';

  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logoSrc}
        alt={altText}
        width={variant === 'tagline' ? 100 : 80}
        height={variant === 'tagline' ? 25 : 80}
        priority
        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        style={{ width: 'auto', height: 'auto' }}
      />
    </Link>
  );
};

export default Logo;