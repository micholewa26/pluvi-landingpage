import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LegalLayout = ({ title, children }: { title: string; children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = `${title} — PLUVI`;
    return () => {
      document.title = prev;
    };
  }, [title]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Powrót do strony głównej
        </Link>
        <h1 className="text-3xl font-display font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground mb-8">pluvi.pl</p>
        <div className="max-w-none text-foreground/90 space-y-8 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-display [&_h2]:font-semibold [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_p]:mb-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
