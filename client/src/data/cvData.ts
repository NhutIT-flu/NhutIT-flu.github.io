import { CVProfile, Education, Skill, Project, Certification, Reference } from "@shared/schema";
import profileImage from "@assets/image_1749637475069.png";

export const cvProfile: CVProfile = {
  id: 1,
  fullName: "Phạm Minh Nhựt",
  title: "Software Engineering Student & Full-Stack Developer",
  email: "pham.minhnhut@university.edu",
  phone: "+84 (0) 123-456-789",
  linkedin: "linkedin.com/in/phamminhnhut",
  github: "github.com/phamminhnhut",
  location: "Ho Chi Minh City, Vietnam",
  portfolio: "phamminhnhut.dev",
  summary: "Dedicated Software Engineering student with 3+ years of hands-on full-stack development experience. Proven expertise in modern web technologies including React, Node.js, and cloud platforms. Successfully delivered 15+ professional projects with focus on scalable architecture, user experience, and performance optimization. Seeking to leverage technical skills and innovative problem-solving abilities in a challenging software engineering role.",
  profileImage: profileImage,
  lastUpdated: new Date("2024-01-15"),
};

export const education: Education = {
  id: 1,
  cvProfileId: 1,
  degree: "Bachelor of Science in Software Engineering",
  university: "FPT University",
  duration: "Expected Graduation: May 2024",
  gpa: "3.8/4.0",
  achievements: [
    "Outstanding Student Award 2023",
    "Programming Competition - 2nd Place",
    "Software Engineering Society President", 
    "Research Assistant - ML Lab"
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Software Engineering Principles",
    "Database Systems",
    "Web Development",
    "Computer Networks"
  ]
};

export const skills: Skill[] = [
  // Frontend
  { id: 1, cvProfileId: 1, name: "React.js", category: "frontend", proficiency: 4 },
  { id: 2, cvProfileId: 1, name: "TypeScript", category: "frontend", proficiency: 4 },
  { id: 3, cvProfileId: 1, name: "Next.js", category: "frontend", proficiency: 4 },
  { id: 4, cvProfileId: 1, name: "Tailwind CSS", category: "frontend", proficiency: 5 },
  { id: 5, cvProfileId: 1, name: "Vue.js", category: "frontend", proficiency: 3 },
  
  // Backend
  { id: 6, cvProfileId: 1, name: "Node.js", category: "backend", proficiency: 4 },
  { id: 7, cvProfileId: 1, name: "Express.js", category: "backend", proficiency: 4 },
  { id: 8, cvProfileId: 1, name: "Python", category: "backend", proficiency: 4 },
  { id: 9, cvProfileId: 1, name: "PostgreSQL", category: "backend", proficiency: 4 },
  { id: 10, cvProfileId: 1, name: "MongoDB", category: "backend", proficiency: 3 },
  
  // Cloud
  { id: 11, cvProfileId: 1, name: "AWS", category: "cloud", proficiency: 4 },
  { id: 12, cvProfileId: 1, name: "Docker", category: "cloud", proficiency: 4 },
  { id: 13, cvProfileId: 1, name: "Kubernetes", category: "cloud", proficiency: 3 },
  { id: 14, cvProfileId: 1, name: "Git", category: "cloud", proficiency: 5 },
  { id: 15, cvProfileId: 1, name: "CI/CD", category: "cloud", proficiency: 3 },
  { id: 16, cvProfileId: 1, name: "Linux", category: "cloud", proficiency: 4 },
  
  // Tools
  { id: 17, cvProfileId: 1, name: "VS Code", category: "tools", proficiency: 5 },
  { id: 18, cvProfileId: 1, name: "Figma", category: "tools", proficiency: 4 },
  { id: 19, cvProfileId: 1, name: "Postman", category: "tools", proficiency: 4 },
  { id: 20, cvProfileId: 1, name: "Jira", category: "tools", proficiency: 3 },
  { id: 21, cvProfileId: 1, name: "Slack", category: "tools", proficiency: 4 },
  { id: 22, cvProfileId: 1, name: "Notion", category: "tools", proficiency: 4 },
];

