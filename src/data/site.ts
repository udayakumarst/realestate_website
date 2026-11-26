// Real business data for SHUBHAM
export const site = {
  name: "Shubham Construction, Layout Development, Real Estate & Interiors",
  shortName: "Shubham",
  tagline: "Building Trust. Creating Legacies.",
  description:
    "Residential & commercial construction, turnkey villas, layout development, interior design, renovations and real estate consultancy — delivering quality, transparency and trust in every project.",
  phone: "+91 90082 13348",
  email: "shubham@gmail.com",
  whatsapp: "919008213348",
  address: "Whitefield, Bengaluru 560001",
  mapsUrl: "https://maps.app.goo.gl/8iwThAw25cqDkwaN9",
  hours: "Open 24/7 | 365 Days a Year",
  established: 2020,
  logo: "/shubham-logo.webp",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "1M+", label: "SQ. FT. CONSTRUCTED", sub: "Residential, Commercial & Layouts" },
  { value: "10+", label: "PROJECTS DELIVERED", sub: "Turnkey Quality Handover" },
  { value: "99%", label: "ON-TIME BASELINE", sub: "Milestone Programme Tracking" },
  { value: "6 YRS", label: "ENGINEERING EXCELLENCE", sub: "Zero-Compromise Standards" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "construction",
    title: "Construction (Residential & Commercial)",
    summary:
      "Independent luxury homes, G+2 villas, multi-story apartments and G+4 commercial complexes engineered from foundation to handover.",
    points: [
      "Architectural planning & structural design",
      "BBMP / BDA approvals and sanction management",
      "Stage-wise cube testing and concrete checks",
      "Turnkey handover with structural warranty",
    ],
    icon: "home",
    tags: ["G+2 VILLAS", "G+4 COMMERCIAL", "APARTMENTS"],
  },
  {
    slug: "layout-development",
    title: "Layout Development (Plotted Townships)",
    summary:
      "Full-spectrum land transformation across multi-acre parcels: bulk grading, asphalt tar roads, underground drainage, and villa plot demarcation.",
    points: [
      "Site levelling, mass cut & fill earthworks",
      "Underground sewage & stormwater drain systems",
      "Wide asphalt roads, curbs & LED streetlighting",
      "BIAAPA / DTCP / RERA approved layout execution",
    ],
    icon: "pin",
    tags: ["PLOTTED TOWNSHIPS", "VILLA PLOTS", "INFRASTRUCTURE"],
  },
  {
    slug: "real-estate",
    title: "Real Estate & Land Advisory",
    summary:
      "Acquire, develop or sell high-yield plots, apartments and commercial properties across Bengaluru with 100% legal title verification.",
    points: [
      "Prime residential & commercial plot sourcing",
      "Comprehensive 30-year legal title verification",
      "Joint development (JD) structuring & agreements",
      "RERA compliance and end-to-end registration",
    ],
    icon: "key",
    tags: ["LAND SOURCING", "LEGAL DUE DILIGENCE", "JOINT DEVELOPMENT"],
  },
  {
    slug: "interiors",
    title: "Interiors & Renovation",
    summary:
      "Transforming raw structures into breathtaking living spaces with German-hardware modular kitchens, designer wardrobes, false ceilings and lighting.",
    points: [
      "Factory-finished modular kitchens & wardrobes",
      "Designer false ceiling and ambient lighting",
      "Structural remodel, waterproofing & floor extensions",
      "Premium Italian marble & teakwood woodwork",
    ],
    icon: "hammer",
    tags: ["MODULAR KITCHENS", "WARDROBES", "LUXURY FINISHES"],
  },
  {
    slug: "turnkey-villas",
    title: "Turnkey Luxury Villas",
    summary:
      "Custom G+2 family residences engineered to 100% Vastu principles with double-height living spaces, home theater, and open terrace gardens.",
    points: [
      "100% Vastu-aligned architectural layouts",
      "Branded steel, cement and wire specifications",
      "Weekly photo documentation & progress audits",
      "Itemised, fixed BOQ billing with zero escalations",
    ],
    icon: "building",
    tags: ["VASTU HOMES", "G+2 DUPLEX", "TURNKEY HANDOVER"],
  },
  {
    slug: "planning-pmc",
    title: "3D Design & Project Management (PMC)",
    summary:
      "Realistic 3D architectural renders, accurate BOQs, and independent site oversight for cost, quality and schedule compliance.",
    points: [
      "3D elevations & architectural walkthroughs",
      "Detailed itemized Bill of Quantities (BOQ)",
      "Independent quality auditing & snag rectification",
      "Strict schedule & cash-flow management",
    ],
    icon: "clipboard",
    tags: ["3D ELEVATION", "BOQ ESTIMATION", "PMC AUDIT"],
  },
];

