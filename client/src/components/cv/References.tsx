import { Reference } from "@shared/schema";
import { Handshake, Mail, Phone, Linkedin, Globe, Info } from "lucide-react";

interface ReferencesProps {
  references: Reference[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map(word => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function References({ references }: ReferencesProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Handshake className="text-professional-blue" size={24} />
        Professional References
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {references.map((reference) => (
          <div key={reference.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{getInitials(reference.name)}</span>
              </div>
              <h3 className="font-semibold text-lg text-navy-secondary">{reference.name}</h3>
              <p className="text-charcoal-secondary mb-2">{reference.title}</p>
              <p className="text-sm text-charcoal-secondary mb-4">{reference.company}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-professional-blue" size={16} />
                  <span>{reference.email}</span>
                </div>
                {reference.phone && (
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="text-professional-blue" size={16} />
                    <span>{reference.phone}</span>
                  </div>
                )}
                {reference.linkedin && (
                  <div className="flex items-center justify-center gap-2">
                    <Linkedin className="text-professional-blue" size={16} />
                    <span>{reference.linkedin}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* References Note */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800 text-center">
          <Info className="inline mr-2" size={16} />
          Additional references available upon request. All references have been contacted and have agreed to provide recommendations.
        </p>
      </div>
    </section>
  );
}
