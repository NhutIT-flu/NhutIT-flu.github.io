import { Github, Star, Database, Clock, BarChart } from "lucide-react";
import { motion } from "framer-motion";

interface GitHubStatsProps {
  stats: {
    totalContributions: number;
    publicRepositories: number;
    totalStars: number;
    followers: number;
    topRepositories: Array<{
      name: string;
      description: string;
      stars: number;
    }>;
    languages: Array<{
      name: string;
      abbreviation: string;
      percentage: number;
      color: string;
    }>;
  };
  id?: string;
}

export default function GitHubStats({ stats, id }: GitHubStatsProps) {
  return (
    <motion.section 
      className="border-b border-gray-200 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Github className="text-professional-blue" size={24} />
        GitHub Statistics & Contributions
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contribution Overview */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4">Contribution Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-charcoal-secondary">Total Contributions</span>
              <span className="font-bold text-success-green">{stats.totalContributions.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-charcoal-secondary">Public Repositories</span>
              <span className="font-bold text-professional-blue">{stats.publicRepositories}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-charcoal-secondary">Total Stars Received</span>
              <span className="font-bold text-yellow-500">{stats.totalStars}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-charcoal-secondary">Followers</span>
              <span className="font-bold text-purple-500">{stats.followers}</span>
            </div>
          </div>
        </div>

        {/* Top Repositories */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4">Top Repositories</h3>
          <div className="space-y-3">
            {stats.topRepositories.map((repo, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-professional-blue">{repo.name}</span>
                  <p className="text-xs text-charcoal-secondary">{repo.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={12} />
                    <span className="text-sm">{repo.stars}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Used */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional md:col-span-2">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4">Most Used Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${language.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold">{language.abbreviation}</span>
                </div>
                <p className="text-sm font-medium">{language.name}</p>
                <p className="text-xs text-charcoal-secondary">{language.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
