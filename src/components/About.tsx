import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BE in Computer Science - CGPA 8.74/10.0",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Data Science & Web Development Internships",
    },
    {
      icon: Award,
      title: "Achievement",
      description: "₹20,000 Prize Winner - 24hr Hackathon",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 gradient-card transition-smooth hover:shadow-xl">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a <strong>data-driven professional</strong> with expertise in AI, machine learning, and data analytics. 
              Currently pursuing my Bachelor's in Computer Science at Sri Sairam Engineering College with a CGPA of 8.74, 
              I'm passionate about solving complex problems through technical innovation.
            </p>
            <p className="text-lg leading-relaxed text-foreground mt-4">
              My journey includes building cutting-edge projects like a Phonetic Health Assessment System with 98% accuracy, 
              an AI Agent Management System, and a Football Match Analytics Engine. I've also gained hands-on experience 
              through internships at EPIC Groups and International Campus Masters, where I designed dashboards and 
              optimized workflows.
            </p>
            <p className="text-lg leading-relaxed text-foreground mt-4">
              I'm constantly expanding my knowledge in cloud computing and emerging technologies, with certifications 
              from NPTEL, Coursera, and leading tech companies. My goal is to leverage AI and data science to create 
              meaningful impact in the tech industry.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center glass-effect transition-smooth hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
