import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last Updated: 2025-01-18</p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Acceptance
                </h2>
                <p className="leading-relaxed">
                  By using Sag Trucking services or website, you agree to these Terms of Service.
                  Continued use constitutes acceptance of any updates.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Services
                </h2>
                <p className="leading-relaxed">
                  Sag Trucking provides freight transportation including FTL, LTL, dedicated routes,
                  and expedited services. Service descriptions are informational and subject to
                  formal written agreements.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Limitations
                </h2>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Transit times are estimates and may be affected by conditions beyond our control
                  </li>
                  <li>
                    Liability for cargo loss/damage governed by federal law and insurance coverage
                  </li>
                  <li>
                    Customers responsible for accurate shipment information and proper packaging
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Pricing
                </h2>
                <p className="leading-relaxed">
                  Pricing is for reference only. Official quotes provided upon request and depend on
                  shipment specifics. Contact us at +1 440-299-3900 or safety.saggroup@gmail.com
                  for pricing.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Governing Law
                </h2>
                <p className="leading-relaxed">
                  These terms are governed by federal transportation law and applicable state laws.
                  Consult legal counsel for specific questions regarding jurisdiction and dispute
                  resolution.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Contact
                </h2>
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <p className="text-foreground font-medium mb-2">Sag Trucking</p>
                  <p>Phone: +1 440-299-3900</p>
                  <p>Email: safety.saggroup@gmail.com</p>
                  <p className="mt-2 text-sm">USDOT: 3720632 | MC: 1309439</p>
                  <p className="text-sm">EIN: 45-2608172 (Owner: Amjad Matar)</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
