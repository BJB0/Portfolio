import { PixelatedBorder } from "./PixelatedBorder";

export function About() {
  return (
    <section id="about" className="py-16 bg-secondary/50">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          <div className="lg:col-span-12 space-y-6">
            <div className="font-mono space-y-4">
              <p>
                I'm a Computer Science and Engineering student with a passion for solving complex problems through technology.
                My academic journey has equipped me with a strong foundation in programming, algorithms, and software development.
              </p>

              <p>
                Currently, I'm focusing on Data Science, Artificial Intelligence, Machine Learning, and Web Development.
                I enjoy creating projects that combine these disciplines to build practical solutions.
              </p>

              <p>
                When I'm not coding, you might find me exploring new technologies, lifting weights, creating content, or playing sports.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Education Card with Vertical Timeline */}
              <div className="pixel-card">
  <h3 className="text-lg font-pixel mb-4">Education</h3>
  <div className="relative border-l-4 border-primary pl-8 space-y-6">
    {/* B.Tech */}
    <div className="relative pl-2">
      <div className="absolute -left-6 top-2 w-3 h-3 bg-primary rounded-full"></div>
      <p className="font-mono text-sm font-semibold">B.Tech, Computer Science and Engineering</p>
      <p className="font-mono text-sm">Tezpur University</p>
      <p className="text-xs text-muted-foreground">📍 Nov 2022 – May 2026</p>
    </div>

    {/* Matriculation */}
    <div className="relative pl-2">
      <div className="absolute -left-6 top-2 w-3 h-3 bg-primary rounded-full"></div>
      <p className="font-mono text-sm font-semibold">Matriculation (Class 10)</p>
      <p className="font-mono text-sm">Kendriya Vidyalaya Central University Tezpur – Scored 91.8%</p>
      <p className="text-xs text-muted-foreground">📍 Jan 2010 – Mar 2020</p>
    </div>
    {/* Higher Secondary */}
    <div className="relative pl-2">
      <div className="absolute -left-6 top-2 w-3 h-3 bg-primary rounded-full"></div>
      <p className="font-mono text-sm font-semibold">Higher Secondary (10+2), PCM with CS</p>
      <p className="font-mono text-sm">Kendriya Vidyalaya Central University Tezpur – Scored 88.4%</p>
      <p className="text-xs text-muted-foreground">📍 Apr 2020 – Mar 2022</p>
    </div>
  </div>
</div>




              {/* Interests Card */}
              <div className="pixel-card">
                <h3 className="text-lg font-pixel mb-2">Interests</h3>
                <ul className="font-mono text-sm space-y-1">
                  <li>Data Science & Analytics</li>
                  <li>Machine Learning</li>
                  <li>Web Development</li>
                  <li>Open Source</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
