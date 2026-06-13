import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import {
  Award,
  TrendingUp,
  ShieldCheck,
  FileText,
  Receipt,
  Building2,
  Search,
  LineChart,
  ClipboardCheck,
  Star,
  UserCircle2,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaswani & Associates | Chartered Accountants in Jabalpur" },
      {
        name: "description",
        content:
          "Tax, GST, audit and advisory services in Jabalpur. Rated 5.0 across 30 Google reviews. Book a consultation with Vaswani & Associates.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <StatsBar />
      <Process />
      <Pricing />
      <Testimonials />
      <CtaBand />
      <Footer />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-violet" />
          <span className="font-serif text-xl tracking-tight text-ink">
            Vaswani <span className="text-violet">&amp;</span> Associates
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="outline"
            className="rounded-full border-ink/15 text-ink hover:bg-ink hover:text-white"
            asChild
          >
            <a href="#contact">Schedule a Call</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[82%] max-w-sm bg-background">
            <div className="mt-2 flex items-center justify-between">
              <span className="font-serif text-lg">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-violet-soft"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <Button
              className="mt-6 w-full rounded-full bg-violet text-white hover:bg-violet/90"
              asChild
            >
              <a href="#contact">Schedule a Call</a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const reduce = useReducedMotion();
  const headline = "Your Financial Affairs, Handled with Precision".split(" ");

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
      alt: "Financial documents and analysis",
      rotate: -3,
      offset: "md:translate-x-0 md:translate-y-0",
      span: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=700&q=80",
      alt: "Professional consultation",
      rotate: 0,
      offset: "",
      span: "col-span-2 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
      alt: "Accounting and review",
      rotate: 2,
      offset: "",
      span: "col-span-2 row-span-1",
    },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-32">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 md:grid-cols-12 md:gap-10 md:px-8 md:pb-28">
        <div className="md:col-span-7 md:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="rounded-full bg-violet px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white hover:bg-violet">
              Chartered Accountants in Jabalpur
            </Badge>
          </motion.div>

          <h1 className="mt-6 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-ink">
            {headline.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.22em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1], delay: 0.15 + i * 0.05 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-7 max-w-xl text-base leading-7 text-ink-soft md:text-[17px] md:leading-8"
          >
            Vaswani &amp; Associates provides tax, compliance, and financial advisory services built
            around accuracy and client trust. Rated 5.0 across 30 reviews.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              className="h-12 rounded-full bg-violet px-6 text-[15px] font-medium text-white shadow-[0_8px_28px_-10px_var(--color-violet)] hover:bg-violet/90"
              asChild
            >
              <a href="#contact">
                Book a Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-6 text-[15px] font-medium text-ink hover:bg-violet-soft hover:text-ink"
              asChild
            >
              <a href="#services">See Our Services</a>
            </Button>
          </motion.div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            <MicroStat icon={<Award className="h-4 w-4" />} value={14} suffix="+" label="Years Experience" />
            <MicroStat icon={<UserCircle2 className="h-4 w-4" />} value={3345} suffix="+" label="Clients Served" />
            <MicroStat icon={<Star className="h-4 w-4" />} value={5} decimals={1} label="Google Rating" />
          </div>
        </div>

        {/* Right column: image cluster */}
        <div className="md:col-span-5">
          <div className="relative mx-auto grid h-[520px] w-full max-w-md grid-cols-4 grid-rows-3 gap-4">
            {heroImages.map((img, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: img.rotate }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.2, 0.65, 0.2, 1] }}
                className={`${img.span} ${img.offset} overflow-hidden rounded-2xl bg-surface shadow-[0_18px_50px_-20px_rgba(15,14,19,0.25)] ring-1 ring-border`}
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-[0_10px_30px_-12px_rgba(15,14,19,0.25)] ring-1 ring-border"
            >
              <div className="grid h-9 w-9 place-items-center rounded-full bg-violet-soft">
                <Sparkles className="h-4 w-4 text-violet" />
              </div>
              <div className="leading-tight">
                <div className="font-serif text-base text-ink">5.0 Google Rating</div>
                <div className="text-[11px] text-ink-soft">30 verified reviews</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MicroStat({
  icon,
  value,
  suffix = "",
  decimals = 0,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    decimals
      ? v.toFixed(decimals)
      : Math.floor(v).toLocaleString("en-IN")
  );
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, mv, reduce]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-surface px-3 py-3 sm:px-4"
    >
      <div className="flex items-center gap-1.5 text-violet">{icon}</div>
      <div className="mt-1.5 font-serif text-2xl leading-none text-ink sm:text-[28px]">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-ink-soft">
        {label}
      </div>
    </div>
  );
}

/* ---------- Section helpers ---------- */
function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        dark ? "text-violet" : "text-violet"
      }`}
    >
      <span className="h-px w-6 bg-violet" />
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-4 max-w-3xl font-serif text-[2.25rem] leading-[1.05] tracking-tight md:text-[2.75rem] ${className}`}
    >
      {children}
    </h2>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Why Choose Us ---------- */
