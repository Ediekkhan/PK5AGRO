import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Clock, TrendingUp, GraduationCap, Cpu, Leaf, Users2, Globe2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { careerService } from "@/api/careerService";
import { useToast } from "@/hooks/use-toast";
import { toTitleCase } from "@/lib/utils";

const valueProps = [
  { icon: Globe2, title: "Impact at Scale", desc: "Contribute to large-scale agro-processing operations shaping food systems across Africa." },
  { icon: TrendingUp, title: "Professional Growth", desc: "Structured career progression, mentorship, and continuous skill development pathways." },
  { icon: Cpu, title: "Innovation & Technology", desc: "Hands-on exposure to modern agro-processing systems, automation, and data-driven agronomy." },
  { icon: Leaf, title: "Sustainability Leadership", desc: "Operate within rigorous environmental, social, and governance standards." },
  { icon: Users2, title: "People & Culture", desc: "A high-performance, collaborative workforce that values integrity and ownership." },
  { icon: GraduationCap, title: "Learning Environment", desc: "Cross-functional exposure across agronomy, processing, supply chain, and finance." },
];

const talentSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  area: z.string().trim().min(2).max(120),
});

const Careers = () => {
  const { toast } = useToast();
  const [talent, setTalent] = useState({ name: "", email: "", area: "" });
  const [jobs, setJobs] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response  = await careerService.getJobs();
        const data: any[] = response?.responseData as any[] ;

        setJobs(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error instanceof Error ? error.message : "Something went wrong.",
        });

      }
    };

    fetchJobs();
  }, []);

  const filtered = jobs.filter((j) => {
    const matchDept = filter === "All" || j.department === filter;
    const q = query.trim().toLowerCase();
    const matchQuery =
      !q ||
      j.title.toLowerCase().includes(q) ||
      j.department.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q)
    return matchDept && matchQuery;
  });

  const departments = useMemo(() => {
    const map = new Map(
      jobs
        .map((job) => job.department)
        .filter(Boolean)
        .map((d) => [d!.toLowerCase(), d]),
    );

    return [...map.values()]
      .map(toTitleCase)
      .sort((a, b) => a.localeCompare(b));
  }, [jobs]);

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative bg-forest-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-4">Careers at PK5</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Build the Future of <span className="text-gradient-gold">Agriculture</span> with PK5
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/75 max-w-2xl mt-6 leading-relaxed">
            We are advancing large-scale agro-processing, value chain development, and sustainable
            agricultural transformation across Africa. Join a team building the institutional
            backbone of the continent's next generation of agribusiness.
          </p>
        </div>
      </section>

      {/* About Working at PK5 */}
      <section className="section-padding">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-3">Working at PK5</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Working at PK5 Agro Allied
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
              A professional environment built for operators, builders, and long-term thinkers.
            </p>
          </div>
          <div className="space-y-4 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              PK5 Agro Allied operates at the intersection of cultivation, processing, and export.
              Our teams are united by a commitment to operational excellence, value addition, and
              measurable impact across the communities we serve.
            </p>
            <p>
              We invest in technology-driven agriculture and uphold rigorous standards of
              environmental stewardship. If you are motivated by scale, structure, and the
              opportunity to shape an institution of consequence, you will find a home here.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-muted/40">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-3">Why Join</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Why Join PK5 Agro Allied
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
              An employer of choice for serious agribusiness talent.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="group bg-card border border-border rounded-lg p-7 hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-md bg-forest/10 text-forest flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-accent-foreground transition-colors">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-10">
            <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-3">Open Positions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Current Opportunities
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground mt-4 leading-relaxed max-w-2xl">
              Explore open roles across our agronomy, processing, supply chain, and corporate teams.
            </p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles by title, keyword, or department"
                className="pl-11 h-12 text-sm md:text-base"
                aria-label="Search open roles"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["All", ...departments].map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-4 py-2 rounded-full text-xs font-body font-medium tracking-wide border transition-colors ${filter === d
                  ? "bg-forest text-primary-foreground border-forest"
                  : "bg-transparent text-muted-foreground border-border hover:border-forest hover:text-forest"
                  }`}
              >
                {d}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 border border-dashed border-border rounded-lg">
              <p className="font-body text-sm text-muted-foreground">
                No roles match your search. Try a different keyword or join our Talent Network below.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {filtered.map((job) => (
              <article
                key={job.id}
                className="bg-card border border-border rounded-lg p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 hover:border-forest/40 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-xs font-body text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{job.jobType}</span>
                  </div>
                </div>
                <Link to={`/careers/${job.id}`} state={{ job }}>
                  <Button variant="gold" className="whitespace-nowrap">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Network */}
      <section className="section-padding bg-forest-gradient">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center text-primary-foreground">
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-gold uppercase mb-3">Talent Network</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              Don't see the right role? Join our Talent Network.
            </h2>
            <p className="font-body text-primary-foreground/75 leading-relaxed">
              We are continuously identifying exceptional professionals across agronomy,
              engineering, processing, supply chain, finance, and corporate functions. Share
              your profile and we will reach out as relevant opportunities open.
            </p>
          </div>
          <form className="bg-card text-foreground rounded-lg p-7 space-y-4 border border-border">
            <div>
              <Label htmlFor="t-name" className="text-xs">Full Name</Label>
              <Input id="t-name" value={talent.name} onChange={(e) => setTalent({ ...talent, name: e.target.value })} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="t-email" className="text-xs">Email</Label>
              <Input id="t-email" type="email" value={talent.email} onChange={(e) => setTalent({ ...talent, email: e.target.value })} maxLength={255} />
            </div>
            <div>
              <Label htmlFor="t-area" className="text-xs">Area of Expertise</Label>
              <Input id="t-area" placeholder="e.g. Process Engineering, Agronomy" value={talent.area} onChange={(e) => setTalent({ ...talent, area: e.target.value })} maxLength={120} />
            </div>
            <Button type="submit" variant="default" className="w-full">Join Talent Network</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
