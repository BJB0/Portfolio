import { PixelatedBorder } from "./PixelatedBorder";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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

  const progressSkills = [
    { name: "Data Science & ML", percentage: 85, color: "bg-pixel-purple" },
    { name: "Web Development", percentage: 80, color: "bg-pixel-green" },
    { name: "Problem Solving", percentage: 90, color: "bg-pixel-blue" },
    { name: "Software Engineering", percentage: 75, color: "bg-pixel-yellow" },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      width: `${progressSkills[i].percentage}%`,
      transition: { duration: 1.6, delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <PixelatedBorder className="p-6 bg-card h-full">
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
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-pixel text-xl mb-6">Skills Progress</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {progressSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <PixelatedBorder className="p-0 overflow-hidden h-4 bg-secondary w-full">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      custom={i}
                      initial={{ width: "0%" }}
                      animate={controls}
                    />
                  </PixelatedBorder>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
