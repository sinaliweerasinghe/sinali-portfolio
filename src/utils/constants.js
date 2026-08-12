// utils/constants.js
import SkillForgeImg from '../assets/projects/Skillforge/1.png';
import ERPSystemImg from '../assets/projects/ERP/dashboard.png';
import LaundryMgmtImg from '../assets/projects/Laundry/1.png';
import WorldHiveImg from '../assets/projects/Worldhive/home.png';
import ZenlokFloraImg from '../assets/projects/Zenlok/shop.png';

// Import screenshots for each project
// SkillForge screenshots
import SkillForge1 from '../assets/projects/Skillforge/1.png';
// Add more SkillForge screenshots as you have them
// import SkillForge2 from '../assets/projects/Skillforge/2.png';
// import SkillForge3 from '../assets/projects/Skillforge/3.png';
// import SkillForge4 from '../assets/projects/Skillforge/4.png';

// ERP screenshots
import ERP1 from '../assets/projects/ERP/dashboard.png';
import ERP2 from '../assets/projects/ERP/demo_dashboard.png';
import ERP3 from '../assets/projects/ERP/employees.png';
import ERP4 from '../assets/projects/ERP/inventory.png';
import ERP5 from '../assets/projects/ERP/login.png';
import ERP6 from '../assets/projects/ERP/orders.png';

// Laundry screenshots
import Laundry1 from '../assets/projects/Laundry/1.png';
import Laundry2 from '../assets/projects/Laundry/2.png';
import Laundry3 from '../assets/projects/Laundry/3.png';
import Laundry4 from '../assets/projects/Laundry/4.png';
import Laundry5 from '../assets/projects/Laundry/5.png';

// WorldHive screenshots
import WorldHive1 from '../assets/projects/Worldhive/home.png';
import WorldHive2 from '../assets/projects/Worldhive/1.png';
import WorldHive3 from '../assets/projects/Worldhive/2.png';
import WorldHive4 from '../assets/projects/Worldhive/3.png';
import WorldHive5 from '../assets/projects/Worldhive/4.png';

// Zenlok screenshots
import Zenlok1 from '../assets/projects/Zenlok/shop.png';
import Zenlok2 from '../assets/projects/Zenlok/gift.png';
import Zenlok3 from '../assets/projects/Zenlok/about.png';
import Zenlok4 from '../assets/projects/Zenlok/contact.png';
import Zenlok5 from '../assets/projects/Zenlok/login.png';
import Zenlok6 from '../assets/projects/Zenlok/track.png';
import Zenlok7 from '../assets/projects/Zenlok/home.png';

