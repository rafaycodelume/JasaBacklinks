// Shared service metadata used by the directory, detail routes, and SEO.
// Honest version: Guest Posting = real outreach on independent sites.
// All other services = placements on our own aged authority network (PBN).
// EDU / GOV placements are on .EDU / .GOV domains inside our own network.
export const SERVICE_PAGES_DATA = [
  // 0. GUEST POSTING (#1 FLAGSHIP SERVICE) - ONLY NON-PBN SERVICE
  {
    id: "guest_posting",
    slug: "guest-posting",
    aliases: ["guest_posting", "guest-post", "guest-posts"],
    category: "guest_post",
    categoryLabel: "Editorial Outreach",
    name: "Guest Posting",
    shortSubtitle: "Real outreach on real independent sites",
    heroHeadline: "Real Outreach on Real Sites,",
    heroHighlight: "Not Our Network.",
    price: 15.0,
    unitLabel: "link",
    minQty: 1,
    metric: "DA/DR 30+ to 50+",
    tlds: ".COM • .NET • .ORG • .ID",
    turnaround: "1–2 Days",
    badge: "★ #1 Flagship Service",
    badgeColor: "bg-[#e8f0fe] text-[#1a73e8]",
    topAccent: "bg-[#1a73e8]",
    desc: "This is our only non-PBN service. We pitch and publish a contextual dofollow article on an independent website that we do not own, with verified monthly organic traffic. You choose DA/DR 30+, 40+ or 50+ at the same base price. Final price changes only when you choose a different niche or a higher traffic tier. Price shown is per link, minimum order is 1 link.",
    features: [
      "600 to 800 words unique, niche-relevant article included",
      "Free choice of Moz DA / Ahrefs DR 30+, 40+, or 50+ at same base price",
      "Verified monthly organic traffic (1K+ up to 50K+ visitors)",
      "Dofollow editorial link + white-label report",
    ],
    deliverables: [
      {
        title: "Verified Organic Traffic",
        desc: "Every site is checked for real Ahrefs and Semrush organic search traffic before we pitch your article.",
      },
      {
        title: "Free DA/DR 30+ to 50+ Choice",
        desc: "Select DA/DR 30+, 40+, or 50+ inside the configurator at the same flat base rate. No hidden upgrade for higher DA/DR.",
      },
      {
        title: "General & iGaming Support",
        desc: "Separate inventory for General niches (from $15) and iGaming / Casino campaigns (from $30) because iGaming placements cost us more to secure.",
      },
    ],
    faqs: [
      {
        q: "Does selecting DA/DR 50+ cost more than DA/DR 30+?",
        a: "No. DA/DR choice does not change the price. Your price changes only when you pick a different niche (General vs iGaming) or a higher monthly traffic tier.",
      },
      {
        q: "How does traffic tier pricing work?",
        a: "Base price is for 1K+ monthly traffic: $15 for General, $30 for iGaming. Each higher tier costs more: 5K+, 10K+, 25K+, 50K+. The configurator shows your exact total before checkout, so there is no surprise.",
      },
    ],
  },

  // 1. HOMEPAGE POST - PBN
  {
    id: "hp_post",
    slug: "homepage-post",
    aliases: ["hp_post", "homepage-links"],
    category: "standard",
    categoryLabel: "Our Authority Network (PBN)",
    name: "Homepage Post",
    shortSubtitle: "PBN article on our homepage feed",
    heroHeadline: "Contextual Homepage Post on",
    heroHighlight: "Our Aged DA/DR 50+ Network.",
    price: 1.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".COM • .NET • .ORG",
    turnaround: "1–2 Days",
    badge: "Most Popular",
    badgeColor: "bg-[#e8f0fe] text-[#1a73e8]",
    topAccent: "bg-[#1a73e8]",
    desc: "A contextual article published on the homepage feed of a domain inside our own aged authority network (PBN). The article starts on the homepage and moves down naturally as we publish newer posts, but your link stays live inside the article. Priced at $1 per link, minimum order 50 links = $50 total.",
    features: [
      "400 to 600 words unique contextual article per placement",
      "Domains in our own network with Moz DA 50+ & Ahrefs DR 50+",
      "Dofollow contextual link inside the article on homepage feed",
      "Separate IPs, WHOIS privacy & different themes across network",
    ],
    deliverables: [
      {
        title: "Contextual Content",
        desc: "Every placement includes a 400 to 600 word article written around your target keyword and niche.",
      },
      {
        title: "Homepage Start",
        desc: "Your article starts on the homepage, where the domain passes the most value, then moves down as newer posts are added.",
      },
      {
        title: "White-Label Excel Tracking",
        desc: "You get an unbranded spreadsheet with live URLs, anchor texts, and DA/DR of each domain.",
      },
    ],
    faqs: [
      {
        q: "How long does my post stay on the homepage?",
        a: "It starts on the homepage feed and moves down over time as new posts are published. Your link stays live in the article. If you want it to stay pinned at the top forever, choose Homepage Sticky Post instead.",
      },
      {
        q: "Can I submit multiple URLs and anchor texts for 50+ links?",
        a: "Yes. After checkout, you will see a form where you can add as many target URLs and anchor texts as you need for your order.",
      },
    ],
  },

  // 2. SIDEBAR BLOGROLL - PBN
  {
    id: "sidebar",
    slug: "sidebar-blogroll",
    aliases: ["sidebar", "blogroll"],
    category: "standard",
    categoryLabel: "Our Authority Network (PBN)",
    name: "Sidebar Blogroll",
    shortSubtitle: "PBN sitewide sidebar link",
    heroHeadline: "Sitewide Sidebar Link on",
    heroHighlight: "Our DA/DR 50+ Network.",
    price: 2.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".COM • .NET • .ORG",
    turnaround: "1–2 Days",
    badge: "High Link Juice",
    badgeColor: "bg-[#e6f4ea] text-[#1e8e3e]",
    topAccent: "bg-[#34a853]",
    desc: "A sitewide sidebar link placed on a domain inside our own aged authority network (PBN). Because it shows in the sidebar, your link appears on the homepage and on inner pages too. Priced at $2 per link, minimum order 50 links = $100 total.",
    features: [
      "Sitewide link: homepage + inner pages of the same domain",
      "We keep total outbound links per domain under 15, so your link keeps more value",
      "Google usually discovers the link within a few days after publishing",
      "Domains checked for clean history before we use them",
    ],
    deliverables: [
      {
        title: "Sitewide Link Equity",
        desc: "Placed in the sidebar widget, so your URL gets value from the homepage and inner pages of that domain.",
      },
      {
        title: "Limited Outbound Links",
        desc: "We limit how many outbound links each domain carries, so PageRank is not split across too many sites.",
      },
      {
        title: "Fast 1–2 Day Turnaround",
        desc: "Good for agencies who need a quick DR push and faster crawling for client campaigns.",
      },
    ],
    faqs: [
      {
        q: "Are sidebar blogroll links safe for money sites?",
        a: "They work best with branded anchors, naked URLs, or general commercial anchors. Avoid using exact-match money anchors on all 50 links. Mix your anchors like we suggest in the checkout form.",
      },
      {
        q: "Do these links help increase Ahrefs DR?",
        a: "Sitewide links on DR 50+ domains often help DR move faster than a single article link, but DR is not guaranteed. It depends on your current profile and anchors too.",
      },
    ],
  },

  // 3. HOMEPAGE STICKY POST - PBN
  {
    id: "sticky",
    slug: "homepage-sticky-post",
    aliases: ["sticky", "sticky-post"],
    category: "standard",
    categoryLabel: "Our Authority Network (PBN)",
    name: "Homepage Sticky Post",
    shortSubtitle: "PBN article pinned at top",
    heroHeadline: "Pinned at the Top of",
    heroHighlight: "Our Homepage Feed.",
    price: 2.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".COM • .NET • .ORG",
    turnaround: "1–2 Days",
    badge: "Pinned Top",
    badgeColor: "bg-[#fef7e0] text-[#f29900]",
    topAccent: "bg-[#fbbc04]",
    desc: "Same as Homepage Post, but with one difference: your article stays pinned at the very top of the homepage on our own network. It does not move down when we publish new posts. That is why it costs $1 more than a regular Homepage Post. Priced at $2 per link, minimum order 50 links = $100 total.",
    features: [
      "Stays pinned in the top homepage slot, does not roll down",
      "Homepage crawl priority because it is always at the top",
      "500+ word niche article with your anchor text",
      "Unbranded white-label Excel & CSV delivery",
    ],
    deliverables: [
      {
        title: "No Roll-Off",
        desc: "Unlike a regular Homepage Post that moves down, a Sticky Post stays in the top featured area.",
      },
      {
        title: "Priority Crawler Access",
        desc: "Search bots check the top of a homepage first, so your pinned link is seen again on every crawl.",
      },
      {
        title: "Multi-Niche Compatibility",
        desc: "Works for SaaS, E-Commerce, Local Services, Fintech, Crypto, and iGaming campaigns.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between Homepage Post and Homepage Sticky Post?",
        a: "Homepage Post starts on the homepage and moves down over time. Sticky Post stays pinned at the top and never moves down. If you want permanent top visibility, choose Sticky.",
      },
      {
        q: "Can I drip-feed my sticky posts over 2 weeks?",
        a: "Yes. After checkout, write your preferred drip-feed schedule in the Special Instructions box and we will follow it.",
      },
    ],
  },

  // 4. .ID HOMEPAGE POST - PBN
  {
    id: "id_hp_post",
    slug: "id-homepage-post",
    aliases: ["id_hp_post", "id-homepage"],
    category: "id_net",
    categoryLabel: ".ID Regional Network (PBN)",
    name: ".ID Homepage Post",
    shortSubtitle: "PBN article on .ID domains",
    heroHeadline: "Indonesian (.ID) Homepage Post on",
    heroHighlight: "Our .ID Network.",
    price: 2.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".ID • .CO.ID • .WEB.ID • .OR.ID",
    turnaround: "1–2 Days",
    badge: "Regional .ID",
    badgeColor: "bg-[#fce8e6] text-[#d93025]",
    topAccent: "bg-[#ea4335]",
    desc: "A contextual homepage article on a domain inside our own Indonesian network (PBN) using .ID, .CO.ID, .WEB.ID or .OR.ID extensions. Best if you target Google.co.id or Southeast Asia. Priced at $2 per link, minimum order 50 links = $100 total.",
    features: [
      "Native Bahasa Indonesia or English article, you choose",
      "Domains in our own network with .ID, .CO.ID, .WEB.ID & .OR.ID extensions",
      "Indonesian & Singaporean hosting IPs",
      "Verified Moz DA 50+ & Ahrefs DR 50+ domains",
    ],
    deliverables: [
      {
        title: "Local ccTLD Relevance",
        desc: "Country-code .ID domains send a stronger local signal to Google for Indonesian and APAC queries than a generic .COM.",
      },
      {
        title: "Bilingual Content Support",
        desc: "Choose a Bahasa Indonesia article or an English article. Anchor text can be Bahasa or English in both cases.",
      },
      {
        title: "Separate Hosting & Themes",
        desc: "Hosted across Asian data centres and CDNs with different templates and clean WHOIS records across our network.",
      },
    ],
    faqs: [
      {
        q: "Can I use English anchor texts inside a Bahasa Indonesia article?",
        a: "Yes. Our writers naturally weave either Bahasa Indonesia or English anchors into the article.",
      },
      {
        q: "Are these real .ID and .CO.ID extensions?",
        a: "Yes. Every placement in this tier uses a real Indonesian registry extension: .ID, .CO.ID, .WEB.ID or .OR.ID, inside our own network.",
      },
    ],
  },

  // 5. .ID SIDEBAR BLOGROLL - PBN
  {
    id: "id_sidebar",
    slug: "id-sidebar-blogroll",
    aliases: ["id_sidebar", "id-blogroll"],
    category: "id_net",
    categoryLabel: ".ID Regional Network (PBN)",
    name: ".ID Sidebar Blogroll",
    shortSubtitle: "PBN sitewide .ID sidebar link",
    heroHeadline: "Sitewide .ID Sidebar Link on",
    heroHighlight: "Our .ID Network.",
    price: 3.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".ID • .CO.ID • .OR.ID",
    turnaround: "1–2 Days",
    badge: "Local Power",
    badgeColor: "bg-[#fce8e6] text-[#d93025]",
    topAccent: "bg-[#ea4335]",
    desc: "A sitewide sidebar link on our own Indonesian network (PBN). Your link appears on homepage and inner pages of .ID domains. Built for competitive Indonesian keywords. Priced at $3 per link, minimum order 50 links = $150 total.",
    features: [
      "Sitewide .ID link: homepage + inner pages",
      "Indonesian Class-C IP distribution across our network",
      "Strong local signal for Google.co.id",
      "Replacement if a placement is lost during delivery window",
    ],
    deliverables: [
      {
        title: "Regional Sitewide Power",
        desc: "Transfers local ccTLD value from every indexed page of our .ID domains to your target URL.",
      },
      {
        title: "Competitive Niche Ready",
        desc: "Used for Indonesian E-Commerce, Fintech, Travel, Gaming, and Enterprise portals.",
      },
      {
        title: "Rapid 1–2 Day Deployment",
        desc: "Links go live quickly with a complete white-label verification sheet.",
      },
    ],
    faqs: [
      {
        q: "How many URLs can I use in a 50-link .ID Sidebar order?",
        a: "You can use 1 URL or split the 50 placements across multiple inner pages or subdomains at no extra cost.",
      },
      {
        q: "Are all .ID Sidebar domains indexed in Google?",
        a: "We check indexation across our .ID inventory before we deploy a campaign. If a domain drops from index, we replace that placement.",
      },
    ],
  },

  // 6. .ID STICKY POST - PBN
  {
    id: "id_sticky",
    slug: "id-sticky-post",
    aliases: ["id_sticky"],
    category: "id_net",
    categoryLabel: ".ID Regional Network (PBN)",
    name: ".ID Sticky Post",
    shortSubtitle: "PBN article pinned on .ID homepage",
    heroHeadline: "Pinned at the Top of",
    heroHighlight: "Our .ID Homepage.",
    price: 2.5,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".ID • .CO.ID • .WEB.ID",
    turnaround: "1–2 Days",
    badge: "Pinned .ID",
    badgeColor: "bg-[#fef7e0] text-[#f29900]",
    topAccent: "bg-[#fbbc04]",
    desc: "Same as .ID Homepage Post, but your article stays pinned at the top of the homepage on our own .ID network. It does not move down when we publish new posts. Priced at $2.50 per link, minimum order 50 links = $125 total.",
    features: [
      "Stays pinned at top of .ID homepage, does not roll down",
      "Unique Bahasa Indonesia or English niche article",
      "Drip-feed publishing available on request",
      "Live URL & DA/DR tracking sheet included",
    ],
    deliverables: [
      {
        title: "Pinned Regional Authority",
        desc: "Your article stays in the featured section of the .ID homepage, so it keeps top-level value.",
      },
      {
        title: "Contextual Surround Signals",
        desc: "Surrounded by niche-relevant headings and topical paragraphs to help relevance and rankings.",
      },
      {
        title: "Agency White-Label Ready",
        desc: "Delivered in a clean, unbranded Excel sheet you can share directly with clients.",
      },
    ],
    faqs: [
      {
        q: "Why choose .ID Sticky Post over standard .ID Homepage Post?",
        a: "Sticky stays pinned at the top forever. Standard moves down over time as new posts are added. If top visibility matters, choose Sticky.",
      },
      {
        q: "Can I combine .ID Sticky Posts with EDU links?",
        a: "Yes. Go to the main Services Campaign Builder page and combine .ID Sticky Posts with any other service in one checkout.",
      },
    ],
  },

  // 7. EDU PBN BLOGPOST - PBN on .EDU
  {
    id: "edu_post",
    slug: "edu-pbn-blogpost",
    aliases: ["edu_post", "edu-blogpost"],
    category: "edu_gov",
    categoryLabel: "EDU & GOV Network (PBN)",
    name: "EDU PBN Blogpost",
    shortSubtitle: "PBN article on .EDU domains",
    heroHeadline: "Contextual Article on",
    heroHighlight: ".EDU Domains in Our Network.",
    price: 3.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".EDU",
    turnaround: "1–2 Days",
    badge: "Academic Trust",
    badgeColor: "bg-[#f3e8fd] text-[#9334e6]",
    topAccent: "bg-[#9334e6]",
    desc: "A contextual article published on a .EDU domain inside our own PBN network. It is a placement on a .EDU extension domain in our network, written as a full article. Priced at $3 per link, minimum order 50 links = $150 total.",
    features: [
      "Full article on a .EDU domain in our network, not a profile link",
      "Helps DR and trust because .EDU extensions are trusted",
      "Natural anchor text inside the article",
      "We monitor indexing and share live URLs",
    ],
    deliverables: [
      {
        title: "E-E-A-T Trust Signal",
        desc: "Search engines and AI systems give extra weight to .EDU extensions, even when the placement is on a PBN domain.",
      },
      {
        title: "Editorial-Grade Articles",
        desc: "Each placement is wrapped in an informative article with proper headings, not a one-line comment or profile.",
      },
      {
        title: "Verified DA/DR 50+ Domains",
        desc: "Every .EDU domain is checked for DA/DR and backlink history before we use it.",
      },
    ],
    faqs: [
      {
        q: "Are these contextual articles or profile links?",
        a: "These are full contextual articles published as blog posts on our .EDU PBN domains. Not forum profiles, not comments.",
      },
      {
        q: "Do EDU blogposts help with AI Overviews (ChatGPT / Gemini / Perplexity)?",
        a: "They can help. High-trust .EDU extensions are cited more often by AI systems, but no service can guarantee an AI Overview mention.",
      },
    ],
  },

  // 8. EDU PBN BLOGROLL - PBN on .EDU, sitewide
  {
    id: "edu_sidebar",
    slug: "edu-pbn-blogroll",
    aliases: ["edu_sidebar", "edu-blogroll"],
    category: "edu_gov",
    categoryLabel: "EDU & GOV Network (PBN)",
    name: "EDU PBN Blogroll",
    shortSubtitle: "PBN sitewide sidebar on .EDU",
    heroHeadline: "Sitewide Sidebar Link on",
    heroHighlight: ".EDU Domains in Our Network.",
    price: 5.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA/DR 50+",
    tlds: ".EDU",
    turnaround: "1–2 Days",
    badge: "Max Authority",
    badgeColor: "bg-[#f3e8fd] text-[#9334e6]",
    topAccent: "bg-[#9334e6]",
    desc: "A sitewide sidebar link on a .EDU domain inside our own PBN network. Your link appears on homepage and inner pages of that .EDU domain. Strongest .EDU option we offer, that is why it costs more than EDU Blogpost. Priced at $5 per link, minimum order 50 links = $250 total.",
    features: [
      "Sitewide .EDU sidebar link: homepage + inner pages",
      "High-trust .EDU extension in our network",
      "Built for Finance, SaaS, iGaming, Crypto & E-Com",
      "Priority indexing + white-label spreadsheet report",
    ],
    deliverables: [
      {
        title: "Sitewide Academic Authority",
        desc: "Your link sits in the sidebar of a .EDU domain, so it gets value from every indexed page of that domain.",
      },
      {
        title: "Built for Hard Keywords",
        desc: "Best when standard Homepage Posts stop moving a competitive keyword.",
      },
      {
        title: "Limited Slots Per Domain",
        desc: "We limit how many sidebar slots each .EDU domain carries, so your link keeps more value.",
      },
    ],
    faqs: [
      {
        q: "Who should order EDU PBN Blogroll placements?",
        a: "Agencies and brands in high-difficulty niches (Fintech, SaaS, iGaming, Legal, E-Commerce) who need maximum authority transfer from .EDU domains.",
      },
      {
        q: "How fast will I see ranking movement?",
        a: "Most campaigns see crawler activity within 7 days and SERP movement within 2 to 4 weeks, but rankings are never guaranteed and depend on your site too.",
      },
    ],
  },

  // 9. EDU & GOV BACKLINK - PBN on .EDU / .GOV, simple placement, NO stealth/hidden wording
  {
    id: "hidden_links",
    slug: "edu-gov-backlink",
    aliases: ["hidden_links", "hidden-links", "edu-gov-backlinks"],
    category: "edu_gov",
    categoryLabel: "EDU & GOV Network (PBN)",
    name: "EDU & GOV Backlink",
    shortSubtitle: "Simple PBN link on .EDU / .GOV domains",
    heroHeadline: "Simple .EDU & .GOV Link on",
    heroHighlight: "Our Network. No Article Needed.",
    price: 1.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DA 50–85+",
    tlds: ".EDU • .GOV",
    turnaround: "1–2 Days",
    badge: "Budget Authority",
    badgeColor: "bg-[#f3e8fd] text-[#9334e6]",
    topAccent: "bg-[#9334e6]",
    desc: "A simple PBN placement on a .EDU or .GOV domain inside our own network. It is a low-cost way to add .EDU / .GOV extension diversity to your profile. Priced at $1 per link, minimum order 50 links = $50 total.",
    features: [
      ".EDU & .GOV extensions inside our own network",
      "Dofollow link, crawlable by Googlebot and Bingbot",
      "Good for trust diversity, not a replacement for an article link",
      "Limited slots per domain to keep network safe",
    ],
    deliverables: [
      {
        title: ".EDU & .GOV Extension Diversity",
        desc: "Adds .EDU and .GOV extensions to a profile that is mostly .COM / .NET, so your profile looks more diverse.",
      },
      {
        title: "Dofollow & Crawlable",
        desc: "Normal dofollow link. Not hidden, not cloaked. Googlebot can crawl and count it like any other link.",
      },
      {
        title: "Campaign Management",
        desc: "Handled by our team with reporting on WhatsApp / Telegram.",
      },
    ],
    faqs: [
      {
        q: "Why is this only $1, when EDU Blogpost is $3 and EDU Blogroll is $5?",
        a: "Because this is a simple placement without a full article and without sitewide exposure. Blogpost ($3) includes a full article. Blogroll ($5) is sitewide on every page. This ($1) is a single placement, so it costs less.",
      },
      {
        q: "Are these links dofollow and crawlable by Googlebot?",
        a: "Yes. Dofollow and fully crawlable by Googlebot, Bingbot, and AI crawlers. Nothing is hidden from search engines.",
      },
    ],
  },

  // 10. COMPLETE SEO PACKAGE - MIX of PBN services
  {
    id: "complete_seo",
    slug: "complete-seo-package",
    aliases: ["complete_seo", "complete-seo"],
    category: "solutions",
    categoryLabel: "Managed SEO Solutions",
    name: "Complete SEO Package",
    shortSubtitle: "Mixed PBN campaign, done for you",
    heroHeadline: "All-In-One Managed",
    heroHighlight: "Mixed PBN Campaign.",
    price: 0.5,
    unitLabel: "link",
    minQty: 500,
    metric: "Multi-Tier DR 50+",
    tlds: ".COM • .ID • .EDU Mix",
    turnaround: "1–2 Days",
    badge: "All-In-One",
    badgeColor: "bg-[#e8f0fe] text-[#1a73e8]",
    topAccent: "bg-[#1a73e8]",
    desc: "A done-for-you mix of our PBN services: mostly Homepage Posts + Sticky Posts, with a smaller share of EDU Blogposts for trust. We decide the mix based on your site age and niche. Priced at $0.50 per link because it is bulk PBN mix, minimum order 500 links = $250 total. It is cheaper per link than buying EDU Blogroll alone, because only a small part of this mix is EDU.",
    features: [
      "Mix of Homepage PBN, Sticky PBN & EDU PBN Blogposts",
      "Natural anchor mix: Branded, Exact, Partial",
      "Drip-feed speed matched to your domain age",
      "Dedicated campaign manager & white-label master report",
    ],
    deliverables: [
      {
        title: "Diversified TLD Footprint",
        desc: "Blends .COM, .NET, .ORG, regional .ID, and .EDU domains so your profile looks natural, not all one type.",
      },
      {
        title: "Anchor Text Optimisation",
        desc: "We structure safe exact-match, partial-match, and branded anchor ratios across your URLs.",
      },
      {
        title: "End-to-End Execution",
        desc: "Submit URLs and keywords once after checkout. We handle content, placement, and reporting.",
      },
    ],
    faqs: [
      {
        q: "What is included in the Complete SEO Package?",
        a: "Every 500-link unit includes a team-managed blend of DA/DR 50+ Homepage Posts, Sticky Posts, and a smaller share of EDU Blogposts. Exact split depends on your site and niche, we do not sell it as 500 EDU links.",
      },
      {
        q: "Can agencies resell the Complete SEO Package?",
        a: "Yes. All reports are unbranded and white-label so you can hand them directly to your clients.",
      },
    ],
  },

  // 11. RANK ON FIRST PAGE - MIX, aggressive, NO guarantee
  {
    id: "rank_first_page",
    slug: "rank-on-first-page",
    aliases: ["rank_first_page", "first-page-seo"],
    category: "solutions",
    categoryLabel: "Managed SEO Solutions",
    name: "Rank on First Page",
    shortSubtitle: "Aggressive PBN mix for stuck keywords",
    heroHeadline: "Aggressive Authority Mix for",
    heroHighlight: "Keywords Stuck on Page 2-3.",
    price: 8.0,
    unitLabel: "link",
    minQty: 50,
    metric: "DR 60–80+ Power",
    tlds: ".COM • .EDU • .GOV",
    turnaround: "1–2 Days",
    badge: "Page 1 Power",
    badgeColor: "bg-[#e6f4ea] text-[#1e8e3e]",
    topAccent: "bg-[#34a853]",
    desc: "An aggressive, team-managed mix for stubborn keywords stuck on Page 2 or Page 3. Uses our highest-DR PBN domains (DR 60-80+), plus a heavier share of Sticky Posts, EDU Blogrolls, and EDU/GOV placements than Complete SEO. This is an effort-based campaign, not a ranking guarantee. If you do not rank, we do not promise a refund for ranking alone. Priced at $8 per link, minimum order 50 links = $400 total.",
    features: [
      "Priority placement on our highest-DR (DR 60–80+) PBN domains",
      "Heavier share of Sticky Posts + EDU Blogroll + EDU/GOV placements",
      "Competitor gap analysis & anchor velocity planning",
      "Direct WhatsApp / Telegram strategist support",
    ],
    deliverables: [
      {
        title: "High-DR Power Placements",
        desc: "Focuses on top-percentile domains in our network with strong referring domains and pinned homepage visibility.",
      },
      {
        title: "Stuck Keyword Breaker",
        desc: "Built to close the authority gap against competitors in Finance, SaaS, E-Commerce, and iGaming.",
      },
      {
        title: "Indexing Follow-Up",
        desc: "Every placement is checked and pushed for Googlebot discovery, with a report you can verify.",
      },
    ],
    faqs: [
      {
        q: "How is 'Rank on First Page' different from Complete SEO Package?",
        a: "Complete SEO is a balanced, bulk mix (mostly standard PBN). Rank on First Page is aggressive: it uses only our highest-DR domains and a much larger share of Sticky + EDU/GOV inventory. That is why it costs $8 per link vs $0.50.",
      },
      {
        q: "How many target keywords should I submit?",
        a: "For a 50 to 250 link campaign, focus on 1 to 3 money pages and 5 to 10 core keywords. Spreading 50 links across 50 keywords will not move anything.",
      },
    ],
  },

  // 12. CUSTOM SEO SOLUTIONS - Build your own PBN mix
  {
    id: "custom_seo",
    slug: "custom-seo-solutions",
    aliases: ["custom_seo", "custom-seo"],
    category: "solutions",
    categoryLabel: "Managed SEO Solutions",
    name: "Custom SEO Solutions",
    shortSubtitle: "Build your own PBN mix",
    heroHeadline: "Tailored Enterprise & Agency",
    heroHighlight: "Custom PBN Mix.",
    price: 4.0,
    unitLabel: "link",
    minQty: 50,
    metric: "Custom DR 50+",
    tlds: "Custom TLD & Geo Selection",
    turnaround: "1–2 Days",
    badge: "Enterprise Custom",
    badgeColor: "bg-[#fef7e0] text-[#f29900]",
    topAccent: "bg-[#fbbc04]",
    desc: "Need a custom mix? Choose how many Homepage Posts, Sidebar, Sticky, .ID, or EDU placements you want, plus drip-feed speed and geo. Use the configurator on this page to build your mix, or combine services on our main catalogue page. Starting price is $4 per link, minimum order 50 links = $200 total. Final price depends on the mix you pick.",
    features: [
      "Split link volume across multiple client domains",
      "Custom geo: Global .COM, Indonesian .ID, or EDU",
      "Custom drip-feed from 3 days to 30 days",
      "Dedicated account manager via WhatsApp & Telegram",
    ],
    deliverables: [
      {
        title: "Multi-Client Agency Splitting",
        desc: "Order in bulk and split your links across 5, 10, or 50+ client URLs with separate white-label tabs.",
      },
      {
        title: "Custom Editorial Guidelines",
        desc: "Share your brand guidelines, banned words, or language needs in the form after checkout.",
      },
      {
        title: "Flexible Campaign Scaling",
        desc: "Build a custom mix in the configurator on this page, or combine multiple services in our main Campaign Builder.",
      },
    ],
    faqs: [
      {
        q: "Can I specify custom instructions for different URLs?",
        a: "Yes. After checkout, you can paste your URLs, anchor texts, and instructions in the form, or message our team on WhatsApp / Telegram.",
      },
      {
        q: "Do you offer wholesale volume for SEO agencies?",
        a: "Yes. Custom mixes start from $4.00 per link, with bulk scaling up to 5,000+ placements per order. Final per-link price depends on which PBN services you mix.",
      },
    ],
  },
];
