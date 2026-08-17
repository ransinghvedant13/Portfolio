// ===================================================================
// Personal content for Vedant Ransingh's portfolio.
// Projects live in the backend (backend/data/projects.json) so they
// can be updated without redeploying the frontend.
// ===================================================================

export const profile = {
  name: "Vedant Ransingh",
  title: "Software Engineer & Full Stack Developer",
  tagline:
    "I build responsive, user-focused web applications using React.js, Node.js, JavaScript and modern web technologies.",
  location: "Bangalore, Karnataka, India",
  email: "ransinghvedant@gmail.com",
  phone: "+91 934-042-8929",
  github: "https://github.com/ransinghvedant13",
  linkedin: "https://linkedin.com/in/vedant-ransingh/",
  resumeUrl: "/resume.pdf",
  yearsExperience: 1,
  availability: "Open to Software Engineering Opportunities",
};

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science graduate from Dayananda Sagar University, Bangalore. I work across the stack with React.js, JavaScript, Node.js and modern web tooling, and I bring a data-driven mindset from a parallel background in machine learning.",
    "As a freelance Full Stack Web Developer at VMAT Co., I build and maintain responsive business websites end to end — from React interfaces to deployment. As a Frontend Developer Intern at Unified Mentor, I worked on a product marketing website for the Kashmir region under the One District One Product (ODOP) initiative, focusing on responsive design and digital engagement.",
    "I don't just learn technologies — I ship applications with them. Alongside client work, I've built a full-stack REST API and a stroke-risk prediction app powered by machine learning, and led a team to 90%+ accuracy on an image classification model.",
    "I'm currently looking for Software Engineer and Full Stack Developer opportunities where I can keep building real, production-facing software.",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Data & ML",
    items: ["Python", "CNN Models", "LSTM Models", "Data Preprocessing"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "Postman"],
  },
  {
    category: "Currently Learning",
    items: ["SQL", "AWS", "AI/LLM Development"],
  },
];

// Used only as a fallback if the backend API is unreachable
export const fallbackProjects = [
  {
    id: "proj-vmat",
    name: "VMAT Africa — Business Website",
    status: "Live",
    summary:
      "A responsive business website for a company operating across mining, commodity trading, agro solutions and project development, built as a freelance React frontend project.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "React Router", "Vite"],
    highlights: [
      "Responsive design across mobile, tablet and desktop",
      "Business-unit navigation across multiple divisions (mining, trading, agro, projects)",
      "Reusable React components and a multi-page routing structure",
      "Contact functionality with WhatsApp integration",
    ],
    contribution:
      "Designed the component structure, built responsive React interfaces for each business unit, implemented navigation and contact functionality, and deployed the site.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "proj-portfolio",
    name: "Personal Portfolio — Full-Stack Developer Site",
    status: "In Progress",
    summary:
      "This site itself: a full-stack portfolio built to demonstrate real end-to-end development, not just a static page — a React frontend backed by a live Node.js/Express API.",
    stack: ["React", "Node.js", "Express", "Tailwind CSS", "Three.js"],
    highlights: [
      "Built a REST API serving live project data and a working contact form that sends real email via Nodemailer",
      "Added rate limiting and honeypot spam protection on the backend",
      "Designed a custom visual identity and an animated Three.js background instead of using a template",
    ],
    contribution:
      "Built both the React frontend and the Express API, including the /api/projects and /api/contact routes, then deployed frontend and backend together.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "proj-4",
    name: "SentinelAI — Real-Time Fraud Risk & ML Monitoring",
    status: "Live",
    summary:
      "An end-to-end ML service that scores payment transactions for fraud risk in real time, with a FastAPI backend, a React dashboard, explainable risk reasons, and feature-drift monitoring.",
    stack: ["Python", "FastAPI", "scikit-learn", "React", "Docker"],
    highlights: [
      "Built a /predict API returning low/medium/high risk with human-readable reasons and a review recommendation",
      "Added a /monitor/drift endpoint to detect feature drift against the training baseline before model quality degrades",
      "Shipped with pytest API tests, a Dockerfile, and a GitHub Actions CI workflow for a production-style ML deployment",
    ],
    contribution:
      "Built the FastAPI service end to end — the prediction endpoint, the drift-monitoring endpoint, the React dashboard, and the CI/Docker deployment setup.",
    liveUrl: "https://sentinel-ai-fraud-monitor.onrender.com",
    repoUrl: "https://github.com/ransinghvedant13/sentinel-ai-fraud-monitor",
  },
  {
    id: "proj-1",
    name: "Stroke Risk Prediction Web Application",
    status: "Completed",
    summary:
      "A full-stack web app that predicts personalized stroke risk levels (Normal, Medium, High) using machine learning models trained on ECG, ECHO, and clinical data.",
    stack: ["Python", "Machine Learning", "ECG/ECHO Data", "Clinical Data"],
    highlights: [
      "Built the frontend interface and integrated ECG and ECHO data inputs",
      "Improved prediction accuracy through better user interaction design",
    ],
    contribution:
      "Built the frontend interface, wired up ECG/ECHO data inputs to the prediction model, and iterated on the UX to make results clearer for non-technical users.",
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "proj-2",
    name: "Animal Recognition",
    status: "Completed",
    summary:
      "Machine learning model classifying animal species from a 10,000+ image dataset, built with a team of 3.",
    stack: ["Python", "Machine Learning", "CNN"],
    highlights: [
      "Achieved 90%+ classification accuracy",
      "Led a team of 3; owned data curation, cleaning, and preprocessing",
    ],
    contribution:
      "Led a team of 3, owned data curation, cleaning and preprocessing for a 10,000+ image dataset, and tuned the CNN model to 90%+ accuracy.",
    liveUrl: "",
    repoUrl: "",
  },
];

// Academic / research project — kept separate from client and personal
// software projects since it's coursework-driven, not a shipped product.
export const researchProjects = [
  {
    id: "research-stroke",
    name: "Advanced Stroke Risk Stratification and Prevention",
    summary:
      "Final-year research project on stratifying stroke risk using clinical, ECG and ECHO data with machine learning models.",
    stack: ["Python", "Machine Learning", "Data Analysis", "Model Evaluation"],
  },
];

export const experience = [
  {
    role: "Freelancer, Full Stack Web Developer",
    company: "VMAT Co. Ltd.",
    period: "January 2025 — Present",
    points: [
      "Develop and maintain responsive full-stack web applications for the company's business requirements.",
      "Design and build user-friendly full-stack applications using HTML, CSS, JavaScript, modern frameworks, backend APIs, and database integrations.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Unified Mentor Pvt Ltd.",
    period: "March 2025 — May 2025 · Bangalore, India",
    points: [
      "Contributed as a frontend developer on a product marketing website for the Kashmir region under the One District One Product (ODOP) initiative.",
      "Worked on frontend functionality, responsive design, and website presentation to improve digital engagement.",
    ],
  },
];

export const education = {
  degree: "Bachelor's in Computer Science and Technology",
  school: "Dayananda Sagar University, Bangalore",
  period: "September 2021 — June 2025",
  extra: ["Focus: Software Development, Web Technologies, Databases, Data Structures & Algorithms"],
};

export const achievements = [
  {
    title: "Manthan Business Plan Competition 2023",
    description:
      "Participated in a national-level competition organized by the Government of Karnataka.",
  },
  {
    title: "NPTEL Certification — Cloud Computing",
    description: "Completed an NPTEL certification covering core cloud computing concepts.",
  },
];

// Optional - leave the array empty to hide the testimonials section
export const testimonials = [
  // { quote: "...", name: "Person Name", role: "Their role, Company" },
];