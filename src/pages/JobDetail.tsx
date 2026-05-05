import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, Clock, Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { jobs } from "@/data/jobs";

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  cover: z.string().trim().min(50, "Please write at least 50 characters").max(3000),
});

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "" });
  const [cv, setCv] = useState<File | null>(null);

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

  const submitApplication = (e: React.FormEvent) => {
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
    if (cv.size > 5 * 1024 * 1024) {
      toast.error("CV must be under 5MB");
      return;
    }
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(cv.type)) {
      toast.error("CV must be PDF or Word document");
      return;
    }
    toast.success("Your application has been received. Our team will review and contact qualified candidates.");
    setForm({ name: "", email: "", phone: "", cover: "" });
    setCv(null);
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
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{job.type}</span>
            {job.deadline && (
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />Apply by {job.deadline}</span>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-sm uppercase tracking-wider text-gold mb-3">Role Overview</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{job.overview}</p>
            </div>
            <div>
              <h2 className="font-display text-sm uppercase tracking-wider text-gold mb-3">Key Responsibilities</h2>
              <ul className="font-body text-muted-foreground space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="text-gold mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider text-gold mb-3">Qualifications</h2>
                <ul className="font-body text-sm text-muted-foreground space-y-1.5">
                  {job.qualifications.map((q) => <li key={q}>• {q}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider text-gold mb-3">Experience</h2>
                <p className="font-body text-sm text-muted-foreground">{job.experience}</p>
              </div>
            </div>
            {job.performance && (
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider text-gold mb-3">Performance Expectations</h2>
                <ul className="font-body text-sm text-muted-foreground space-y-1.5">
                  {job.performance.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="bg-muted/40 border border-border rounded-lg p-6 lg:sticky lg:top-28">
              <h2 className="font-display text-xl font-semibold text-foreground mb-1">Apply for this role</h2>
              <p className="font-body text-xs text-muted-foreground mb-5">All fields are required.</p>
              <form onSubmit={submitApplication} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs">Full Name</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs">Phone</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} />
                </div>
                <div>
                  <Label className="text-xs">Position</Label>
                  <Input value={job.title} readOnly className="bg-background/60" />
                </div>
                <div>
                  <Label htmlFor="cover" className="text-xs">Cover Letter</Label>
                  <Textarea id="cover" rows={4} value={form.cover} onChange={(e) => setForm({ ...form, cover: e.target.value })} maxLength={3000} />
                </div>
                <div>
                  <Label htmlFor="cv" className="text-xs">CV / Resume (PDF or Word, max 5MB)</Label>
                  <label
                    htmlFor="cv"
                    className="mt-1 flex items-center gap-2 px-3 py-2 border border-dashed border-border rounded-md cursor-pointer hover:border-gold transition-colors text-sm font-body text-muted-foreground"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="truncate">{cv ? cv.name : "Choose file"}</span>
                  </label>
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                  />
                </div>
                <Button type="submit" variant="gold" className="w-full">Submit Application</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetail;
