/* ============================================================
   SRINISHTHA — content model
   All copy is drawn from the company's live site + public MCA
   records. Nothing here is fabricated (no invented clients,
   metrics, testimonials or certifications).
   ============================================================ */

export const company = {
  name: "Srinishtha Technologies",
  legal: "Srinishtha Technologies LLP",
  tagline: "Built on experience. Trusted to lead.",
  promise: "Driving businesses forward through purposeful digital solutions — built on trust, delivered with devotion.",
  email: "info@srinishtha.com",
  phone: "+91 99630 99560",
  phoneHref: "+919963099560",
  address: {
    line1: "Awfis — Prestige Phoenix, 4th Floor, 1405",
    line2: "Uma Nagar, Begumpet",
    city: "Hyderabad 500016, India",
  },
  maps: "https://maps.app.goo.gl/LEXsREazJTDt8dCL8",
  founded: "2024",
  hours: "Mon – Fri · 10:00 – 18:30 IST",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const stats = [
  { value: 100, suffix: "+", label: "Years combined experience" },
  { value: 8, suffix: "", label: "Industries served" },
  { value: 12, suffix: "+", label: "Projects delivered" },
  { value: 4, suffix: "", label: "Products in the making" },
];

/* ---------------- Services ---------------- */
export type Service = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "custom-software",
    index: "01",
    title: "Custom Software Development",
    blurb:
      "We build tailor-made software that fits your unique needs — scalable, efficient, and built to last.",
    points: ["Product & platform engineering", "API-first architecture", "Built to scale"],
  },
  {
    id: "web-mobile",
    index: "02",
    title: "Web & Mobile Development",
    blurb:
      "We craft responsive websites and mobile apps that are fast, user-friendly, and optimised for real-world performance.",
    points: ["Responsive web", "Android & iOS", "Offline-first options"],
  },
  {
    id: "cloud",
    index: "03",
    title: "Cloud Solutions",
    blurb:
      "We migrate your business to the cloud with secure, scalable infrastructure and hands-free management.",
    points: ["Cloud migration", "Scalable infrastructure", "Managed operations"],
  },
  {
    id: "data-ai",
    index: "04",
    title: "Data Analytics & AI",
    blurb:
      "We turn data into insight — uncovering patterns, predicting outcomes, and helping you make smarter decisions.",
    points: ["AI integration", "Predictive analytics", "Decision support"],
  },
  {
    id: "cybersecurity",
    index: "05",
    title: "Cybersecurity",
    blurb:
      "We safeguard your systems with end-to-end cybersecurity tailored to protect your most valuable data.",
    points: ["Threat protection", "Secure data handling", "GRC frameworks"],
  },
  {
    id: "legacy",
    index: "06",
    title: "Legacy Modernization",
    blurb:
      "We transform outdated legacy systems into fast, secure, future-ready platforms — without disrupting operations.",
    points: ["System re-architecture", "Zero-disruption rollout", "Future-ready stacks"],
  },
  {
    id: "consulting",
    index: "07",
    title: "IT Consulting",
    blurb:
      "Our experts align your tech strategy with your business goals — from system architecture to implementation.",
    points: ["Tech strategy", "Architecture review", "Execution roadmaps"],
  },
  {
    id: "support",
    index: "08",
    title: "Support & Maintenance",
    blurb:
      "From troubleshooting to proactive care, we keep your systems running smoothly for the long term.",
    points: ["Proactive monitoring", "SLA-backed support", "Continuous care"],
  },
];

/* ---------------- Experience domains (the real differentiator) ---------------- */
export const domains = [
  {
    title: "Telecom & Network Systems",
    body: "Provisioning and billing platforms for large-scale telecom ecosystems, with deep OSS/BSS architecture experience.",
  },
  {
    title: "RFID & Port Logistics",
    body: "An RFID-based vehicle-tracking system for a major Indian port, with real-time tracking at operational scale.",
  },
  {
    title: "Finance & System Integration",
    body: "API-first systems integrating with Bloomberg and finance workflows across continents.",
  },
  {
    title: "Governance, Risk & Compliance",
    body: "GRC frameworks and workflows for enterprise environments, centred on secure data handling.",
  },
];

