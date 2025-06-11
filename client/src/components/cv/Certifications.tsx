import { Certification } from "@shared/schema";
import { Award, Trophy, Medal, Star } from "lucide-react";

interface CertificationsProps {
  certifications: Certification[];
}

const typeIcons = {
  certification: Award,
  achievement: Trophy,
};

const typeColors = {
  certification: "text-yellow-500",
  achievement: "text-yellow-500",
};

export default function Certifications({ certifications }: CertificationsProps) {
  const certificationItems = certifications.filter(cert => cert.type === "certification");
  const achievementItems = certifications.filter(cert => cert.type === "achievement");

  return (
    <section className="border-b border-gray-200 pb-8">
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Award className="text-professional-blue" size={24} />
        Certifications & Achievements
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Certifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4">Professional Certifications</h3>
          <div className="space-y-4">
            {certificationItems.map((cert) => (
              <div key={cert.id} className="flex items-start gap-3">
                <Award className="text-yellow-500 mt-1" size={20} />
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-charcoal-secondary">
                    {cert.issuer} • {cert.validUntil ? `Valid until ${cert.validUntil}` : 'Completed'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Awards */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4">Achievements & Awards</h3>
          <div className="space-y-4">
            {achievementItems.map((achievement) => {
              let Icon = Trophy;
              let colorClass = "text-yellow-500";
              
              if (achievement.name.includes("Summer of Code")) {
                Icon = Medal;
                colorClass = "text-gray-500";
              } else if (achievement.name.includes("Innovation")) {
                Icon = Star;
                colorClass = "text-purple-500";
              }
              
              return (
                <div key={achievement.id} className="flex items-start gap-3">
                  <Icon className={`${colorClass} mt-1`} size={20} />
                  <div>
                    <p className="font-medium">{achievement.name}</p>
                    <p className="text-sm text-charcoal-secondary">{achievement.validUntil}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
