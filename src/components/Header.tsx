import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Safety & Compliance', href: '#safety' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Terms', href: '/terms' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/90 backdrop-blur-xl shadow-xl h-16 border-b border-border/50'
          : 'bg-transparent h-20'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`bg-accent rounded-lg flex items-center justify-center transition-all group-hover:scale-105 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                <span className={`text-accent-foreground font-heading font-bold transition-all ${isScrolled ? 'text-lg' : 'text-xl'}`}>ST</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-foreground transition-all ${isScrolled ? 'text-lg' : 'text-xl'}`}>Sag Trucking</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+14402993900">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Call Now</span>
              </Button>
            </a>
            <a href="mailto:safety.saggroup@gmail.com">
              <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">Email</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <a href="tel:+14402993900" className="w-full">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    +1 440-299-3900
                  </Button>
                </a>
                <a href="mailto:safety.saggroup@gmail.com" className="w-full">
                  <Button size="sm" className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Mail className="h-4 w-4" />
                    Email Safety
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
