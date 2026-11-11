export const brand = {
  name: 'Synexoy',
  tagline: 'AI-First Data & Analytics + Agentic AI',
}

export const topLinks = [
  { label: 'About Synexoy', to: '/about' },
  { label: 'Careers', to: '/careers' },
]

export const navLinks = [
  {
    label: 'Artificial Intelligence',
    to: '/ai',
    children: [
      { label: 'AI Strategy', to: '/ai/strategy' },
      { label: 'Agentic AI', to: '/ai/agentic' },
      { label: 'Generative AI', to: '/ai/generative' },
      { label: 'AI Managed Services', to: '/ai/managed' },
      { label: 'Responsible AI', to: '/ai/responsible' },
      { label: 'Advanced Analytics', to: '/ai/analytics' },
    ],
  },
  {
    label: 'Cloud & Data',
    to: '/cloud-data',
    children: [
      { label: 'Data Strategy', to: '/cloud-data/strategy' },
      { label: 'Data Engineering', to: '/cloud-data/engineering' },
      { label: 'Data Management', to: '/cloud-data/management' },
      { label: 'Cloud Transformation', to: '/cloud-data/cloud' },
      { label: 'DataOps', to: '/cloud-data/dataops' },
      { label: 'Forward Deployed Engineering', to: '/cloud-data/fde' },
    ],
  },
  {
    label: 'Analytics & Cognitive BI',
    to: '/analytics',
    children: [
      { label: 'Data Visualization', to: '/analytics/visualization' },
      { label: 'Automated Insights', to: '/analytics/insights' },
      { label: 'BI Migration', to: '/analytics/bi-migration' },
      { label: 'Data Modeling', to: '/analytics/modeling' },
      { label: 'Data Observability', to: '/analytics/observability' },
    ],
  },
  {
    label: 'Industries',
    to: '/industries',
    children: [
      { label: 'CPG & Retail', to: '/industries/cpg-retail' },
      { label: 'Life Sciences', to: '/industries/life-sciences' },
      { label: 'Banking & Financial Services', to: '/industries/banking' },
      { label: 'Insurance', to: '/industries/insurance' },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    children: [
      { label: 'Helios', to: '/solutions/helios' },
      { label: 'Stratos', to: '/solutions/stratos' },
      { label: 'DataGuard', to: '/solutions/dataguard' },
    ],
  },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      { label: 'Case Studies', to: '/resources/case-studies' },
      { label: 'Thought Leadership', to: '/resources/thought-leadership' },
      { label: 'Blogs', to: '/resources/blogs' },
    ],
  },
]

export const heroSlides = [
  {
    id: 'efficiency',
    tab: 'AI-Driven Enterprise Efficiency',
    theme: 'video' as const,
    title: 'Transform your business with Agentic AI',
    cta: 'Explore services',
    ctaTo: '/ai',
    visual: 'none' as const,
    background: 'images/hero/efficiency-poster.jpg',
    video: 'images/hero/efficiency.mp4',
  },
  {
    id: 'recognition',
    tab: 'Industry Recognition',
    theme: 'warm' as const,
    title: 'Industry recognition across Gartner® reports',
    cta: 'See all reports',
    ctaTo: '/resources',
    visual: 'gartner' as const,
    background: 'images/hero/recognition-bg.jpg',
    disclaimer:
      'Source: Gartner research published between October 2025 and October 2026; report titles, dates and authors are listed in the Industry Recognition section of the page.',
  },
  {
    id: 'fde',
    tab: 'Foward Deployed Engineering',
    theme: 'dark-fde' as const,
    title: 'Powering Enterprise AI with FDEs and Specialized Agents',
    cta: 'Accelerate your AI journey',
    ctaTo: '/cloud-data/fde',
    visual: 'fde' as const,
  },
  {
    id: 'podcast',
    tab: 'Reimagine with AI Podcast',
    theme: 'dark-podcast' as const,
    title: 'Treat AI agents like colleagues, not tools: Vineet Khanna on supply chain AI',
    cta: 'Watch podcast',
    ctaTo: '/resources',
    visual: 'podcast' as const,
    speakers: [
      {
        name: 'Vineet Khanna',
        role: 'Founder & CEO at Advanter Advisory | Ex - Global Head of Supply Chain, SVP at Nestlé',
        image: 'images/hero/vineet.png',
      },
      {
        name: 'Imteaz Ahamed',
        role: 'Host | Ex- Reckitt',
        image: 'images/hero/imteaz.png',
      },
    ],
  },
]

export const stats = [
  { value: '225+', label: 'transformative AI programs delivered' },
  { value: '$130M+', label: 'value delivered with GenAI initiatives' },
  { value: '300+', label: 'AI agents built and deployed' },
]

