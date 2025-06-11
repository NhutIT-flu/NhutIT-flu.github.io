import { CVProfile } from "@shared/schema";
import { UserCheck } from "lucide-react";

interface ProfessionalSummaryProps {
  profile: CVProfile;
}

export default function ProfessionalSummary({ profile }: ProfessionalSummaryProps) {
  return (
    <section className="border-b border-gray-200 pb-8">
      <h2 className="text-2xl font-bold text-navy-primary mb-4 flex items-center gap-2">
        <UserCheck className="text-professional-blue" size={24} />
        Professional Summary
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-professional-blue">
        <p className="text-lg leading-relaxed text-charcoal-primary">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}
