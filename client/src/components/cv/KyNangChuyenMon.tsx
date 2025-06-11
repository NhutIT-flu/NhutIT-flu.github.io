import React from "react";
import { Skill } from "@shared/schema";
import { Code, Cloud, Tool, LayoutDashboard, Database, Laptop, Settings } from "lucide-react";
import { motion } from "framer-motion";
import SkillProficiency from "./SkillProficiency"; // Assuming this is in the same directory

interface KyNangChuyenMonProps {
  skills: Skill[];
  id?: string;
}

const categoryIcons = {
  frontend: LayoutDashboard,
  backend: Database,
  cloud: Cloud,
  tools: Settings,
};

const categoryColors = {
  frontend: "text-blue-500",
  backend: "text-green-500",
  cloud: "text-indigo-500",
  tools: "text-gray-500",
};

const categoryBadgeColors = {
  frontend: "bg-blue-100 text-blue-800",
  backend: "bg-green-100 text-green-800",
  cloud: "bg-indigo-100 text-indigo-800",
  tools: "bg-gray-100 text-gray-800",
};

export default function KyNangChuyenMon({ skills, id }: KyNangChuyenMonProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const renderSkillCategory = (category: string, categorySkills: Skill[]) => {
    const Icon = categoryIcons[category as keyof typeof categoryIcons];
    const iconColor = categoryColors[category as keyof typeof categoryColors];
    
    if (category === "cloud" || category === "tools") {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4 flex items-center gap-2">
            <Icon className={iconColor} size={20} />
            {category === "cloud" ? "Điện Toán Đám Mây & DevOps" : "Công Cụ Phát Triển"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => (
              <span
                key={skill.id}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  categoryBadgeColors[category as keyof typeof categoryBadgeColors]
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
        <h3 className="text-lg font-semibold text-navy-secondary mb-4 flex items-center gap-2">
          <Icon className={iconColor} size={20} />
          {category === "frontend" ? "Phát Triển Frontend" : "Phát Triển Backend"}
        </h3>
        <div className="space-y-3">
          {categorySkills.map((skill) => (
            <div key={skill.id} className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <SkillProficiency level={skill.proficiency} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.section 
      className="border-b border-gray-200 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Code className="text-professional-blue" size={24} />
        Ma Trận Kỹ Năng Chuyên Môn
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) =>
          <div key={category}>{renderSkillCategory(category, categorySkills)}</div>
        )}
      </div>
    </motion.section>
  );
}
