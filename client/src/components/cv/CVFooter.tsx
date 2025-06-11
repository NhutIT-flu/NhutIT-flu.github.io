import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CVFooterProps {
  lastUpdated: Date;
  onExportPDF: () => void;
  onPrint: () => void;
}

export default function CVFooter({ lastUpdated, onExportPDF, onPrint }: CVFooterProps) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 p-6 print-hide">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-charcoal-secondary">
          Last updated: <span>{lastUpdated.toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })}</span>
        </div>
        
        {/* Export Options */}
        <div className="flex gap-3">
          <Button 
            onClick={onExportPDF}
            className="flex items-center gap-2 bg-navy-primary text-white hover:bg-navy-secondary"
          >
            <Download size={16} />
            <span>Export PDF</span>
          </Button>
          <Button 
            variant="outline"
            onClick={onPrint}
            className="flex items-center gap-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white"
          >
            <Printer size={16} />
            <span>Print</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
