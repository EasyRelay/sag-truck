import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Terms = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Terms of Service
            </h1>

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
                <p className="leading-relaxed mb-4">
                  Sag Trucking provides comprehensive freight transportation services including:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Full Truckload (FTL) transportation</li>
                  <li>Less Than Truckload (LTL) services</li>
                  <li>Dedicated route services</li>
                  <li>Expedited and time-critical deliveries</li>
                  <li>Specialized cargo handling</li>
                  <li>Cross-docking and warehousing</li>
                </ul>
                <p className="leading-relaxed">
                  Service descriptions are informational and subject to formal written agreements. All services are provided in accordance with applicable federal and state transportation regulations.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Service Limitations and Liability
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Transit Times
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Transit times are estimates and may be affected by conditions beyond our control including:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Weather conditions and natural disasters</li>
                      <li>Traffic congestion and road conditions</li>
                      <li>Equipment failures and maintenance</li>
                      <li>Government regulations and inspections</li>
                      <li>Customer delays in loading/unloading</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Liability Coverage
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Cargo liability governed by federal transportation law (49 USC 14706)</li>
                      <li>Maximum liability of $100,000 per occurrence unless higher coverage purchased</li>
                      <li>Claims must be filed within 9 months of delivery or scheduled delivery date</li>
                      <li>Consequential, indirect, and punitive damages excluded</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Customer Responsibilities
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Provide accurate shipment information and proper documentation</li>
                      <li>Ensure proper packaging and securing of cargo</li>
                      <li>Comply with hazardous materials regulations if applicable</li>
                      <li>Provide safe loading and unloading facilities</li>
                      <li>Pay all charges according to agreed terms</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Pricing and Payment Terms
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Pricing
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Pricing is for reference only. Official quotes are provided upon request and depend on shipment specifics including:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Distance and route complexity</li>
                      <li>Cargo type, weight, and dimensions</li>
                      <li>Special handling requirements</li>
                      <li>Fuel costs and market conditions</li>
                      <li>Delivery timeframe and urgency</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Payment Terms
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Payment terms typically Net 30 days from invoice date</li>
                      <li>Late payments subject to 1.5% monthly service charge</li>
                      <li>Credit applications required for new commercial accounts</li>
                      <li>COD and prepaid options available</li>
                      <li>Disputed charges must be reported within 15 days</li>
                    </ul>
                  </div>
                </div>
                <p className="leading-relaxed mt-4">
                  Contact us at +1 440-299-3900 or safety.saggroup@gmail.com for pricing and payment arrangements.
                </p>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Insurance and Claims
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Insurance Coverage
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Commercial auto liability: $1,000,000 minimum</li>
                      <li>Cargo insurance: $100,000 per occurrence (higher limits available)</li>
                      <li>General liability: $1,000,000 per occurrence</li>
                      <li>Workers' compensation as required by law</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Claims Process
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Report damage or loss immediately upon discovery</li>
                      <li>Provide written notice within 24 hours</li>
                      <li>Preserve damaged goods for inspection</li>
                      <li>Submit supporting documentation within 30 days</li>
                      <li>Claims processed within 30 days of complete documentation</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Safety and Compliance
                </h2>
                <p className="leading-relaxed mb-4">
                  Sag Trucking is committed to maintaining the highest safety standards:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>DOT compliance monitoring and regular audits</li>
                  <li>Driver qualification and training programs</li>
                  <li>Vehicle maintenance and inspection schedules</li>
                  <li>Hours of service compliance and electronic logging</li>
                  <li>Drug and alcohol testing programs</li>
                  <li>Safety performance monitoring and improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Dispute Resolution and Governing Law
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Governing Law
                    </h3>
                    <p className="leading-relaxed">
                      These terms are governed by federal transportation law (49 USC) and applicable state laws. Interstate transportation is subject to federal jurisdiction and regulations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Dispute Resolution
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Disputes should first be addressed through direct communication</li>
                      <li>Mediation preferred for resolution of commercial disputes</li>
                      <li>Arbitration may be required for certain claim types</li>
                      <li>Legal action subject to federal and state court jurisdiction</li>
                      <li>Statute of limitations applies as per federal transportation law</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Modifications and Updates
                </h2>
                <p className="leading-relaxed">
                  These terms may be updated periodically to reflect changes in our services, legal requirements, or business practices. Material changes will be communicated to active customers. Continued use of our services constitutes acceptance of updated terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Contact
                </h2>
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <p className="text-foreground font-medium mb-2">State Auto Group LLC</p>
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
