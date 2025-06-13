import { Github, Facebook } from "lucide-react";

// interface CVFooterProps {
//   // lastUpdated: Date;
//   // onExportPDF: () => void;
//   // onPrint: () => void;
// }

export default function ChânTrangCV() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 p-6 print-hide">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        {/* Bên trái (rỗng để căn chỉnh) */}
        <div className="flex-1 hidden md:block"></div>

        {/* Trung tâm (Biểu tượng Mạng xã hội) */}
        <div className="flex gap-4 justify-center md:flex-grow-0">
          <a href="https://www.facebook.com/nhut.ngokha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navy-primary">
            <Facebook size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navy-primary">
            <Github size={24} />
          </a>
        </div>
        
        {/* Bên phải (Bản quyền) */}
        <div className="text-sm text-charcoal-secondary flex-1 text-center md:text-right">
          <p>© 2025 NhutIT. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