/* ---------------- Selected work / case studies ---------------- */
export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  status: "Shipped" | "In development" | "Blueprint";
  accent?: boolean;
  deliverables: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "sids-farm",
    client: "Sid's Farm",
    title: "Scaling a dairy platform to thousands of concurrent users",
    category: "Mobile · Reliability",
    year: "2024",
    status: "Shipped",
    accent: true,
    summary:
      "Sid's Farm, a leading dairy provider, needed its mobile app stabilised and scaled for a fast-growing customer base. We resolved core performance issues and rolled out critical features — with zero downtime.",
    deliverables: [
      "Stabilised the mobile application",
      "Rolled out key engagement features",
      "Scaled to thousands of simultaneous users",
    ],
    link: "https://sidsfarm.com/",
  },
  {
    slug: "kouno-dolls",
    client: "Kouno Dolls",
    title: "Crafting digital heritage for handcrafted Japanese-inspired dolls",
    category: "E-commerce · Brand",
    year: "2024",
    status: "In development",
    summary:
      "A premium, expressive D2C experience built for global reach — reflecting heritage, artistry and authenticity, with full creative and operational control for the brand.",
    deliverables: [
      "Japanese-inspired premium design",
      "CMS for story-led merchandising",
      "Secure payments with SEO foundations",
    ],
    link: "https://kounodolls.com/",
  },
  {
    slug: "shankara-mutt",
    client: "Shankara Mutt",
    title: "An institution-grade platform for a spiritual community",
    category: "Platform · Multilingual",
    year: "2024",
    status: "Blueprint",
    summary:
      "A platform that modernises operations while preserving spiritual authenticity — multiple user roles, multilingual content, and architecture ready for integration across Mutt branches.",
    deliverables: [
      "Online pooja booking & scheduling",
      "Secure donations with auto-receipts",
      "Multilingual CMS & room reservations",
    ],
  },
  {
    slug: "consumer-supply",
    client: "Hospitality supply",
    title: "A fuzzy-logic ordering app for low-literacy, low-connectivity use",
    category: "Blueprint · Inclusive UX",
    year: "2024",
    status: "Blueprint",
    summary:
      "A full product blueprint for an ordering experience usable by customers with limited literacy and language diversity — accepting imprecise, spoken-style requests and working offline.",
    deliverables: [
      "Natural-language friendly ordering",
      "Offline-first, multilingual UI",
      "Architecture, timeline & costing roadmap",
    ],
  },
];

/* ---------------- Products in the making ---------------- */
export type Product = {
  name: string;
  kicker: string;
  description: string;
  status: string;
  features: string[];
};

export const products: Product[] = [
  {
    name: "Adhyaapak",
    kicker: "LinkedIn, but built for teachers",
    description:
      "A dedicated professional networking platform for educators — build profiles, share achievements, discover opportunities, connect with schools, and grow a career in education.",
    status: "Pilot",
    features: ["Professional profiles", "School connections", "Opportunity discovery"],
  },
  {
    name: "EduERP",
    kicker: "An ERP schools actually use",
    description:
      "A next-generation, human-centred school ERP that's genuinely usable by everyone it's built for — teachers, parents, drivers, admin staff and leadership.",
    status: "Early access · partner schools",
    features: ["Role-specific views", "Offline-first design", "Tested with real stakeholders"],
  },
  {
    name: "Career Accelerator",
    kicker: "Democratising career development",
    description:
      "A career accelerator for overlooked Tier-2 and Tier-3 talent — full-stack curriculum, mentorship by working professionals, live projects, and earned certification.",
    status: "Pilot batches running",
    features: ["Real projects from day one", "1:1 & group mentorship", "Progress tracking"],
  },
  {
    name: "Platform Factory",
    kicker: "Control, not just a website",
    description:
      "A scalable platform factory giving MSMEs and independent professionals custom portfolio platforms — deployed in hours, not weeks, with bookings, payments and content built in.",
    status: "Pilots & tooling in build",
    features: ["Custom domain in hours", "Bookings & payments", "Low-code customisation"],
  },
];

/* ---------------- Industries ---------------- */
export const industries = [
  { name: "Dairy & Agriculture", note: "Dairy management, agri automation & farm optimisation.", icon: "Sprout" },
  { name: "Education & EdTech", note: "Learning platforms and educational technology.", icon: "GraduationCap" },
  { name: "Food & Lifestyle", note: "Modern digital platforms and brand experiences.", icon: "UtensilsCrossed" },
  { name: "Event & Spiritual", note: "Solutions for spiritual communities & organisations.", icon: "Flame" },
  { name: "Retail & Consumer", note: "D2C/B2C commerce and consumer product systems.", icon: "ShoppingBag" },
  { name: "Portfolio & Creative", note: "Portfolio platforms for professionals & MSMEs.", icon: "Palette" },
  { name: "Career & Talent", note: "Career guidance and internship management.", icon: "Compass" },
  { name: "Finance & Enterprise", note: "Integration, GRC and large-scale enterprise tech.", icon: "Landmark" },
] as const;

