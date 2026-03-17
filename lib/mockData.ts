export type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tag?: string;
};

export type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
};

export type ContentItem = {
  id: number;
  title: string;
  type: string;
  author: string;
  status: string;
  date: string;
  views: number;
};

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "Global Banking Sector Poised for Transformation Amid Rising Interest Rates",
    excerpt: "Central banks worldwide continue to navigate the delicate balance between inflation control and economic growth, reshaping the landscape for commercial and investment banks alike.",
    category: "News",
    author: "James Whitfield",
    date: "March 11, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    featured: true,
    tag: "TOP STORY",
  },
  {
    id: 2,
    title: "Digital Asset Regulation: How Governments Are Shaping Crypto Banking",
    excerpt: "A new wave of regulatory frameworks is redefining how financial institutions can engage with digital assets, with implications from Washington to Brussels.",
    category: "Insights",
    author: "Sarah Chen",
    date: "March 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    featured: true,
    tag: "ANALYSIS",
  },
  {
    id: 3,
    title: "ESG Lending Hits Record $2.3 Trillion as Green Finance Accelerates",
    excerpt: "Sustainable finance has crossed a major milestone, with green bonds, sustainability-linked loans, and ESG-aligned portfolios driving unprecedented capital flows.",
    category: "Analysis",
    author: "Thomas Liu",
    date: "March 9, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    featured: true,
    tag: "ESG",
  },
  {
    id: 4,
    title: "AI-Powered Risk Models Reshape Credit Assessment at Tier-1 Banks",
    excerpt: "Machine learning platforms are transforming the way banks underwrite loans, detect fraud, and manage systemic risk — raising both opportunities and regulatory questions.",
    category: "Technology",
    author: "Elena Kovacs",
    date: "March 8, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "FINTECH",
  },
  {
    id: 5,
    title: "Middle East Sovereign Wealth Funds Diversify into Private Credit",
    excerpt: "Gulf sovereign wealth funds are expanding beyond traditional equities into direct lending and private credit markets, seeking higher yields in a complex macro environment.",
    category: "Research",
    author: "Ahmed Al-Rashid",
    date: "March 7, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    tag: "INVESTMENT",
  },
  {
    id: 6,
    title: "Basel IV Implementation: What Banks Must Do Before the Deadline",
    excerpt: "With the final Basel IV rules now firmly in place, banks face a critical window to restructure capital, adjust RWA calculations, and upgrade internal model frameworks.",
    category: "Regulation",
    author: "Caroline Dubois",
    date: "March 6, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
    tag: "REGULATION",
  },
];

export const newsArticles: Article[] = [
  {
    id: 7,
    title: "Fed Reserve Signals Cautious Rate Path for 2026",
    excerpt: "Federal Reserve officials suggest a slower pace of cuts, citing persistent services inflation and resilient labor market data.",
    category: "News",
    author: "Mark Johnson",
    date: "March 11, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    tag: "MONETARY POLICY",
  },
  {
    id: 8,
    title: "HSBC Reports Record Q1 Profit on Asia-Pacific Growth",
    excerpt: "Asia's largest bank by assets posts $9.8bn in pre-tax profit, driven by strong performance in wealth management and transaction banking.",
    category: "News",
    author: "Wei Zhang",
    date: "March 10, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    tag: "EARNINGS",
  },
  {
    id: 9,
    title: "European Central Bank Eyes Digital Euro Rollout by 2028",
    excerpt: "The ECB has confirmed its roadmap for a retail central bank digital currency, with pilot testing expected to begin across six member states in 2027.",
    category: "News",
    author: "Franz Mueller",
    date: "March 9, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
    tag: "CBDC",
  },
  {
    id: 10,
    title: "JPMorgan Chase Expands Private Banking in Latin America",
    excerpt: "The US banking giant is opening wealth management offices in Bogotá, Lima, and Santiago to capture growing high-net-worth segments.",
    category: "News",
    author: "Carlos Reyes",
    date: "March 8, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80",
    tag: "EXPANSION",
  },
  {
    id: 11,
    title: "African Development Bank Raises $5bn in Infrastructure Bond",
    excerpt: "The AfDB has successfully issued its largest-ever bond offering, targeting sustainable infrastructure projects across 32 member nations.",
    category: "News",
    author: "Ngozi Okafor",
    date: "March 7, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&q=80",
    tag: "BONDS",
  },
  {
    id: 12,
    title: "Cyber Attacks on Financial Institutions Up 45% in 2025",
    excerpt: "Regulators call for enhanced cyber resilience frameworks as state-sponsored and ransomware attacks on banks reach an all-time high.",
    category: "News",
    author: "Yuki Tanaka",
    date: "March 6, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tag: "CYBERSECURITY",
  },
];

