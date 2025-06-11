import { CVProfile } from "@shared/schema";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

interface ProfessionalSummaryProps {
  profile: CVProfile;
  id?: string;
}

export default function ProfessionalSummary({ profile, id }: ProfessionalSummaryProps) {
  return (
    <motion.section 
      className="border-b border-gray-200 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-4 flex items-center gap-2">
        <UserPlus className="text-professional-blue" size={24} />
        Professional Summary
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-professional-blue">
        <p className="text-lg leading-relaxed text-charcoal-primary">
          {profile.summary}
        </p>
      </div>
    </motion.section>
  );
}
