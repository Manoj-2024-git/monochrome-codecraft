import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-lg">G. MANOJ</p>
            <p className="text-sm text-primary-foreground/80">
              Data Science & AI Engineer
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/gmanoj2005"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:text-primary-foreground/70"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/manoj-ganesan-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:text-primary-foreground/70"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manojindira2004@gmail.com"
              className="transition-smooth hover:text-primary-foreground/70"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} G. Manoj</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
