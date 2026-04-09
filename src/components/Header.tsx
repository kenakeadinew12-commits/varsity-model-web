import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Staffs", path: "/staffs" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="HUMS Logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <span className="block text-lg font-bold text-primary-foreground">Haramaya University</span>
            <span className="block text-xs font-medium text-gold">Model School</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-navy-light text-gold"
                  : "text-primary-foreground hover:bg-navy-light hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-navy-light bg-primary px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block rounded px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-navy-light text-gold"
                  : "text-primary-foreground hover:bg-navy-light"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