export const whatWeDo = [
  {
    title: 'Business Consulting',
    blurb:
      'Drive AI-led business and process transformation by prioritizing high-value use cases, defining ROI models, and creating unified AI and data strategies that accelerate enterprise-wide impact.',
    image: 'images/what/consulting.jpg',
    to: '/ai/strategy',
  },
  {
    title: 'Generative AI',
    blurb:
      'Implement and scale GenAI and Agentic AI solutions end-to-end, from design to governed deployment, integrating them into workflows to improve efficiency and deliver measurable business value.',
    image: 'images/what/genai.jpg',
    to: '/ai/generative',
  },
  {
    title: 'AI-Led Data Engineering',
    blurb:
      'Build scalable, governed, AI-ready data foundations through modernization, automation, and self-service access, enabling faster analytics and supporting continuous adoption of Agentic AI.',
    image: 'images/what/data-eng.jpg',
    to: '/cloud-data/engineering',
  },
  {
    title: 'Analytics & Cognitive BI',
    blurb:
      'Transform analytics and BI into predictive, conversational, decision-ready systems powered by AI agents that surface insights, detect anomalies, and explain business drivers with clarity.',
    image: 'images/what/analytics.jpg',
    to: '/analytics',
  },
]

export const industryTabs = [
  {
    id: 'cpg',
    label: 'CPG & Retail',
    explore: 'Explore CPG & retail analytics',
    solutions: [
      {
        title: 'Supply Chain Management',
        blurb:
          'Improve forecasting, logistics, procurement and inventory decisions using AI-driven planning agents across complex global supply networks.',
        metric: '10% reduction in cost-to-serve',
        image: 'images/industry/supply.jpg',
      },
      {
        title: 'Price-Pack Architecture',
        blurb:
          'Optimize portfolio mix through AI-powered pack-price design and promotion efficiency analysis to improve overall margins.',
        metric: '5% improvement in trade spend ROI',
        image: 'images/industry/price.jpg',
      },
      {
        title: 'Marketing Performance',
        blurb:
          'Unify signals across channels to maximize marketing ROI and dynamically optimize campaigns using GenAI-assisted insights.',
        metric: '25% increase in ROAS',
        image: 'images/industry/marketing.jpg',
      },
      {
        title: 'Category Excellence',
        blurb:
          'Improve category profitability through automated planograms, optimized assortments, and smarter shelf execution with AI recommendations.',
        metric: '8% increase in category sales',
        image: 'images/industry/category.jpg',
      },
    ],
  },
  {
    id: 'fs',
    label: 'Financial Services',
    explore: 'Explore financial services analytics',
    solutions: [
      {
        title: 'Business Continuity',
        blurb:
          'Protect critical process continuity with AI agents that orchestrate automated recovery to ensure faster, resilient enterprise operations.',
        metric: '40% reduction in recovery time',
        image: 'images/industry/continuity.jpg',
      },
      {
        title: 'Data Governance',
        blurb:
          'Ensure accurate, compliant reporting through governed data pipelines, automated data quality checks, and AI-powered anomaly detection.',
        metric: '99% faster data quality checks',
        image: 'images/industry/governance.jpg',
      },
      {
        title: 'Risk Intelligence',
        blurb:
          'Identify portfolio risk patterns proactively and improve loan recovery decisions using predictive models and Agentic AI frameworks.',
        metric: '1.5x reduction in operational cost',
        image: 'images/industry/risk.jpg',
      },
      {
        title: 'Cloud Optimization',
        blurb:
          'Optimize hybrid and multicloud environments with GenAI assisted usage insights and continuous cost optimization recommendations.',
        metric: '$1.5M savings in maintenance costs',
        image: 'images/industry/cloud.jpg',
      },
    ],
  },
  {
    id: 'ls',
    label: 'Life Sciences',
    explore: 'Explore life sciences analytics',
    solutions: [
      {
        title: 'Commercial Excellence',
        blurb:
          'Improve HCP engagement through AI-based segmentation, precision targeting, and personalized, contextual content activation across channels.',
        metric: '15% increase in closure of sales opportunities',
        image: 'images/industry/commercial.jpg',
      },
      {
        title: 'Quality Assurance',
        blurb:
          'Strengthen quality processes with automated checks, continuous monitoring, and audit-ready reporting frameworks for multiple functions.',
        metric: '30% reduction in average approval cycle time',
        image: 'images/industry/quality.jpg',
      },
      {
        title: 'Content Automation',
        blurb:
          'Accelerate medical writing with GenAI assisted summaries, evidence tables, and submission ready documentation at scale for teams.',
        metric: '30% faster content development cycles',
        image: 'images/industry/content.jpg',
      },
      {
        title: 'Complaint Handling',
        blurb:
          'Streamline complaint triage and resolution using Agentic AI workflows that support regulatory compliance with better outcomes.',
        metric: '$2.5M annual savings in complaint handling process',
        image: 'images/industry/complaint.jpg',
      },
    ],
  },
]

