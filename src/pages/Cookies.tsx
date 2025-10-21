import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Cookies = () => {

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
              Cookie Policy
            </h1>
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
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Strictly Necessary Cookies
                    </h3>
                    <p className="leading-relaxed mb-2">
                      These cookies are essential for the website to function properly and cannot be disabled:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Session management and user authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance optimization</li>
                      <li>Form submission and data validation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Analytics and Performance Cookies
                    </h3>
                    <p className="leading-relaxed mb-2">
                      These cookies help us understand how visitors interact with our website:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Google Analytics for traffic analysis and user behavior</li>
                      <li>Page load times and performance metrics</li>
                      <li>Popular content and navigation patterns</li>
                      <li>Error tracking and debugging information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Functional Cookies
                    </h3>
                    <p className="leading-relaxed mb-2">
                      These cookies enable enhanced functionality and personalization:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Language and region preferences</li>
                      <li>User interface customizations</li>
                      <li>Form auto-fill and saved preferences</li>
                      <li>Chat widget and customer support features</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Marketing and Advertising Cookies
                    </h3>
                    <p className="leading-relaxed mb-2">
                      These cookies are used to deliver relevant advertisements (with your consent):
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Tracking user interests and preferences</li>
                      <li>Measuring advertising campaign effectiveness</li>
                      <li>Preventing duplicate ad displays</li>
                      <li>Social media integration and sharing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Detailed Cookie Inventory
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Cookie Name
                        </th>
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Purpose
                        </th>
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Type
                        </th>
                        <th className="text-left p-3 font-heading font-semibold text-foreground">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_session</td>
                        <td className="p-3 text-sm">Session management and user state</td>
                        <td className="p-3 text-sm">Necessary</td>
                        <td className="p-3 text-sm">Session</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_csrf</td>
                        <td className="p-3 text-sm">Cross-site request forgery protection</td>
                        <td className="p-3 text-sm">Necessary</td>
                        <td className="p-3 text-sm">Session</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_ga</td>
                        <td className="p-3 text-sm">Google Analytics - user identification</td>
                        <td className="p-3 text-sm">Analytics</td>
                        <td className="p-3 text-sm">2 years</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_ga_*</td>
                        <td className="p-3 text-sm">Google Analytics - session data</td>
                        <td className="p-3 text-sm">Analytics</td>
                        <td className="p-3 text-sm">2 years</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_gid</td>
                        <td className="p-3 text-sm">Google Analytics - user identification</td>
                        <td className="p-3 text-sm">Analytics</td>
                        <td className="p-3 text-sm">24 hours</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">_gat</td>
                        <td className="p-3 text-sm">Google Analytics - request throttling</td>
                        <td className="p-3 text-sm">Analytics</td>
                        <td className="p-3 text-sm">1 minute</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">preferences</td>
                        <td className="p-3 text-sm">User interface and language preferences</td>
                        <td className="p-3 text-sm">Functional</td>
                        <td className="p-3 text-sm">1 year</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="p-3 font-mono text-sm">ringcentral_*</td>
                        <td className="p-3 text-sm">RingCentral integration and communication</td>
                        <td className="p-3 text-sm">Functional</td>
                        <td className="p-3 text-sm">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Browser Settings
                    </h3>
                    <p className="leading-relaxed mb-2">
                      You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Chrome:</strong> Settings {'->'} Privacy and Security {'->'} Cookies and other site data</li>
                      <li><strong>Firefox:</strong> Settings {'->'} Privacy & Security {'->'} Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences {'->'} Privacy {'->'} Manage Website Data</li>
                      <li><strong>Edge:</strong> Settings {'->'} Cookies and site permissions {'->'} Cookies and site data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Cookie Consent Management
                    </h3>
                    <p className="leading-relaxed mb-2">
                      When you first visit our website, you'll see a cookie consent banner where you can:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Accept all cookies for the full website experience</li>
                      <li>Customize your preferences by cookie category</li>
                      <li>Reject non-essential cookies (some features may be limited)</li>
                      <li>Change your preferences at any time using the cookie settings link</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                      Third-Party Opt-Outs
                    </h3>
                    <p className="leading-relaxed mb-2">
                      You can also opt out of specific third-party services:
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-sm">
                      <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                      <li>Advertising cookies: <a href="https://www.youronlinechoices.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                      <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/choices/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">NAI Opt-out</a></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 mt-4">
                  <p className="text-sm leading-relaxed">
                    <strong>Important:</strong> Disabling certain cookies may limit website functionality. Necessary cookies cannot be disabled as they are essential for the website to work properly.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
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
