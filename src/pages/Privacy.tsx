import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Privacy = () => {

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
              Privacy Policy
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Sag Trucking collects, uses, and protects personal information of customers and
                  site visitors. This policy explains our data practices.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Personal Information
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Contact information (name, email, phone, address)</li>
                      <li>Business information (company name, DOT numbers, tax ID)</li>
                      <li>Driver information (license numbers, certifications, employment history)</li>
                      <li>Financial information (payment methods, billing addresses)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Shipment Information
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Pickup and delivery addresses</li>
                      <li>Cargo descriptions, weights, and dimensions</li>
                      <li>Special handling requirements</li>
                      <li>Delivery schedules and tracking information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Technical Information
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>IP addresses and device identifiers</li>
                      <li>Browser type, version, and operating system</li>
                      <li>Website usage patterns and preferences</li>
                      <li>Location data from mobile devices (with permission)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  How We Use Information
                </h2>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Providing and improving freight services</li>
                  <li>Communicating about shipments and inquiries</li>
                  <li>Complying with DOT regulations and legal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Data Sharing
                </h2>
                <p className="leading-relaxed mb-4">
                  We do not sell your personal information. Data may be shared in the following circumstances:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>With service providers who assist in our operations (logistics partners, payment processors)</li>
                  <li>With insurance companies for claims processing and coverage verification</li>
                  <li>With government agencies as required by DOT regulations and legal compliance</li>
                  <li>With law enforcement when legally required or to protect our rights</li>
                  <li>In connection with business transfers or mergers (with notice to affected parties)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  RingCentral Integration
                </h2>
                <p className="leading-relaxed mb-4">
                  Our service uses RingCentral's APIs to facilitate communication. When you connect your RingCentral account, we may access and use data such as:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Your RingCentral account information</li>
                  <li>Call and message metadata (not message content)</li>
                  <li>Contact and directory information</li>
                </ul>
                <p className="leading-relaxed">
                  We access only the data necessary for service functionality. This data is not shared with third parties except as required to operate the service.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Data Security
                </h2>
                <p className="leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure data centers and backup systems</li>
                  <li>Incident response procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Access: Request copies of your personal information</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal information</li>
                  <li>Portability: Request transfer of your data to another service</li>
                  <li>Objection: Object to certain processing activities</li>
                  <li>Restriction: Request limitation of processing</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="leading-relaxed">
                  We retain personal information for as long as necessary to provide services and comply with legal obligations. Shipment records are typically retained for 7 years as required by DOT regulations. Marketing communications data is retained until you opt out or request deletion.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Contact
                </h2>
                <p className="leading-relaxed mb-4">
                  For privacy questions, contact:
                </p>
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <p className="text-foreground font-medium mb-2">Sag Trucking</p>
                  <p>Phone: +1 440-299-3900</p>
                  <p>Email: safety.saggroup@gmail.com</p>
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

export default Privacy;
