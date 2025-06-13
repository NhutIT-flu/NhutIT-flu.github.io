import { Reference } from "@shared/schema";
import { Handshake, Mail, Phone, Linkedin, Globe, Info } from "lucide-react";
import { motion } from "framer-motion";

interface PropsThamKhảo {
  danhSáchThamKhảo: Reference[];
  id?: string;
}

function lấyChữCáiĐầu(tên: string): string {
  return tên
    .split(" ")
    .map(word => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ThamKhảo({ danhSáchThamKhảo, id }: PropsThamKhảo) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <Handshake className="text-professional-blue" size={24} />
        Professional References
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {danhSáchThamKhảo.map((ngườiThamKhảo) => (
          <div key={ngườiThamKhảo.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{lấyChữCáiĐầu(ngườiThamKhảo.name)}</span>
              </div>
              <h3 className="font-semibold text-lg text-navy-secondary">{ngườiThamKhảo.name}</h3>
              <p className="text-charcoal-secondary mb-2">{ngườiThamKhảo.title}</p>
              <p className="text-sm text-charcoal-secondary mb-4">{ngườiThamKhảo.company}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="text-professional-blue" size={16} />
                  <span>{ngườiThamKhảo.email}</span>
                </div>
                {ngườiThamKhảo.phone && (
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="text-professional-blue" size={16} />
                    <span>{ngườiThamKhảo.phone}</span>
                  </div>
                )}
                {ngườiThamKhảo.linkedin && (
                  <div className="flex items-center justify-center gap-2">
                    <Linkedin className="text-professional-blue" size={16} />
                    <span>{ngườiThamKhảo.linkedin}</span>
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
          Additional references will be provided upon request. All references have been contacted and agreed to provide recommendations.
        </p>
      </div>
    </motion.section>
  );
} 