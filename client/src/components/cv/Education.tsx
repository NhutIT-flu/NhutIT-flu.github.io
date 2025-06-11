import { Education as EducationType } from "@shared/schema";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface EducationProps {
  education: EducationType;
  id?: string;
}

export default function Education({ education, id }: EducationProps) {
  return (
    <motion.section 
      className="border-b border-gray-200 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      id={id}
    >
      <h2 className="text-2xl font-bold text-navy-primary mb-6 flex items-center gap-2">
        <GraduationCap className="text-professional-blue" size={24} />
        Academic Profile
      </h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-professional">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-navy-secondary">
              {education.degree}
            </h3>
            <p className="text-lg text-charcoal-secondary font-medium">
              {education.university}
            </p>
            <p className="text-charcoal-secondary">
              {education.duration}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {education.gpa && (
              <div className="bg-success-green text-white px-4 py-2 rounded-lg font-semibold">
                GPA: {education.gpa}
              </div>
            )}
            <div className="text-sm text-charcoal-secondary">Dean's List (3 semesters)</div>
          </div>
        </div>
        
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {education.coursework && (
            <div>
              <h4 className="font-semibold text-navy-secondary mb-2">Relevant Coursework</h4>
              <ul className="text-sm text-charcoal-secondary space-y-1">
                {education.coursework.map((course, index) => (
                  <li key={index}>• {course}</li>
                ))}
              </ul>
            </div>
          )}
          {education.achievements && (
            <div>
              <h4 className="font-semibold text-navy-secondary mb-2">Academic Achievements</h4>
              <ul className="text-sm text-charcoal-secondary space-y-1">
                {education.achievements.map((achievement, index) => (
                  <li key={index}>• {achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
