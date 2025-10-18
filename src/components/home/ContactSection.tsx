import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const ref = useScrollAnimation(0.3);

  return (
    <section
      id="contact"
      ref={ref as any}
      className="py-24 md:py-32 bg-gradient-to-br from-card via-card to-background animate-on-scroll"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to ship? Contact our team for reliable freight solutions.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+14402993900" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-3 bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-bold"
              >
                <Phone className="h-5 w-5" />
                Call +1 440-299-3900
              </Button>
            </a>
            <a href="mailto:safety.saggroup@gmail.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-3 border-2 border-muted-foreground/30 text-foreground hover:bg-foreground/5 text-lg px-8 py-6 font-bold"
              >
                <Mail className="h-5 w-5" />
                Email Safety
              </Button>
            </a>
          </div>

          {/* Business Info */}
          <div className="mt-12 pt-12 border-t border-border/50">
            <p className="text-muted-foreground text-sm">
              USDOT: 3720632 | MC: 1309439 | EIN: 45-2608172
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              <a
                href="https://sagtrucking.com"
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                sagtrucking.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
