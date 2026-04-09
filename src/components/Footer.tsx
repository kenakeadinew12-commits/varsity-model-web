import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
            <GraduationCap className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="leading-tight">
            <span className="block font-bold">Haramaya University</span>
            <span className="block text-xs text-gold">Model School</span>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/70">
          Nurturing future leaders through academic excellence, integrity, and innovation since establishment.
        </p>
      </div>

      <div>
        <h4 className="mb-4 font-semibold text-gold">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {["About", "Academics", "Staffs", "News", "Contact"].map((l) => (
            <li key={l}>
              <Link to={`/${l.toLowerCase()}`} className="text-primary-foreground/70 transition-colors hover:text-gold">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-semibold text-gold">Contact Info</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Haramaya, Ethiopia</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +251901357102</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@humodelschool.edu.et</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-navy-light py-4 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Haramaya University Model School. All rights reserved.
    </div>
  </footer>
);

export default Footer;
