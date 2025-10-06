import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Phonetic Health Assessment System",
      period: "May 2025 - August 2025",
      conference: "IconDeepCom Conference 2025",
      description:
        "Engineered ML model predicting Parkinson's from 15 vocal features with 98% accuracy. Created offline-capable Flutter app with chatbot & facial recognition.",
      achievements: [
        "98% prediction accuracy using Scikit-learn & TensorFlow",
        "40% enhancement in early detection",
        "25% boost in diagnostic accuracy",
        "20% reduction in errors via Prefect automation",
      ],
      tech: ["Python", "TensorFlow", "Flutter", "Scikit-learn", "Prefect"],
    },
    {
      title: "AI Agent Management System",
      period: "July 2025 - August 2025",
      description:
        "AI agent architecture leveraging MCP tooling to optimize task delegation across 5 specialized sub-agents with modular task delegation.",
      achievements: [
        "40% reduction in task completion time",
        "Parallel request assignment to specialized agents",
        "Efficient modular architecture",
      ],
      tech: ["Python", "AI Agents", "MCP Tooling", "Task Delegation"],
    },
    {
      title: "Football Match Analytics Engine",
      period: "February 2025 - March 2025",
      description:
        "Improved video analytics model tracking player, ball, and referee positions. Implemented performance tracking system with PowerBI.",
      achievements: [
        "92% detection accuracy",
        "40% faster issue resolution",
        "Homographic transformations for tactical mapping",
      ],
      tech: ["Python", "Computer Vision", "PowerBI", "Video Analytics"],
    },
    {
      title: "SkinScan AI",
      period: "November 2024",
      award: "₹20,000 Prize Winner - 24hr Hackathon",
      description:
        "Built deep learning model for offline medical image processing. Enhanced UX with doctor profiles and location mapping.",
      achievements: [
        "97.7% accuracy",
        "24-hour hackathon winner at Saveetha Engineering College",
        "Offline medical image processing",
      ],
      tech: ["TensorFlow", "Flask", "Flutter", "Deep Learning"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions powered by AI and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card transition-smooth hover:scale-105 hover:shadow-2xl group"
            >
              <div className="space-y-4">
                <div>
                  {project.award && (
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Award size={16} />
                      <span className="font-semibold">{project.award}</span>
                    </div>
                  )}
                  {project.conference && (
                    <div className="text-sm text-muted-foreground mb-2">
                      {project.conference}
                    </div>
                  )}
                  <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.period}
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
