import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { Package, Truck, Route, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Package,
    title: 'LTL Freight',
    description: 'Consolidated shipping for partial loads with competitive regional rates.',
    highlights: ['Cost-effective', 'Flexible scheduling', 'Secure handling'],
  },
  {
    icon: Truck,
    title: 'Full Truckload',
    description: 'Dedicated trailers for large shipments requiring exclusive use and speed.',
    highlights: ['Direct routes', 'Maximum security', 'GPS tracking'],
  },
  {
    icon: Route,
    title: 'Dedicated Routes',
    description: 'Assigned equipment and drivers for recurring freight with predictable capacity.',
    highlights: ['Consistent service', 'Familiar drivers', 'Simplified logistics'],
  },
  {
    icon: Zap,
    title: 'Expedited',
    description: 'Priority shipping for time-critical deliveries with guaranteed windows.',
    highlights: ['24/7 dispatch', 'Priority scheduling', 'Real-time updates'],
  },
];

const ServicesSection = () => {
  const containerRef = useStaggeredAnimation(services.length, 150);

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive freight solutions for every shipping need
          </p>
        </div>

        <div
          ref={containerRef as any}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-stagger
                className="bg-card rounded-lg p-6 card-lift card-rotate border border-border/50"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight, hIndex) => (
                    <Badge
                      key={hIndex}
                      variant="outline"
                      className="text-xs bg-accent/5 border-accent/20 text-foreground"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