export const caseStudies = [
  {
    tag: 'AI/ML',
    title: '2X faster time-to-market with AI-driven HCP engagement for a leading pharma company',
    metrics: [
      { value: '7% reduction', label: 'in annual distribution costs' },
      { value: 'Up to 80% reduction', label: 'in man-hours' },
    ],
    image: 'images/cases/pharma.jpg',
  },
  {
    tag: 'Supply Chain',
    title:
      '10% reduction in cost-to-serve with Agentic AI-led logistics planning for a health & wellness brand',
    metrics: [
      { value: '90% faster', label: 'new client onboarding' },
      { value: '60% faster', label: 'dashboard load time' },
    ],
    image: 'images/cases/logistics.jpg',
  },
  {
    tag: 'Data Engineering',
    title:
      '12% improvement in operational efficiency with data clean room for a F50 beverage manufacturer',
    metrics: [
      { value: '95% reduction', label: 'in content creation time' },
      { value: '$120K saved', label: 'per unit yearly by reducing agency reliance' },
    ],
    image: 'images/cases/beverage.jpg',
  },
]

export const whyChoose = [
  {
    title: 'Domain knowledge',
    blurb:
      'Deep understanding of business processes and industry context to deliver solutions aligned with business priorities and measurable outcomes.',
    icon: 'images/why/1.svg',
  },
  {
    title: 'Whitebox solutions',
    blurb:
      'A transparent approach to building data and AI solutions, ensuring clarity of methods and long-term enterprise self-sufficiency.',
    icon: 'images/why/2.svg',
  },
  {
    title: 'Purpose-built accelerators',
    blurb:
      'Suite of point solutions and frameworks powered by data engineering, ML, GenAI, and domain expertise to accelerate time-to-value.',
    icon: 'images/why/3.svg',
  },
  {
    title: 'End-to-end AI ownership',
    blurb:
      'Full ownership of the AI lifecycle from strategy and design to scalable deployment and optimization, ensuring seamless delivery.',
    icon: 'images/why/4.svg',
  },
]

export const awardImages = Array.from({ length: 16 }, (_, i) => `images/awards/${i + 1}.${[1, 4, 5, 11, 13, 16].includes(i + 1) ? 'png' : 'jpg'}`)

export const partnerImages = [
  { name: 'AWS', src: 'images/partners/aws.jpg' },
  { name: 'Google Cloud', src: 'images/partners/gcp.jpg' },
  { name: 'Microsoft', src: 'images/partners/ms.jpg' },
  { name: 'Databricks', src: 'images/partners/databricks.jpg' },
  { name: 'Snowflake', src: 'images/partners/snowflake.jpg' },
  { name: 'OpenAI', src: 'images/partners/openai.jpg' },
  { name: 'Anthropic', src: 'images/partners/anthropic.jpg' },
]

export const testimonials = [
  {
    title: "Reckitt's cloud optimization journey with Synexoy",
    quote:
      'Synexoy has been a vital part of our success story. They are highly skilled and knowledgeable in managing data in multi-cloud environments and with their expertise we have been able to achieve cloud cost visibility at an appropriate level across our cloud infrastructure.',
    name: 'Aritro Ghosh',
    role: 'IT & Senior Data Engineering Manager, Reckitt',
    image: 'images/testimonials/reckitt.jpg',
    type: 'video' as const,
  },
  {
    title: 'Why industry analysts recognize Synexoy as a supply chain analytics leader',
    quote:
      "Synexoy's investments in predictive and prescriptive analytics reflect its commitment to modernizing the data ecosystem and enhancing supply chain resilience. Through its portfolio of services, pre-built accelerators, and consultative approach, Synexoy helps enterprises build connected supply chains and generate actionable insights for efficient planning and operations.",
    name: 'Manav Deep Sachdeva',
    role: 'Principal Analyst, ISG',
    image: 'images/testimonials/isg.jpg',
    type: 'quote' as const,
  },
  {
    title: 'Supply chain partnership outcomes',
    quote:
      'Synexoy has demonstrated strong technical expertise, agility, and a true partnership mindset throughout the project. The outcomes are driving greater efficiency, transparency, and enabling faster, data-driven decision-making across our operations.',
    name: 'Douglas Ishikawa',
    role: 'Director-Supply Chain, PepsiCo',
    image: 'images/testimonials/pepsico.jpg',
    type: 'video' as const,
  },
  {
    title: 'Analyst perspective on Synexoy',
    quote:
      "Synexoy's advanced analytics expertise, proprietary tools, and end-to-end data modernization services enable businesses to unlock value across operations. With scalable AI solutions and continuous model optimization, Synexoy ensures agility and long-term relevance empowering enterprises to adapt to evolving market dynamics and achieve impactful, data-driven decision-making.",
    name: 'Gowtham Kumar Sampath',
    role: 'Principal Analyst, ISG',
    image: 'images/testimonials/isg.jpg',
    type: 'quote' as const,
  },
]

