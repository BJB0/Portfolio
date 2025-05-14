
import { PixelatedBorder } from "./PixelatedBorder";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "SQL"],
      color: "pixel-blue",
    },
    {
      title: "Data Science",
      items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib"],
      color: "pixel-purple",
    },
    {
      title: "Web Development",
      items: ["React", "Node.js", "HTML/CSS", "Express", "MongoDB", "Next.js"],
      color: "pixel-green",
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "AWS", "Jupyter", "VS Code", "Linux"],
      color: "pixel-yellow",
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <PixelatedBorder key={index} className="p-6 bg-card">
              <h3 className={`font-pixel text-lg mb-4 text-${category.color}`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="font-mono text-sm flex items-center gap-2">
                    <div className={`w-2 h-2 bg-${category.color}`}></div>
                    {skill}
                  </div>
                ))}
              </div>
            </PixelatedBorder>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="font-pixel text-xl mb-6">Skills Progress</h3>
          
          <div className="space-y-4">
            {[
              { name: "Data Science & ML", percentage: 85, color: "bg-pixel-purple" },
              { name: "Web Development", percentage: 80, color: "bg-pixel-green" },
              { name: "Problem Solving", percentage: 90, color: "bg-pixel-blue" },
              { name: "Software Engineering", percentage: 75, color: "bg-pixel-yellow" },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between font-mono text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <PixelatedBorder className="p-0 overflow-hidden h-4 bg-secondary w-full">
                  <div 
                    className={`h-full ${skill.color}`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </PixelatedBorder>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
