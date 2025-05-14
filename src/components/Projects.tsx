import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Gemini Health App – Calorie Advisor",
      description: "A smart health assistant app leveraging Google Gemini Pro Vision (large image models) to analyze food images and estimate calorie content with detailed nutritional insights.",
      tags: ["Streamlit", "Google Gemini Pro Vision", "Pillow (PIL)", "python-dotenv"],
      links: {
        github: "https://github.com/BJB0/Generative-AI-HealthApp"
      },
      color: "border-pixel-purple",
    },
    {
      title: "YouTube Transcript to Notes Converter",
      description: "AI-powered tool to convert YouTube videos into clean, structured notes. Uses Google Gemini Pro to summarize transcripts into concise bullet points — perfect for lectures, interviews, podcasts, and educational content.",
      tags: ["Streamlit", "Google Generative AI (Gemini)", "YouTube Transcript API", "python-dotenv"],
      links: {
        github: "https://github.com/BJB0/youtube-transcript-notes"
      },
      color: "border-pixel-blue",
    },
    {
      title: "Currency Converter Chatbot",
      description: "An AI-powered chatbot that allows users to convert currencies using natural language. Built with Dialogflow for intent detection, Telegram for user interaction, and Flask for backend processing, the bot fetches real-time exchange rates.",
      tags: ["Dialogflow", "Telegram Bot", "Python + Flask", "REST API"],
      links: {
        github: "https://github.com/BJB0/Telegram_currency_convertor_chatbot_"
      },
      color: "border-pixel-green",
    },
    {
      title: "Web Technology Projects",
      description: "A collection of mini web development projects built using HTML, CSS, JavaScript, and PHP — created as part of my learning journey in frontend and backend web technologies.",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
      links: {
        github: "https://github.com/BJB0/WEB-TECH-"
      },
      color: "border-pixel-yellow",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`pixel-card border-4 ${project.color} flex flex-col h-full bg-card`}
            >
              <h3 className="font-pixel text-xl mb-3">{project.title}</h3>

              <p className="font-mono text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono bg-secondary px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="pixel-corners" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/BJB0"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn inline-flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
