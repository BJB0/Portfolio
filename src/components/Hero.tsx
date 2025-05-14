import { Code, Terminal } from "lucide-react";
import { PixelatedBorder } from "./PixelatedBorder";
import { ProfileImage } from "./ProfileImage";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:py-32 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT SECTION */}
          <div className="lg:col-span-7">
            <div className="space-y-6 bg-background/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="space-y-2">
                <h2 className="font-mono text-xl">Hello World! I'm</h2>

                <div className="w-fit max-w-full overflow-hidden">
                  <h1 className="animate-typewriter font-mono font-bold text-3xl md:text-4xl lg:text-5xl text-foreground dark:text-white">
                    Bhargab Jyoti Bhuyan
                  </h1>
                </div>

                <div className="flex items-center gap-2 font-mono">
                  <span className="bg-primary text-primary-foreground px-2 py-1 text-xs">
                    CSE Student
                  </span>
                  <span className="animate-blink text-primary">|</span>
                </div>
              </div>

              {/* MOBILE PROFILE IMAGE */}
              <ProfileImage
                imageUrl="/lovable-uploads/707bb487-bf17-4333-a803-00b2b350d0f7.png"
                alt="Bhargab Jyoti Bhuyan"
                className="block md:hidden mb-4 float-slow"
              />

              <p className="font-mono">
                A third-year Computer Science and Engineering student passionate about
                Data Science, AI/ML, and Web Development.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="pixel-btn">
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="pixel-btn bg-secondary text-secondary-foreground border-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/14nTWooRQHc_apPp6wYova13xnqpnp9ZO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn bg-secondary text-secondary-foreground border-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Check Resume
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              {/* DESKTOP PROFILE IMAGE */}
              <ProfileImage
                imageUrl="/lovable-uploads/707bb487-bf17-4333-a803-00b2b350d0f7.png"
                alt="Bhargab Jyoti Bhuyan"
                className="hidden md:block mx-auto mb-4 float-slow"
              />

              <PixelatedBorder className="terminal-bg p-4 md:p-6 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-border pb-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center font-mono text-xs">terminal</div>
                </div>

                <div className="font-mono text-sm space-y-2">
                  <p className="flex items-start gap-2">
                    <Terminal className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Exploring the intersection of data, AI, and web technologies...</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Code className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Creating solutions that make a positive impact</span>
                  </p>
                  <p className="text-primary">
                    Ready to collaborate <span className="animate-blink">_</span>
                  </p>
                </div>
              </PixelatedBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
