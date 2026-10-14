import type { ProjectCourse, Testimonial, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: "Pdeeps Institute of E-Commerce & Digital Business",
  shortName: "PDEEPS Institute",
  tagline: "Empowering Digital Entrepreneurs",
  officialDomain: "@pdib.in",
  officialEmail: "contact@pdib.in",
  supportEmail: "info@pdib.in",
  phone: "+91 82840 81752",
  phoneRaw: "8284081752",
  whatsappNumber: "918146701161",
  verificationNote: "All official communications, offer letters, and project assignments are sent strictly through our authorized domain: @pdib.in",
  aboutSummary: "At Pdeeps Institute of E-Commerce & Digital Business, we are committed to building practical e-commerce skills and empowering individuals with the knowledge, experience, and digital capabilities needed to grow in the evolving world of online business.",
  corePhilosophy: "Train. Apply. Work on Projects. Grow with Digital Business.",
  mission: "To empower individuals with practical digital skills, support businesses in their e-commerce operations, and create opportunities for professional development through industry-oriented training and project-based learning.",
  vision: "To become a trusted name in e-commerce education and digital business services by connecting practical learning, business requirements, and emerging opportunities in the digital marketplace.",
  commitment: "At PDEEPS, we believe that practical skills, continuous learning, and a professional approach are essential for long-term growth. We strive to create a learning environment where candidates develop their capabilities while businesses receive structured support for their e-commerce operations."
};

export const WHAT_WE_DO = [
  {
    id: "training",
    number: "01",
    title: "E-Commerce Training & Skill Development",
    description: "We provide practical training in e-commerce operations, helping candidates understand how online marketplaces such as Amazon, Flipkart, Myntra, and others operate. Training focuses on product listing, catalog management, product data entry, marketplace workflows, and essential digital business skills.",
    points: [
      "Catalog creation & SKU structuring",
      "Product title, description & attribute optimization",
      "Marketplace compliance & guidelines"
    ]
  },
  {
    id: "listing-services",
    number: "02",
    title: "Product Listing & Catalog Management Services",
    description: "We work with vendors, sellers, and business clients to support their ongoing e-commerce operations. Our services encompass product listing, catalog creation, product information management, and marketplace support activities to manage online product catalogs with high accuracy.",
    points: [
      "Vendor & merchant catalog synchronization",
      "Quality control & image specification adherence",
      "Bulk inventory updates & data curation"
    ]
  },
  {
    id: "practical-projects",
    number: "03",
    title: "Practical Projects & Business Exposure",
    description: "We introduce candidates to practical assignments and project-based learning opportunities across various segments of e-commerce and digital business. These projects help candidates apply their skills, understand real-world workflows, and cultivate professional working experience.",
    points: [
      "Real client project simulations & live accounts",
      "Cross-platform management exposure",
      "Productivity & accuracy metric tracking"
    ]
  },
  {
    id: "industry-learning",
    number: "04",
    title: "Industry-Oriented Learning",
    description: "Our approach emphasizes practical knowledge, task-based learning, accuracy, productivity, and an understanding of professional work processes. We aim to help candidates build relevant skills for the digital economy while supporting businesses with operational needs.",
    points: [
      "Task-oriented evaluation & performance feedback",
      "Direct alignment with current market demands",
      "Structured career readiness & practical habits"
    ]
  }
];
export const MARKETPLACE_PARTNERS = [
  { name: "Amazon", tag: "Global Marketplace", color: "#FF9900" },
  { name: "Flipkart", tag: "India Leader", color: "#2874F0" },
  { name: "Myntra", tag: "Fashion & Lifestyle", color: "#E11B55" },
  { name: "Meesho", tag: "Social Commerce", color: "#F43397" },
  { name: "AJIO", tag: "Premium Fashion", color: "#2C4152" },
  { name: "Blinkit", tag: "Quick Commerce", color: "#F8CB46" },
  { name: "Zepto", tag: "10-Min Delivery", color: "#800080" }
];

