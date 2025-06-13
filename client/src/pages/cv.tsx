import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import TiêuĐềCV from "@/components/cv/CVHeader";
import ThanhĐiềuHướngChính from "@/components/cv/Navbar";
import TómTắtChuyênMôn from "@/components/cv/ProfessionalSummary";
import TechnicalSkills from "@/components/cv/TechnicalSkills";
import HọcVấn from "@/components/cv/Education";
import DanhMụcDựÁn from "@/components/cv/ProjectPortfolio";
import ThốngKêGitHub from "@/components/cv/GitHubStats";
import ChứngChỉThànhTích from "@/components/cv/Certifications";
import ThamKhảo from "@/components/cv/References";
import FormLiênHệ from "@/components/cv/ContactForm";
import ChânTrangCV from "@/components/cv/CVFooter";
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
        <TiêuĐềCV thôngTinHồSơ={cvProfile} />
        <ThanhĐiềuHướngChính />
        
        <div className="p-8 space-y-8">
          <TómTắtChuyênMôn thôngTinHồSơ={cvProfile} id="summary" />
          <TechnicalSkills skills={skills} id="skills" />
          <HọcVấn thôngTinHồSơ={education} id="education" />
          <DanhMụcDựÁn dựÁn={projects} id="projects" />
          <ThốngKêGitHub sốLiệuThốngKê={githubStats} id="github" />
          <ChứngChỉThànhTích chứngChỉ={certifications} id="certifications" />
          <ThamKhảo danhSáchThamKhảo={references} id="references" />
          <FormLiênHệ id="contact" />
        </div>

        <ChânTrangCV 
          lastUpdated={cvProfile.lastUpdated}
          onExportPDF={handleExportPDF}
          onPrint={handlePrint}
        />
      </div>
    </div>
  );
}
