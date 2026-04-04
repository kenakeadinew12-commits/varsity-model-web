import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Props {
  items: { label: string; path?: string }[];
}

const Breadcrumb = ({ items }: Props) => (
  <nav className="bg-secondary py-3">
    <div className="container mx-auto flex items-center gap-2 px-4 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          {item.path ? (
            <Link to={item.path} className="text-primary hover:text-gold-dark transition-colors">{item.label}</Link>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  </nav>
);

export default Breadcrumb;
