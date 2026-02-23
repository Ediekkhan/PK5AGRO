import { Leaf, Shield, Lightbulb, Award, Eye, Target } from "lucide-react";
import princeImg from "../../src/assets/leaderImg/Prince.jpeg";
import peterImg from "../../src/assets/leaderImg/Peter.jpeg";
import alozieImg from "../../src/assets/leaderImg/Alozie.jpeg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Story
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg leading-relaxed">
            PK5 Agro Allied was founded with a single vision: to harness Nigeria's vast
            agricultural potential and deliver world-class products to local and international markets.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-xl bg-primary/5 border border-primary/10">
            <Target className="w-10 h-10 text-accent mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              To development of a large-scale commercial agricultural production and integrated agro-processing project 
              designed to unlock agricultural potential and establish value addition capacity.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-accent/5 border border-accent/10">
            <Eye className="w-10 h-10 text-accent mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              A future committed to transforming agriculture from a subsistence-based activity into a 
              productivity-driven industrial sector.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Sustainability", desc: "Farming that respects the earth." },
              { icon: Shield, title: "Integrity", desc: "Honest in every transaction." },
              { icon: Lightbulb, title: "Innovation", desc: "Modern solutions for age-old challenges." },
              { icon: Award, title: "Quality", desc: "Excellence from seed to shelf." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 rounded-lg bg-card shadow-sm border border-border">
                <v.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Prince Nnaemeka Njoku", role: "CEO & Founder", image: princeImg },
              { name: "Peter Eziakor", role: "Head of Facilities & Production", image: peterImg},
              { name: "Alozie Okwukanma", role: "Head of IT", image: alozieImg},
            ].map((person) => (
              <div key={person.name} className="p-6 rounded-lg bg-card shadow-sm border border-border">
                <div className="w-20 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {/* {person.name.split(" ").map(n => n[0]).join("")} */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="font-body text-muted-foreground text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
