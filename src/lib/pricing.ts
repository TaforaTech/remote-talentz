// Public-facing pricing content for RemoteTalentz.
// NOTE: Internal economics — cost/margin breakdowns, Year-1 revenue targets, and
// the 70/20/10 service mix — are deliberately NOT modeled here. They never ship to
// the client-facing page.

export type ServiceSummary = {
  name: string;
  lede: string;
  price: string;
  unit: string;
  includes: string[];
  cta: { label: string; href?: string; scrollTo?: string };
  tag: string | null;
  featured: boolean;
};

export const serviceSummary: ServiceSummary[] = [
  {
    name: "Dedicated Remote Talent",
    lede: "A vetted professional embedded in your team — you manage the work, we handle everything else.",
    price: "from $1,499",
    unit: "/ month",
    includes: [
      "Full-time, dedicated talent",
      "Payroll & compliance managed",
      "Performance management",
      "Dedicated account manager",
      "Replacement guarantee",
    ],
    cta: { label: "See the rate card", scrollTo: "rate-card" },
    tag: "Most popular",
    featured: true,
  },
  {
    name: "Direct Hire Recruitment",
    lede: "We source and screen; you hire directly into your company. No payroll, no management overhead on us.",
    price: "from 15%",
    unit: "of annual salary",
    includes: [
      "Candidate sourcing",
      "Screening & shortlisting",
      "Interview coordination",
      "Reference checks",
      "Replacement guarantee",
    ],
    cta: { label: "View placement plans", scrollTo: "direct-hire" },
    tag: null,
    featured: false,
  },
  {
    name: "Build Your Team",
    lede: "Standing up a squad? Get a tailored workforce solution priced around your roadmap and headcount.",
    price: "Custom",
    unit: "pricing",
    includes: [
      "For teams of 3+ professionals",
      "Blended seniority & roles",
      "Volume-based rates",
      "Single account manager",
      "Flexible engagement terms",
    ],
    cta: { label: "Talk to us", href: "/contact" },
    tag: null,
    featured: false,
  },
];

export type RateTier = {
  tier: string;
  roles: string[];
  partTime: string;
  fullTime: string;
};

// Dedicated-talent monthly rates by seniority. Part-time = 80 hrs/month.
export const rateCard: RateTier[] = [
  {
    tier: "Junior",
    roles: ["Customer Support", "Virtual Assistant", "Data Entry", "Junior Developer"],
    partTime: "$799 – $999",
    fullTime: "$1,499 – $1,999",
  },
  {
    tier: "Mid-Level",
    roles: ["Full Stack Developer", "Digital Marketer", "QA Engineer", "Recruiter"],
    partTime: "$1,199 – $1,799",
    fullTime: "$2,000 – $3,000",
  },
  {
    tier: "Senior",
    roles: ["Senior Engineer", "Product Designer", "DevOps Engineer", "AI Engineer"],
    partTime: "$2,000 – $3,500",
    fullTime: "$3,500 – $6,000",
  },
  {
    tier: "Tech Lead / Architect",
    roles: ["Engineering Lead", "Solutions Architect", "Principal Engineer"],
    partTime: "$3,000 – $5,000",
    fullTime: "$6,000 – $10,000",
  },
];

export type DirectHirePlan = {
  name: string;
  fee: string;
  feeNote: string;
  best: string;
  includes: string[];
  featured: boolean;
};

export const directHirePlans: DirectHirePlan[] = [
  {
    name: "Startup",
    fee: "15%",
    feeNote: "of annual salary",
    best: "Lean teams making their first key hires.",
    includes: ["Candidate sourcing", "Screening & shortlisting", "Replacement guarantee"],
    featured: false,
  },
  {
    name: "Growth",
    fee: "18%",
    feeNote: "of annual salary",
    best: "Scaling teams hiring across several roles.",
    includes: [
      "Candidate sourcing",
      "Screening & shortlisting",
      "Interview coordination",
      "Reference checks",
    ],
    featured: true,
  },
  {
    name: "Executive Search",
    fee: "25%",
    feeNote: "of annual salary",
    best: "Leadership and business-critical roles.",
    includes: ["Dedicated headhunting", "Global search", "Leadership assessment"],
    featured: false,
  },
];

export type GuaranteeColumn = {
  service: string;
  note: string;
  rows: { label: string; value: string }[];
};

