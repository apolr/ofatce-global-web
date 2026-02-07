/**
 * Projects Data File
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Upload your project image(s) through the Lovable chat interface
 * 2. Note the path (e.g., "/lovable-uploads/abc123.png")
 * 3. Add a new object to the portfolioItems array below
 * 4. Fill in all required fields
 * 
 * BUSINESS LINE VALUES (must match exactly):
 * - "Oil & Gas" for Oil & Gas projects
 * - "Audiovisual & Networking" for AV/Tech projects
 */

export interface Project {
  id: number;
  title: string;
  businessLine: "Oil & Gas" | "Audiovisual & Networking";
  tags: string[];
  images: string[];  // Array of image paths - first image is the primary/featured image
  problem: string;
  solution: string;
  result: string;
  client: string;
  duration: string;
  location: string;
}

export const portfolioItems: Project[] = [
  {
    id: 1,
    title: "Barcadi Limited Network Infrastructure",
    businessLine: "Audiovisual & Networking",
    tags: ["Network Infrastructure", "Structured Cabling", "Enterprise Networking"],
    images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"],
    problem: "Barcadi Limited required comprehensive networking infrastructure cabling to ensure reliable connectivity and high-performance network operations across their Lagos facility.",
    solution: "Delivered end-to-end structured cabling solutions with enterprise-grade networking equipment, ensuring optimal network performance and scalability for future growth.",
    result: "Successfully established robust network infrastructure enabling seamless communication and reliable data transfer throughout the facility.",
    client: "Barcadi Limited",
    duration: "3 months",
    location: "Lagos, Nigeria"
  },
  {
    id: 2,
    title: "Avanti Communications Video Conferencing",
    businessLine: "Audiovisual & Networking",
    tags: ["Video Conferencing", "AV Systems", "Communication Solutions"],
    images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"],
    problem: "Avanti Communications needed upgraded video conferencing facilities to enable seamless remote collaboration and communication with global partners.",
    solution: "Implemented advanced video conferencing systems with high-definition capabilities, integrated with existing IT infrastructure for optimal performance.",
    result: "Enhanced communication capabilities enabling efficient remote meetings and collaboration, improving operational efficiency by 40%.",
    client: "Avanti Communications",
    duration: "2 months",
    location: "Lagos, Nigeria"
  },
  {
    id: 3,
    title: "TotalEnergies Critical Operations Support",
    businessLine: "Oil & Gas",
    tags: ["Oil & Gas", "Operations Support", "Energy Technology"],
    images: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"],
    problem: "TotalEnergies E&P Nigeria required specialized technology services to support critical oil & gas operations and ensure operational continuity.",
    solution: "Provided comprehensive technology solutions through our partnership with Southgate Technologies, including monitoring systems and operational support infrastructure.",
    result: "Delivered reliable technology support enabling continuous operations and enhanced safety protocols in critical energy sector operations.",
    client: "TotalEnergies E&P Nigeria",
    duration: "6 months",
    location: "Lagos, Nigeria"
  },
  {
    id: 4,
    title: "Ministry of Defense Secure Networks",
    businessLine: "Audiovisual & Networking",
    tags: ["Security", "Government", "Secure Networks"],
    images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"],
    problem: "The Nigerian Ministry of Defense required secure networking solutions to ensure robust security and reliable communications for sensitive operations.",
    solution: "Implemented military-grade secure networking infrastructure with advanced encryption and monitoring capabilities, ensuring compliance with government security standards.",
    result: "Established highly secure communication networks enabling safe and reliable data transmission for defense operations.",
    client: "Nigerian Ministry of Defense",
    duration: "4 months",
    location: "Abuja, Nigeria"
  },
  {
    id: 5,
    title: "Banking Sector Network Solutions",
    businessLine: "Audiovisual & Networking",
    tags: ["Banking", "Financial Services", "Network Security"],
    images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"],
    problem: "Major banking institutions needed comprehensive network infrastructure solutions to ensure secure and reliable financial operations with zero downtime tolerance.",
    solution: "Deployed enterprise-level network infrastructure with redundant systems, advanced security protocols, and 24/7 monitoring to meet stringent banking requirements.",
    result: "Achieved 99.9% uptime with enhanced security measures, enabling secure financial transactions and improved customer service delivery.",
    client: "Leading Nigerian Banks",
    duration: "8 months",
    location: "Multiple locations across Nigeria"
  },
  {
    id: 6,
    title: "Oil & Gas Infrastructure Development",
    businessLine: "Oil & Gas",
    tags: ["Infrastructure", "Project Management", "Safety"],
    images: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"],
    problem: "Major oil & gas companies required end-to-end infrastructure development and project management to ensure operational excellence and safety compliance.",
    solution: "Provided comprehensive project management services including infrastructure design, implementation oversight, and safety protocol integration throughout the project lifecycle.",
    result: "Successfully delivered multiple infrastructure projects on time and within budget, achieving 100% safety compliance and operational readiness.",
    client: "Major Oil & Gas Companies",
    duration: "12 months",
    location: "Various offshore and onshore locations"
  }
];

export const filters = [
  "All",
  "Oil & Gas",
  "Audiovisual & Networking"
] as const;

export type FilterType = typeof filters[number];
