// import teamCeo from "@/assets/team-ceo.jpg";
// import teamOps from "@/assets/team-ops.jpg";
// import teamExports from "@/assets/team-exports.jpg";

import princeImg from "../../src/assets/leaderImg/Prince.jpeg";
import peterImg from "../../src/assets/leaderImg/Peter.jpeg";
import alozieImg from "../../src/assets/leaderImg/Alozie.jpeg";

export interface Leader {
    slug: string;
    name: string;
    role: string;
    image: string;
    tagline: string;
    preview: string;
    bio: string[];
    experience: string[];
    expertise: string[];
    education: string[];
    achievements: string[];
    vision: string;
    specializations: string[];
    certifications: string[];
    linkedin: string;
    email: string;
}

export const leadership: Leader[] = [
    {
        slug: "prince-njoku",
        name: "Barr. Prince Njoku",
        role: "CHAIRMAN/CEO",
        image: princeImg,
        tagline: "Agriculture is the heartbeat of our economy — and we’re here to make it stronger, more sustainable, and more inclusive.",
        preview:
            "Barr. Prince Njoku is a Managing Partner and U.S.-licensed Attorney with over a decade of experience in litigation, regulatory advisory.",
        bio: [
            "Barr. Prince Njoku is a Managing Partner and U.S.-licensed Attorney with over a decade of experience in litigation, regulatory advisory, and corporate counsel roles across private practice, in-house, and consulting environments. He brings extensive cross-border advisory expertise, particularly within the agriculture and agro-industrial sector",

            "As Chairman/CEO of PK5 Agro-Allied Nigeria Limited, Barr. Njoku provides strategic leadership and governance oversight for large-scale agricultural and agro-processing operations, with responsibilities spanning regulatory compliance, agribusiness development, logistics coordination, and export planning. He has also advised businesses on compliance frameworks, operational strategy, and sector-specific regulatory requirements, supporting sustainable agricultural development and value chain expansion.",
        ],
        experience: [
            "20+ years across commodities, finance, and operations leadership",
            "Former executive roles in West African agribusiness and trade",
            "Board advisor to multiple agricultural development initiatives",
        ],
        expertise: ["Agro-commodity trading", "Corporate strategy", "Cross-border partnerships", "Sustainable sourcing"],
        education: [
            "MBA, Lagos Business School",
            "B.Sc. Economics, University of Ibadan",
        ],
        achievements: [
            "Scaled PK5 from a single-crop operation to a multi-product export business",
            "Established long-term offtake partnerships across Europe, Asia, and the Middle East",
            "Recognized for advancing smallholder farmer inclusion programs",
        ],
        vision:
            "To make PK5 Agro-Allied the benchmark for quality, traceability, and ethical sourcing in African agriculture.",
        specializations: ["Executive leadership", "Global trade strategy", "Agribusiness innovation"],
        certifications: ["Member, Nigerian Economic Summit Group", "Fellow, Institute of Directors"],
        linkedin: "#",
        email: "mailto:prince@pk5agro.com",
    },
    {
        slug: "peter-eziakor",
        name: "Peter Eziakor",
        role: "CORPORATE AFFAIRS",
        image: peterImg,
        tagline: "Land is the foundation of agriculture — and we’re committed to securing it responsibly, sustainably, and with respect for communities.",
        preview:
            "Peter Eziakor is a seasoned real estate professional with over two decades of experience, with an expanded focus in agriculture and agro-industrial land development since 2004.",
        bio: [
            "Peter Eziakor is a seasoned real estate professional with over two decades of experience, with an expanded focus in agriculture and agro-industrial land development since 2004. He brings strong expertise in land acquisition, property brokerage, and investment advisory, supporting agricultural projects through strategic site identification, land negotiations, and stakeholder engagement. His deep understanding of land valuation, regulatory frameworks, and market dynamics positions him as a trusted advisor in securing and managing land assets critical to large-scale agricultural operations.",
            "Over the years, Peter has built an extensive network across the real estate and land management ecosystem, enabling him to identify high-value agricultural development opportunities and facilitate seamless land transactions. He is committed to transparency, due diligence, and long-term value creation, consistently guiding investors and project stakeholders through complex land acquisition and agro-development processes with professionalism and strategic insight."
        ],
        experience: [
            "15+ years in agro-processing and supply chain leadership",
            "Led plant modernization and ISO-aligned quality programs",
            "Built multi-site logistics networks across Nigeria",
        ],
        expertise: ["Operations management", "Quality assurance", "Supply chain design", "Process optimization"],
        education: [
            "M.Sc. Industrial Engineering, University of Lagos",
            "B.Eng. Mechanical Engineering, Covenant University",
        ],
        achievements: [
            "Reduced processing downtime by 35% through systems redesign",
            "Implemented traceability from farmgate to export container",
            "Built PK5's quality assurance and food-safety frameworks",
        ],
        vision:
            "To run operations so reliably that every PK5 product carries the same promise — anywhere in the world.",
        specializations: ["Lean operations", "Food-grade processing", "Logistics & warehousing"],
        certifications: ["Lean Six Sigma Black Belt", "HACCP Certified"],
        linkedin: "#",
        email: "mailto:peter@pk5agro.com",
    },
    {
        slug: "ibrahim-musa",
        name: "Alozie Okwukanma",
        role: "HEAD OF ICT",
        image: alozieImg,
        tagline: "Technology is the engine of modern agriculture — and we’re here to drive innovation, efficiency, and data-driven decision-making across our operations.",
        preview:
            "Alozie Okwukanma is a full-stack software engineer with over eight years of experience building scalable, enterprise-grade applications, with growing specialization in agriculture and agro-industrial management systems.",
        bio: [
            "Alozie Okwukanma is a full-stack software engineer with over eight years of experience building scalable, enterprise-grade applications, with growing specialization in agriculture and agro-industrial management systems. He leverages deep expertise in the Microsoft .NET ecosystem, cloud platforms, and modern web technologies—including C#, ASP.NET, .NET Core, Angular, React, and Microsoft Azure—to develop digital solutions that support agricultural operations, data-driven decision-making, and process optimization. He has strong experience in Windows-based enterprise and Microsoft Office-integrated solutions, with solid expertise in financial systems. He has contributed to high-impact projects at global organizations such as Microsoft and Dolby Laboratories, delivering robust systems adaptable to complex operational environments.",
            "He currently serves as a Lead Software Engineer, where he drives system architecture, leads development teams, and collaborates with stakeholders to deliver efficient, high-quality solutions. His experience spans the full software development lifecycle, with increasing focus on applying technology to agricultural operations, including data analytics, workflow automation, operational monitoring, and agribusiness process management. Known for his analytical approach and technical depth, he translates complex operational requirements into scalable systems that enhance efficiency, productivity, and strategic decision-making within the agricultural sector.",
        ],
        experience: [
            ""
        ],
        expertise: ["Export strategy", "Trade compliance", "Buyer relationship management", "Shipping & logistics"],
        education: [
            // "MBA International Business, IE Business School (Madrid)",
            // "B.Sc. International Relations, Ahmadu Bello University",
            ""
        ],
        achievements: [
            // "Opened PK5's first European and Asian export corridors",
            // "Negotiated long-term framework contracts with global buyers",
            // "Maintained a 100% on-time documentation record across active markets",
            ""
        ],
        vision:
            "To position Nigerian agro-products as a benchmark of quality and reliability in every market we enter.",
        specializations: ["Export operations", "International negotiation", "Trade finance"],
        certifications: ["Certified International Trade Professional (CITP)", "Member, Nigerian Export Promotion Council"],
        linkedin: "#",
        email: "mailto:ibrahim@pk5agro.com",
    },
];

export const getLeaderBySlug = (slug?: string) =>
    leadership.find((l) => l.slug === slug);