export const guarantees: GuaranteeColumn[] = [
  {
    service: "Dedicated Talent",
    note: "Not the right fit? We replace, fast — no extra fee.",
    rows: [
      { label: "First 30 days", value: "Free replacement" },
      { label: "Days 31 – 90", value: "Free replacement" },
      { label: "After 90 days", value: "New search" },
    ],
  },
  {
    service: "Direct Hire",
    note: "Replacement windows scale with the seniority of the role.",
    rows: [
      { label: "Junior", value: "60-day guarantee" },
      { label: "Mid-level", value: "90-day guarantee" },
      { label: "Senior", value: "120-day guarantee" },
      { label: "Executive", value: "180-day guarantee" },
    ],
  },
];

export type PaymentTerm = {
  service: string;
  summary: string;
  options: string[];
};

export const paymentTerms: PaymentTerm[] = [
  {
    service: "Dedicated Talent",
    summary: "Billed monthly, in advance.",
    options: [
      "Each month's talent cost is paid on the 1st",
      "No timesheets, no weekly billing",
      "Scale up or down with 30 days' notice",
    ],
  },
  {
    service: "Direct Hire",
    summary: "Pick the structure that fits your cash flow.",
    options: [
      "Option A — 50% upfront, 50% on successful hire",
      "Option B — 100% on successful hire, at a slightly higher fee",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How are candidates vetted?",
    a: "Every professional is screened across technical depth, a live build or work sample, and English communication before they reach you. You only interview people we'd hire ourselves.",
  },
  {
    q: "What's included in the dedicated monthly rate?",
    a: "The talent's salary, payroll and compliance, HR support, performance management, a dedicated account manager, monthly reporting, and the replacement guarantee — one flat number, no hidden add-ons.",
  },
  {
    q: "Do they work in my time zone?",
    a: "Yes. Our talent works to meaningful overlap with your hours — standups, reviews, and real-time collaboration included. We confirm the overlap before you commit.",
  },
  {
    q: "What if it's not the right fit?",
    a: "For dedicated talent, we replace free of charge within the first 90 days. For direct-hire placements, the replacement window runs from 60 to 180 days depending on seniority.",
  },
  {
    q: "Is there a long-term contract or lock-in?",
    a: "No long lock-ins. Dedicated engagements are month-to-month and you can scale up or down with 30 days' notice. Direct-hire is a one-time placement fee.",
  },
  {
    q: "How does billing work?",
    a: "Dedicated talent is billed monthly in advance — each month's cost is paid on the 1st, with no timesheets. Direct-hire is either 50% upfront / 50% on hire, or 100% on hire at a higher fee.",
  },
  {
    q: "How is this different from a typical recruiter?",
    a: "We manage outcomes, not just resumes. Ongoing post-hire support, performance tracking, and a real stake in both client and candidate success make us a long-term hiring partner rather than a one-off placement agency.",
  },
  {
    q: "Which kinds of roles can you staff?",
    a: "We place remote developers, designers, marketers, executive assistants, and operations staff. Whether you need a single frontend engineer or a full-time EA, the breadth is there.",
  },
  {
    q: "Do I get the final say on who I hire?",
    a: "Always. Once we've shortlisted the strongest candidates, you review their profiles, run your own interviews, and make the call — we simply take the heavy lifting off your plate.",
  },
  {
    q: "What's the typical timeline from brief to hire?",
    a: "Most teams see a curated shortlist within 3–5 business days and finalize a hire in one to two weeks. The pace mainly comes down to how quickly you can review profiles and run interviews.",
  },
  {
    q: "Where is your talent based, and how strong is their English?",
    a: "Our talent pool is mainly in Bangladesh — top university graduates and seasoned professionals. Everyone speaks fluent English, works U.S. time zones, and is trained to align with Western business standards.",
  },
  {
    q: "Can I grow an entire team, not just one hire?",
    a: "Yes — team-building is our specialty. A deep talent pool and a streamlined process let you scale fast without trading away quality.",
  },
  {
    q: "Are there any upfront or hidden fees?",
    a: "No. You pay one flat monthly fee per hire that bundles salary payout, performance oversight, and all admin — no setup costs and no long-term lock-ins, so pricing stays clear and easy to scale.",
  },
];
