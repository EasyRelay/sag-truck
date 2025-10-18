import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, FileCheck, Award } from 'lucide-react';

const TrustStrip = () => {
  const ref = useScrollAnimation(0.5);

  return (
    <section
      ref={ref as any}
      className="py-16 bg-card/50 backdrop-blur-sm slide-right"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-accent flex-shrink-0" />
            <div>
              <p className="font-heading font-bold text-sm text-foreground">USDOT 3720632</p>
              <p className="text-xs text-muted-foreground">DOT Certified</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <FileCheck className="h-6 w-6 text-accent flex-shrink-0" />
            <div>
              <p className="font-heading font-bold text-sm text-foreground">MC 1309439</p>
              <p className="text-xs text-muted-foreground">Motor Carrier</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-accent flex-shrink-0" />
            <div>
              <p className="font-heading font-bold text-sm text-foreground">EIN 45-2608172</p>
              <p className="text-xs text-muted-foreground">Owner: Amjad Matar</p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-6">
          Fully insured, compliant, and ready to serve your freight needs nationwide.
        </p>
      </div>
    </section>
  );
};

export default TrustStrip;
