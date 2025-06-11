import { Project } from "@shared/schema";
import { Laptop, Users, Zap, Shield, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectPortfolioProps {
  projects: Project[];
  id?: string;
}

const metricIcons = {
  "Active Users": Users,
  "Performance": Zap,
  "Uptime": Shield,
  "Insights": Zap,
  "Productivity": Zap,
  "Support": Users,
  "Data Points": Users,
  "Latency": Zap,
  "Visualization": Zap,
};

function getMetricIcon(metric: string) {
  for (const [key, Icon] of Object.entries(metricIcons)) {
    if (metric.includes(key)) {
      return Icon;
    }
  }
  return Users; // default icon
}

export default function ProjectPortfolio({ projects, id }: ProjectPortfolioProps) {
  return (
    <motion.section 
      className="border-b border-gray-200 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Laptop className="text-professional-blue" size={24} />
        Professional Project Portfolio
      </h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional hover:shadow-executive transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-navy-secondary flex items-center gap-2">
                  {project.name}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className="text-professional-blue hover:text-navy-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </h3>
                <p className="text-charcoal-secondary">{project.role}</p>
              </div>
              <div className="text-sm text-charcoal-secondary">{project.duration}</div>
            </div>
            
            <p className="text-charcoal-primary mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.metrics && (
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {project.metrics.map((metric, index) => {
                  const Icon = getMetricIcon(metric);
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="text-professional-blue" size={16} />
                      <span>{metric}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