export const COURSES_DATA: ProjectCourse[] = [
  {
    id: "project-01",
    projectNumber: "Project 01",
    title: "E-Commerce Product Listing Project",
    badge: "Flexible Hours • Up to 3 Years Engagement",
    shortDescription: "Learn practical e-commerce product listing and catalog management skills through a structured training and certification process, followed by project-based work opportunities.",
    duration: "15 Days Training",
    certification: "Awarded After Training",
    engagement: "Up to 3 Years Project Duration",
    schedule: "Flexible Hours (Part-time / Full-time)",
    ageEligibility: "Up to 60 Years",
    marketplaces: ["Amazon", "Flipkart", "Myntra", "Meesho", "AJIO", "Blinkit", "Zepto"],
    whoCanApply: [
      "College Students & Fresh Graduates",
      "Homemakers and Housewives looking for independent income",
      "Working Professionals seeking flexible side work",
      "Individuals seeking home-based digital opportunities"
    ],
    learningPoints: [
      "Fundamentals of online product listing and catalog creation",
      "Product Information Management (PIM) and SKU naming protocols",
      "Marketplace-specific listing policies and compliance standards",
      "Image guideline compliance, variation listings & attribute mapping",
      "Data accuracy validation and bulk catalog uploads"
    ],
    processSteps: [
      "Complete the structured 15-day hands-on training program",
      "Pass the applicable practical assessment and receive certification",
      "Receive project details and onboarding instructions based on eligibility & availability",
      "Execute assigned product listing tasks with performance-based stipend payments"
    ],
    highlights: [
      "No prior product listing experience required",
      "Flexible schedule designed for homemakers and working professionals",
      "Long-term project engagement of up to 3 years",
      "Practical exposure to 7+ major e-commerce platforms"
    ],
    colorAccent: "#10b981"
  },
  {
    id: "project-02",
    projectNumber: "Project 02",
    title: "Customer Email Support & Query Management Project",
    badge: "Domestic & USA Projects • Professional Support",
    shortDescription: "Develop practical skills in customer email communication, query resolution, ticket handling, and professional support operations through structured training and project-based learning.",
    duration: "60 Days Training",
    certification: "Certified Support Specialist",
    engagement: "Structured Project Engagements",
    schedule: "Full-Time & Part-Time Shifts",
    ageEligibility: "18 to 48 Years",
    coverage: "India & USA Client Projects",
    whoCanApply: [
      "Individuals with basic written English capabilities",
      "Graduates & Undergraduates seeking professional corporate exposure",
      "Career switchers interested in global customer operations",
      "Remote work seekers looking for international query support workflows"
    ],
    learningPoints: [
      "Customer email communication and professional response writing",
      "Understanding customer queries and identifying the correct solutions",
      "Handling complaints, refund/replacement requests, follow-ups, and escalations",
      "Using standard email support tools, ticketing systems, and workflows",
      "Following company-specific SLA guidelines and quality audit standards",
      "Managing third-party email support processes for various business clients"
    ],
    processSteps: [
      "Complete the 60-day in-depth email support training curriculum",
      "Master ticketing software, query handling, and resolution procedures",
      "Pass quality checks, scenario assessments, and tone compliance evaluations",
      "Qualify for consideration in live India-based or USA-based support projects"
    ],
    highlights: [
      "Dual project categories: India-Based & USA-Based client workflows",
      "Real-world ticketing simulation and escalation handling",
      "Comprehensive training in professional corporate writing tone",
      "Performance-based compensation upon assignment"
    ],
    colorAccent: "#059669"
  },
  {
    id: "project-03",
    projectNumber: "Project 03",
    title: "Advanced Digital Marketing & AI Certification Course (ADMC)",
    badge: "Flagship 4-Month Course + Up to 6-Month Internship",
    shortDescription: "Build Digital Skills. Master AI Tools. Prepare for Your Career. A comprehensive program combining structured learning, case studies, and live projects. No technical background required.",
    duration: "4 Months Comprehensive Course",
    certification: "Recognized ADMC Industry Certification",
    engagement: "Up to 6 Months Internship (Subject to Eligibility)",
    schedule: "Daily 60-Minute Interactive Classes",
    ageEligibility: "Students, Freshers & Working Professionals",
    modules: "50+ Modules Across Digital Marketing & AI",
    classes: "60-Minute Daily Sessions",
    whoCanApply: [
      "Students & Freshers looking for high-growth digital careers",
      "Entrepreneurs & Business Owners seeking to scale online",
      "Marketing professionals aiming to master modern AI workflows",
      "Job seekers wanting practical portfolio projects & placement support"
    ],
    learningPoints: [
      "Digital Marketing Fundamentals & Strategic Frameworks",
      "Search Engine Optimization (SEO) & Content Architecture",
      "Social Media Marketing & Brand Building Tactics",
      "Content Marketing & Copywriting with Generative AI",
      "Paid Advertising Fundamentals (Meta Ads & Google Ads)",
      "Email Marketing Automations & Funnel Strategy",
      "AI Tools for Marketing, Visuals, Copy, and Productivity",
      "Campaign Planning, ROI Analytics, and Performance Optimization"
    ],
    processSteps: [
      "Course Enrollment & orientation session",
      "Four-Month Training Program with 50+ deep-dive modules",
      "Hands-on execution of 15+ practical case studies and live activities",
      "Assessments and Certification eligibility evaluation",
      "Internship Opportunity (up to 6 months) for qualified candidates",
      "Resume preparation, interview training, personality development & placement guidance"
    ],
    highlights: [
      "No coding or technical background required",
      "50+ learning modules and 15+ live learning activities",
      "Spoken English and Personality Development classes included",
      "Access to premium AI & Digital Marketing tools",
      "Dedicated placement assistance and career mentorship"
    ],
    colorAccent: "#34d399"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Pooja Sharma",
    role: "Project Participant",
    projectTag: "E-Commerce Product Listing Training",
    image: "/Testomonial_1.jpeg",
    rating: 5,
    quote: "My training experience at Pdeeps Institute was useful and informative. I learned how to list products, organize catalogs, and provide correct product information. The training gave me a clearer understanding of how e-commerce operations work.",
    verified: true
  },
  {
    id: "test-2",
    name: "Rahul Verma",
    role: "Marketplace Specialist",
    projectTag: "Marketplace Listing Project",
    image: "/Testomonial_2.jpeg",
    rating: 5,
    quote: "The marketplace listing training helped me understand the complete process of presenting products on e-commerce platforms. I learned about creating effective product titles, writing clear descriptions, selecting suitable images, and adding accurate product specifications. The structured training and practical assignments made the concepts easier to understand and helped me build my knowledge of online marketplace operations.",
    verified: true
  },
  {
    id: "test-3",
    name: "Sneha Patel",
    role: "Support Associate",
    projectTag: "Query Management Project",
    image: "/Testomonial_3.jpeg",
    rating: 5,
    quote: "Through the query management project, I gained a better understanding of how customer questions and requests are handled in a professional environment. I learned about identifying customer concerns, providing relevant information, managing follow-ups, and maintaining clear communication. The training emphasized the importance of accuracy, patience, and timely responses while handling different types of customer queries.",
    verified: true
  },
  {
    id: "test-4",
    name: "Anil Kumar",
    role: "ADMC Trainee",
    projectTag: "Practical Learning Experience",
    image: "/Testomonial_4.jpeg",
    rating: 5,
    quote: "I enjoyed the practical assignments provided during the training. They helped me understand the topics better and improve my skills through regular practice.",
    verified: true
  }
];

