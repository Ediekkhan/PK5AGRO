import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, Clock, Upload, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { jobs } from "@/data/jobs";
import { applicationService } from "@/api/applicationService";

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  cover: z.string().trim().min(50, "Please write at least 50 characters").max(3000),
});

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  // Get job from passed state, fallback to static data
  const job = location.state?.job || jobs.find((j) => j.id === id);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "" });
  const [cv, setCv] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (job) document.title = `${job.title} — Careers | PK5 Agro Allied`;
  }, [job]);

  if (!job) {
    return (
      <main className="bg-background pt-32 pb-20">
        <div className="container-wide text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Role not found</h1>
          <p className="font-body text-muted-foreground mb-6">This position may have been filled or removed.</p>
          <Link to="/careers">
            <Button variant="default">Back to Careers</Button>
          </Link>
        </div>
      </main>
    );
  }

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = applicationSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    if (!cv) {
      toast.error("Please upload your CV/Resume");
      return;
    }
    if (!consent) {
      setShowConsentError(true);
      return;
    }
    if (cv.size > 5 * 1024 * 1024) {
      toast.error("CV must be under 5MB");
      return;
    }
    const allowed = [
      "application/pdf",
    ];
    if (!allowed.includes(cv.type)) {
      toast.error("CV must be PDF format");
      return;
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("jobId", job.id.toString());
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("coverLetter", form.cover);
      formData.append("cv", cv);

      await applicationService.submitApplication(job.id, formData);

      toast.success("Your application has been received. Our team will review and contact qualified candidates.");
      setForm({ name: "", email: "", phone: "", cover: "" });
      setCv(null);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative bg-forest-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-body text-primary-foreground/80 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all roles
          </Link>
          <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-4">{job.department}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-4xl">{job.title}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm font-body text-primary-foreground/85">
            <span className="inline-flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{job.department}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{job.jobType}</span>
            {job.dT_Expiry && (
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />Apply by {new Date(job.dT_Expiry).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="prose prose-sm max-w-none mb-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">About this role</h2>
              <div className="font-body text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: job.description }} />
            </div>
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Experience Required</h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{job.experience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-3">Ready to apply?</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">Submit Your Application</h2>
              <p className="font-body text-base text-muted-foreground">Tell us why you're the perfect fit for this role. We review applications on a rolling basis.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 md:p-10">
              <form onSubmit={submitApplication} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-2 block">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Position */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+234 (0) 123 456 7890"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={30}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-foreground mb-2 block">Position Applied For</Label>
                    <Input
                      value={job.title}
                      readOnly
                      className="bg-background/60 h-11 cursor-default"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="cover" className="text-sm font-semibold text-foreground">Cover Letter *</Label>
                    <span className="text-xs text-muted-foreground">{form.cover.length}/3000 characters</span>
                  </div>
                  <Textarea
                    id="cover"
                    placeholder="Tell us why you're interested in this role and what makes you a great fit. Share relevant experience and what excites you about PK5 Agro Allied."
                    rows={8}
                    value={form.cover}
                    onChange={(e) => setForm({ ...form, cover: e.target.value })}
                    maxLength={3000}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Minimum 50 characters required</p>
                </div>

                {/* File Upload */}
                <div>
                  <Label htmlFor="cv" className="text-sm font-semibold text-foreground mb-3 block">Upload CV / Resume *</Label>
                  <label
                    htmlFor="cv"
                    className="flex flex-col items-center justify-center gap-3 px-6 py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-gold hover:bg-gold/5 transition-all duration-200"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-8 h-8 text-gold" />
                      <div className="text-center">
                        <p className="font-semibold text-foreground">{cv ? "File selected" : "Click to upload"}</p>
                        <p className="text-xs text-muted-foreground mt-1">PDF or Word document, max 5MB</p>
                      </div>
                    </div>
                    {cv && (
                      <div className="flex items-center gap-2 text-sm text-gold bg-gold/10 px-3 py-2 rounded-md w-full justify-center mt-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="truncate">{cv.name}</span>
                      </div>
                    )}
                  </label>
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gold"
                  className="w-full h-12 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gold disabled:hover:text-accent-foreground disabled:pointer-events-auto"
                  disabled={isSubmitting || !consent}
                  aria-disabled={!consent}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
                <div className="pt-1">
                  <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer group">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (e.target.checked) setShowConsentError(false);
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-border text-forest accent-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
                      aria-describedby="consent-error"
                      aria-required="true"
                    />
                    <span className="font-body text-xs text-muted-foreground leading-relaxed">
                      By submitting, you agree to PK5 Agro-Allied's{" "}
                      <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-2 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-2 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  {showConsentError && !consent && (
                    <p id="consent-error" role="alert" className="mt-2 font-body text-xs text-destructive">
                      You must agree to the Terms of Service and Privacy Policy before submitting your application.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetail;
