import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EPIC Groups, Chennai",
      role: "Data Science Intern",
      period: "June 2025 - July 2025",
      responsibilities: [
        "Designed and analyzed full-stack inventory dashboard for McKinsey's internal workflows",
        "Built & deployed backend APIs, enhancing real-time data visibility",
        "Reduced decision-making time by 20%",
        "Implemented inventory flow tracking, vendor management, stock alerts and cost analytics",
      ],
    },
    {
      company: "International Campus Masters (ICM), Chennai",
      role: "Web Development Intern",
      period: "June 2024 - July 2024",
      responsibilities: [
        "Overhauled real-time web app for consultancy, streamlining operations",
        "Reduced processing time by 25%",
        "Integrated PostgreSQL, Flask, and REST APIs",
        "Boosted student data exchange speed by 10%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world solutions through internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 glass-effect transition-smooth hover:scale-105"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Briefcase className="text-primary" size={32} />
                  </div>
                </div>
                
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-foreground">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
