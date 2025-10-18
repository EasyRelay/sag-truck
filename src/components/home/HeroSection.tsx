import { useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroTruck from '@/assets/hero-truck.jpg';

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaLeftRef = useRef<HTMLAnchorElement>(null);
  const ctaRightRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    // Initial animations
    setTimeout(() => {
      headlineRef.current?.classList.add('is-visible');
    }, 100);
    setTimeout(() => {
      ctaLeftRef.current?.classList.add('is-visible');
    }, 400);
    setTimeout(() => {
      ctaRightRef.current?.classList.add('is-visible');
    }, 520);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 parallax scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroTruck})`,
            filter: 'saturate(0.6) contrast(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-heading font-bold text-5xl md:text-7xl text-foreground leading-tight fade-up-scale"
          >
            Sag Trucking — Strong. Safe. On Time.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Modern fleet. Proven compliance. Coast-to-coast lanes with dependable delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              ref={ctaLeftRef}
              href="tel:+14402993900"
              className="slide-left"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto gap-3 bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-bold transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call +1 440-299-3900
              </Button>
            </a>
            <a
              ref={ctaRightRef}
              href="mailto:safety.saggroup@gmail.com"
              className="slide-right"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-3 border-2 border-muted-foreground/30 text-foreground  text-lg px-8 py-6 font-bold transition-transform hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Email Safety
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
