import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactService } from "@/api/contactService";
import { locations } from "@/data/location";

const LocationsMap = lazy(() => import("@/components/ui/locationsMap"));

const actualLocations = locations.map((loc) => loc.actualAddress);

function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const APP_ID = import.meta.env.VITE_APP_ID;

  // Local state for the form (UI-friendly)
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
    appId: APP_ID
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Name splitting logic remains the same...
    const [fName, ...lNameParts] = form.fullName.trim().split(" ");
    const payload = {
      id: 0,
      firstName: fName || "",
      lastName: lNameParts.join(" ") || "N/A",
      email: form.email,
      phoneNumber: form.phone,
      company: form.company || "Individual",
      subject: form.inquiryType,
      appId: APP_ID,
      messageBody: form.message
    };

    try {
      const response = await contactService.sendContactForm(payload);

      toast({
        title: "Success!",
        description: response.data || "Your message has been received."
      });

      setForm({ fullName: "", email: "", phone: "", company: "", inquiryType: "", message: "", appId: form.appId });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background">
      <section className="section-padding pt-32 md:pt-40 md:pb-28 bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body md:text-lg font-semibold text-sm tracking-[0.18em] uppercase mb-4 leading-relaxed">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg">
            Ready to discuss partnerships, bulk orders, or exports? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide flex flex-col gap-12">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8 h-full">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Reach Us</h2>
                <div className="space-y-6">
                  <a href="https://www.google.com/maps?q=5901%20Peachtree%20Dunwoody%20Road,%20Suite%20A310,%20Atlanta,%20GA%2030328,%20USA"
                    target="_blank"
                    rel="noopener noreferrer" className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">USA Office</h3>
                      <p className="font-body text-sm text-muted-foreground">5901 Peachtree Dunwoody Road, Suite A310, Atlanta, GA 30328, USA</p>
                    </div>
                  </a>

                  {/* Branch Office */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2%2F5%2C+Nza+Street%2C+Independence+Layout+Enugu%2C+Enugu+State%2C+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">
                        Enugu Office
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        2/4, Nza Street, Independence Layout Enugu, Enugu State, Nigeria
                      </p>
                    </div>
                  </a>

                  <a href="tel:+2348026133205" className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">Phone</h3>
                      <p className="font-body text-sm text-muted-foreground">+1 (404) 436-5533</p>
                    </div>
                  </a>
                  <a href="mailto:Info@pk5agroallied.com" className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">Email</h3>
                      <p className="font-body text-sm text-muted-foreground">Info@pk5agroallied.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="p-8 rounded-xl bg-card shadow-sm border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                      <Input
                        required
                        disabled={isSubmitting}
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input
                        required
                        type="email"
                        disabled={isSubmitting}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input
                        disabled={isSubmitting}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g +1404..... "
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <Input
                        disabled={isSubmitting}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Inquiry Type</label>
                    <Select
                      disabled={isSubmitting}
                      value={form.inquiryType}
                      onValueChange={(v) => setForm({ ...form, inquiryType: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                        <SelectItem value="Bulk Purchase">Bulk Purchase</SelectItem>
                        <SelectItem value="Export Inquiry">Export Inquiry</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      required
                      disabled={isSubmitting}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your needs..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border h-96 bg-muted flex items-center justify-center">
            {/* Safe loading bridge during async transitions */}
            <Suspense fallback={
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-gold" />
                <span className="text-xs text-muted-foreground">Loading Map System...</span>
              </div>
            }>
              <LocationsMap locations={actualLocations} />
            </Suspense>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;