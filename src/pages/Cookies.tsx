import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last Updated: 2025-01-18</p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  What Are Cookies
                </h2>
                <p className="leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website.
                  They help us improve site functionality and understand usage patterns.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Types of Cookies
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Necessary
                    </h3>
                    <p>Essential for site functionality and navigation.</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Analytics
                    </h3>
                    <p>
                      Help us understand traffic patterns and improve site performance (e.g., Google
                      Analytics).
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Cookie Inventory
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Name
                        </th>
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Purpose
                        </th>
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_session</td>
                        <td className="p-3 text-sm">Session state</td>
                        <td className="p-3 text-sm">Session</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_ga</td>
                        <td className="p-3 text-sm">Analytics tracking</td>
                        <td className="p-3 text-sm">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  How to Disable Cookies
                </h2>
                <p className="leading-relaxed">
                  You can manage cookies through your browser settings. Note that disabling cookies
                  may limit site functionality.
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

export default Cookies;
