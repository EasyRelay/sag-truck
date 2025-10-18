import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last Updated: 2025-01-18</p>

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
                <ul className="space-y-3 list-disc list-inside">
                  <li>Contact information (name, email, phone) when you contact us</li>
                  <li>Shipment details for service delivery (addresses, cargo info)</li>
                  <li>Technical data (IP address, browser type) via server logs</li>
                </ul>
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
                <p className="leading-relaxed">
                  We do not sell your information. Data may be shared with service providers,
                  insurance companies, or as required by law.
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