export const projects: Project[] = [
  {
    id: 1,
    cvProfileId: 1,
    name: "E-Commerce Platform",
    description: "Led development of a scalable e-commerce platform serving 10,000+ users. Implemented microservices architecture with React frontend, Node.js backend, and PostgreSQL database. Achieved 40% improvement in page load times and 99.9% uptime.",
    role: "Full-Stack Development | Team Lead",
    duration: "Jan 2024 - Present",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    metrics: ["10,000+ Active Users", "40% Performance Boost", "99.9% Uptime"],
    githubUrl: "https://github.com/phamminhnhut/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.phamminhnhut.dev"
  },
  {
    id: 2,
    cvProfileId: 1,
    name: "AI-Powered Task Management",
    description: "Developed an intelligent task management system using React and Python. Integrated machine learning algorithms for priority prediction and deadline optimization. Improved user productivity by 35% through smart task recommendations.",
    role: "Machine Learning | Frontend Development",
    duration: "Sep 2023 - Dec 2023",
    technologies: ["React", "Python", "TensorFlow", "MongoDB", "FastAPI"],
    metrics: ["ML-Powered Insights", "35% Productivity Gain", "Cross-Platform Support"],
    githubUrl: "https://github.com/phamminhnhut/ai-task-manager",
    liveUrl: "https://tasks.phamminhnhut.dev"
  },
  {
    id: 3,
    cvProfileId: 1,
    name: "Real-Time Analytics Dashboard", 
    description: "Built a comprehensive analytics dashboard processing 1M+ data points daily. Implemented real-time data streaming with WebSocket connections and interactive visualizations. Reduced data processing latency by 60%.",
    role: "Data Visualization | Backend Development",
    duration: "May 2023 - Aug 2023",
    technologies: ["Vue.js", "Node.js", "Redis", "D3.js", "WebSocket"],
    metrics: ["1M+ Daily Data Points", "60% Latency Reduction", "Real-time Visualization"],
    githubUrl: "https://github.com/phamminhnhut/analytics-dashboard",
    liveUrl: "https://analytics.phamminhnhut.dev"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    cvProfileId: 1,
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    validUntil: "Dec 2025",
    type: "certification"
  },
  {
    id: 2,
    cvProfileId: 1,
    name: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    validUntil: "Mar 2025", 
    type: "certification"
  },
  {
    id: 3,
    cvProfileId: 1,
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta",
    validUntil: "Oct 2023",
    type: "certification"
  },
  {
    id: 4,
    cvProfileId: 1,
    name: "Hackathon Winner - TechCrunch Disrupt",
    issuer: "TechCrunch",
    validUntil: "1st Place • AI-powered healthcare solution",
    type: "achievement"
  },
  {
    id: 5,
    cvProfileId: 1,
    name: "Google Summer of Code Participant",
    issuer: "Google",
    validUntil: "Summer 2023",
    type: "achievement"
  },
  {
    id: 6,
    cvProfileId: 1,
    name: "University Innovation Award",
    issuer: "FPT University",
    validUntil: "2023",
    type: "achievement"
  }
];

export const references: Reference[] = [
  {
    id: 1,
    cvProfileId: 1,
    name: "Dr. Nguyễn Thị Lan",
    title: "Senior Software Engineer",
    company: "Google Inc.",
    email: "nguyen.thilan@google.com",
    phone: "+1 (555) 987-6543",
    linkedin: "linkedin.com/in/nguyenthilan"
  },
  {
    id: 2,
    cvProfileId: 1,
    name: "Prof. Trần Văn Minh",
    title: "Computer Science Professor", 
    company: "FPT University",
    email: "tran.vanminh@fpt.edu.vn",
    phone: "+84 (0) 234-567-890",
    linkedin: "cs.fpt.edu.vn/~tranvanminh"
  }
];

export const githubStats = {
  totalContributions: 1247,
  publicRepositories: 32,
  totalStars: 156,
  followers: 89,
  topRepositories: [
    { name: "e-commerce-platform", description: "Full-stack e-commerce solution", stars: 42 },
    { name: "ai-task-manager", description: "ML-powered productivity tool", stars: 38 },
    { name: "react-dashboard", description: "Real-time analytics dashboard", stars: 29 }
  ],
  languages: [
    { name: "JavaScript", abbreviation: "JS", percentage: 35.7, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", abbreviation: "TS", percentage: 28.3, color: "from-blue-500 to-blue-700" },
    { name: "Python", abbreviation: "PY", percentage: 22.1, color: "from-yellow-400 to-yellow-600" },
    { name: "Go", abbreviation: "GO", percentage: 13.9, color: "from-green-400 to-green-600" }
  ]
};
