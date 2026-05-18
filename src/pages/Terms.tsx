import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | PK5 Agro Allied";
  }, []);

  return (
    <main className="bg-background">
      <section className="bg-forest-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">Terms of Service</h1>
          <p className="font-body text-primary-foreground/75 mt-4 max-w-2xl">
            The terms governing your use of the PK5 Agro Allied website and services.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide max-w-3xl space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the PK5 Agro Allied
            website, careers portal, and related digital services. By using this site or submitting
            an application, you agree to be bound by these Terms.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">1. Use of the Site</h2>
          <p>
            You agree to use this website lawfully and not to misuse, disrupt, or attempt to gain
            unauthorized access to any portion of our systems.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">2. Job Applications</h2>
          <p>
            Information submitted through our careers portal will be used solely to evaluate your
            candidacy and to communicate with you regarding employment opportunities at PK5.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and trademarks, is the property
            of PK5 Agro Allied and protected by applicable laws.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">4. Limitation of Liability</h2>
          <p>
            PK5 Agro Allied is not liable for any indirect or consequential damages arising from
            use of this site to the fullest extent permitted by law.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">5. Updates</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site constitutes
            acceptance of any revisions.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Terms;
