// FAQ content for RemoteTalentz, organized by category.
// Facts here must stay consistent with the public pricing in `pricing.ts`
// (flat monthly rates from $1,499, 30/90-day replacement, month-to-month with
// 30 days' notice, direct-hire 15–25% of salary). Internal economics never
// ship to this page.

export type FaqItem = { q: string; a: string };

export type FaqCategory = {
  id: string; // anchor + scroll-spy key
  label: string; // short label for the side / pill nav
  title: string; // section heading
  blurb: string; // one-line intro under the heading
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    title: "Getting started",
    blurb: "The basics — what we do and how a first hire comes together.",
    items: [
      {
        q: "What is RemoteTalentz?",
        a: "RemoteTalentz is a remote hiring partner. We source, vet, and manage elite remote professionals — engineers, designers, marketers, and operations staff — and embed them in your team at a flat monthly rate. You direct the work; we handle sourcing, payroll, compliance, and performance support.",
      },
      {
        q: "How do I get started?",
        a: "Tell us the role, the stack or skill set, the seniority you need, and your timeline — through the contact form or a quick intro call. We come back within one business day with availability and a plan, and you typically have an interview-ready shortlist within 48 hours to 3–5 business days.",
      },
      {
        q: "What information do you need from me?",
        a: "Just enough to source accurately: the role title, the tech stack or tools, the seniority level, the time-zone overlap you expect, your budget range, and when you'd like someone to start. The sharper the brief, the tighter the shortlist.",
      },
      {
        q: "What happens after I send a brief?",
        a: "A recruiter scopes the role with you, sources from our vetted pool, and runs final checks. You receive a curated shortlist of 3–5 candidates, interview the ones you like, and make the call. Once you choose, we handle the contract, onboarding, and payroll setup.",
      },
      {
        q: "Do I need a local entity or to set up anything legal?",
        a: "No. You don't need an entity in our talent's country and you don't take on local employment paperwork. We manage the contract, payroll, and compliance end to end — you simply pay one monthly invoice.",
      },
    ],
  },
  {
    id: "hiring-vetting",
    label: "Hiring & Vetting",
    title: "Hiring & vetting",
    blurb: "How we find people and how rigorously we screen before they reach you.",
    items: [
      {
        q: "How are candidates vetted?",
        a: "Every professional is screened across technical depth, a live build or work sample, and English communication before they reach you. You only ever interview people we'd be comfortable hiring ourselves.",
      },
      {
        q: "Can I interview candidates myself?",
        a: "Always. We do the heavy lifting — sourcing, screening, and shortlisting — then you run your own interviews on the finalists and make the final decision. We never push a hire you haven't chosen.",
      },
      {
        q: "Do I get the final say on who I hire?",
        a: "Yes. We present the strongest candidates with full profiles; you review, interview, and decide. Our job is to make sure every option in front of you is genuinely qualified.",
      },
      {
        q: "Which roles can you staff?",
        a: "Remote developers (front-end, back-end, full-stack, mobile), AI and LLM engineers, designers, QA, DevOps, digital marketers, recruiters, customer support, and executive or virtual assistants. From a single specialist to a full cross-functional team.",
      },
      {
        q: "What's the typical timeline from brief to hire?",
        a: "Most teams see a curated shortlist within 48 hours to 3–5 business days and finalize a hire within one to two weeks. The pace mostly comes down to how quickly you can review profiles and run interviews.",
      },
      {
        q: "How quickly does a new hire ramp up?",
        a: "Because we match on stack and seniority, most hires are contributing within their first week. Your account manager supports onboarding to keep the transition smooth.",
      },
    ],
  },
  {
    id: "pricing-billing",
    label: "Pricing & Billing",
    title: "Pricing & billing",
    blurb: "One flat number per hire, billed simply — no retainers or surprises.",
    items: [
      {
        q: "How does pricing work?",
        a: "Dedicated remote talent starts from $1,499/month per hire, scaling with seniority and whether the role is part-time or full-time. Direct-hire recruitment is a one-time fee from 15% of first-year salary. Both are quoted upfront with no hidden add-ons.",
      },
      {
        q: "What's included in the dedicated monthly rate?",
        a: "The talent's salary, payroll and compliance, HR support, performance management, a dedicated account manager, monthly reporting, and the replacement guarantee — one flat number, no setup costs.",
      },
      {
        q: "Are there any upfront or hidden fees?",
        a: "No. You pay one flat monthly fee per dedicated hire that bundles salary, performance oversight, and all admin. No setup costs, no surprise charges — pricing stays clear and easy to scale.",
      },
      {
        q: "How much can I save versus hiring locally?",
        a: "Teams typically save up to 80–85% against equivalent U.S. or Western European salaries for comparable seniority — without trading down on quality, since every hire is pre-vetted.",
      },
      {
        q: "How does billing work?",
        a: "Dedicated talent is billed monthly in advance — each month's cost is paid on the 1st, with no timesheets or weekly invoices. Direct-hire is either 50% upfront and 50% on hire, or 100% on hire at a slightly higher fee.",
      },
      {
        q: "Do you offer discounts for teams?",
        a: "Yes. Building a squad of three or more gets you blended, volume-based rates and a single account manager. Tell us the roadmap and headcount and we'll price it around your plan.",
      },
    ],
  },
  {
    id: "contracts-guarantees",
    label: "Contracts & Guarantees",
    title: "Contracts & guarantees",
    blurb: "Month-to-month flexibility, backed by a real replacement guarantee.",
    items: [
      {
        q: "Is there a long-term contract or lock-in?",
        a: "No long lock-ins. Dedicated engagements are month-to-month and you can scale up or down with 30 days' notice. Direct-hire is a one-time placement fee with no ongoing commitment.",
      },
      {
        q: "What if it's not the right fit?",
        a: "For dedicated talent, we replace free of charge within the first 90 days. For direct-hire placements, the replacement window runs from 60 to 180 days depending on seniority. Reach your account manager and we activate the search at no extra cost.",
      },
      {
        q: "Can I scale up or down later?",
        a: "Easily. Add hires as you grow, or reduce with 30 days' notice on dedicated engagements. Because we keep a deep, ready talent pool, scaling up rarely means waiting.",
      },
      {
        q: "Is there a trial period?",
        a: "Yes — dedicated hires come with a two-week risk-free trial so you can confirm the fit in real working conditions before you're committed.",
      },
      {
        q: "How is this different from a typical recruiter?",
        a: "We manage outcomes, not just resumes. Ongoing post-hire support, performance tracking, and a real stake in both client and candidate success make us a long-term hiring partner rather than a one-off placement agency.",
      },
    ],
  },
  {
    id: "payroll-compliance",
    label: "Payroll & Compliance",
    title: "Payroll, compliance & admin",
    blurb: "We carry the employment overhead so you don't have to.",
    items: [
      {
        q: "Who employs the talent — me or you?",
        a: "For dedicated talent, we handle the employment relationship, contracts, and payroll on the ground. You direct the day-to-day work; we carry the administrative and compliance load. For direct-hire, the person joins your company directly and we step out after placement.",
      },
      {
        q: "How are payroll and taxes handled?",
        a: "We run payroll in local currency, on schedule, and manage the associated taxes and statutory requirements. You receive one consolidated monthly invoice — no multi-currency payroll to administer yourself.",
      },
      {
        q: "Do you handle compliance with local labor law?",
        a: "Yes. Contracts are drafted to local law, and we keep on top of the statutory obligations around payroll, benefits, and termination so your engagement stays compliant.",
      },
      {
        q: "How is my IP and confidential information protected?",
        a: "Every professional signs an NDA and an IP-assignment agreement before they start, so work product and confidential information belong to you from day one.",
      },
      {
        q: "What about onboarding and offboarding?",
        a: "We support onboarding to get a new hire productive quickly, and if an engagement ends we manage the exit cleanly — handover, final pay, and any local-law requirements included.",
      },
    ],
  },
  {
    id: "ai-native",
    label: "AI-Native Talent",
    title: "AI-native talent",
    blurb: "Engineers who build with modern AI tooling as a default, not an afterthought.",
    items: [
      {
        q: "What does \"AI-native\" mean?",
        a: "AI-native engineers fold modern AI tooling — Claude Code, Cursor, Copilot — into their daily workflow by default, and many specialize in building AI products: LLM features, agents, and retrieval systems.",
      },
      {
        q: "Which AI roles can you fill?",
        a: "Among others: LLM Engineer, AI/ML Developer, AI Agent Developer, RAG Engineer, LangChain Developer, Prompt Engineer, AI Automation and Workflow Engineer, and Forward-Deployed or Founding Engineers for early-stage products.",
      },
      {
        q: "Do they have real production AI experience?",
        a: "Yes. We vet AI proficiency as its own dimension — LLM and API experience, agent and RAG frameworks, evals, and vector search — alongside core engineering, so you get people who've shipped, not just experimented.",
      },
      {
        q: "Which tools and frameworks are they fluent in?",
        a: "Commonly Claude Code, Cursor, and Copilot for delivery; and LangChain, the major LLM APIs, vector databases, and automation tools like n8n, Zapier, and Make for building. We match specialists to your exact stack.",
      },
      {
        q: "Does AI tooling actually make them more productive?",
        a: "Used well, yes — AI-native engineers typically ship meaningfully more at the same seniority because tooling accelerates the routine work and frees them to focus on judgment and architecture.",
      },
    ],
  },
  {
    id: "working-together",
    label: "Working Together",
    title: "Working together",
    blurb: "Time zones, communication, and how the day-to-day actually runs.",
    items: [
      {
        q: "Do they work in my time zone?",
        a: "Yes. Our talent works to meaningful overlap with your hours — standups, reviews, and real-time collaboration included. We confirm the overlap before you commit, so there are no surprises.",
      },
      {
        q: "How strong is their English, and where are they based?",
        a: "Our talent pool is mainly in Bangladesh — top university graduates and seasoned professionals. Everyone speaks fluent English, works to U.S. and Western time zones, and is trained to align with Western business standards.",
      },
      {
        q: "How is performance managed once someone is hired?",
        a: "You direct the work; we handle the wrapper. Regular check-ins, monthly reporting, and an account manager mean issues get surfaced early — with coaching first, and a fast replacement if it's genuinely not the right fit.",
      },
      {
        q: "Can I build an entire team, not just one hire?",
        a: "Yes — team-building is a specialty. A deep talent pool and a streamlined process let you stand up a blended squad quickly, under a single account manager, without trading away quality.",
      },
      {
        q: "Who's my point of contact day to day?",
        a: "A dedicated account manager owns your relationship — onboarding, reporting, performance, and any replacement. One person who knows your team and your roles, not a ticket queue.",
      },
    ],
  },
  {
    id: "trust-security",
    label: "Trust & Security",
    title: "Trust & security",
    blurb: "How we keep hires verified, your data safe, and your risk low.",
    items: [
      {
        q: "Why should I trust RemoteTalentz?",
        a: "Because the incentives are aligned: we only succeed when a hire works out long-term. Rigorous vetting, post-hire support, and a real replacement guarantee mean we carry the risk of a bad fit, not you.",
      },
      {
        q: "How do you verify a candidate's identity and background?",
        a: "Candidates go through identity verification, live video interviews, and reference checks, plus a live build or work sample — so the person you interview is the person who shows up and the skills are real.",
      },
      {
        q: "How is my data protected?",
        a: "Candidate and client data is stored securely with role-based access, and it's never sold or shared with third parties. NDAs and IP-assignment agreements cover confidentiality on the talent side.",
      },
      {
        q: "What happens if a hire underperforms?",
        a: "Tell your account manager. We start with coaching where the gap is fixable; if it isn't, we activate a free replacement within the guarantee window so you're never stuck carrying a mismatch.",
      },
      {
        q: "Still have a question that isn't here?",
        a: "Reach out through the contact page or book a quick call. We'll answer directly — and if it's a common one, it'll probably end up on this page.",
      },
    ],
  },
];
