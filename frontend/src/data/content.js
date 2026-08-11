// ===================================================================
// Personal content for Vedant Ransingh's portfolio.
// Projects live in the backend (backend/data/projects.json) so they
// can be updated without redeploying the frontend.
// ===================================================================

export const profile = {
  name: "Vedant Ransingh",
  title: "Full-Stack Developer & Software Engineer",
  tagline:
    "I build full-stack web applications end to end, and bring a data-driven, machine-learning-informed approach to solving problems.",
  location: "Bangalore, Karnataka, India",
  email: "ransinghvedant@gmail.com",
  phone: "+91 934-042-8929",
  github: "https://github.com/ransinghvedant13",
  linkedin: "https://linkedin.com/in/vedant-ransingh/",
  resumeUrl: "/resume.pdf",
  yearsExperience: 1,
  availability: "Open to full-time roles & freelance work",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from Dayananda Sagar University, Bangalore, with a foundation that spans full-stack web development, data analysis, and machine learning. I like the combination — building the interface someone actually uses, and understanding the data or model underneath it.",
    "As a freelance full-stack developer at VMAT Co., I design and build responsive web applications end to end, from UI to backend APIs and database integration. As a Frontend Developer Intern at Unified Mentor, I worked on a product marketing website for the Kashmir region under the One District One Product (ODOP) initiative, focusing on responsive design and digital engagement.",
    "On the ML side, I've led a team building an image classification model at 90%+ accuracy, and built a full-stack app that predicts stroke risk from clinical and ECG/ECHO data. I'm currently looking for full-time roles where I can keep working across the stack.",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    category: "Backend & Full Stack",
    items: ["REST APIs", "Database Integration", "Full-Stack Web Apps"],
  },
  {
    category: "Data & ML",
    items: ["Python", "CNN Models", "LSTM Models", "Data Preprocessing"],
  },
  {
    category: "Tools",
    items: ["C++", "Tableau", "VS Code", "Microsoft Office Suite"],
  },
];

// Used only as a fallback if the backend API is unreachable
export const fallbackProjects = [
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
    liveUrl: "https://sentinel-ai-fraud-monitor.onrender.com",
    repoUrl: "https://github.com/ransinghvedant13/sentinel-ai-fraud-monitor",
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
    liveUrl: "",
    repoUrl: "",
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
    liveUrl: "",
    repoUrl: "",
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
  extra: [
    "NPTEL certification in Cloud Computing",
    "Participated in Manthan Competition 2023, a national-level coding competition organized by the Government of Karnataka",
  ],
};

// Optional - leave the array empty to hide the testimonials section
export const testimonials = [
  // { quote: "...", name: "Person Name", role: "Their role, Company" },
];