export const FAQ_DATA: FAQItem[] = [
  // General
  {
    id: "gen-1",
    category: "general",
    question: "What is Pdeeps Institute of E-Commerce & Digital Business?",
    answer: "Pdeeps Institute provides skill-development training and practical learning opportunities in e-commerce operations, customer email support, digital marketing, and AI-related business tools. We focus on bridging the gap between theoretical knowledge and real-world business requirements."
  },
  {
    id: "gen-2",
    category: "general",
    question: "Who can apply for your training programs?",
    answer: "Students, freshers, working professionals, homemakers, entrepreneurs, and individuals interested in developing digital skills can explore our available programs, subject to the eligibility criteria of each course."
  },
  {
    id: "gen-3",
    category: "general",
    question: "Do I need previous experience to join?",
    answer: "Previous experience is not required for programs that specify beginner-level eligibility. Please check the requirements of your selected course; all foundational modules start from scratch."
  },
  {
    id: "gen-4",
    category: "general",
    question: "Are the courses and training available online?",
    answer: "Yes, training sessions and project opportunities are conducted with flexible digital access. Please contact our team via enquiry to confirm the available training mode, batch schedule, and program-specific arrangements."
  },
  {
    id: "gen-5",
    category: "general",
    question: "How can I enrol in a program?",
    answer: "You can submit an enquiry through our website by clicking the 'Enquire Now' button. Our admissions team will guide you regarding eligibility, course details, enrollment deadlines, and the next steps."
  },
  // Product Listing Project
  {
    id: "pl-1",
    category: "product-listing",
    question: "How long is the Product Listing training period?",
    answer: "The training period is 15 days, followed by certification eligibility and assessment based on the applicable marketplace requirements."
  },
  {
    id: "pl-2",
    category: "product-listing",
    question: "Which marketplaces are covered in Project 01?",
    answer: "Training and project exposure include major marketplaces such as Amazon, Flipkart, Myntra, Meesho, AJIO, Blinkit, and Zepto, depending on the program batch and available business projects."
  },
  {
    id: "pl-3",
    category: "product-listing",
    question: "Can I work part-time or full-time?",
    answer: "Yes! Flexible work options are available to accommodate full-time and part-time participation with flexible working hours, subject to assigned tasks and client deadlines."
  },
  {
    id: "pl-4",
    category: "product-listing",
    question: "How long can the Project 01 engagement continue?",
    answer: "Certain projects are designed for an engagement period of up to three years, subject to specific project agreements, quality standards, and continuous project availability."
  },
  {
    id: "pl-5",
    category: "product-listing",
    question: "Is prior product-listing experience necessary?",
    answer: "No prior experience is required for entry-level training. Candidates must simply complete the 15-day training and meet the assessment criteria."
  },
  // Customer Email Support
  {
    id: "es-1",
    category: "email-support",
    question: "What is the duration of email support training?",
    answer: "The training period for Project 02 is 60 days, covering email communication etiquette, ticketing systems, and complaint resolution."
  },
  {
    id: "es-2",
    category: "email-support",
    question: "What is the age eligibility for Customer Email Support?",
    answer: "The age eligibility for Project 02 is between 18 Years and 48 Years."
  },
  {
    id: "es-3",
    category: "email-support",
    question: "What skills will I learn during the 60-day training?",
    answer: "You will learn professional response writing, identifying root customer queries, managing complaints, refunds and escalations, working on standard ticketing tools, and adhering to strict SLA and quality metrics."
  },
  {
    id: "es-4",
    category: "email-support",
    question: "Are India-based and USA-based projects available?",
    answer: "Yes. Project 02 includes workflows serving Indian domestic businesses as well as USA-based international clients with appropriate communication standards."
  },
  // ADMC Course
  {
    id: "admc-1",
    category: "admc",
    question: "What is the duration of the ADMC course?",
    answer: "The course duration is four months of rigorous training, with daily 60-minute classes covering 50+ modules and 15+ live project activities."
  },
  {
    id: "admc-2",
    category: "admc",
    question: "Do I need a technical or coding background for ADMC?",
    answer: "No technical or coding background is required. The program is designed for students, freshers, entrepreneurs, and working professionals from all streams."
  },
  {
    id: "admc-3",
    category: "admc",
    question: "Is an internship available after completing ADMC?",
    answer: "Yes, an internship opportunity of up to 6 months is available, subject to meeting course criteria, attendance, and project availability."
  },
  {
    id: "admc-4",
    category: "admc",
    question: "Does the program include personality and language development?",
    answer: "Yes! ADMC includes dedicated Spoken English and Personality Development classes, along with resume building, mock interviews, and career placement assistance."
  },
  // Payment, Certification & Project Terms
  {
    id: "pay-1",
    category: "payment-policy",
    question: "Is there any job placement fee charged by PDEEPS?",
    answer: "No. We do NOT charge any separate job placement fee. No payment is ever required specifically for securing a job or placement."
  },
  {
    id: "pay-2",
    category: "payment-policy",
    question: "Are there any training charges for the courses?",
    answer: "Yes. Training charges are applicable and vary according to the selected project or training program. Please contact our team via enquiry for specific batch fees."
  },
  {
    id: "pay-3",
    category: "payment-policy",
    question: "Is the training fee refundable?",
    answer: "No. The training fee is non-refundable. Candidates are advised to review the applicable terms, requirements, and course outline carefully before enrolling."
  },
  {
    id: "pay-4",
    category: "payment-policy",
    question: "How do project stipends work?",
    answer: "Candidates assigned to eligible projects receive performance-based payments or stipends according to the specific project's task requirements, approved work output, and agreed productivity terms."
  },
  {
    id: "pay-5",
    category: "payment-policy",
    question: "How can I verify official communications and avoid unauthorized emails?",
    answer: "All official communication—including enrollment confirmations, training letters, onboarding details, and project instructions—is sent strictly through the authorized domain: @pdib.in. Never respond or make payments based on emails received from personal Gmail accounts or unverified domains."
  }
];

