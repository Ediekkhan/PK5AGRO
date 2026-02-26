import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle, Loader2 } from "lucide-react"; 
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api"; 

function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Local state for the form (UI-friendly)
  const [form, setForm] = useState({ 
    fullName: "", 
    email: "", 
    phone: "", 
    company: "", // Added company to state
    inquiryType: "", 
    message: "" 
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
    messageBody: form.message
  };

  try {
    // 1. Capture the backend response
    const response = await api.sendContactForm(payload);
    
    // 2. Use the message returned by the API
    toast({ 
      title: "Success!", 
      description: response.responseMessage || "Your message has been received." 
    });
    
    setForm({ fullName: "", email: "", phone: "", company: "", inquiryType: "", message: "" });
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
    <main className="pt-20">
      <section className="section-padding bg-forest-gradient text-center">
        <div className="container-wide max-w-3xl">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg">
            Ready to discuss partnerships, bulk orders, or exports? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Reach Us</h2>
                <div className="space-y-6">
                  <a href="#" className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">Head Office</h3>
                      <p className="font-body text-sm text-muted-foreground">5901 Peachtree Dunwoody Road, Suite A310, Atlanta, GA 30328, USA</p>
                    </div>
                  </a>

                  {/* Branch Office */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Apt+B+Imanium+Estate+Nathaniel+Akpan+Street+Off+Ekpri+Nsukara+Uyo+Akwa+Ibom+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">
                        Branch Office
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Apt. B Imanium Estate, Nathaniel Akpan Street, Off Ekpri Nsukara, Uyo, Akwa Ibom State, Nigeria
                      </p>
                    </div>
                  </a>

                  <a href="tel:+2348026133205" className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">Phone</h3>
                      <p className="font-body text-sm text-muted-foreground">+234 802 613 3205</p>
                    </div>
                  </a>
                  <a href="mailto:info@agroallied.com" className="flex items-start gap-4 hover:bg-muted/40 p-2 rounded-lg transition">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground">Email</h3>
                      <p className="font-body text-sm text-muted-foreground">info@agroallied.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Google Map Embed (Head Office - Atlanta) */}
              <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <iframe
                  title="Head Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=5901%20Peachtree%20Dunwoody%20Road,%20Suite%20A310,%20Atlanta,%20GA%2030328,%20USA&output=embed"
                />
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
                        placeholder="+234..."
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
        </div>
      </section>
    </main>
  );
};

export default Contact;