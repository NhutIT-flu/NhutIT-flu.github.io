import { Skill } from "@shared/schema";
import { Code, Monitor, Server, Cloud, Settings } from "lucide-react";

interface TechnicalSkillsProps {
  skills: Skill[];
}

const categoryIcons = {
  frontend: Monitor,
  backend: Server,
  cloud: Cloud,
  tools: Settings,
};

const categoryColors = {
  frontend: "text-blue-500",
  backend: "text-green-500", 
  cloud: "text-blue-500",
  tools: "text-orange-500",
};

const categoryBadgeColors = {
  frontend: "bg-blue-100 text-blue-800",
  backend: "bg-green-100 text-green-800",
  cloud: "bg-blue-100 text-blue-800",
  tools: "bg-orange-100 text-orange-800",
};

function SkillProficiency({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-3 h-3 rounded-full ${
            dot <= level ? "bg-success-green" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TechnicalSkills({ skills }: TechnicalSkillsProps) {
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
            {category === "cloud" ? "Cloud & DevOps" : "Development Tools"}
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
          {category === "frontend" ? "Frontend Development" : "Backend Development"}
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
    <section className="border-b border-gray-200 pb-8">
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Code className="text-professional-blue" size={24} />
        Technical Expertise Matrix
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) =>
          <div key={category}>{renderSkillCategory(category, categorySkills)}</div>
        )}
      </div>
    </section>
  );
}
