import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-pixel text-sm text-primary">
              BJB<span className="animate-blink">_</span>
            </p>
            <p className="font-mono text-sm mt-2">
              &copy; {currentYear} Bhargab Jyoti Bhuyan. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/BJB0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5 stroke-[1.5]" />
              <span className="sr-only">GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/bhargab-jb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5 stroke-[1.5]" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a 
              href="https://www.instagram.com/bhargab_jb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="h-5 w-5 stroke-[1.5]" />
              <span className="sr-only">Instagram</span>
            </a>

            <a 
              href="mailto:bjbcr7@gmail.com"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5 stroke-[1.5]" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs font-mono text-muted-foreground">
          Designed & Developed with <span className="text-primary">♥</span> in React and Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
