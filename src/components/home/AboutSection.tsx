import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const ref = useScrollAnimation(0.3);

  return (
    <section
      id="about"
      ref={ref as any}
      className="py-24 md:py-32 bg-card/30 animate-on-scroll"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              About State Auto Group LLC
            </h2>
          </div>

          <div className="bg-card rounded-xl p-8 md:p-12 border border-border/50">
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Founded with a vision to revolutionize freight through unwavering commitment to
              safety and service, State Auto Group LLC has grown from a regional carrier to a trusted
              national logistics partner. Under the leadership of owner Amjad Matar, we've built a
              reputation for excellence spanning the continental United States.
            </p>

            <div className="flex items-center justify-center gap-4 pt-6 border-t border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-accent">AM</span>
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-foreground">Amjad Matar</p>
                <p className="text-muted-foreground text-sm">Owner & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
