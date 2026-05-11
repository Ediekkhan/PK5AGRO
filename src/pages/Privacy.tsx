import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | PK5 Agro Allied";
  }, []);

  return (
    <main className="bg-background">
      <section className="bg-forest-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">Privacy Policy</h1>
          <p className="font-body text-primary-foreground/75 mt-4 max-w-2xl">
            How PK5 Agro Allied collects, uses, and protects your personal information.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide max-w-3xl space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            PK5 Agro Allied ("we", "us") is committed to protecting your privacy. This policy
            explains what data we collect through our website and careers portal, how we use it,
            and the rights you have over your information.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">1. Information We Collect</h2>
          <p>
            We collect personal information you provide directly, including name, contact details,
            CV/resume content, and any information shared through application or contact forms.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">2. How We Use Your Information</h2>
          <p>
            Information is used to evaluate job applications, respond to inquiries, deliver
            services you request, and improve our digital experience. We do not sell your data.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">3. Data Retention</h2>
          <p>
            Application data is retained only as long as necessary for recruitment purposes and
            in accordance with applicable laws.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">4. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data at any time by
            contacting us through the channels listed on our Contact page.
          </p>
          <h2 className="font-display text-2xl text-foreground font-semibold pt-4">5. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to safeguard personal
            data against unauthorized access, loss, or misuse.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