function WhyChoose() {
  const items = [
    {
      icon: Award,
      title: "Industry Recognition",
      body: "Recognized for accuracy, consistency, and client-first service across industries in Madhya Pradesh.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Advantage",
      body: "We provide solutions other firms miss. Knowledgeable, affordable, and always available.",
    },
    {
      icon: ShieldCheck,
      title: "Commitment to Professionalism",
      body: "Timely delivery, attention to detail, and confidentiality as standard, not an afterthought.",
    },
  ];

  return (
    <section id="about" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel dark>Why Choose Us</SectionLabel>
          <SectionTitle className="text-white">Your Goals. Our Commitment.</SectionTitle>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/60">
            A boutique team of Chartered Accountants serving founders, families and growing
            businesses across Jabalpur and beyond.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <Card className="relative h-full overflow-hidden rounded-2xl border-white/10 bg-white/[0.03] p-7 text-white shadow-none backdrop-blur-sm">
                <span className="absolute inset-x-0 top-0 h-[2px] bg-violet" />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet/15 text-violet">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white">{it.title}</h3>
                <p className="mt-3 text-[14.5px] leading-7 text-white/65">{it.body}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: FileText, title: "Income Tax Filing", body: "Salaried, business and HUF returns prepared with care and filed on time." },
    { icon: Receipt, title: "GST Registration & Returns", body: "Registration, monthly returns, reconciliations and notice handling." },
    { icon: Building2, title: "Company Incorporation", body: "Private Ltd, LLP and partnership setup with end to end documentation." },
    { icon: Search, title: "Audit & Assurance", body: "Statutory, internal and tax audits delivered with measurable rigour." },
    { icon: LineChart, title: "Financial Planning", body: "Cash flow, investment and tax planning aligned to your long term goals." },
    { icon: ClipboardCheck, title: "MCA / ROC Compliance", body: "Annual filings, director KYC and event based compliance, never missed." },
  ];

  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Our Services</SectionLabel>
          <SectionTitle>Tailored Services for Every Need</SectionTitle>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-soft">
            From tax filing to corporate compliance, our team handles the complexity so you can
            focus on what matters.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card className="group h-full rounded-2xl border-border bg-surface p-7 shadow-[0_1px_0_0_var(--color-border)] transition-all hover:border-violet/40 hover:shadow-[0_18px_40px_-22px_rgba(107,92,231,0.45)]">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-violet-soft text-violet">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-[1.4rem] leading-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-7 text-ink-soft">{s.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Stats bar ---------- */
function StatsBar() {
  const stats = [
    { value: 14, suffix: "+", label: "Years of Experience" },
    { value: 3345, suffix: "+", label: "Clients Served" },
    { value: 25, suffix: "", label: "Expert Team" },
    { value: 5, suffix: "", decimals: 1, label: "Google Rating" },
  ];
  return (
    <section className="bg-violet-deep py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <BigStat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function BigStat({
  value,
  suffix = "",
  decimals = 0,
  label,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const out = useTransform(mv, (v) =>
    decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString("en-IN"),
  );
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reduce) return mv.set(value);
    const c = animate(mv, value, { duration: 1.6, ease: "easeOut" });
    return () => c.stop();
  }, [inView, value, mv, reduce]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-serif text-5xl leading-none text-white md:text-6xl">
        <motion.span>{out}</motion.span>
        {suffix}
      </div>
      <div className="mt-3 text-[12.5px] font-medium uppercase tracking-[0.18em] text-white/55">
        {label}
      </div>
    </div>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    { n: "01", title: "Initial Consultation", body: "We understand your situation, goals, and compliance obligations." },
    { n: "02", title: "Document Collection", body: "We guide you through exactly what is needed. No guesswork." },
    { n: "03", title: "Work & Review", body: "We execute with precision and share a clear review before submission." },
    { n: "04", title: "Delivery & Support", body: "We file, comply, and stay available for questions afterward." },
  ];
  return (
    <section id="process" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>How We Work</SectionLabel>
          <SectionTitle>Innovative Process, Reliable Results</SectionTitle>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden md:block"
            aria-hidden
          >
            <svg width="100%" height="2" className="overflow-visible">
              <line
                x1="6%"
                x2="94%"
                y1="1"
                y2="1"
                stroke="var(--color-violet)"
                strokeWidth="1.5"
                strokeDasharray="2 8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8"
          >
            {steps.map((s) => (
              <motion.li
                key={s.n}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="relative grid h-12 w-12 place-items-center rounded-full bg-violet font-sans text-sm font-semibold text-white ring-8 ring-surface">
                  {s.n}
                </div>
                <h3 className="mt-5 font-serif text-[1.35rem] leading-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-7 text-ink-soft">{s.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      who: "For individuals and freelancers",
      features: ["Income tax filing", "Basic financial advisory", "Document review", "Email support"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Business",
      who: "For growing SMEs and partnerships",
      features: ["GST registration & returns", "Income tax & TDS", "MCA / ROC compliance", "Quarterly review calls"],
      cta: "Schedule a Call",
      featured: true,
    },
    {
      name: "Enterprise",
      who: "For established companies",
      features: ["Statutory & internal audit", "Financial planning", "Incorporation support", "Dedicated relationship lead"],
      cta: "Contact Us",
      featured: false,
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Transparent Pricing</SectionLabel>
          <SectionTitle>Premium Service. Competitive Rates.</SectionTitle>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-soft">
            Engagements are scoped to your business so you pay only for what you actually need.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30, scale: p.featured ? 0.97 : 1 }}
              whileInView={{ opacity: 1, y: 0, scale: p.featured ? 1.03 : 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Card
                className={`relative h-full rounded-2xl p-8 ${
                  p.featured
                    ? "border-violet/60 bg-surface shadow-[0_30px_60px_-30px_rgba(107,92,231,0.55)]"
                    : "border-border bg-surface"
                }`}
              >
                {p.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-violet">
                    Most Popular
                  </Badge>
                )}
                <h3 className="font-serif text-[1.6rem] text-ink">{p.name}</h3>
                <p className="mt-1.5 text-[13.5px] text-ink-soft">{p.who}</p>

                <div className="mt-7">
                  <div className="font-serif text-2xl text-ink">Custom Pricing</div>
                  <div className="mt-1 text-[13px] text-ink-soft">Contact for a tailored quote</div>
                </div>

                <Separator className="my-7" />

                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <span className="mt-1 grid h-4 w-4 place-items-center rounded-full bg-violet-soft text-violet">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 h-11 w-full rounded-full text-[14.5px] ${
                    p.featured
                      ? "bg-violet text-white hover:bg-violet/90"
                      : "bg-ink text-white hover:bg-ink/90"
                  }`}
                  asChild
                >
                  <a href="#contact">{p.cta}</a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const reviews = [
    {
      name: "Shubham Sharma",
      text: "This is one of the best CA firms I have dealt with. Staff is cooperative and knowledgeable. I would personally recommend visiting this firm for any financial assistance.",
    },
    {
      name: "Aishwary Singh",
      text: "They gave a solution to my problem that another CA was not able to solve. Knowledgeable and affordable.",
    },
    {
      name: "Rahul Verma",
      text: "Very knowledgeable, attention to detail, professional and timely services.",
    },
  ];
  return (
    <section id="reviews" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel dark>What Clients Say</SectionLabel>
          <SectionTitle className="text-white">Rated 5.0 Across 30 Reviews</SectionTitle>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card className="h-full rounded-2xl border-white/10 bg-white/[0.03] p-7 text-white shadow-none">
                <div className="flex items-center gap-1 text-violet">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-7 text-white/80">{r.text}</p>
                <div className="mt-7 flex items-center gap-3">
                  <UserCircle2 className="h-9 w-9 text-white/40" />
                  <div>
                    <div className="font-serif text-base text-white">{r.name}</div>
                    <div className="text-[11.5px] uppercase tracking-wider text-white/45">
                      Verified Google Review
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CTA Band ---------- */
function CtaBand() {
  return (
    <section id="contact" className="bg-violet py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-serif text-[2.25rem] leading-[1.05] tracking-tight text-white md:text-[3.25rem]">
            Ready to Bring Your Finances in Order?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-7 text-white/80">
            Book a free 30 minute consultation with our team today.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-12 rounded-full bg-white px-6 text-[15px] font-medium text-violet hover:bg-white/90"
            >
              Schedule a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/70 bg-transparent px-6 text-[15px] font-medium text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="tel:+918989891351">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now: 089898 91351
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-violet" />
              <span className="font-serif text-xl text-white">
                Vaswani <span className="text-violet">&amp;</span> Associates
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-7 text-white/55">
              Your financial affairs, handled with precision. Chartered Accountants serving
              Jabalpur and Madhya Pradesh.
            </p>
            <div className="mt-6 space-y-2.5 text-[14px] text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-violet" />
                <span>Triveni Green Residency, Narmada Road, Jabalpur, MP 482008</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-violet" />
                <a href="tel:+918989891351" className="hover:text-white">089898 91351</a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Quick Links
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-[14.5px] text-white/75">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Find Us
            </div>
            <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-white/10">
              <iframe
                title="Vaswani & Associates location"
                src="https://www.google.com/maps?q=Triveni+Green+Residency+Narmada+Road+Jabalpur&output=embed"
                className="h-40 w-full border-0 grayscale-[40%]"
                loading="lazy"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[12.5px] text-white/80 ring-1 ring-white/10">
              <Star className="h-3.5 w-3.5 fill-violet text-violet" />
              5.0 Rating · 30 Reviews
            </div>
          </div>
        </div>

        <Separator className="mt-14 bg-white/10" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-[12.5px] text-white/45 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Vaswani &amp; Associates. All rights reserved.</div>
          <div>Jabalpur, Madhya Pradesh, India</div>
        </div>
      </div>
    </footer>
  );
}

// Suppress unused import warning if AnimatePresence isn't used directly
void AnimatePresence;
