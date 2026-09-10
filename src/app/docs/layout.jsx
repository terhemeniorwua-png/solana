import DevelopersNav from "@/app/components/developers/DevelopersNav";
import "@/app/docs/docs-shell.css";
import "@/app/learn/docs-typography.css";

export default function DocsShellLayout({ children }) {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="docs-grid">{children}</div>
    </div>
  );
}