export const projects = [
  {
    id: 1,
    title: "SkillForge - AI-Powered Interview Prep",
    category: "Full-Stack | AI Integration",
    description: "Full-stack interview preparation platform with AI-powered assistance, secure authentication, and performance analytics. The platform helps job seekers practice interviews with AI-powered feedback and detailed performance tracking.",
    shortDescription: "AI-powered interview preparation platform",
    image: SkillForgeImg,
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "WSO2 Asgardeo", "Google Gemini AI", "Material UI"],
    github: "https://github.com/sinaliweerasinghe/SkillForge",
    demo: "https://skill-forge-silk.vercel.app",
    isLive: true,
    screenshots: [
      { id: 1, src: SkillForge1, alt: "SkillForge Dashboard" },
      // Add more screenshots when available
      // { id: 2, src: SkillForge2, alt: "SkillForge Interview" },
    ],
    highlights: [
      "OAuth 2.0 & OIDC authentication with WSO2 Asgardeo",
      "RESTful APIs for user management and AI chat",
      "Google Gemini AI for interview assistance",
      "Deployed on Vercel, Render, and Aiven Cloud",
      "Real-time performance analytics dashboard",
      "Secure session management with JWT tokens"
    ]
  },
  {
    id: 2,
    title: "Cloud-Based Multi-Tenancy ERP System",
    category: "Enterprise | Cloud Architecture",
    description: "Architected a shared-database ERP system with row-level tenant isolation supporting 5+ simulated organizations. This enterprise-grade solution provides comprehensive business management features with multi-tenant architecture.",
    shortDescription: "Multi-tenant ERP with 35% cost reduction",
    image: ERPSystemImg,
    tech: ["React.js", "Node.js", "PHP", "MySQL", "XML", "Docker"],
    github: "https://github.com/sinaliweerasinghe/erp-management-system",
    demo: null,
    isLive: false,
    screenshots: [
      { id: 1, src: ERP1, alt: "ERP Dashboard" },
      { id: 2, src: ERP2, alt: "ERP Demo Dashboard" },
      { id: 3, src: ERP3, alt: "ERP Employees" },
      { id: 4, src: ERP4, alt: "ERP Inventory" },
      { id: 5, src: ERP5, alt: "ERP Login" },
      { id: 6, src: ERP6, alt: "ERP Orders" },
    ],
    highlights: [
      "35% estimated infrastructure cost reduction",
      "XML-based tenant configuration loader",
      "RBAC for 3 user tiers across tenants",
      "Docker containerization planned",
      "Row-level data isolation for security",
      "Scalable architecture for enterprise growth"
    ]
  },
  {
    id: 3,
    title: "Laundry Management System",
    category: "Group Project | Full-Stack",
    description: "Comprehensive laundry management system with dynamic pricing engine and automated order-to-payment tracking. This system streamlines laundry operations with real-time order management and inventory tracking.",
    shortDescription: "Laundry management with 50% efficiency boost",
    image: LaundryMgmtImg,
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sinaliweerasinghe/Laundry-Management-System",
    demo: null,
    isLive: false,
    screenshots: [
      { id: 1, src: Laundry1, alt: "Laundry Dashboard" },
      { id: 2, src: Laundry2, alt: "Laundry Orders" },
      { id: 3, src: Laundry3, alt: "Laundry Services" },
      { id: 4, src: Laundry4, alt: "Laundry Pricing" },
      { id: 5, src: Laundry5, alt: "Laundry Reports" },
    ],
    highlights: [
      "50% reduction in manual pricing time",
      "20% decrease in pricing calculation errors",
      "Normalized schema for 5+ service categories",
      "Team collaboration with Git",
      "Automated order tracking system",
      "Inventory management with real-time updates"
    ]
  },
  {
    id: 4,
    title: "World Hive - Book Review Platform",
    category: "Frontend | Content Platform",
    description: "Responsive book review website with dynamic content delivery through REST APIs and JSON data processing. Users can discover, review, and rate books in a modern, user-friendly interface.",
    shortDescription: "Book review platform with 70% faster content delivery",
    image: WorldHiveImg,
    tech: ["HTML", "Bootstrap", "CSS", "JavaScript", "REST APIs"],
    github: "https://github.com/sinaliweerasinghe/World-Hive",
    demo: null,
    isLive: false,
    screenshots: [
      { id: 1, src: WorldHive1, alt: "World Hive Home" },
      { id: 2, src: WorldHive2, alt: "World Hive Books" },
      { id: 3, src: WorldHive3, alt: "World Hive Reviews" },
      { id: 4, src: WorldHive4, alt: "World Hive Authors" },
      { id: 5, src: WorldHive5, alt: "World Hive Categories" },
    ],
    highlights: [
      "70% improved content delivery efficiency",
      "25% of core content modules delivered",
      "REST API integration for dynamic updates",
      "5-member team collaboration",
      "Responsive design across all devices",
      "User-friendly book discovery interface"
    ]
  },
  {
    id: 5,
    title: "Zenlok Flora - E-Commerce Website",
    category: "E-Commerce | Full-Stack",
    description: "Modern e-commerce platform for a florist business with product management, shopping cart, and secure checkout. Provides a seamless shopping experience with beautiful floral displays.",
    shortDescription: "Florist e-commerce with seamless shopping experience",
    image: ZenlokFloraImg,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
    github: "https://github.com/sinaliweerasinghe/Zenlok-Flora",
    demo: null,
    isLive: false,
    screenshots: [
      { id: 1, src: Zenlok1, alt: "Zenlok Shop" },
      { id: 2, src: Zenlok2, alt: "Zenlok Gifts" },
      { id: 3, src: Zenlok3, alt: "Zenlok About" },
      { id: 4, src: Zenlok4, alt: "Zenlok Contact" },
      { id: 5, src: Zenlok5, alt: "Zenlok Login" },
      { id: 6, src: Zenlok6, alt: "Zenlok Track" },
      { id: 7, src: Zenlok7, alt: "Zenlok Home" },
    ],
    highlights: [
      "Product management and inventory system",
      "Shopping cart with real-time updates",
      "Secure checkout with payment integration",
      "Responsive design for all devices",
      "User authentication and profile management",
      "Order tracking and history"
    ]
  }
];