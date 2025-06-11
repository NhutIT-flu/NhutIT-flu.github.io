import { CVProfile } from "@shared/schema";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, User } from "lucide-react";

interface CVHeaderProps {
  profile: CVProfile;
}

export default function CVHeader({ profile }: CVHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          {profile.profileImage ? (
            <img 
              src={profile.profileImage} 
              alt={profile.fullName}
              className="w-32 h-32 rounded-full border-4 border-white/30 object-cover"
            />
          ) : (
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
              <User className="text-4xl text-white/70" size={48} />
            </div>
          )}
        </div>
        
        {/* Professional Information */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2 text-white">{profile.fullName}</h1>
          <p className="text-xl font-medium text-blue-200 mb-4">{profile.title}</p>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Mail className="w-4 h-4" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Phone className="w-4 h-4" />
              <span>{profile.phone}</span>
            </div>
            {profile.linkedin && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Linkedin className="w-4 h-4" />
                <span>{profile.linkedin}</span>
              </div>
            )}
            {profile.github && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Github className="w-4 h-4" />
                <span>{profile.github}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
            )}
            {profile.portfolio && (
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Globe className="w-4 h-4" />
                <span>{profile.portfolio}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