export const insightArticles: Article[] = [
  {
    id: 13,
    title: "The New Wealth Management Paradigm: Personalisation at Scale",
    excerpt: "How leading private banks are leveraging AI and hyper-personalisation technology to deliver bespoke services to an expanding affluent client base.",
    category: "Insights",
    author: "Oliver Hartmann",
    date: "March 11, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    tag: "WEALTH MANAGEMENT",
  },
  {
    id: 14,
    title: "Embedded Finance: The Invisible Layer Transforming Commerce",
    excerpt: "From e-commerce checkout to logistics platforms, financial services embedded within non-financial applications are rewriting the rules of banking.",
    category: "Insights",
    author: "Priya Sharma",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tag: "FINTECH",
  },
  {
    id: 15,
    title: "Treasury Transformation: From Cost Centre to Strategic Partner",
    excerpt: "Modern treasury functions are at the centre of corporate resilience, with real-time data and automation redefining their role in the boardroom.",
    category: "Insights",
    author: "Michael Brandt",
    date: "March 9, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tag: "TREASURY",
  },
  {
    id: 16,
    title: "Climate Stress Testing: Regulators Raise the Bar for Banks",
    excerpt: "Financial supervisors across major economies are pushing for more rigorous climate scenario analysis, requiring banks to model transition and physical risks across long time horizons.",
    category: "Insights",
    author: "Alice Beaumont",
    date: "March 8, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    tag: "ESG",
  },
];

export const analysisArticles: Article[] = [
  {
    id: 17,
    title: "Central Bank Balance Sheets: A Deep Dive into QT Progress",
    excerpt: "An in-depth review of how major central banks are unwinding their pandemic-era stimulus, with implications for bond markets and bank funding.",
    category: "Analysis",
    author: "David Webster",
    date: "March 11, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tag: "MACROECONOMICS",
  },
  {
    id: 18,
    title: "M&A Activity in European Banking: Consolidation Wave Building",
    excerpt: "After years of fragmentation, European banking M&A is gathering momentum, driven by cost pressures, digital transformation needs, and regulatory incentives.",
    category: "Analysis",
    author: "Sophie Laurent",
    date: "March 10, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    tag: "M&A",
  },
  {
    id: 19,
    title: "Non-Performing Loans: The Hidden Risk in Commercial Real Estate",
    excerpt: "Office market distress is spilling into bank balance sheets, with NPL ratios in CRE-heavy portfolios rising across the US and European markets.",
    category: "Analysis",
    author: "Robert Stern",
    date: "March 9, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    tag: "CREDIT RISK",
  },
];

export const researchArticles: Article[] = [
  {
    id: 20,
    title: "Global Trade Finance Gap Widens to $2.5 Trillion",
    excerpt: "New research from the Asian Development Bank highlights the persistent and growing gap in trade finance availability, with SMEs bearing the brunt of tightening conditions.",
    category: "Research",
    author: "Jin Park",
    date: "March 11, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61011d8?w=800&q=80",
    tag: "TRADE FINANCE",
  },
  {
    id: 21,
    title: "The State of Open Banking Globally: 2026 Report",
    excerpt: "A comprehensive survey of open banking adoption across 40 markets reveals stark disparities in progress, with the UK and Brazil leading while others lag significantly.",
    category: "Research",
    author: "Hannah Fischer",
    date: "March 10, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "OPEN BANKING",
  },
  {
    id: 22,
    title: "Retail Banking Customer Satisfaction: What Drives Loyalty in 2026?",
    excerpt: "Original survey data from 15,000 retail banking customers across 12 markets identifies the key drivers of loyalty, digital adoption, and switching behaviour.",
    category: "Research",
    author: "Laura Knight",
    date: "March 9, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tag: "RETAIL BANKING",
  },
];

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Banker Summit on Financial Technology 2026",
    date: "April 15–17, 2026",
    location: "London, UK",
    type: "Conference",
    description: "The premier annual gathering for banking and fintech executives to explore digital transformation, open banking, and emerging technologies.",
  },
  {
    id: 2,
    title: "Global Transaction Banking Awards Ceremony",
    date: "May 8, 2026",
    location: "New York, USA",
    type: "Awards",
    description: "Recognising excellence in transaction banking, treasury management, and trade finance across the Americas.",
  },
  {
    id: 3,
    title: "ESG & Sustainable Finance Forum",
    date: "May 22–23, 2026",
    location: "Frankfurt, Germany",
    type: "Forum",
    description: "Dedicated to sustainable finance, climate risk, green bonds, and the evolving ESG regulatory landscape in European banking.",
  },
  {
    id: 4,
    title: "Asia Pacific Banking Leaders Summit",
    date: "June 10–12, 2026",
    location: "Singapore",
    type: "Summit",
    description: "Bringing together C-suite executives from Asia's top financial institutions to address growth, regulation, and digital innovation.",
  },
  {
    id: 5,
    title: "Bankertimes.org Emerging Markets Roundtable",
    date: "June 25, 2026",
    location: "Dubai, UAE",
    type: "Roundtable",
    description: "An exclusive invite-only roundtable discussing investment flows, credit markets, and regulatory developments across the Middle East and Africa.",
  },
  {
    id: 6,
    title: "Transaction Banking & Payments Conference",
    date: "July 14–15, 2026",
    location: "Amsterdam, Netherlands",
    type: "Conference",
    description: "Focused on the future of payments infrastructure, real-time settlement, and cross-border finance in an evolving regulatory environment.",
  },
];

