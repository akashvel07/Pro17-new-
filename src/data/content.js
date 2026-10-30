// Pro17Analytics Content Store
// Source of truth: Pro17Analytics-2026.pdf (4-page company profile)
// Strict adherence to verified facts: No fabricated metrics, testimonials, or unauthorized claims.

export const BRAND_INFO = {
  name: "Pro17Analytics",
  tagline: "Understand First. Build What Matters.",
  supportingStatement: "Ideas to impact. Together.",
  description: "Practical engineering for real business outcomes across Data & AI, Cloud & Modernization, Integration, IoT & Automation, and Enterprise ERP.",
  extensionMessage: "We work as an extension of your team — from idea through operation and scale.",
  contactEmail: "sales@pro17analytics.com",
  website: "www.pro17analytics.com",
  globalLocations: ["USA", "Canada", "India", "Singapore"],
  proofPoints: [
    { label: "5+ Industries Served", sub: "Cross-sector enterprise experience" },
    { label: "Global Delivery", sub: "USA · Canada · India · Singapore" },
    { label: "Enterprise Solutions & Expertise", sub: "End-to-end practical engineering" }
  ],
  deliveryImpacts: [
    { title: "Improved Visibility", desc: "Real-time clarity across enterprise assets, pipelines, and operations." },
    { title: "Faster Reporting", desc: "Accelerate decision-making with high-fidelity analytics and AI." },
    { title: "Lower Operational Effort", desc: "Streamline repetitive workflows through robust automation and integration." }
  ],
  legalDisclaimer: "Selected Pro17 product names shown are provisional and subject to trademark clearance. Educe is by ExcelForte, powered by Pro17Analytics."
};

export const VALUE_PILLARS = [
  {
    title: "People",
    description: "Experienced engineers and domain specialists who integrate seamlessly as an extension of your team.",
    highlight: "Collaborative Extension"
  },
  {
    title: "Technology",
    description: "Modern, scalable architectures built with proven enterprise platforms and cutting-edge intelligence.",
    highlight: "Enterprise-Grade Foundations"
  },
  {
    title: "Practical Solutions",
    description: "Engineering tailored to address real business bottlenecks rather than abstract technological complexity.",
    highlight: "Outcome-Driven Focus"
  },
  {
    title: "Long-term Partnership",
    description: "Sustained commitment through delivery, operation, and scaling as your business evolves.",
    highlight: "Enduring Alignment"
  }
];

export const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Business goals, challenges, and opportunities",
    description: "We begin by deeply understanding your operational realities, strategic objectives, and technological constraints before writing code.",
    color: "#0B2340",
    outcomes: ["Stakeholder Alignment", "Current-State Assessment", "Opportunity Mapping"]
  },
  {
    number: "02",
    title: "Build",
    subtitle: "Design and deliver practical solutions",
    description: "Iterative, rigorous engineering creating production-ready architectures, intelligent data workflows, and robust integrations.",
    color: "#981B25",
    outcomes: ["Practical Engineering", "Scalable Architecture", "Accelerated Delivery"]
  },
  {
    number: "03",
    title: "Operate",
    subtitle: "Secure, reliable operations and support",
    description: "Ensuring mission-critical stability, enterprise security compliance, and dependable ongoing managed services.",
    color: "#1E588A",
    outcomes: ["Reliability & Uptime", "Governance & Security", "Proactive Monitoring"]
  },
  {
    number: "04",
    title: "Scale",
    subtitle: "Optimize, innovate, and grow",
    description: "Continual refinement, expanding capabilities to new business units, and unlocking deeper AI/automation potential.",
    color: "#2B82B8",
    outcomes: ["Continuous Optimization", "Ecosystem Expansion", "Measurable Growth"]
  }
];

