import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CVHeader from "@/components/cv/CVHeader";
import Navbar from "@/components/cv/Navbar";
import ProfessionalSummary from "@/components/cv/ProfessionalSummary";
import TechnicalSkills from "@/components/cv/TechnicalSkills";
import Education from "@/components/cv/Education";
import ProjectPortfolio from "@/components/cv/ProjectPortfolio";
import GitHubStats from "@/components/cv/GitHubStats";
import Certifications from "@/components/cv/Certifications";
import References from "@/components/cv/References";
import ContactForm from "@/components/cv/ContactForm";
import CVFooter from "@/components/cv/CVFooter";
import { cvProfile, education, skills, projects, certifications, references, githubStats } from "@/data/cvData";

export default function CV() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${cvProfile.fullName}_CV`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .print-hide { display: none !important; }
        .print-break-before { page-break-before: always; }
      }
    `,
  });

  const handleExportPDF = () => {
    handlePrint();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-executive min-h-screen" ref={componentRef}>
        <CVHeader profile={cvProfile} />
        <Navbar />
        
        <div className="p-8 space-y-8">
          <ProfessionalSummary profile={cvProfile} id="summary" />
          <TechnicalSkills skills={skills} id="skills" />
          <Education education={education} id="education" />
          <ProjectPortfolio projects={projects} id="projects" />
          <GitHubStats stats={githubStats} id="github" />
          <Certifications certifications={certifications} id="certifications" />
          <References references={references} id="references" />
          <ContactForm id="contact" />
        </div>

        <CVFooter 
          lastUpdated={cvProfile.lastUpdated}
          onExportPDF={handleExportPDF}
          onPrint={handlePrint}
        />
      </div>
    </div>
  );
}