export const mockUsers: User[] = [
  { id: 1, name: "James Whitfield", email: "j.whitfield@bankertimes.org", role: "Editor", status: "Active", joined: "Jan 12, 2025" },
  { id: 2, name: "Sarah Chen", email: "s.chen@bankertimes.org", role: "Journalist", status: "Active", joined: "Feb 3, 2025" },
  { id: 3, name: "Thomas Liu", email: "t.liu@bankertimes.org", role: "Analyst", status: "Active", joined: "Mar 15, 2025" },
  { id: 4, name: "Elena Kovacs", email: "e.kovacs@bankertimes.org", role: "Journalist", status: "Active", joined: "Apr 20, 2025" },
  { id: 5, name: "Ahmed Al-Rashid", email: "a.rashid@bankertimes.org", role: "Contributor", status: "Inactive", joined: "May 5, 2025" },
  { id: 6, name: "Caroline Dubois", email: "c.dubois@bankertimes.org", role: "Editor", status: "Active", joined: "Jun 1, 2025" },
  { id: 7, name: "Marcus Brown", email: "m.brown@bankertimes.org", role: "Admin", status: "Active", joined: "Jan 1, 2025" },
  { id: 8, name: "Priya Sharma", email: "p.sharma@bankertimes.org", role: "Analyst", status: "Active", joined: "Jul 14, 2025" },
];

export const mockContent: ContentItem[] = [
  { id: 1, title: "Global Banking Sector Poised for Transformation", type: "Article", author: "James Whitfield", status: "Published", date: "Mar 11, 2026", views: 14820 },
  { id: 2, title: "Digital Asset Regulation: How Governments Are Shaping Crypto Banking", type: "Analysis", author: "Sarah Chen", status: "Published", date: "Mar 10, 2026", views: 9340 },
  { id: 3, title: "ESG Lending Hits Record $2.3 Trillion", type: "Research", author: "Thomas Liu", status: "Published", date: "Mar 9, 2026", views: 7210 },
  { id: 4, title: "AI-Powered Risk Models Reshape Credit Assessment", type: "Insight", author: "Elena Kovacs", status: "Draft", date: "Mar 8, 2026", views: 0 },
  { id: 5, title: "Middle East Sovereign Wealth Funds Diversify into Private Credit", type: "Article", author: "Ahmed Al-Rashid", status: "Under Review", date: "Mar 7, 2026", views: 0 },
  { id: 6, title: "Basel IV Implementation: What Banks Must Do", type: "Regulation", author: "Caroline Dubois", status: "Published", date: "Mar 6, 2026", views: 12480 },
  { id: 7, title: "The New Wealth Management Paradigm", type: "Insight", author: "Oliver Hartmann", status: "Published", date: "Mar 5, 2026", views: 5670 },
  { id: 8, title: "Central Bank Balance Sheets: QT Progress", type: "Analysis", author: "David Webster", status: "Draft", date: "Mar 4, 2026", views: 0 },
];

export const analyticsStats = [
  { label: "Total Articles", value: "2,847", change: "+12%", icon: "FileText", color: "blue" },
  { label: "Monthly Visitors", value: "1.2M", change: "+8.5%", icon: "Users", color: "green" },
  { label: "Registered Users", value: "48,320", change: "+3.2%", icon: "UserCheck", color: "purple" },
  { label: "Revenue (USD)", value: "$184,200", change: "+15.7%", icon: "DollarSign", color: "gold" },
];