export const CAPABILITIES = [
  {
    id: "data-ai",
    title: "Data & AI",
    positioning: "Turn enterprise data into actionable intelligence.",
    summary: "Transform fragmented enterprise data into trusted, high-performance pipelines and intelligent decision systems.",
    services: [
      "Data Engineering",
      "Analytics",
      "AI/ML",
      "Generative AI",
      "AI Agents"
    ],
    businessValue: "Empowers leadership with unified visibility, predictive capabilities, and autonomous agentic workflows grounded in proprietary enterprise knowledge.",
    challenge: "Enterprises struggle with fragmented data silos, inconsistent data quality, and difficulties translating raw information into timely decision-making."
  },
  {
    id: "integration-automation",
    title: "Integration + Automation",
    positioning: "Connect enterprise systems and streamline operations.",
    summary: "Break operational friction with resilient API fabrics, synchronous data flows, and intelligent end-to-end workflows.",
    services: [
      "APIs",
      "System Integration",
      "Workflow Automation",
      "Intelligent Automation"
    ],
    businessValue: "Reduces manual intervention, minimizes data re-entry friction, and harmonizes legacy systems with modern cloud infrastructure.",
    challenge: "Disconnected legacy and SaaS applications lead to operational bottlenecks, manual reconciliations, and slow response to market shifts."
  },
  {
    id: "cloud-digital",
    title: "Cloud + Digital Engineering",
    positioning: "Modernize applications and infrastructure for scale.",
    summary: "Architecting resilient, cost-efficient cloud native ecosystems that scale seamlessly with enterprise demand.",
    services: [
      "Cloud Strategy",
      "Migration",
      "Application Modernization",
      "Managed Services"
    ],
    businessValue: "Enhances system agility, improves infrastructure reliability, and optimizes cloud expenditure while ensuring zero disruption.",
    challenge: "Aging monolithic applications and on-premise constraints impede business agility and drive up operational overhead."
  },
  {
    id: "iot-connected",
    title: "IoT + Connected Operations",
    positioning: "Connect physical assets with real-time intelligence.",
    summary: "Bridging the physical and digital divide with advanced sensor telemetry, edge compute, and automated visibility.",
    services: [
      "UHF",
      "IoT",
      "Asset Tracking",
      "Monitoring",
      "Edge-to-Cloud"
    ],
    businessValue: "Provides granular real-time tracking of valuable assets, predicts maintenance requirements, and mitigates operational loss.",
    challenge: "Lack of real-time visibility into high-value assets, fleet locations, and shop-floor conditions results in shrinkage and costly downtime."
  },
  {
    id: "enterprise-erp",
    title: "Enterprise Application & ERP",
    positioning: "Implement, integrate, and modernize enterprise applications.",
    summary: "Tailoring enterprise ERP solutions to streamline finance, supply chain, and procurement into a single unified source of truth.",
    services: [
      "ERP Implementation",
      "Customization",
      "Integration",
      "Modernization"
    ],
    businessValue: "Provides executive oversight of core operations, accelerates financial closes, and eliminates administrative duplication.",
    challenge: "Rigid, non-integrated business management systems that fail to scale with organizational complexity and compliance demands."
  }
];

export const PRODUCTS = [
  {
    id: "binaraiq",
    name: "BinaraIQ™",
    badge: "Connected Asset Intelligence",
    tagline: "Every asset has a story.",
    description: "An enterprise-grade asset intelligence platform delivering continuous real-time visibility across physical inventory, equipment, and supply-chain logistics.",
    capabilities: [
      "Real-time asset visibility & tracking",
      "UHF, IoT, Bar-code, Camera & QR intelligence",
      "Predictive insights & automation"
    ],
    metricsPreview: [
      { label: "Asset Visibility", value: "Real-time" },
      { label: "Telemetry Feeds", value: "UHF / IoT / QR" },
      { label: "Operation Mode", value: "Edge-to-Cloud" }
    ],
    useCase: "Ideal for manufacturing facilities, logistics hubs, and hospitals managing high-value mobile equipment and inventory."
  },
  {
    id: "pronexaiq",
    name: "ProNexaIQ™",
    badge: "AI-Powered Data Control Tower",
    tagline: "Connect. Govern. Observe. Act.",
    description: "A centralized data intelligence tower providing continuous governance, data quality observability, and automated triggers to keep enterprise data AI-ready.",
    capabilities: [
      "Unified enterprise data visibility",
      "Data quality, governance & observability",
      "AI-ready data & intelligent actions"
    ],
    metricsPreview: [
      { label: "Data Quality Score", value: "99.4%" },
      { label: "Pipelines Monitored", value: "Multi-Source" },
      { label: "Action Engine", value: "Automated Triggers" }
    ],
    useCase: "Designed for data teams needing end-to-end lineage, policy enforcement, and reliable pipelines for downstream AI and executive reporting."
  },
  {
    id: "educe-erp",
    name: "Educe ERP",
    poweredBy: "Powered by Pro17Analytics (by ExcelForte)",
    badge: "Intelligent Business Management",
    tagline: "Simplify. Manage. Grow.",
    description: "An integrated business management suite unifying core financial operations, sales pipelines, procurement, and inventory management.",
    capabilities: [
      "Finance, sales, procurement & inventory",
      "Integrated business operations",
      "Configurable workflows for growth"
    ],
    metricsPreview: [
      { label: "Core Modules", value: "Finance & Operations" },
      { label: "Workflows", value: "Configurable" },
      { label: "Ecosystem", value: "Integrated ERP" }
    ],
    useCase: "Tailored for growing and mid-to-large enterprises seeking modern, streamlined management without the rigidity of legacy platforms."
  },
  {
    id: "prosageiq",
    name: "ProSageIQ™",
    badge: "Conversational Enterprise Intelligence",
    tagline: "Ask Your Data. Discover Insights.",
    description: "A secure conversational intelligence interface allowing business leaders and teams to query complex enterprise data using plain natural language.",
    capabilities: [
      "Ask business questions in natural language",
      "Instant insights across enterprise data",
      "Faster, data-driven decisions"
    ],
    metricsPreview: [
      { label: "Query Interface", value: "Natural Language" },
      { label: "Response Time", value: "Instantaneous" },
      { label: "Data Security", value: "Enterprise Air-gapped" }
    ],
    useCase: "Enables business analysts, executives, and department leads to gain rapid answers without waiting on custom query backlogs."
  }
];

