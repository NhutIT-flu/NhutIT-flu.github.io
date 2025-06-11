import { CVProfile, Education, Skill, Project, Certification, Reference } from "@shared/schema";
import profileImage from "@assets/image_1749637475069.png";

export const cvProfile: CVProfile = {
  id: 1,
  fullName: "Phạm Minh Nhựt",
  title: "Software Engineering Student & Full-Stack Developer",
  email: "nhutp2945@gmail.com",
  phone: "0827410398",
  linkedin: "linkedin.com/in/phamminhnhut",
  github: "https://github.com/NhutIT-flu",
  location: "Ho Chi Minh City, Vietnam",
  portfolio: null,
  summary: "Dedicated Software Engineering student at University of Transport and Communications Ho Chi Minh City with passion for full-stack development. Specializing in JavaScript, Java, TypeScript, React, Node.js, and PostgreSQL. Strong team collaboration skills with excellent listening and communication abilities. Currently developing innovative projects including Eduquint platform. Seeking opportunities to apply technical expertise and collaborative mindset in challenging software development roles.",
  profileImage: profileImage,
  lastUpdated: new Date("2025-06-11"),
};

export const education: Education = {
  id: 1,
  cvProfileId: 1,
  degree: "Bachelor of Information Technology - Software Engineering",
  university: "University of Transport and Communications Ho Chi Minh City",
  duration: "2023 - Present (Year 2)",
  gpa: null,
  achievements: [
    "Active participation in programming courses",
    "Strong academic performance in software development subjects",
    "Collaborative learning approach with peers"
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Software Engineering Principles", 
    "Database Systems",
    "Web Development Technologies",
    "Object-Oriented Programming",
    "Computer Networks"
  ]
};

export const skills: Skill[] = [
  // Frontend
  { id: 1, cvProfileId: 1, name: "JavaScript", category: "frontend", proficiency: 4 },
  { id: 2, cvProfileId: 1, name: "TypeScript", category: "frontend", proficiency: 3 },
  { id: 3, cvProfileId: 1, name: "React.js", category: "frontend", proficiency: 4 },
  { id: 4, cvProfileId: 1, name: "HTML/CSS", category: "frontend", proficiency: 4 },
  
  // Backend
  { id: 5, cvProfileId: 1, name: "Java", category: "backend", proficiency: 4 },
  { id: 6, cvProfileId: 1, name: "Node.js", category: "backend", proficiency: 3 },
  { id: 7, cvProfileId: 1, name: "PostgreSQL", category: "backend", proficiency: 3 },
  
  // Tools & Version Control
  { id: 8, cvProfileId: 1, name: "Git", category: "tools", proficiency: 4 },
  { id: 9, cvProfileId: 1, name: "VS Code", category: "tools", proficiency: 4 },
  { id: 10, cvProfileId: 1, name: "GitHub", category: "tools", proficiency: 4 },
];

export const projects: Project[] = [
  {
    id: 1,
    cvProfileId: 1,
    name: "Eduquint Platform",
    description: "Currently developing an educational platform focused on improving learning experiences through technology. The project incorporates modern web development practices and user-centered design principles to create an engaging educational environment.",
    role: "Full-Stack Developer",
    duration: "2024 - Present",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    metrics: ["Educational Platform", "Modern Web Technologies", "User-Centered Design"],
    githubUrl: "https://github.com/NhutIT-flu",
    liveUrl: null
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    cvProfileId: 1,
    name: "Academic Excellence in Programming",
    issuer: "University of Transport and Communications HCM",
    validUntil: "2024",
    type: "achievement"
  },
  {
    id: 2,
    cvProfileId: 1,
    name: "Team Collaboration Skills",
    issuer: "University Projects",
    validUntil: "Ongoing",
    type: "achievement"
  }
];

export const references: Reference[] = [
  {
    id: 1,
    cvProfileId: 1,
    name: "Available Upon Request",
    title: "Academic Supervisor",
    company: "University of Transport and Communications HCM",
    email: "references@available.request",
    phone: null,
    linkedin: null
  }
];

export const githubStats = {
  totalContributions: 150,
  publicRepositories: 8,
  totalStars: 12,
  followers: 5,
  topRepositories: [
    { name: "Eduquint", description: "Educational platform project", stars: 5 },
    { name: "university-projects", description: "Academic coursework and assignments", stars: 4 },
    { name: "learning-portfolio", description: "Personal learning journey", stars: 3 }
  ],
  languages: [
    { name: "JavaScript", abbreviation: "JS", percentage: 40.0, color: "from-blue-400 to-blue-600" },
    { name: "Java", abbreviation: "JV", percentage: 30.0, color: "from-red-400 to-red-600" },
    { name: "TypeScript", abbreviation: "TS", percentage: 20.0, color: "from-blue-500 to-blue-700" },
    { name: "SQL", abbreviation: "SQL", percentage: 10.0, color: "from-green-400 to-green-600" }
  ]
};