/* ---------------- Clients ---------------- */
export const clients = [
  "Sid's Farm",
  "Kouno Dolls",
  "Vardhaman Bank",
  "Crave Better",
  "Opulent",
  "Innomayi",
  "Kalagura Gampa",
  "Soham Robotics",
  "Dr. Laxminadh Neurocare",
  "Elevate Together",
  "Grameena Vidhya Jyothi Bharath",
  "Sri Ramanavami",
];

/* ---------------- Values — the three promises ---------------- */
export const promises = [
  {
    title: "Radical honesty",
    body: "We tell you the truth — about timelines, scope and risks. No overselling, no shortcuts. Just honest work and transparent communication.",
  },
  {
    title: "We value time",
    body: "A proven on-time delivery record. Every project gets our full attention — every pixel, every line of code, every deadline.",
  },
  {
    title: "We stay until you're happy",
    body: "We don't deliver and disappear. We stay involved until you're genuinely happy — because your success is the only metric that matters.",
  },
];

/* ---------------- Testimonial (verified, from the live site) ---------------- */
export const testimonial = {
  quote:
    "The incredible support and expertise provided by the team, especially Sathish, have been instrumental in stabilising our mobile application and rolling out key features. Their dedication has ensured our platform is robust and capable of handling thousands of simultaneous users.",
  author: "CTO",
  org: "Sid's Farm",
};

/* ---------------- Journey ---------------- */
export const journey = [
  { phase: "Laying the foundation", body: "A lean, cross-functional team turned our first D2C and AgriTech ideas into paying projects — validating the studio model." },
  { phase: "Our experience", body: "Enterprise platform design, telecom OSS/BSS, port logistics and finance integrations — the experience that now powers everything we build." },
  { phase: "Expanding impact", body: "Partnered with Kalagura Gampa, Soham and Dr. Prathusha Nerella to ship real-world solutions and refine our delivery playbook." },
  { phase: "What we're building", body: "Converting services into products with EduERP and Career Accelerator — scalable platforms for education and career enablement." },
];

/* ---------------- Team (names & bios from the live site;
   exact role mapping to be confirmed with the company) ---------------- */
export const team = [
  { name: "Aruna Mytrayee Challa", role: "Designated Partner", bio: "Leads with vision and heart. Balances business, team energy and staying hands-on with what matters most — the product." },
  { name: "Ujwala Pasupunuri", role: "Designated Partner", bio: "From day one, committed to bringing tech with meaning into the world. Believes in people before processes." },
  { name: "Subrahmanyam Tamma", role: "Engineering", bio: "A big-picture thinker who helped shape the roots of Srinishtha. Always curious, always building." },
  { name: "Sunil Potturi", role: "Delivery", bio: "The calm compass behind the scenes. Brings clarity, wisdom and a strong pulse on the long game." },
  { name: "Surya Sravani", role: "Brand & Strategy", bio: "Storyteller, strategist and the voice of the brand. Believes every product should have personality — and purpose." },
  { name: "Jayaprakash Sivaraju", role: "Engineering", bio: "Hands-on builder focused on turning hard problems into reliable, shippable software." },
];

/* ---------------- Careers ---------------- */
export const perks = [
  { title: "Real impact, from day one", body: "Work on cutting-edge technology and contribute to solutions that solve real problems for real people." },
  { title: "Grow fast", body: "Continuous learning with access to training, workshops and mentorship that help you level up quickly." },
  { title: "Ownership & progression", body: "Clear career paths, leadership opportunities and a culture that celebrates your wins at every stage." },
  { title: "Genuine care", body: "Attractive compensation with health benefits, performance incentives and perks that show we care." },
  { title: "Work–life balance", body: "Flexible arrangements and thoughtful policies that support your wellbeing inside and outside of work." },
  { title: "A team that builds together", body: "We work hard, celebrate harder, and genuinely enjoy building together." },
];