export const ALSO_AVAILABLE = [
  {
    title: "Enterprise Solutions",
    description: "Tailored applications engineered to solve unique, complex operational workflows that off-the-shelf software cannot address."
  },
  {
    title: "Reusable Accelerators",
    description: "Battle-tested architectural frameworks, pre-built connectors, and pipeline templates that dramatically shorten time to value."
  },
  {
    title: "Implementation Services",
    description: "End-to-end guidance from architectural validation and deployment through change management and long-term enterprise adoption."
  }
];

export const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare",
    focus: "Patient Care Logistics & Medical Asset Intelligence",
    challenges: "Tracking critical mobile diagnostics, securing patient data workflows, and optimizing asset utilization across complex clinical environments.",
    solutions: "Real-time asset tracking with BinaraIQ, HIPAA-aligned data governance pipelines with ProNexaIQ, and connected clinical workflows."
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    focus: "Shop Floor Optimization & Predictive Supply Chains",
    challenges: "Minimizing unscheduled equipment downtime, tracking WIP components, and bridging legacy OT systems with enterprise ERP.",
    solutions: "IoT edge telemetry, automated ERP synchronization for materials management, and conversational analytics for operational efficiency."
  },
  {
    id: "agriculture",
    name: "Agriculture",
    focus: "Connected Operations & Yield Intelligence",
    challenges: "Managing dispersed field assets, tracking environmental metrics, and coordinating seasonal procurement and inventory cycles.",
    solutions: "Ruggedized IoT tracking, edge data aggregation, and end-to-end procurement workflows engineered for agricultural supply lines."
  },
  {
    id: "energy",
    name: "Energy",
    focus: "Distributed Asset Monitoring & Safety Governance",
    challenges: "Maintaining visibility across remote field assets, adhering to strict regulatory standards, and ensuring mission-critical infrastructure reliability.",
    solutions: "Edge-to-cloud asset monitoring, high-volume telemetry processing, and automated compliance observability."
  },
  {
    id: "retail",
    name: "Retail",
    focus: "Unified Omnichannel & Inventory Observability",
    challenges: "Inventory discrepancies across stores and distribution centers, slow stock replenishment, and siloed point-of-sale data.",
    solutions: "RFID/UHF inventory counting, integrated ERP supply chain workflows, and natural language sales performance insights."
  },
  {
    id: "logistics",
    name: "Logistics",
    focus: "End-to-End Fleet & Cargo Visibility",
    challenges: "Cargo location blind spots, inefficient transfer handoffs, and disjointed transport management systems.",
    solutions: "Real-time tracking tags, automated workflow triggers at distribution checkpoints, and unified transit data control towers."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Microsoft Solutions Partner",
    subtitle: "Data & AI Azure",
    type: "partner"
  },
  {
    title: "TIMEXTENDER",
    subtitle: "Certified Partner",
    type: "partner"
  },
  {
    title: "ISO 27001",
    subtitle: "Intercert Certified",
    type: "compliance"
  },
  {
    title: "AICPA SOC",
    subtitle: "Service Organization Controls",
    type: "compliance"
  },
  {
    title: "HIPAA Compliant",
    subtitle: "Health Information Privacy",
    type: "compliance"
  },
  {
    title: "GDPR Compliant",
    subtitle: "General Data Protection",
    type: "compliance"
  }
];