export const POLICIES_NOTICE = {
  title: "Important Notice: Official Communication, Training & Payment Policy",
  points: [
    {
      title: "1. Official Email Communication",
      desc: "All official communication, including training letters, onboarding details, and project-related instructions, will be sent through the institute's authorized official email domain: @pdib.in. Candidates are advised to verify the sender's email address before responding to any communication. Emails received from personal Gmail accounts or unauthorized domains should not be considered official institute communication unless independently verified by our authorized team."
    },
    {
      title: "2. No Payment for Job Placement",
      desc: "The institute does not charge any job placement fee. No payment is required specifically for securing a job. Please be aware that applicable training charges may vary depending on the selected training program or project."
    },
    {
      title: "3. Training & Project-Based Work",
      desc: "Our institute provides training and skill-development programs. After completing the required training and meeting the applicable eligibility criteria, candidates may be considered for available projects."
    },
    {
      title: "4. Project Stipend",
      desc: "Candidates assigned to eligible projects may receive a stipend according to the specific project's payment structure, terms, and conditions. Project allocation and stipend eligibility depend on the assigned project and its requirements."
    },
    {
      title: "5. Verify Before Making Any Payment",
      desc: "Always verify official communication and payment instructions with the institute's authorized team before making a payment. Never rely solely on messages received from unverified email addresses or individuals."
    }
  ]
};