export const platforms = [
  {
    id: 'helios',
    name: 'Helios',
    tagline: 'AI-powered performance marketing and ecommerce intelligence',
    blurb:
      'Helios connects content creation, campaign execution, audience intelligence, e-commerce, and media optimization in one platform helping marketing teams move faster while maximizing the impact of every marketing dollar.',
    points: [
      'Faster content creation with AI-powered content generation and built-in governance',
      'Smarter audience targeting to identify and engage high-value customers',
      'Higher marketing campaign ROI by continuously optimizing media spend across channels',
    ],
    image: 'images/platforms/helios.jpg',
  },
  {
    id: 'stratos',
    name: 'Stratos',
    tagline: 'Agentic AI-powered supply chain intelligence and orchestration',
    blurb:
      'Stratos connects planning, sourcing, optimization, risk modeling, and execution to help supply chain teams respond faster to volatility, make better decisions, and improve cost efficiency across the network.',
    points: [
      'Lower cost-to-serve through intelligent optimization and scenario modeling',
      'Faster response to disruption with real-time risk and scenario analysis',
      'Smarter planning across demand, supply, inventory, and capacity',
      'Better network decisions with connected data and AI-driven recommendations',
    ],
    image: 'images/platforms/stratos.jpg',
  },
  {
    id: 'dataguard',
    name: 'DataGuard',
    tagline: 'Agentic AI-powered data quality intelligence and governance',
    blurb:
      'DataGuard transforms enterprise data quality from a reactive process into a proactive, intelligent system of trust. It continuously discovers, profiles, validates, monitors, and remediates data across complex environments, helping enterprises create reliable data foundations for AI, analytics, and business-critical decisions.',
    points: [
      'Improve data quality with AI-powered profiling and continuous monitoring',
      'Automate remediation with self-healing workflows',
      'Pinpoint root causes faster with lineage-driven analysis across interconnected data sources',
      'Strengthen governance with intelligent controls and audit-ready visibility',
    ],
    image: 'images/platforms/dataguard.jpg',
  },
]

export const footerColumns = [
  {
    title: 'Artificial Intelligence',
    links: [
      { label: 'AI Strategy', to: '/ai/strategy' },
      { label: 'Agentic AI', to: '/ai/agentic' },
      { label: 'Generative AI', to: '/ai/generative' },
      { label: 'AI Managed Services', to: '/ai/managed' },
      { label: 'Responsible AI', to: '/ai/responsible' },
      { label: 'Advanced Analytics', to: '/ai/analytics' },
    ],
  },
  {
    title: 'Cloud & Data',
    links: [
      { label: 'Data Strategy', to: '/cloud-data/strategy' },
      { label: 'Data Engineering', to: '/cloud-data/engineering' },
      { label: 'Data Management', to: '/cloud-data/management' },
      { label: 'Cloud Transformation', to: '/cloud-data/cloud' },
      { label: 'DataOps', to: '/cloud-data/dataops' },
      { label: 'Forward Deployed Engineering', to: '/cloud-data/fde' },
    ],
  },
  {
    title: 'Analytics & Cognitive BI',
    links: [
      { label: 'Data Visualization', to: '/analytics/visualization' },
      { label: 'Automated Insights', to: '/analytics/insights' },
      { label: 'BI Migration', to: '/analytics/bi-migration' },
      { label: 'Data Modeling', to: '/analytics/modeling' },
      { label: 'Data Observability', to: '/analytics/observability' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'CPG & Retail', to: '/industries/cpg-retail' },
      { label: 'Life Sciences', to: '/industries/life-sciences' },
      { label: 'Banking & Financial Services', to: '/industries/banking' },
      { label: 'Insurance', to: '/industries/insurance' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', to: '/resources/case-studies' },
      { label: 'Thought Leadership', to: '/resources/thought-leadership' },
      { label: 'Blogs', to: '/resources/blogs' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Helios', to: '/solutions/helios' },
      { label: 'Stratos', to: '/solutions/stratos' },
      { label: 'DataGuard', to: '/solutions/dataguard' },
    ],
  },
]
