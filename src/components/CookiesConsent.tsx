import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Cookie, X } from "lucide-react";

export type CookiePrefs = {
  functionality: true;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "pk5-cookie-consent-v1";

const defaultPrefs: CookiePrefs = {
  functionality: true,
  experience: false,
  measurement: false,
  marketing: false,
};

export function getCookiePrefs(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePrefs) : null;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("pk5:open-cookie-settings"));
}

const categories: Array<{
  key: keyof CookiePrefs;
  title: string;
  description: string;
  required?: boolean;
}> = [
  {
    key: "functionality",
    title: "Functionality Cookies",
    description: "Essential for core site features such as navigation and security. Always active.",
    required: true,
  },
  {
    key: "experience",
    title: "Experience Cookies",
    description: "Remember your preferences to personalise your browsing experience.",
  },
  {
    key: "measurement",
    title: "Measurement Cookies",
    description: "Help us understand site usage through anonymous analytics.",
  },
  {
    key: "marketing",
    title: "Marketing Cookies",
    description: "Used to deliver relevant ads and measure campaign performance.",
  },
];

const applyPrefs = (prefs: CookiePrefs) => {
  // Hook for analytics/marketing scripts — only load when consented
  (window as any).__pk5Consent = prefs;
  if (prefs.measurement) {
    // load analytics scripts here
  }
  if (prefs.marketing) {
    // load marketing scripts here
  }
};

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

  useEffect(() => {
    const stored = getCookiePrefs();
    if (!stored) {
      setOpen(true);
    } else {
      setPrefs(stored);
      applyPrefs(stored);
    }
    const handler = () => {
      const s = getCookiePrefs();
      if (s) setPrefs(s);
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener("pk5:open-cookie-settings", handler);
    return () => window.removeEventListener("pk5:open-cookie-settings", handler);
  }, []);

  const persist = (p: CookiePrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    applyPrefs(p);
    setPrefs(p);
    setOpen(false);
    setShowDetails(false);
  };

  const acceptAll = () =>
    persist({ functionality: true, experience: true, measurement: true, marketing: true });
  const rejectAll = () =>
    persist({ functionality: true, experience: false, measurement: false, marketing: false });
  const savePrefs = () => persist(prefs);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed z-[100] bottom-4 right-4 left-4 sm:left-auto sm:max-w-md w-auto sm:w-full bg-card text-card-foreground rounded-xl shadow-2xl border border-border animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Cookie className="w-5 h-5" />
            </div>
            <h2
              id="cookie-title"
              className="font-display text-lg font-semibold text-foreground"
            >
              We value your privacy
            </h2>
          </div>
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          We use cookies to operate this site, improve your experience, analyse performance, and
          support our marketing. Choose which categories you allow.
        </p>

        {showDetails && (
          <div className="space-y-3 mb-5 max-h-72 overflow-y-auto pr-1">
            {categories.map((c) => {
              const checked = prefs[c.key];
              const id = `cookie-${c.key}`;
              return (
                <div
                  key={c.key}
                  className="flex items-start gap-3 p-3 rounded-lg border border-border bg-background"
                >
                  <Checkbox
                    id={id}
                    checked={checked}
                    disabled={c.required}
                    onCheckedChange={(v) =>
                      setPrefs((p) => ({ ...p, [c.key]: !!v } as CookiePrefs))
                    }
                    className="mt-0.5"
                  />
                  <label htmlFor={id} className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="font-body font-semibold text-sm text-foreground">
                        {c.title}
                      </span>
                      {c.required && (
                        <span className="text-[10px] uppercase tracking-wide text-accent font-semibold">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {c.description}
                    </p>
                  </label>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={acceptAll} className="flex-1">
            Accept All
          </Button>
          <Button onClick={rejectAll} variant="outline" className="flex-1">
            Reject All
          </Button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <button
            onClick={() => setShowDetails((s) => !s)}
            className="font-body text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
          >
            {showDetails ? "Hide preferences" : "Customise preferences"}
          </button>
          {showDetails && (
            <Button onClick={savePrefs} variant="ghost" size="sm">
              Save Preferences
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
