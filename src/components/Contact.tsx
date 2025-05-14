import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { PixelatedBorder } from "./PixelatedBorder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_36hq30g",           // ✅ Your service ID
      "template_s04qsdi",          // ✅ Your template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "pUOffmoITc_tKeQ-p"          // ✅ Your public key
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
      });
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <PixelatedBorder className="p-6 bg-card h-full">
              <h3 className="font-pixel text-xl mb-6">Get In Touch</h3>

              <div className="space-y-4 font-mono">
                <p>
                  I’m open to internships, collaborations, or just a good tech chat. 
                  Drop me a message anytime!
                </p>

                <div className="space-y-3 mt-6">
                  <a
                    href="mailto:bjbcr7@gmail.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>bjbcr7@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/BJB0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/BJB0</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/bhargab-jb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/bhargab-jb</span>
                  </a>
                </div>
              </div>
            </PixelatedBorder>
          </div>

          <div>
            <PixelatedBorder className="p-6 bg-card">
              <h3 className="font-pixel text-xl mb-6">Send A Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="font-mono pixel-corners"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-mono pixel-corners"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="font-mono pixel-corners min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="pixel-btn w-full flex items-center gap-2 justify-center"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </PixelatedBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
