import { useEffect, useRef, useState } from 'react';
import { Shield } from 'lucide-react';

const SafetySection = () => {
  const [visibleDots, setVisibleDots] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { year: '2017', event: 'DOT Safety Excellence' },
    { year: '2019', event: 'Advanced Driver Training' },
    { year: '2021', event: '100% ELD Compliance' },
    { year: '2023', event: 'Safety Certification' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline dots sequentially
            milestones.forEach((_, index) => {
              setTimeout(() => {
                setVisibleDots((prev) => [...new Set([...prev, index])]);
              }, index * 200);
            });

            // Animate timeline line
            if (timelineRef.current) {
              timelineRef.current.style.width = '100%';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="safety"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Safety & Compliance
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 mb-16">
            <p className="text-muted-foreground leading-relaxed">
              At Sag Trucking, safety is foundational. Our comprehensive program includes rigorous
              driver training, proactive maintenance, and strict regulatory adherence. Every team
              member is trained in safety protocols, committed to industry-leading standards.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We utilize advanced ELD systems to ensure hours-of-service compliance and prevent
              driver fatigue. Our fleet features the latest safety technology including collision
              avoidance and stability control. Zero-tolerance drug and alcohol policies with random
              testing ensure a safe, professional operation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="font-heading font-bold text-xl text-center mb-8 text-foreground">
              Safety Milestones
            </h3>
            
            {/* Timeline Line */}
            <div className="relative h-1 bg-muted mb-12">
              <div
                ref={timelineRef}
                className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
              />
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-accent scale-in ${
                        visibleDots.includes(index) ? 'is-visible bg-accent' : 'bg-background'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    />
                  </div>
                  <p className="font-heading font-bold text-accent text-lg mb-1">
                    {milestone.year}
                  </p>
                  <p className="text-muted-foreground text-sm">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