export type ProjectCategory =
  | "Premium Villa Plots"
  | "Apartment"
  | "Residential"
  | "Commercial"
  | "Renovation"
  | "Real Estate";

export type ProjectStatus = "Completed" | "Ongoing" | "Upcoming";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  area: string;
  scope: string;
  value: string;
  status: ProjectStatus;
  description: string;
  image?: string;
  tone: string;
};

export const projects: Project[] = [
  // COMPLETED PROJECTS (5)
  {
    slug: "bhumika-panorama-enclave",
    title: "Bhumika Panorama Enclave",
    category: "Premium Villa Plots",
    location: "Narasapura, Kolar",
    year: 2025,
    area: "6 Acres / 175 Plots",
    scope: "6 Acres Layout Development",
    value: "Approved Plotted Township",
    status: "Completed",
    description:
      "Approved ready-for-construction residential villa plots with complete asphalt roads, underground drainage, electrical network, and clear legal titles.",
    tone: "from-stone-800 to-amber-950",
  },
  {
    slug: "shubham-enclave",
    title: "Shubham Enclave",
    category: "Apartment",
    location: "Ripco Shanthini Kethan Layout, K R Puram, Bengaluru",
    year: 2020,
    area: "10 Flats / 4,800 SQ. FT.",
    scope: "1 Apartment Complex",
    value: "Turnkey Residential",
    status: "Completed",
    description:
      "Boutique residential apartment community with basement car parking, automatic passenger elevator, 24/7 security, and power backup.",
    tone: "from-slate-800 to-zinc-950",
  },
  {
    slug: "shubham-sai-nilaya",
    title: "Shubham Sai Nilaya",
    category: "Residential",
    location: "Seegehalli, K R Puram, Bengaluru",
    year: 2021,
    area: "1,200 SQ. FT.",
    scope: "Residential G+2 Building",
    value: "Turnkey Villa",
    status: "Completed",
    image: "/projects/shubham-sai-nilaya.jpg",
    description:
      "Turnkey G+2 independent duplex residence with double-height living, Italian marble, modular kitchen, and scenic open terrace garden.",
    tone: "from-stone-900 to-amber-900",
  },
  {
    slug: "shubham-house",
    title: "Shubham House",
    category: "Residential",
    location: "Sarjapur Road, Bengaluru",
    year: 2022,
    area: "1,200 SQ. FT.",
    scope: "Residential G+2 Building",
    value: "Turnkey Residence",
    status: "Completed",
    image: "/projects/shubham-house.jpg",
    description:
      "Contemporary G+2 family residence engineered to 100% Vastu principles with solar water heating, designer stone cladding, and premium modular interior fixtures.",
    tone: "from-zinc-900 to-slate-900",
  },
  {
    slug: "shubham-commercial-plaza",
    title: "Shubham Commercial Plaza",
    category: "Commercial",
    location: "Battarahalli, K.R. Puram, Bengaluru",
    year: 2024,
    area: "1,200 SQ. FT.",
    scope: "Commercial G+4 Building",
    value: "Commercial Complex",
    status: "Completed",
    image: "/projects/shubham-commercial-plaza.jpg",
    description:
      "Prominent G+4 commercial complex with structural glazing façade, dedicated basement parking, high-speed passenger elevator, and multi-tenant flexibility.",
    tone: "from-neutral-900 to-stone-900",
  },

  // ONGOING PROJECTS (2)
  {
    slug: "shubham-serenity",
    title: "Shubham Serenity",
    category: "Residential",
    location: "Jalahalli, Near BEL, Bengaluru",
    year: 2026,
    area: "4,500 SQ. FT.",
    scope: "Residential G+2 Building",
    value: "Superstructure Stage",
    status: "Ongoing",
    description:
      "Custom-engineered G+2 independent luxury villa currently in advanced superstructure and MEP rough-in stage, featuring expansive family living areas.",
    tone: "from-amber-950 to-stone-900",
  },
  {
    slug: "shubham-bhumika-panorama-enclave",
    title: "Shubham Bhumika Panorama Enclave",
    category: "Premium Villa Plots",
    location: "Narasapura, Kolar",
    year: 2026,
    area: "4 Acres / 110 Plots",
    scope: "4 Acres Layout Development",
    value: "Plotted Development",
    status: "Ongoing",
    description:
      "Fast-track 4-acre plotted layout development undergoing bulk grading, underground stormwater drainage, and perimeter compound wall.",
    tone: "from-emerald-950 to-stone-900",
  },

  // UPCOMING PROJECTS (2)
  {
    slug: "shubham-signature",
    title: "Shubham Signature",
    category: "Apartment",
    location: "Muthyalanagar, Mathikere, Bengaluru",
    year: 2027,
    area: "10 Flats / 5,400 SQ. FT.",
    scope: "1 Apartment Complex",
    value: "Planning & Approvals",
    status: "Upcoming",
    description:
      "Upcoming boutique residential apartment project featuring 2 & 3 BHK residences, multi-purpose community hall, rooftop amenities, and EV charging bays.",
    tone: "from-indigo-950 to-slate-900",
  },
  {
    slug: "shubham-royal-palms",
    title: "Shubham Royal Palms",
    category: "Residential",
    location: "Magadi Road, Dasarahalli, Bengaluru",
    year: 2027,
    area: "1,200 SQ. FT.",
    scope: "Residential G+2 Building",
    value: "Architectural Design",
    status: "Upcoming",
    description:
      "Upcoming high-spec G+2 luxury duplex villa in architectural blueprint stage, featuring a courtyard water body, home theater, and smart home automation.",
    tone: "from-stone-950 to-neutral-900",
  },
];

