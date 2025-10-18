import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const fleetVehicles = [
  {
    name: 'Peterbilt 579',
    capacity: '53-foot dry van',
    description:
      'Flagship long-haul tractor with aerodynamic efficiency, advanced safety features including collision mitigation and lane departure warnings. Perfect for coast-to-coast routes with excellent fuel economy.',
  },
  {
    name: 'Freightliner Cascadia',
    capacity: '53-foot refrigerated',
    description:
      'Premium temperature-controlled solution maintaining precise conditions from -20°F to +70°F. Ideal for pharmaceuticals and perishables with redundant cooling systems and 24/7 remote monitoring.',
  },
  {
    name: 'Kenworth T680',
    capacity: '48-foot dry van',
    description:
      'Versatile mid-range hauler perfect for regional deliveries. Excellent maneuverability for urban areas while maintaining highway efficiency. Shorter wheelbase allows easier docking in tight spaces.',
  },
];

const FleetSection = () => {
  const ref = useScrollAnimation(0.2);

  return (
    <section
      id="fleet"
      ref={ref as any}
      className="py-24 md:py-32 bg-card/30 animate-on-scroll"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern equipment maintained to the highest standards
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4">
          <div className="flex gap-6 snap-x snap-mandatory" style={{ scrollSnapType: 'x mandatory' }}>
            {fleetVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center"
              >
                <div className="bg-card rounded-lg p-8 border border-border/50 h-full card-lift transition-all duration-300 hover:border-accent/50">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-card-foreground mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-4">{vehicle.capacity}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {vehicle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">← Scroll to explore →</p>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
