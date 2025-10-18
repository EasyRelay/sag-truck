import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">ST</span>
              </div>
              <span className="font-heading font-bold text-xl">Sag Trucking</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              National freight carrier committed to safe, reliable transportation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/#services" className="text-muted-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="/#fleet" className="text-muted-foreground hover:text-accent transition-colors">
                Fleet
              </a>
              <a href="/#safety" className="text-muted-foreground hover:text-accent transition-colors">
                Safety & Compliance
              </a>
              <a href="/#about" className="text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+14402993900"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+1 440-299-3900</span>
              </a>
              <a
                href="mailto:safety.saggroup@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="break-all">safety.saggroup@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p className="mb-1">
                © {currentYear} Sag Trucking. All rights reserved.
              </p>
              <p className="text-md">
                Created by <a href='https://easyit.uz' target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">EasyIT</a>
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <a 
                href="https://sagtrucking.com" 
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                sagtrucking.com 
              </a> (Owner: Amjad Matar)
              <p className="text-xs">
                USDOT: 3720632 | MC: 1309439 | EIN: 45-2608172 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