export const process = [
  {
    step: "01",
    tag: "GROUND TRUTH",
    title: "Know the site before we price it.",
    text: "Geotechnical soil testing, utility mapping, access verification, and local sanction pathways are locked early so surprises never become cost overruns.",
  },
  {
    step: "02",
    tag: "BUILD THE PLAN",
    title: "Programme every handover.",
    text: "The right work packages, critical-path sequencing, and weekly milestone tracking keep client, architects and site engineers aligned to one source of truth.",
  },
  {
    step: "03",
    tag: "EXECUTE WITH RIGOR",
    title: "Deliver with a visible standard.",
    text: "Daily safety leadership, cube strength testing, branded material verification, and weekly photo reports turn a construction plan into an enduring asset.",
  },
];

export const commitments = [
  {
    title: "Open-book thinking",
    text: "Detailed line-item quotes with clear specifications on cement, steel, wire brands and fittings. No hidden escalations.",
  },
  {
    title: "One accountable team",
    text: "Architecture, engineering, liaisoning and execution under one dedicated engineer-in-charge so you never juggle subcontractors.",
  },
  {
    title: "Uncompromising safety",
    text: "A disciplined, zero-incident safety culture on every site — helmet compliance, scaffolding checks, and tidy work zones.",
  },
  {
    title: "Built for generations",
    text: "Structures engineered to exceed standard RCC load margins, offering lasting thermal comfort, stability, and enduring resale value.",
  },
];

export const testimonials = [
  {
    quote:
      "Shubham executed our G+2 independent duplex home with outstanding structural quality and stage-wise billing. Handover was completed strictly on schedule without any cost escalation.",
    name: "Rajashekar",
    role: "Villa Owner, Shubham Sai Nilaya (Seegehalli)",
  },
  {
    quote:
      "Our G+4 commercial complex was delivered with high civil precision and modern elevation. The engineering team coordinated structural, lift and electrical work seamlessly.",
    name: "Gangadhar",
    role: "Building Owner, Shubham Commercial Plaza (Battarahalli)",
  },
  {
    quote:
      "Approved ready-to-construct villa plots with complete asphalt roads and underground drainage. Clear legal titles and transparent registration process throughout.",
    name: "Uday Kumar",
    role: "Plot Owner, Bhumika Panorama Enclave (Narasapura)",
  },
  {
    quote:
      "Quality apartment construction with spacious layout, automatic elevator, 24/7 security and power backup. Very responsive and dependable builders.",
    name: "Kiran",
    role: "Resident, Shubham Enclave (K R Puram)",
  },
  {
    quote:
      "100% Vastu-compliant G+2 residence with beautiful woodwork, modular kitchen, and solar water integration. Great attention to finish quality.",
    name: "Ashwini",
    role: "Homeowner, Shubham House (Sarjapur Road)",
  },
];
