import {
  FaSearch,
  FaYoutube,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaFacebook,
  FaInstagram,
  FaCogs,
  FaEnvelope,
  FaLightbulb,
} from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher on Google, attract organic traffic and grow your business with long-term search visibility.",
    details:
      "I provide strategic SEO solutions designed to improve Google rankings, increase organic traffic, and build long-term search visibility for your business.",
    features: [
      "SEO Audit",
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Local SEO",
      "Off-Page SEO",
    ],
    icon: FaSearch,
  },

  {
    id: 2,
    title: "On-Page SEO",
    description:
      "Optimise your page content, titles, headings and structure so search engines understand and rank your site.",
    details:
      "I optimize website content, meta titles, descriptions, headings, internal links, and page structure to improve search engine understanding and rankings.",
    features: [
      "Title Optimization",
      "Meta Description",
      "Heading Optimization",
      "Content Optimization",
      "Internal Linking",
      "URL Optimization",
    ],
    icon: FaSearch,
  },

  {
    id: 3,
    title: "YouTube SEO",
    description:
      "Get your videos found in YouTube search and suggested results with optimised titles, tags and descriptions.",
    details:
      "I optimize YouTube videos and channels to improve search visibility, discoverability, engagement, and opportunities to appear in suggested results.",
    features: [
      "YouTube Keyword Research",
      "Title Optimization",
      "Description Optimization",
      "Tags Optimization",
      "Video SEO",
      "Channel SEO",
    ],
    icon: FaYoutube,
  },

  {
    id: 4,
    title: "YouTube Optimization",
    description:
      "Improve your channel's views, watch time and growth through better thumbnails, titles and video strategy.",
    details:
      "I help optimize your YouTube channel and videos with better thumbnails, titles, descriptions, and content strategies focused on views and audience growth.",
    features: [
      "Thumbnail Strategy",
      "Title Optimization",
      "Video Strategy",
      "Watch Time Optimization",
      "Channel Optimization",
      "Audience Growth",
    ],
    icon: FaYoutube,
  },

  {
    id: 5,
    title: "Digital Marketing Strategy",
    description:
      "A clear, data-driven plan that connects SEO, ads and social media to achieve your business goals.",
    details:
      "I develop practical digital marketing strategies that combine SEO, paid advertising, social media, content, and analytics to support measurable business goals.",
    features: [
      "Marketing Strategy",
      "SEO Strategy",
      "Social Media Strategy",
      "Paid Ads Strategy",
      "Content Strategy",
      "Performance Tracking",
    ],
    icon: FaLightbulb,
  },

  {
    id: 6,
    title: "Keyword Research",
    description:
      "Find the high-value keywords your customers search for, so your content ranks and attracts the right traffic.",
    details:
      "I research relevant and high-value keywords based on search intent, competition, and business goals to help attract qualified organic traffic.",
    features: [
      "Keyword Discovery",
      "Search Intent Analysis",
      "Competitor Keywords",
      "Long-Tail Keywords",
      "Keyword Mapping",
      "Search Volume Analysis",
    ],
    icon: FaSearch,
  },

  {
    id: 7,
    title: "Audience Research",
    description:
      "Understand who your customers are, what they want and where they spend time, so every message lands.",
    details:
      "I research your target audience to understand their interests, behavior, needs, pain points, and preferred platforms so marketing campaigns can be more effective.",
    features: [
      "Target Audience Research",
      "Customer Behavior",
      "Audience Segmentation",
      "Interest Analysis",
      "Platform Research",
    ],
    icon: FaUsers,
  },

  {
    id: 8,
    title: "Competitor Analysis",
    description:
      "Learn what your competitors do well, find their gaps and use those insights to get ahead.",
    details:
      "I analyze competitors, their keywords, content, advertising strategies, social presence, and online visibility to identify opportunities for your business.",
    features: [
      "Competitor Research",
      "SEO Competitor Analysis",
      "Keyword Gap Analysis",
      "Content Analysis",
      "Social Media Analysis",
      "Competitor Ad Research",
    ],
    icon: FaChartLine,
  },

  {
    id: 9,
    title: "Google Ads",
    description:
      "Show up at the top of Google Search exactly when customers are looking for what you offer.",
    details:
      "I create and manage targeted Google Ads campaigns focused on reaching potential customers, generating leads, increasing conversions, and improving advertising performance.",
    features: [
      "Search Ads",
      "Keyword Research",
      "Campaign Setup",
      "Ad Copywriting",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
    icon: FaSearch,
  },

  {
    id: 10,
    title: "Facebook Ads",
    description:
      "Run targeted Facebook ad campaigns that deliver leads, sales and a better return on every taka spent.",
    details:
      "I create targeted Facebook advertising campaigns designed to reach the right audience, generate leads, increase sales, and improve campaign performance.",
    features: [
      "Facebook Ads Setup",
      "Audience Targeting",
      "Lead Campaigns",
      "Sales Campaigns",
      "Retargeting",
      "Pixel & Tracking",
    ],
    icon: FaFacebook,
  },

  {
    id: 11,
    title: "Online Advertising",
    description:
      "Reach more people across search, social and video platforms with ads built around your goals and budget.",
    details:
      "I develop online advertising campaigns across search, social, and video platforms based on your business objectives, target audience, and available budget.",
    features: [
      "Search Advertising",
      "Social Media Ads",
      "Video Advertising",
      "Audience Targeting",
      "Retargeting",
      "Performance Tracking",
    ],
    icon: FaBullhorn,
  },

  {
    id: 12,
    title: "Campaign Management",
    description:
      "End-to-end planning, launch, tracking and optimisation of your marketing campaigns for the best results.",
    details:
      "I manage marketing campaigns from initial planning and setup through monitoring, testing, optimization, and performance reporting.",
    features: [
      "Campaign Planning",
      "Campaign Setup",
      "Audience Targeting",
      "Performance Monitoring",
      "A/B Testing",
      "Campaign Optimization",
    ],
    icon: FaCogs,
  },

  {
    id: 13,
    title: "Lead Generation",
    description:
      "Turn visitors and followers into real enquiries with proven funnels, forms and targeted campaigns.",
    details:
      "I build targeted lead generation strategies using landing pages, forms, advertising campaigns, and conversion-focused funnels to generate quality enquiries.",
    features: [
      "Lead Generation Campaign",
      "Landing Page Strategy",
      "Lead Forms",
      "Facebook Lead Ads",
      "Conversion Funnels",
      "Lead Tracking",
    ],
    icon: FaUsers,
  },

  {
    id: 14,
    title: "Social Media Marketing (SMM)",
    description:
      "Grow your brand and reach the right audience with strategic content and campaigns across social platforms.",
    details:
      "I help businesses grow their social media presence through strategic content, audience engagement, paid campaigns, and platform-specific marketing strategies.",
    features: [
      "Social Media Strategy",
      "Content Strategy",
      "Facebook Marketing",
      "Instagram Marketing",
      "Audience Engagement",
      "Social Media Ads",
    ],
    icon: FaBullhorn,
  },

  {
    id: 15,
    title: "Facebook Marketing",
    description:
      "Build a strong Facebook presence that attracts followers, drives engagement and brings in new customers.",
    details:
      "I help businesses build and grow their Facebook presence through content planning, audience engagement, page optimization, and targeted marketing campaigns.",
    features: [
      "Facebook Page Management",
      "Content Planning",
      "Audience Engagement",
      "Facebook Ads",
      "Page Optimization",
      "Growth Strategy",
    ],
    icon: FaFacebook,
  },

  {
    id: 16,
    title: "Instagram Marketing",
    description:
      "Build a brand people follow and trust on Instagram using engaging posts, reels and targeted growth tactics.",
    details:
      "I develop Instagram marketing strategies using engaging content, reels, audience targeting, profile optimization, and growth-focused campaigns.",
    features: [
      "Instagram Management",
      "Content Strategy",
      "Reels Strategy",
      "Profile Optimization",
      "Audience Growth",
      "Instagram Ads",
    ],
    icon: FaInstagram,
  },

  {
    id: 17,
    title: "Social Media Management",
    description:
      "Consistent posting, community engagement and profile management so your social pages stay active and professional.",
    details:
      "I manage social media profiles with consistent content publishing, community engagement, profile optimization, and performance monitoring.",
    features: [
      "Content Scheduling",
      "Post Management",
      "Community Management",
      "Audience Engagement",
      "Profile Optimization",
      "Performance Monitoring",
    ],
    icon: FaCogs,
  },

  {
    id: 18,
    title: "Email Marketing",
    description:
      "Nurture leads and keep customers coming back with well-crafted emails that get opened and clicked.",
    details:
      "I create email marketing strategies that help businesses nurture leads, communicate with customers, promote offers, and build long-term relationships.",
    features: [
      "Email Campaigns",
      "Newsletter Setup",
      "Email Automation",
      "Lead Nurturing",
      "Email Copywriting",
      "Performance Tracking",
    ],
    icon: FaEnvelope,
  },
];

export default serviceData;