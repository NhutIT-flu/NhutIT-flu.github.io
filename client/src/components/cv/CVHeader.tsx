import { CVProfile } from "@shared/schema";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, User } from "lucide-react";

interface PropsTiêuĐềCV {
  thôngTinHồSơ: CVProfile;
}

export default function TiêuĐềCV({ thôngTinHồSơ }: PropsTiêuĐềCV) {
  return (
    <header className="bg-blue-900 text-white p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Phần Ảnh Đại Diện */}
        <div className="flex-shrink-0">
          {thôngTinHồSơ.profileImage ? (
            <img 
              src={thôngTinHồSơ.profileImage} 
              alt={thôngTinHồSơ.fullName}
              className="w-32 h-32 rounded-full border-4 border-white/30 object-cover"
            />
          ) : (
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
              <User className="text-4xl text-white/70" size={48} />
            </div>
          )}
        </div>
        
        {/* Thông Tin Chuyên Môn */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2 text-white">{thôngTinHồSơ.fullName}</h1>
          <p className="text-xl font-medium text-blue-200 mb-4">{thôngTinHồSơ.title}</p>
          
          {/* Lưới Thông Tin Liên Hệ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Mail className="w-4 h-4 text-white" />
              <a href={`mailto:${thôngTinHồSơ.email}`} className="text-white hover:underline">
                {thôngTinHồSơ.email}
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Phone className="w-4 h-4 text-white" />
              <a href={`tel:${thôngTinHồSơ.phone}`} className="text-white hover:underline">
                {thôngTinHồSơ.phone}
              </a>
            </div>
            {thôngTinHồSơ.linkedin && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Linkedin className="w-4 h-4 text-white" />
                <a href={thôngTinHồSơ.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  {thôngTinHồSơ.linkedin}
                </a>
              </div>
            )}
            {thôngTinHồSơ.github && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Github className="w-4 h-4 text-white" />
                <a href={thôngTinHồSơ.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  {thôngTinHồSơ.github}
                </a>
              </div>
            )}
            {thôngTinHồSơ.location && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white">{thôngTinHồSơ.location}</span>
              </div>
            )}
            {thôngTinHồSơ.portfolio && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Globe className="w-4 h-4 text-white" />
                <span className="text-white">{thôngTinHồSơ.portfolio}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
