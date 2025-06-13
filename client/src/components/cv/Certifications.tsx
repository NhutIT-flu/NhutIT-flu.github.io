import { Certification } from "@shared/schema";
import { Award, Trophy, Medal, Star } from "lucide-react";
import { motion } from "framer-motion";

interface PropsChứngChỉThànhTích {
  chứngChỉ: Certification[];
  id?: string;
}

const biểuTượngLoại = {
  certification: Award,
  achievement: Trophy,
};

const màuSắcLoại = {
  certification: "text-yellow-500",
  achievement: "text-yellow-500",
};

export default function ChứngChỉThànhTích({ chứngChỉ, id }: PropsChứngChỉThànhTích) {
  const mụcChứngChỉ = chứngChỉ.filter(cert => cert.type === "certification");
  const mụcThànhTích = chứngChỉ.filter(cert => cert.type === "achievement");

  return (
    <motion.section 
      className="border-b border-gray-200 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Award className="text-professional-blue" size={24} />
        Certifications & Achievements
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Certifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
          <h3 className="text-lg font-semibold text-navy-secondary mb-4">Professional Certifications</h3>
          <div className="space-y-4">
            {mụcChứngChỉ.map((cert) => (
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
            {mụcThànhTích.map((achievement) => {
              let BiểuTượng = Trophy;
              let lớpMàu = "text-yellow-500";
              
              if (achievement.name.includes("Summer of Code")) {
                BiểuTượng = Medal;
                lớpMàu = "text-gray-500";
              } else if (achievement.name.includes("Innovation")) {
                BiểuTượng = Star;
                lớpMàu = "text-purple-500";
              }
              
              return (
                <div key={achievement.id} className="flex items-start gap-3">
                  <BiểuTượng className={`${lớpMàu} mt-1`} size={20} />
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
    </motion.section>
  );
}
